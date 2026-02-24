
import { useState, useEffect } from "react";
import API from "../services/api";

function Users() {

  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Fetch users when page loads
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await API.get("/users");
    setUsers(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/users", form);
    fetchUsers();
  };

  return (
    <div>
      <h3>Create User</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2"
          placeholder="Name"
          onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input className="form-control mb-2"
          placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input className="form-control mb-2"
          type="password"
          placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})}/>
        <button className="btn btn-primary">Save</button>
      </form>

      <h4 className="mt-4">User List</h4>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
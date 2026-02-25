import { useState, useEffect } from "react";
import { API } from "../services/api";

function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [form, setForm] = useState({
    accountNumber: "",
    accountType: "",
    balance: ""
  });

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    const res = await API.get("/accounts");
    setAccounts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/accounts", form);
    fetchAccounts();
  };

  return (
    <div>
      <h3>Create Account</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2"
          placeholder="Account Number"
          onChange={(e)=>setForm({...form,accountNumber:e.target.value})}/>
        <input className="form-control mb-2"
          placeholder="Account Type"
          onChange={(e)=>setForm({...form,accountType:e.target.value})}/>
        <input className="form-control mb-2"
          type="number"
          placeholder="Balance"
          onChange={(e)=>setForm({...form,balance:e.target.value})}/>
        <button className="btn btn-success">Save</button>
      </form>

      <ul className="list-group mt-3">
        {accounts.map(a => (
          <li key={a.id} className="list-group-item">
            {a.accountNumber} - ₹{a.balance}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accounts;
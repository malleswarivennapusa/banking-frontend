import { useState } from "react";
import { API } from "../services/api";

function Transactions() {
  const [form, setForm] = useState({
    fromAccountNumber: "",
    toAccountNumber: "",
    amount: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/transactions/transfer", form);
    alert("Transfer Successful");
  };

  return (
    <div>
      <h3>Transfer Money</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2"
          placeholder="From Account"
          onChange={(e)=>setForm({...form,fromAccountNumber:e.target.value})}/>
        <input className="form-control mb-2"
          placeholder="To Account"
          onChange={(e)=>setForm({...form,toAccountNumber:e.target.value})}/>
        <input className="form-control mb-2"
          type="number"
          placeholder="Amount"
          onChange={(e)=>setForm({...form,amount:e.target.value})}/>
        <button className="btn btn-warning">Transfer</button>
      </form>
    </div>
  );
}

export default Transactions;
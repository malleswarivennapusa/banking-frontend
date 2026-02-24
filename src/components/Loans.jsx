import { useState } from "react";
import { API } from "../services/api";

function Loans() {
  const [form, setForm] = useState({
    accountNumber: "",
    loanType: "",
    amount: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/loans", form);
    alert("Loan Applied Successfully");
  };

  return (
    <div>
      <h3>Apply Loan</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2"
          placeholder="Account Number"
          onChange={(e)=>setForm({...form,accountNumber:e.target.value})}/>
        <input className="form-control mb-2"
          placeholder="Loan Type"
          onChange={(e)=>setForm({...form,loanType:e.target.value})}/>
        <input className="form-control mb-2"
          type="number"
          placeholder="Amount"
          onChange={(e)=>setForm({...form,amount:e.target.value})}/>
        <button className="btn btn-danger">Apply</button>
      </form>
    </div>
  );
}

export default Loans;
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand">Banking App</span>
        <div className="d-flex gap-3">
          <Link className="text-white" to="/users">Users</Link>
          <Link className="text-white" to="/accounts">Accounts</Link>
          <Link className="text-white" to="/transactions">Transactions</Link>
          <Link className="text-white" to="/loans">Loans</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
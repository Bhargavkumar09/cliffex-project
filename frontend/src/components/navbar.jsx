import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ loggedInUserName }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <nav class="navbar navbar-light bg-light px-3">
      <Link class="navbar-brand" to="/">
        Cliffex
      </Link>
      <div className="d-flex align-items-center justify-content-center">
        <p className="mb-0 mx-3">{loggedInUserName}</p>
        <button
          type="link"
          className="btn btn-outline-danger"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

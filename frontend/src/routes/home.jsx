import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../services/apis";
import Navbar from "../components/navbar";
import jwt from "jwt-decode";

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fun = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/signin");
      setUserName(jwt(token).name);
      const users = await getAllUsers(token);
      setUsers(users);
    };
    fun();
  }, []);

  return (
    <>
      <Navbar loggedInUserName={userName} />
      <section>
        <table className="table table-striped table-bordered mt-4 mx-auto w-75">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Home;

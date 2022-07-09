import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/input";
import { registerUser } from "../services/apis";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    const { token } = await registerUser(
      name,
      email,
      password,
      confirmPassword
    );
    localStorage.setItem("token", token);
    navigate("/");
  };

  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div
          className="card text-black m-auto"
          style={{ borderRadius: "10px" }}
        >
          <div className="row justify-content-center align-items-center px-5">
            <p className="text-center h1 fw-bold mb-4 mx-1 mt-4">Sign up</p>
            <form className="mx-1">
              <Input
                label="Your Name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                label="Your Email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                label="Confirm password"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="form-check d-flex justify-content-center mb-4">
                <label className="form-check-label">
                  Already have an account ? <Link to="/signin">Sign In</Link>
                </label>
              </div>
              <div className="d-flex justify-content-center mx-4 mb-4">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

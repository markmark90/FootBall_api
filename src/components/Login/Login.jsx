import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

import "./Login.css";

export const Login = () => {
  const { loginUser, loading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <span className=""></span>;
  }
  if (user) {
    navigate("/betshop");
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/betshop");
      })
      .catch((error) => console.log(error.message));

    e.target.reset();
  };

  return (
    <div className="">
      <form className="login-container" onSubmit={handleFormSubmit}>
        <h3> Login </h3>
        <label htmlFor="email">
          Email:
          <input type="text" name="email" placeholder="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" placeholder="password" />
        </label>
        <button type="submit"> Login</button>
      </form>
    </div>
  );
};

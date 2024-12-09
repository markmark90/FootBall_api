import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import "./BetShop.css";

export const BetShop = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSingOut = () => {
    logOut()
      .then(() => {
        alert("You logged out successfully");
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/betshop">BetShop</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return loading ? (
    <span className="">Loading error!</span>
  ) : (
    <div>
      <h1>Betshop</h1>
      <section></section>
      <Link className="logout" onClick={handleSingOut}>
        Logout
      </Link>
    </div>
  );
};

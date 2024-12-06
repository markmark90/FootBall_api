import { NavLink, Outlet } from "react-router";

import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <NavLink
          to="/livescores"
          className={({ isActive }) =>
            isActive ? "navlink active" : "navlink"
          }
        >
          LiveScore
        </NavLink>
        <NavLink
          to="/betshop"
          className={({ isActive }) =>
            isActive ? "navlink active" : "navlink"
          }
        >
          BetShop
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;

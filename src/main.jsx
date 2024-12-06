import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Livescores } from "./components/Livescores/Livescores";
import { Login } from "./components/Login/Login";
import { BetShop } from "./components/BetShop/BetShop";
import { PrivateRoute } from "./Provider/PrivateProvider";
import { AuthProvider } from "./Provider/AuthProvider.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "livescores",
        element: <Livescores />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "betshop",
        element: (
          <PrivateRoute>
            <BetShop />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home.jsx";
import { Login } from "./pages/Login.jsx";
import { Register } from "./pages/Register.jsx";
import { Dashboard } from "./pages/Dashboard.jsx";

function checkIsLogged() {
  if (!localStorage.getItem("useInfo")) {
    return redirect("/login");
  }
  return null;
}

function checkIsNotLogged() {
    if (localStorage.getItem("useInfo")) {
      return redirect("/dashboard");
    }
    return null;
  }

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: checkIsNotLogged
  },
  {
    path: "/registrati",
    element: <Register /> ,
    loader: checkIsNotLogged
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: checkIsLogged,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

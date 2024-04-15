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

function checkIsLogged() {
  if (!localStorage.getItem("userData")) {
    return redirect("/login");
  }
}

function checkIsNotLogged() {
    if (localStorage.getItem("userData")) {
      return redirect("/dashboard");
    }
  }

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: (
      <div>
        <h1>LOGIN PAGE</h1>
      </div>
    ),
    loader: checkIsNotLogged
  },
  {
    path: "/registrati",
    element: (
      <div>
        <h1>REGISTRATI</h1>
      </div>
    ),
    loader: checkIsNotLogged
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <h1>DASHBOARD</h1>
      </div>
    ),
    loader: checkIsLogged,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

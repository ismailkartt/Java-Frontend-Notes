import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/scss/style.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router";
import "../../index.css";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

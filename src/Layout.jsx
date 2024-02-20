import { Outlet } from "react-router-dom";
import Fotter from "./components/partials/Fotter";
import NavBar from "./components/partials/Navbar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Fotter />
    </>
  );
}

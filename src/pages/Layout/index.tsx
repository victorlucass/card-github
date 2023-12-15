import { Outlet } from "react-router-dom";
import { HeaderPage } from "../Header";
import { Footer } from "../Footer";

export function Layout() {
  return (
    <>
      <HeaderPage />
      <Outlet />
      <Footer />
    </>
  );
}

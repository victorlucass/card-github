import { Outlet } from "react-router-dom";
import { HeaderPage } from "../Header";
import { Footer } from "../Footer";
import { Toaster } from "react-hot-toast";

export function Layout() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <HeaderPage />
      <Outlet />
      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header className="container">
        <Header />
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;

import Sidebar from "./Sidebar";
import TopBar from "./Topbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Sidebar />
      <main className="content">
        <TopBar />
        <Outlet/>
      </main>
    </>
  );
};

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";


export const UserLayout = () => {
  
  return (
    <div
      style={{
        minHeight: "150vh",
        maxHeight: "300vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

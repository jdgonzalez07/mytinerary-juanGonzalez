import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavbarMain from "../../components/Navbar/NavbarMain";

const LayoutMain = () => {
  return (
    <div className="app-container">
      <NavbarMain />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutMain;

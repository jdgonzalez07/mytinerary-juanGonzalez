import { Link as Anchor} from "react-router-dom";
import "../Navbar/navbarmain.css";
import { BsPerson } from "react-icons/bs";

const NavbarMain = () => {
  


  return (
    <>
      <header>
        <nav>
          <div className="nav-left">
            <h3>My Tinerary</h3>
          </div>
          <div className="nav-right">
            <ul>
              <li>
                <Anchor to="/">Home</Anchor>
              </li>
              <li>
                <Anchor to="/cities">Cities</Anchor>
              </li>
              
                <li><Anchor to={"/"}>Sing Up</Anchor></li>
                <li><Anchor to={"/"}>Sing In</Anchor></li>
                <button className="user-icon">
                < BsPerson size={28} color="white" />
                </button>
              
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarMain;

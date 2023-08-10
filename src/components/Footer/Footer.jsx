import "../Footer/footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-navigation">
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">packages</a>
            </li>
            <li>
              <a href="#">Tours</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/">
              <FaTwitter />
            </a>
          </li>
        </ul>
        <p>&copy; 2023 Juan González. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

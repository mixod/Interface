import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import "./App.css";
function Nav() {
  return (
    <>
      <nav className="Navigation">
        <div className="name">
          <h2>
            <spam>S</spam>angram
            <spam>T</spam>hapa
          </h2>
        </div>
        <div className="menu_link">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
            <li>
              <a href="#">SERVCES</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61551788280821&mibextid=ZbWKwL">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaGithubSquare />
              </a>
            </li>
          </ul>
        </div>
        <div className="hamburger-menu">
          <a href="#">
            <RxHamburgerMenu />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;

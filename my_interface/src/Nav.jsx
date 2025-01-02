import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import "./App.css";
import { useState } from "react";
function Nav() {
  const [showMediaIcon,setShowMediaIcon]=useState();
  return (
    <>
      <nav className="Navigation">
        <div className="name">
          <h2>
            <spam>S</spam>angram
            <spam>T</spam>hapa
          </h2>
        </div>
        <div className={showMediaIcon ? " mobile-menu-link" : "menu_link"}>
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
              <a href="#">SERVICES</a>
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
        <div className="hamburger-menu" onClick={()=>setShowMediaIcon(!showMediaIcon)}>
          <a href="#" >
            <RxHamburgerMenu  style={{color:"black", fontSize:"30px"}}/>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;

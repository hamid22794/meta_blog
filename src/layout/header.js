import React from "react";
import logoImg from "../images/logo/website_logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosSunny } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <div className="page_width">
        <div className="nav_desktop">
          <div className="logo">
            <img src={logoImg} alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="https://www.google.com/">Home</a>
              </li>
              <li>
                <a href="https://www.google.com/">Blog</a>
              </li>
              <li>
                <a href="https://www.google.com/">Single Post</a>
              </li>
              <li>
                <a href="https://www.google.com/">Pages</a>
              </li>
              <li>
                <a href="https://www.google.com/">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="nav_right">
            <div className="nav_search_bar">
              <input type="text" placeholder="Search" />
              <AiOutlineSearch />
            </div>

            <div className="nav_mode_switch">
              <div className="nav_button">
                <IoIosSunny />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

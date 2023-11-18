import React from "react";
import logoImg from "../images/logo/website_logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosSunny } from "react-icons/io";
import { Link } from "react-router-dom";

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <Link to="/single-post">Single Post</Link>
              </li>
              <li>
                <a href="/">Pages</a>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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

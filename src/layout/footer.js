import React from "react";
import logoImg from "../images/logo/website_logo.svg";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="page_width">
        <div className="footer_inner_grid">
          <div className="footer_about">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>

            <div className="footer_about_contact">
              <a href="mailto:info@jstemplate.net">
                <span>Email</span> : info@jstemplate.net
              </a>
              <br />
              <a href="tel:+880123456789">
                <span>Phone</span> : 880 123 456 789
              </a>
            </div>
          </div>

          <div className="footer_nav">
            <h3>Quick Links</h3>
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Archived</a>
                </li>
                <li>
                  <a href="/">Author</a>
                </li>
                <li>
                  <Link to="/contact-page">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer_nav">
            <h3>Category</h3>
            <nav>
              <ul>
                <li>
                  <a href="/">Lifestyle</a>
                </li>
                <li>
                  <a href="/">Technology</a>
                </li>
                <li>
                  <a href="/">Travel</a>
                </li>
                <li>
                  <a href="/">Business</a>
                </li>
                <li>
                  <a href="/">Economy</a>
                </li>
                <li>
                  <a href="/">Sports</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer_newsletter">
            <h3>Weekly Newsletter</h3>
            <p>Get blog articles and offers via email</p>
            <div className="nav_search">
              <input type="text" placeholder="Your Email" />
              <AiOutlineMail />
            </div>
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer_inner_bottom">
          <div className="footer_inner_bottom_left">
            <div className="footer_logo">
              <img src={logoImg} alt="" />
            </div>
            <div className="footer_copyright">
              <h2>
                Meta<span>Blog</span>
              </h2>
              <p>
                <p>©JS Template 2023. All Rights Reserved.</p>
              </p>
            </div>
          </div>

          <div className="footer_inner_bottom_right">
            <nav>
              <ul>
                <li>
                  <a href="/">Term of Use</a>
                </li>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/">Cookie Policy</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

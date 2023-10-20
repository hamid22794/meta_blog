import React from "react";
import logoImg from "../images/logo/website_logo.svg";
import { AiOutlineMail } from "react-icons/ai";

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
                  <a href="https://www.google.com/">Home</a>
                </li>
                <li>
                  <a href="https://www.google.com/">About</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Blog</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Archived</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Author</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer_nav">
            <h3>Category</h3>
            <nav>
              <ul>
                <li>
                  <a href="https://www.google.com/">Lifestyle</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Technology</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Travel</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Business</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Economy</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Sports</a>
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
                  <a href="https://www.google.com/">Term of Use</a>
                </li>
                <li>
                  <a href="https://www.google.com/">Privacy Policy</a>
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

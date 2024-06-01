import React, { useState } from "react";
import belal from "../../assets/b.jpg";
import "./SideBar.css";
import { CiMenuBurger } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import { SiCodewars } from "react-icons/si";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaServicestack,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="menu-toggle" onClick={toggleSidebar}>
        <i className="fas fa-times">
          <CiMenuBurger />
        </i>
      </button>
      <div className="sidebar-content">
        <div className="profile">
          <img src={belal} alt="Profile" className="profile-img" />
          <h3>Belal Uddin</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/devbelal10/">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/belaluddin631/">
              <FaInstagram />
            </a>
            <a href="https://github.com/coderBelal">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/u/belalsd/">
              <SiLeetcode />
            </a>
            <a href="https://www.codewars.com/users/coderbelal">
              <SiCodewars />
            </a>
          </div>
        </div>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <a href="" className="sidebar-link">
              <FaHome />
              <Link to={"/"}>
                <span>Home</span>
              </Link>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="" className="sidebar-link">
              <FaUser />
              <Link to={"/about"}>
                {" "}
                <a href="">
                  <span>About</span>
                </a>
              </Link>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="" className="sidebar-link">
              <FaFileAlt />
              <Link to={"/projects"}>
                {" "}
                <span>Projects</span>
              </Link>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="" className="sidebar-link">
              <FaBriefcase />
              <Link to={"/certificate"}>
                {" "}
                <span>Certificate</span>
              </Link>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="" className="sidebar-link">
              <FaServicestack />
              <Link to={"/skill"}>
                {" "}
                <span>Skills</span>
              </Link>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="" className="sidebar-link">
              <FaEnvelope />
              <Link to={"/contact"}>
                <span>Contact</span>
              </Link>
            </a>
          </li>
        </ul>
      </div>
      <footer className="footer">
        <div className="credit">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
          <p>Designed by Bela Uddin</p>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;

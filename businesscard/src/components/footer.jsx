import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {

  return(
    <>
    <foter>
      <div className="footer-first-line">
        <p>Copyright &#169; 2025 Luke Alexander Rudderham-Cozier. All rights reserved.</p>
      </div>
      <div className="footer-second-line">
        <a href="https://github.com/LRCozier"><FaGithub className="footer-social-icon"/></a>
        <a href="https://www.linkedin.com/in/luke-rudderham-cozier-30205343/"><FaLinkedin className="footer-social-icon" /></a>
        <a href="https://x.com/lacozier?s=21&t=W22THJ4kx5zK5JfP3iYisg"><FaSquareXTwitter className="footer-social-icon" /></a>
      </div>
    </foter>
    </>
  )

}

export default Footer;
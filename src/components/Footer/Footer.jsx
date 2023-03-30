import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  css,
  html,
  javascript,
  react,
  bootstrap,
  sass,
  typescript,
} from "../../img";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="contactame">
      <div className="footer-contact">
        <h3>Contacto:</h3>
        <ul>
          <li>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://mail.google.com/mail/?view=cm&to=c.andres.perez.h@gamil.com"
            >
              <FaEnvelope /> c.andres.perez.h@gamil.com
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.linkedin.com/in/andres-perez0818/"
            >
              <FaLinkedin /> linkedin.com/in/andres-perez0818
            </a>
          </li>
          <li>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/andres0818"
            >
              <FaGithub /> github.com/andres0818
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-skills">
        <h3>Habilidades:</h3>
        <ul className="footer-icons">
          <li>
            <img src={html} alt="" />
          </li>
          <li>
            <img src={javascript} alt="" />
          </li>
          <li>
            <img src={typescript} alt="" />
          </li>
          <li>
            <img src={react} alt="" />
          </li>
          <li>
            <img src={css} alt="" />
          </li>
          <li>
            <img src={sass} alt="" />
          </li>
          <li>
            <img src={bootstrap} alt="" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

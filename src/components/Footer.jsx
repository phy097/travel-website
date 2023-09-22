import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h3 className="footer__title">Follow Us</h3>

        <div className="footer__social">
          <Link to="https://www.facebook.com" className="footer__social-link">
          <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="https://www.instagram.com" className="footer__social-link">
          <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="https://www.tiktok.com" className="footer__social-link">
          <FontAwesomeIcon icon={faTiktok} />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;

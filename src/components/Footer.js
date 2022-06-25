import React from 'react'
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import footer from "../images/footer.svg";
import '../styles/index.css'


function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="flex flex-row space-x-[60px]">
          <div className="flex flex-col space-y-0">
            <h1>PENN<br/>&nbsp;APPS</h1>
            <p>&copy; 2021 PennApps</p>
            <a href="mailto: contact@pennapps.com">
              <p>contact@pennapps.com</p>
            </a>
          </div>
          <div>
            <a href="http://pages.pennapps.com/policies/conduct/">Code of Conduct</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="https://facebook.com/pennapps" target="_blank">
              <div className="footer-social-media">
                <FaFacebook />
                <div className="footer-social-media-text">Facebook</div>
              </div>
            </a>
            <a href="https://twitter.com/pennapps" target="_blank">
              <div className="footer-social-media">
                <FaTwitter />
                <div className="footer-social-media-text">Twitter</div>
              </div>
            </a>
            <a href="https://instagram.com/pennapps" target="_blank">
              <div className="footer-social-media">
                <FaInstagram />
                <div className="footer-social-media-text">Instagram</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <img src={footer} alt="footer" className="footer-img" />
    </div>
  )
}

export default Footer
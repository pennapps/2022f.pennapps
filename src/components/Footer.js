import React from 'react'
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";


function Footer() {
  return (
    <div className="flex flex-row justify-center items-center space-x-8 py-4">
      <p><a className="no-underline hover:underline" href="mailto:contact@pennapps.com">contact@pennapps.com</a></p>
      <p className="flex flex-row space-x-2">
        <a href="https://facebook.com/pennapps" target="_blank"><FaFacebook /></a>
        <a href="https://twitter.com/pennapps" target="_blank"><FaTwitter /></a>
        <a href="https://instagram.com/pennapps" target="_blank"><FaInstagram /></a>
      </p>
    </div>
  )
}

export default Footer

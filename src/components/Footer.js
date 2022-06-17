import React from 'react'
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";


function Footer() {
  return (
    <div className="flex flex-row justify-center items-center space-x-4">
      <div>contact@pennapps.com</div>
      <div className="flex flex-row space-x-2">
        <FaFacebook/>
        <FaTwitter/>
        <FaInstagram/>
      </div>
    </div>
  )
}

export default Footer

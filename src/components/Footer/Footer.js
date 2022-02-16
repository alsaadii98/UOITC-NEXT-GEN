import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div className="mt-20 shadow-lg shadow-sub w-full bg-white ">
      <div className=" pt-20 flex justify-around items-center ">
        {/* Related Sites  */}
        <div className="space-y-4">
          <h1 className="text-xl text-red-800 font-semibold">Related Sites</h1>
          <ul className="text-gray-500 space-y-2">
            <li className="cursor-pointer">
              Ministry of Higher Education and Scientific Research
            </li>
            <li className="cursor-pointer">
              Imam Al-Kadhum University College
            </li>
            <li className="cursor-pointer">University of Baghdad</li>
            <li className="cursor-pointer">University of Technology</li>
            <li className="cursor-pointer">Al-Mansour University College</li>
            <li className="cursor-pointer">University of Mustansiriyah</li>
            <li className="cursor-pointer">University of alkafeel</li>
          </ul>
        </div>
        {/* ARCHIVES */}
        <div className="space-y-4">
          <h1 className="text-xl text-red-800 font-semibold">ARCHIVES</h1>
          <ul className="text-gray-500 space-y-2">
            <li className="cursor-pointer">March 2019</li>
            <li className="cursor-pointer">February 2019</li>
            <li className="cursor-pointer">January 2019</li>
            <li className="cursor-pointer">December 2018</li>
            <li className="cursor-pointer">November 2018</li>
            <li className="cursor-pointer">October 2018</li>
            <li className="cursor-pointer">September 2018</li>
          </ul>
        </div>
        {/* SOCIAL MEDIA */}
        <div className="space-y-4">
          {/* Text */}
          <div>
            <h1 className="text-xl text-red-800 font-semibold">Social Media</h1>
          </div>
          {/* Icons */}
          <div className="flex items-center space-x-2">
            {/* FaceBook */}
            <div className="p-2 bg-red-200 rounded-lg text-red-800 cursor-pointer">
              <a href="#">
                <FiFacebook className="w-5 h-5" />
              </a>
            </div>
            {/* Instagram */}
            <div className="p-2 bg-red-200 rounded-lg text-red-800 cursor-pointer ">
              <a href="#">
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
            {/* Linkedin */}
            <div className="p-2 bg-red-200 rounded-lg text-red-800 cursor-pointer ">
              <a href="#">
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
            {/* Twitter */}
            <div className="p-2 bg-red-200 rounded-lg text-red-800 cursor-pointer">
              <a href="#">
                <FiTwitter className="w-5 h-5" />
              </a>
            </div>
            {/* Youtube */}
            <div className="p-2 bg-red-200 rounded-lg text-red-800 cursor-pointer">
              <a href="#">
                <FiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-5 text-center text-sm font-light text-gray-400">
        <h1>
          University of Information Technology and Communications © 2014 - 2022
        </h1>
      </div>
    </div>
  );
};
export default Footer;

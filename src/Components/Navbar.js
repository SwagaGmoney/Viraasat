import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Images/Virasat-logo.png";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handlePageRefresh = () => {
    // Log something
    console.log("H2 Clicked");

    // Reload the window
    window.location.reload();
  };

  return (
    
    <nav className={`bg-cyan-100 w-full sticky top-0 z-10 md:opacity-80`}>
      <div className="flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div onClick={handlePageRefresh}>
          <img src={Logo} alt="logo" className="md:cursor-pointer h-[70px]" />
          <h2  className="lg:text-3xl font-bold text-gray-800 absolute lg:top-[1em] lg:left-[5em] xsm:left-[6em] xsm:top-[2em] xsm:text-xl bg-gradient-to-r from-purple-400 via-yellow-400 to-pink-400 text-transparent bg-clip-text hover:cursor-pointer"> Viraasat Technologies </h2>

        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={handleMenuToggle}
            className="text-gray-600 focus:outline-none focus:text-gray-900"
          >
            {isMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>

        {/* Navigation Links for Small Screens */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 h-screen w-64 bg-white z-20 transform transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {/* Logo */}
            <div className="my-6">
              <img src={Logo} alt="logo" className="h-16" />
            </div>

            {/* Navigation Links */}
            <ul className="mt-4 space-y-4">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-70}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-pink-500"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-70}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-pink-500"
                >
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-70}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-pink-500"
                >
                  Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-70}
                  className="text-gray-600 hover:text-gray-900 cursor-pointer transition-all duration-300 hover:border-b-2 hover:border-pink-500"
                >
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </div>
          {/* Close Menu Button */}
          <div className="absolute top-4 right-4">
            <button
              onClick={handleMenuToggle}
              className="text-gray-600 focus:outline-none focus:text-gray-900"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>

        {/* Navigation Links for Larger Screens */}
        <ul className="hidden md:flex space-x-8 space-y-0 mt-4 md:mt-0">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              className="py-2 px-4 text-gray-600 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-cyan-500 transition-all duration-300"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              className="py-2 px-4 text-gray-600 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-cyan-500 transition-all duration-300"
            >
              About Us
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              className="py-2 px-4 text-gray-600 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-cyan-500 transition-all duration-300"
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              className="py-2 px-4 text-gray-600 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-cyan-500 transition-all duration-300"
            >
              Contact Us
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

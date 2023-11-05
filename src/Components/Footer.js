import React from 'react';
import Logos from "../Images/Virasat-logo.png";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white relative w-full mt-[14em] py-[10em] overflow-x-hidden">
        <div className="mx-auto py-0 px-2 sm:px-6 lg:px-2">
          {/* Left */}
          <div className="lg:w-[400px] lg:h-[350px] py-12 px-4 absolute bg-purple-500 rounded-2xl lg:top-[16em] left-[2em] xsm:top-5 xsm:w-[300px] xsm:h-[300px]  ">
            <h2 className="text-2xl ml-3 leading-10 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
              Get the latest updates!
            </h2>
            <p className="mt-3 ml-4 max-w-2xl text-lg leading-6 text-indigo-200">
              Subscribe to our newsletter and stay updated on the latest developments.
            </p>

            <div className="mt-[5em] sm:w-full sm:max-w-md xl:mt-20 xl:ml-[0rem] xsm:mt-5">
              <form action="https://formsubmit.co/yash.gandhi@viraasattechnologies.com" method='POST' className="sm:flex">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Email"
                  className="ring-1 ring-gray-300 w-full text-black rounded-md px-4 py-2 mt-2 ml-1 outline-none focus:ring-2 focus:ring-teal-300"
                  required />

                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button className="w-full flex items-center justify-center px-5 py-3 text-base leading-6
                            font-medium rounded-md text-white bg-indigo-500 focus:ring
                            hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400
                            transition duration-150 ease-in-out"  type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>



          {/* Center */}

          <div className='relative flex flex-col lg:top-[10rem] lg:w-[200px] lg:h-auto lg:left-[45%] xsm:w-[100px] xsm:left-8 xsm:top-[20em] xsm:h-auto'>
            <img src={Logos} alt="logo" />

            <div className="flex justify-center space-x-2.5 lg:justify-start absolute lg:top-[14em] lg:left-[10%] xsm:top-[6em]">
              <a href="https://twitter.com/ViraasatTech" className="p-2.5 rounded-full border-2 border-white transition-colors hover:bg-pink-300" target="_blank">
                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552106751224" className="p-2.5 rounded-full border-2 border-white transition-colors hover:bg-pink-300" target="_blank">
                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>

              <a href="https://www.instagram.com/viraasattechs/" className="p-2.5 rounded-full border-2 border-white transition-colors hover:bg-pink-300" target="_blank">
                <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
            </div>

          </div>

          {/* Right */}
          <div className="relative flex flex-row w-full lg:w-auto lg:left-[80%] lg:top-[-5em] xsm:top-[4em] xsm:left-[50%] bottom-[10em] py-10">
            <ul>
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-70}
                  className="text-semibold text-[30px] cursor-pointer px-4 py-2 hover:bg-pink-300 hover:text-black transition ease-in-out duration-300 relative lg:top-[1rem]"
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
                  className="text-semibold text-[30px] cursor-pointer px-4 py-2 hover:bg-pink-300 hover:text-black transition ease-in-out duration-300 relative lg:top-[2rem]"
                >
                  About
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
                  className="text-semibold text-[30px] cursor-pointer px-4 py-2 hover:bg-pink-300 hover:text-black transition ease-in-out duration-300 relative lg:top-[3rem]"
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
                  className="text-semibold text-[30px] cursor-pointer px-4 py-2 hover:bg-pink-300  hover:text-black transition ease-in-out duration-300 relative lg:top-[4rem]"
                >
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="flex justify-center items-center w-full text-white bg-sky-800 py-[3em] font-semibold">
        <p className="xl:text-xl xsm:text-sm tracking-wide">© 2023 Viraasat Technologies. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;

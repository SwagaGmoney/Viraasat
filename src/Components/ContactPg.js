import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const ContactPg = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <div className="relative lg:top-[40em] mb-[-25em] xsm:top-[50em] xsm:mb-[10em] xl:top-[45em] " id="contact">
            <h1 className="absolute lg:top-[0em] xl:top-[-5rem] font-bold text-[35px] left-[52%] transform -translate-x-1/2 md:left-[45%] md:top-[0em]">
                Contact Us
            </h1>
            <div className="w-[10rem] min-h-screen flex relative opacity-60 lg:top-[-20rem] left-[30%] xl:left-[40%] xl:top-[-25em] xsm:top-[-18em] sm:top-[-20em]">
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="b">
                            <stop offset="0%" stopColor="#ff7c00" />
                            <stop offset="50%" stopColor="#e18fff" />
                            <stop offset="100%" stopColor="#ff8fca" />
                        </linearGradient>
                        <clipPath id="a">
                            <path fill="currentColor"
                                d="M814.5 619.5Q638 739 464.5 800T227 680.5q-64-180.5-19.5-395t285-202Q733 96 862 298t-47.5 321.5Z" />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#a)">
                        <path fill="url(#b)">
                            <animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="
                            M814.5 619.5Q638 739 464.5 800T227 680.5q-64-180.5-19.5-395t285-202Q733 96 862 298t-47.5 321.5Z;
                            M785.5 625Q644 750 484.5 776t-213-125q-53.5-151-32-358t216-130q194.5 77 333 207t-3 255Z;
                            M720 661q-34 161-195.5 119T218 619Q73 500 177 310t299.5-149.5Q672 201 713 350.5t7 310.5Z;
                            M814.5 619.5Q638 739 464.5 800T227 680.5q-64-180.5-19.5-395t285-202Q733 96 862 298t-47.5 321.5Z"></animate>
                        </path>
                    </g>
                </svg>
            </div>
 
            <div style={{ perspective: 2000 }} className="relative w-full max-w-screen flex flex-col bottom-[40em] lg:left-[-45em] xsm:left-0 sm:left-30 md:left-0 md:top-[-35em] xl:left-[-56em] ">
                <div className="absolute  top-1/2 transform -translate-y-1/2 md:right-[18em] xsm:left-0 sm:left-[10em] lg:left-[47em] xl:left-[60em] ">
                    <div className="w-[17rem] h-[17rem]   bg-purple-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob relative left-[16em] top-[10em] xsm:left-[3em] md:left-[12rem] lg:left-[10em] "></div>
                    <div className="w-[17rem] h-[17rem]   bg-yellow-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000  "></div>
                    <div className="w-[17rem] h-[17rem]   bg-pink-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 relative top-[-8em] md:left-[10rem] left-[14em] xsm:left-[3em] "></div>
                </div>

                <motion.div style={{ x, y, rotateX, rotateY, z: 100 }} drag dragElastic={0.18} dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} whileTap={{ cursor: 'grabbing' }}

               className="lg:w-[400px] min-h-[300px] xsm:w-[300px] sm:w-[400px]  xl:w-[400px]   bg-[#e4dfdc44] p-[10px] px-[40px] py-[25px] m-[100px_auto] border-[4px] border-white shadow-[14px_10px_10px_10px_rgb(0,0,0,0.1)] rounded-br-[80px] rounded-tl-[80px] cursor-grab relative lg:left-[25em] "

                >
                    <h1 className="text-center lg:text-xl font-bold py-4">Get In Touch</h1>
                    <form action="https://formsubmit.co/yash.gandhi@viraasattechnologies.com" method="POST" className="text-center">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 ml-1 outline-none focus:ring-2 focus:ring-teal-300"
                            required />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2  ml-1 outline-none focus:ring-2 focus:ring-teal-300"
                            required />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Num"
                            className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2  ml-1 outline-none focus:ring-2 focus:ring-teal-300"
                            required />
                        <textarea
                            name="message"
                            placeholder="Type your Message...."
                            cols="30"
                            rows="4"
                            className="ring-1 ring-gray-300 rounded-md w-full py-2 mt-2 ml-1 outline-none focus:ring-2 focus:ring-teal-300"

                        ></textarea>
                        <button
                            className="relative text-white bg-indigo-500 py-4 px-6 m-2 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg cursor-pointer"

                        >
                            Send
                        </button>
                    </form>


                </motion.div>


                {/* End of Left side  */}
            </div>
        </div>
    );
};

export default ContactPg;

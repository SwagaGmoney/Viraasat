import React, { useState } from "react";
import webdev from "../Images/web-dev-1.png"
import seomarket from "../Images/seo-marketing.png";
import nlp from "../Images/NLP.png";
import deep from "../Images/deep.png";
import alml from "../Images/ai.png";
import compvision from "../Images/computer-vision.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import '../css/slideCube.css';

const Services = () => {

    const [isRotated, setIsRotated] = useState(false);
    const [isRotate, setIsRotate] = useState(false);
    const [isMove, setIsMove] = useState(false);
    const [isMoved, setIsMoved] = useState(false);
    const [isturn, setIsTurn] = useState(false)
    const [isturned, setIsTurned] = useState(false);

    const toggleRotation = () => {
        setIsRotated(!isRotated);
    };
    const toggleMove = () => {
        setIsRotate(!isRotate);
    };
    const toggleMoved = () => {
        setIsMove(!isMove);
    };
    const toggleMover = () => {
        setIsMoved(!isMoved);
    };
    const toggleTurn = () => {
        setIsTurn(!isturn);
    };
    const toggleTurned = () => {
        setIsTurned(!isturned);
    };
    return (
        <div className=" relative lg:top-[20em] xsm:top-[30em] sm:top-[20rem] xl:top-[10em] md:top-[30em] " id="services">

            <h1 className="absolute lg:top-[-7.5em] sm:top-[-15rem] font-bold text-[40px] lg:left-[50%] transform -translate-x-1/2 xsm:top-[-6em] xsm:left-[56%] md:top-[-16rem]">
                Services
            </h1>

            <div className="w-[10rem] min-h-screen flex relative opacity-60 lg:top-[-38em] lg:left-[42%] sm:top-[-35em] xsm:left-[35%] xsm:top-[-34em] sm:left-[45%] xl:top-[-38em] xl:left-[45%] md:top-[-36em] ">
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="b">
                            <stop offset="0%" stopColor="#ff7c00" />
                            <stop offset="50%" stopColor="#e18fff" />
                            <stop offset="100%" stopColor="#ff8fca" />
                        </linearGradient>
                        <clipPath id="a">
                            <path
                                fill="currentColor"
                                d="M814.5 619.5Q638 739 464.5 800T227 680.5q-64-180.5-19.5-395t285-202Q733 96 862 298t-47.5 321.5Z"
                            />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#a)">
                        <path fill="url(#b)">
                            <animate
                                attributeName="d"
                                dur="10000ms"
                                repeatCount="indefinite"
                                values="
            M814.5 619.5Q638 739 464.5 800T227 680.5q-64-180.5-19.5-395t285-202Q733 96 862 298t-47.5 321.5Z;
            M785.5 625Q644 750 484.5 776t-213-125q-53.5-151-32-358t216-130q194.5 77 333 207t-3 255Z;
            M720 661q-34 161-195.5 119T218 619Q73 500 177 310t299.5-149.5Q672 201 713 350.5t7 310.5Z;
            M814.5 619.5Q638 739 464.5 800T227 680.5q-64-180.5-19.5-395t285-202Q733 96 862 298t-47.5 321.5Z"
                            ></animate>
                        </path>
                    </g>
                </svg>
            </div>

            {/* END OF Serices Header  */}
            <div className="cube-container">
                <div className={`cube ${isRotated ? 'rotated' : ''}`}>
                    <div className={`cube-face front   ${isRotated ? 'fade-out' : ''}`}
                        id="front">
                        <img
                            src={webdev}
                            alt="web-dev"
                            className="w-[40%] h-[40%] absolute lg:left-[2em] lg:top-[1rem] xsm:left-[1.5em] xsm:top-2"
                        />
                        <h2 className="lg:text-lg font-semibold text-black items-center ml-2 mt-[1em] xsm:text-sm">
                            Web Application & UX/UI Development
                        </h2>
                        <button
                            className="relative text-sm lg:top-[-0.5rem] lg:left-[-4rem] xsm:left-[-1em] xsm:top-[0rem]  sm:top-[0rem] sm:left-[0rem] "
                            onClick={toggleRotation}
                        >
                            <FontAwesomeIcon icon={faArrowCircleRight} size="lg" />
                        </button>
                    </div>
                    <div className={`cube-face back `}onClick={()=> setIsRotated(false)} id="back">
                        <div className="cube-face back">
                            <ul className="text-center justify-center items-center relative lg:top-[-7em] xsm:top-[-8em]   ">
                                <li className=" text-white sm:text-xs md:text-xs px-2 py-20 xsm:text-xs lg:text-sm ">
                                    Elevate your brand with custom web design and user-friendly CMS integration. Our responsive design ensures accessibility and engagement across devices.
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
            <div className="cube-container1 ">
                <div className={`cube ${isRotate ? 'rotated' : ''}`}>
                    <div className={`cube-face front ${isRotate ? 'fade-out' : ''}`} id="front1">
                        <img src={seomarket} alt="hi" className="w-[40%] h-[40%] absolute lg:left-[4rem] lg:top-[1rem] xsm:left-10 xsm:top-3" />
                        <h2 className="lg:text-lg font-semibold text-black items-center ml-2 mt-[1em] xsm:text-sm "> Marketing & SEO Optimization </h2>
                        <button onClick={toggleMove} className="relative text-sm lg:top-[-0.5rem] lg:left-[-4rem] xsm:left-[-0.4rem] sm:left-[0rem] "> <FontAwesomeIcon icon={faArrowCircleRight} size="xl"></FontAwesomeIcon></button>
                    </div>
                    <div className={`cube-face back `}  onClick={()=> setIsRotate(false)} id="back1">
                    <ul className="text-center justify-center items-center relative lg:top-[-4em] sm:top-[-5em] xsm:top-[-5em] ">
                         <li className=" text-white xsm:text-xs lg:text-sm sm:text-xs md:text-xs px-2 py-20 ">
                         Our SEO optimization boosts your website's discoverability, driving organic traffic to your business.We provide ongoing support, maintenance, and stunning graphic design for a captivating online presence.
                                </li>
                        </ul>
                       
                    </div>
                </div>
            </div>

            <div className="cube-container2">
                <div className={`cube ${isMove ? 'rotated' : ''}`}>
                    <div className={`cube-face front ${isMove ? 'fade-out' : ''}`} id="front2">
                        <img src={nlp} alt="hi" className="w-[40%] h-[40%] absolute lg:left-[4rem] lg:top-[1rem] xsm:left-10 xsm:top-[1rem] " />

                        <h2 className="lg:text-lg font-semibold text-black items-center ml-2 mt-[1em] xsm:text-sm "> Natural Language Processing </h2>

                        <button onClick={toggleMoved} className="relative text-sm lg:top-[-0.5rem] lg:left-[-4rem] xsm:left-[0rem] sm:top-[0rem] sm:left-[0rem] xsm:top-0 "><FontAwesomeIcon icon={faArrowCircleRight} size="xl"></FontAwesomeIcon></button>
                    </div>
                    <div className={`cube-face back `}  onClick={()=> setIsMove(false)} id="back2">
                       <ul className="flex justify-self-center text-center relative top-[-5em] 	">
                        <li className=" text-white xsm:text-xs lg:text-sm sm:text-sm md:text-xs px-2 py-20 ">
                        Unlock NLP's power for precise insights and data-driven decisions that resonate with your audience.Enhance engagement with 24/7 NLP-driven chatbots, elevate content, and connect with  audience.
                        </li>
                        </ul>
                        
                    </div>
                </div>
            </div>

            <div className="cube-container3">
                <div className={`cube ${isMoved ? 'rotated' : ''}`}>
                    <div className={`cube-face front ${isMoved ? 'fade-out' : ''}`} id="front3">
                        <img src={alml} alt="hi" className="w-[40%] h-[40%] absolute lg:left-[4rem] lg:top-[2rem] xsm:left-10 xsm:top-3" />
                        <h2 className="lg:text-lg font-semibold text-black items-center ml-2 lg:mt-[1em] xsm:text-sm xsm:mt-[1rem] "> AI/ML Application Development  </h2>

                        <button onClick={toggleMover} className="relative text-sm lg:top-[-0.5rem] lg:left-[-4rem] xsm:top-[0rem] xsm:left-[0rem] sm:left-[0rem]  "> <FontAwesomeIcon icon={faArrowCircleRight} size="xl"></FontAwesomeIcon></button>
                    </div>
                    <div className={`cube-face back `} onClick={()=> setIsMoved(false)} id="back3">
                         <ul className="flex justify-self-center text-center relative top-[-4em]	">
                        <li className=" text-white xsm:text-[9.5px] lg:text-sm sm:text-xs md:text-[9.8px]  px-2 py-8 ">
                         Streamline operations and embrace automation with our AI/ML application development services, driving efficiency and innovation.Gain data-driven insights, optimize resources, and stay ahead of the competition with our AI/ML-powered solutions for informed decision-making and product innovation.
                         </li>
                        </ul>
                        
                    </div>
                </div>

            </div>

            <div className="cube-container4 ">
                <div className={`cube ${isturn ? 'rotated' : ''}`}>
                    <div className={`cube-face front ${isturn ? 'fade-out' : ''}`} id="front4">
                        <img src={deep} alt="hi" className="w-[40%] h-[40%] absolute lg:left-[4rem] lg:top-[2rem] xsm:left-10 xsm:top-3" />
                        <h2 className="lg:text-lg font-semibold text-black items-center ml-2 lg:mt-[1em] xsm:text-sm xsm:mt-[1rem] ">Deep Learning Development  </h2>

                        <button onClick={toggleTurn} className="relative text-sm lg:top-[-0.5rem] lg:left-[-4rem] xsm:top-[0rem] xsm:left-[0rem] sm:left-[0rem] "> <FontAwesomeIcon icon={faArrowCircleRight} size="xl"></FontAwesomeIcon></button>
                    </div>
                    <div className={`cube-face back `} onClick={()=> setIsTurn(false)} id="back4">
                         <ul className="flex justify-self-center text-center relative top-[-3.5em]	">
                            <li  className=" text-white xsm:text-[9.5px] lg:text-sm sm:text-sm md:text-[9px] px-2 py-8 ">Harness cutting-edge AI/ML tech for streamlined operations and data-driven insights, embracing automation and innovation.Transform products with our AI/ML expertise, driving personalized experiences and staying ahead of the competition.</li>
                        </ul>
                       
                    </div>
                </div>
            </div>

            <div className="cube-container5">
                <div className={`cube ${isturned ? 'rotated' : ''}`}>
                    <div className={`cube-face front ${isturned ? 'fade-out' : ''}`} id="front5">
                        <img src={compvision} alt="hi" className="w-[40%] h-[40%] absolute lg:left-[4rem] lg:top-[2rem] xsm:left-10 xsm:top-3" />
                        <h2 className="lg:text-lg font-semibold text-black items-center ml-2 lg:mt-[2em] xsm:text-sm xsm:mt-[2rem]  ">Computer Vision  </h2>
                        <button onClick={toggleTurned} className="relative text-sm lg:top-[0rem] lg:left-[-4rem] xsm:left-[0rem] xsm:top-[0rem] sm:left-[0rem]"> <FontAwesomeIcon icon={faArrowCircleRight} size="xl"> </FontAwesomeIcon></button>

                    </div>
                    <div className={`cube-face back `} onClick={()=> setIsTurned(false)} id="back5">
                         <ul className="flex justify-self-center text-center relative top-[-3.5em] 	">
                          <li className=" text-white xsm:text-[9.5px] lg:text-sm sm:text-sm md:text-[8px]  px-2 py-8 ">Revolutionize visual data with our computer vision solutions, transforming images into actionable insights for better decision-making.Optimize operations and engage customers with immersive experiences using computer vision, setting your brand apart in a visually-driven world.</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>


    );
};
export default Services;
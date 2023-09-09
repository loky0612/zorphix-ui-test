import React, { useEffect } from 'react';
import '../../assets/css/App.css';
import zorphixfinal from '../../assets/images/SignIn/Zorphix final without name.png';
import zorphixlanding from '../../assets/images/logo/zorphixlanding.png';
import bgvideo from '../../assets/video/zorphixbgnew.mp4';
import Counter from '../Counter/Counter';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    useEffect(() => {
        Aos.init({duration: 1000});
    })

    return (
        <div>
            <div className="bg-video h-screen">
                <video className="bg-video__content" autoPlay muted loop>
                    <source src={bgvideo} type="video/mp4" />
                    Your browser is not supported!
                </video>
            </div>
            <div
                id="home"
                className="relative overflow-hidden bg-grad pt-[110px] h-screen md:pt-[120px] lg:pt-[140px]"
            >
                <div className="container">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-4">
                            <div
                                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                                data-wow-delay=".2s"
                            >

                                <div className="w-full flex justify-center items-center max-w-full px-4">
                                    <div className="navbar-logo blockw w-36 pt-1">
                                        <img
                                            src={zorphixfinal}
                                            alt="logo"
                                            className="header-logo w-full"
                                            data-aos = "zoom-in"
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex justify-center items-center max-w-full px-4">
                                    <div className="navbar-logo block w-96 lg:w-11/12 py-4">
                                        <img
                                            src={zorphixlanding}
                                            alt="logo"
                                            className="header-logo w-full"
                                            data-aos = "zoom-out"
                                        />
                                    </div>
                                </div>
                            
                                <Counter/>

                                <ul className="mt-5 mb-5 flex flex-wrap items-center justify-center">
                                    <li>
                                        <a
                                            href="https://links.tailgrids.com/play-download"
                                            className="inline-flex items-center justify-center rounded-lg bg-white py-4 px-6 text-center text-base font-medium text-dark transition duration-300 ease-in-out hover:text-primary hover:shadow-lg sm:px-10"
                                        >
                                            Register Now
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/tailgrids/play-tailwind"
                                            target="_blank"
                                            className="flex items-center py-4 px-6 text-base font-medium text-white transition duration-300 ease-in-out hover:opacity-70 sm:px-10"
                                        >
                                            Go to events
                                            <span className="pl-2">
                                                <svg
                                                    width="20"
                                                    height="8"
                                                    viewBox="0 0 20 8"
                                                    className="fill-current"
                                                >
                                                    <path
                                                        d="M19.2188 2.90632L17.0625 0.343819C16.875 0.125069 16.5312 0.0938193 16.2812 0.281319C16.0625 0.468819 16.0312 0.812569 16.2188 1.06257L18.25 3.46882H0.9375C0.625 3.46882 0.375 3.71882 0.375 4.03132C0.375 4.34382 0.625 4.59382 0.9375 4.59382H18.25L16.2188 7.00007C16.0312 7.21882 16.0625 7.56257 16.2812 7.78132C16.375 7.87507 16.5 7.90632 16.625 7.90632C16.7812 7.90632 16.9375 7.84382 17.0312 7.71882L19.1875 5.15632C19.75 4.46882 19.75 3.53132 19.2188 2.90632Z"
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
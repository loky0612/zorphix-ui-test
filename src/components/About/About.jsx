import React, { useEffect } from 'react';
import '../../assets/css/App.css';
import aboutimg from '../../assets/images/about/about-image.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div id="about" className="bg-grad pt-20 pb-20 lg:pt-[120px] lg:pb-[120px]">
            <div className="container">
                <div className="wow fadeInUp rounded-xl bg-white" data-aos="fade-down">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="items-center justify-between overflow-hidden lg:flex">
                                <div className="w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]">
                                    <span className="mb-5 inline-block bg-primary py-2 px-5 text-sm font-medium text-white">
                                        About Us
                                    </span>
                                    <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]">
                                        Brilliant Toolkit to Build Nextgen Website Faster.
                                    </h2>
                                    <p className="mb-9 text-base leading-relaxed text-body-color">
                                        The main ‘thrust' is to focus on educating attendees on how
                                        to best protect highly vulnerable business applications with
                                        interactive panel discussions and roundtables led by subject
                                        matter experts.
                                    </p>
                                    <p className="mb-9 text-base leading-relaxed text-body-color">
                                        The main ‘thrust' is to focus on educating attendees on how
                                        to best protect highly vulnerable business applications with
                                        interactive panel.
                                    </p>
                                    <a
                                        href="javascript:void(0)"
                                        className="inline-flex items-center justify-center rounded-xl bg-primary py-2 px-4 mr-2 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg"
                                    >
                                        Learn More
                                    </a>
                                </div>
                                <div className="text-center overflow-scroll h-fix lg:px-16 scrollbar-hide">
                                    <div className="relative z-10 inline-block">
                                        <div className="scrolling-images">
                                            <img
                                                src={aboutimg}
                                                alt="image"
                                                className="mx-auto lg:ml-auto"
                                            />
                                            <img
                                                src={aboutimg}
                                                alt="image"
                                                className="mx-auto lg:ml-auto"
                                            />
                                            <img
                                                src={aboutimg}
                                                alt="image"
                                                className="mx-auto lg:ml-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

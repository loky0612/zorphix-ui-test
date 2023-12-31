import { useState, useEffect } from 'react';
import '../../assets/css/App.css';
import normalLogo from '../../assets/images/logo/citlogo.png';
import stickyLogo from '../../assets/images/SignIn/loginlog.png';
import '../../assets/css/App.css';

function Navbar() {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [logoSrc, setLogoSrc] = useState(normalLogo);

    // Function to toggle the navigation menu
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // Function to close the navigation menu when a link is clicked
    const closeNav = () => {
        setIsNavOpen(false);
    };

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            const ud_header = document.querySelector(".ud-header");
            const sticky = ud_header.offsetTop;
            const logo = document.querySelector(".header-logo");

            if (window.pageYOffset > sticky) {
                ud_header.classList.add("sticky");
                setLogoSrc(stickyLogo);
            } else {
                ud_header.classList.remove("sticky");
                setLogoSrc(normalLogo);
            }
        };

        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent">
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <a href="index.html" className="navbar-logo block w-full py-5">
                            <img
                                src={logoSrc}
                                alt="logo"
                                className="header-logo w-full"
                            />
                        </a>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                id="navbarToggler"
                                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${isNavOpen ? 'navbarTogglerActive' : ''}`}
                                onClick={toggleNav}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`absolute right-4 top-full ${isNavOpen ? '' : 'hidden'} w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6`}
                            >
                                <ul className="blcok lg:flex">
                                    <li className="group relative">
                                        <a
                                            href="#home"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                                            onClick={closeNav}
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#about"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                            onClick={closeNav}
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#pricing"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                            onClick={closeNav}
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#team"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                            onClick={closeNav}
                                        >
                                            Team
                                        </a>
                                    </li>
                                    <li className="group relative">
                                        <a
                                            href="#contact"
                                            className="ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12"
                                            onClick={closeNav}
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <a
                                href="signin.html"
                                className="loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70"
                            >
                                Sign In
                            </a>
                            <a
                                href="signup.html"
                                className="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

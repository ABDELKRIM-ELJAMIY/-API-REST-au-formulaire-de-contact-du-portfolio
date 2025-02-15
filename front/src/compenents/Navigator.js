import React, { useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation

gsap.registerPlugin(ScrollToPlugin);

function Sidenav() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Get current path

    const toggleSidenav = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (target) => {
        if (location.pathname === "/admin") {
            // If on Admin page, first navigate back to home
            navigate("/");
            setTimeout(() => {
                scrollToSection(target);
            }, 100); // Delay to ensure page transition
        } else {
            scrollToSection(target);
        }
        setIsOpen(false); // Close sidenav
    };

    const scrollToSection = (target) => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: target,
                offsetY: 70,
            },
            ease: "power2.out",
        });
    };

    const goToAdmin = () => {
        navigate("/admin");
        setIsOpen(false);
    };

    return (
        <>
            {!isOpen && (
                <button
                    onClick={toggleSidenav}
                    className="p-4 text-white fixed top-4 left-4 rounded-full z-20"
                >
                    ☰
                </button>
            )}

            <div className={`fixed top-0 left-0 h-full bg-gray-600 text-white w-0 transition-all duration-500 ease-in-out ${isOpen ? "w-64" : "w-0"} overflow-hidden z-10 pt-16`}>
                <button onClick={toggleSidenav} className="absolute top-4 right-4 text-3xl text-white">
                    &times;
                </button>

                <div className="flex flex-col space-y-4 pl-8">
                    <button onClick={() => handleScroll("#Home")} className="text-lg text-gray-400 hover:text-white transition duration-300 text-left flex items-center">
                        <i className="bx bx-home mr-2"></i>Home
                    </button>
                    <button onClick={() => handleScroll("#about")} className="text-lg text-gray-400 hover:text-white transition duration-300 text-left flex items-center">
                        <i className="bx bx-user mr-2"></i> About
                    </button>
                    <button onClick={() => handleScroll("#projects")} className="text-lg text-gray-400 hover:text-white transition duration-300 text-left flex items-center">
                        <i className="bx bx-briefcase mr-2"></i> Projects
                    </button>
                    <button onClick={() => handleScroll("#Skills")} className="text-lg text-gray-400 hover:text-white transition duration-300 text-left flex items-center">
                        <i className="bx bx-laptop mr-2"></i> Skills
                    </button>
                    <button onClick={() => handleScroll("#contact")} className="text-lg text-gray-400 hover:text-white transition duration-300 text-left flex items-center">
                        <i className="bx bx-envelope mr-2"></i> Contact
                    </button>


                    <button onClick={goToAdmin} className="text-lg text-gray-400 hover:text-white transition duration-300 text-left"> <i className="bx bxs-user-circle mr-2"></i> Admin</button>
                </div>
            </div>
        </>
    );
}

export default Sidenav;

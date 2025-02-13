import React, { useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

function Sidenav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidenav = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = (target) => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: target,
                offsetY: 70, // Adjust if you have a fixed navbar
            },
            ease: "power2.out",
        });
        setIsOpen(false); // Close sidenav after clicking
    };

    return (
        <>
            {/* Button to toggle the sidenav (Hidden when sidenav is open) */}
            {!isOpen && (
                <button
                    onClick={toggleSidenav}
                    className="p-4  text-white fixed top-4 left-4 rounded-full z-20"
                >
                    ☰
                </button>
            )}

            {/* Side Navigation */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-600 text-white w-0 transition-all duration-500 ease-in-out ${isOpen ? "w-64" : "w-0"
                    } overflow-hidden z-10 pt-16`}
            >
                {/* Close Button */}
                <button
                    onClick={toggleSidenav}
                    className="absolute top-4 right-4 text-3xl text-white"
                >
                    &times;
                </button>

                {/* Menu Links */}
                <div className="flex flex-col space-y-4 pl-8">
                    <button
                        onClick={() => handleScroll("#home")}
                        className="text-lg text-gray-400 hover:text-white transition duration-300 text-left"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleScroll("#about")}
                        className="text-lg text-gray-400 hover:text-white transition duration-300 text-left"
                    >
                        About
                    </button>
                    <button
                        onClick={() => handleScroll("#projects")}
                        className="text-lg text-gray-400 hover:text-white transition duration-300 text-left"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => handleScroll("#Skills")}
                        className="text-lg text-gray-400 hover:text-white transition duration-300 text-left"
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => handleScroll("#contact")}
                        className="text-lg text-gray-400 hover:text-white transition duration-300 text-left"
                    >
                        Contact
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div
                className={`transition-all duration-1000 ease-in-out ${isOpen ? "ml-64" : "ml-0"
                    }`}
            >
                {/* Your main content goes here */}
            </div>
        </>
    );
}

export default Sidenav;

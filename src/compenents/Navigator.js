import React, { useState } from "react";

function Sidenav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidenav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Button to toggle the sidenav */}
            <button
                onClick={toggleSidenav}
                className="p-4 bg-gray-800 text-white fixed top-4 left-4 rounded-full"
            >
                ☰
            </button>

            {/* Side Navigation */}
            <div
                className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-0 transition-all duration-500 ease-in-out ${isOpen ? "w-64" : "w-0"
                    } overflow-hidden z-10 pt-16`}
            >
                {/* Close Button */}
                <button
                    onClick={toggleSidenav}
                    className="absolute top-0 right-4 text-3xl text-white"
                >
                    &times;
                </button>

                {/* Menu Links */}
                <div className="flex flex-col space-y-4 pl-8">
                    <a
                        href="#home"
                        className="text-lg text-gray-400 hover:text-white transition duration-300"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="text-lg text-gray-400 hover:text-white transition duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#projects"
                        className="text-lg text-gray-400 hover:text-white transition duration-300"
                    >
                        Projects
                    </a>
                    <a
                        href="#contact"
                        className="text-lg text-gray-400 hover:text-white transition duration-300"
                    >
                        Contact
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div
                className={`transition-all duration-500 ease-in-out ${isOpen ? "ml-64" : "ml-0"
                    }`}
            >
                {/* Your main content goes here */}
            </div>
        </>
    );
}

export default Sidenav;

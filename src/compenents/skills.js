import React, { useEffect } from "react";
import gsap from "gsap";

const Skills = () => {
    useEffect(() => {
        // Animate each skill card on page load
        gsap.fromTo(
            ".skill",
            { opacity: 0, y: 200 }, // Start state: hidden and positioned 200px down
            {
                opacity: 1, // End state: fully visible
                y: 0, // End state: move to original position
                duration: 1.5, // Duration of the animation
                ease: "power3.out", // Easing function for smooth animation
                stagger: 0.1, // Stagger delay between each skill card
            }
        );
    }, []);

    return (
        <section id="skills" className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl w-full text-center">
                <h2 className="text-3xl font-bold mb-6">Skills</h2>
                <p className="mt-4 text-lg text-gray-300">Technologies I've worked with</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {/* Each skill card */}
                    <div className="skill hover:scale-105 hover:bg-gray-700 p-6 rounded-lg transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img src="/images/html5-removebg-preview.png" alt="HTML5" className="w-16 h-16 object-contain" />
                        </div>
                        <p className="mt-2 text-gray-300">HTML</p>
                    </div>

                    <div className="skill hover:scale-105 hover:bg-gray-700 p-6 rounded-lg transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img src="/images/css3-logo-removebg-preview.png" alt="CSS3" className="w-16 h-16 object-contain" />
                        </div>
                        <p className="mt-2 text-gray-300">CSS</p>
                    </div>

                    <div className="skill hover:scale-105 hover:bg-gray-700 p-6 rounded-lg transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img src="/images/javascript-logo2.webp" alt="JavaScript" className="w-16 h-16 object-contain" />
                        </div>
                        <p className="mt-2 text-gray-300">JavaScript</p>
                    </div>

                    <div className="skill hover:scale-105 hover:bg-gray-700 p-6 rounded-lg transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img src="/images/png-clipart-react-javascript-webbylab-computer-icons-angularjs-github-text-logo-removebg-preview.png" alt="React" className="w-16 h-16 object-contain" />
                        </div>
                        <p className="mt-2 text-gray-300">React</p>
                    </div>

                    <div className="skill hover:scale-105 hover:bg-gray-700 p-6 rounded-lg transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img src="/images/node22-removebg-preview.png" alt="Node.js" className="w-16 h-16 object-contain" />
                        </div>
                        <p className="mt-2 text-gray-300">Node.js</p>
                    </div>

                    <div className="skill hover:scale-105 hover:bg-gray-700 p-6 rounded-lg transition duration-300 ease-in-out">
                        <div className="flex justify-center items-center">
                            <img src="/images/téléchargement-removebg-preview.png" alt="Tailwind CSS" className="w-16 h-16 object-contain" />
                        </div>
                        <p className="mt-2 text-gray-300">Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

import React from "react";

function About() {
    return (
        <section id="about" className="bg-gray-800 text-white py-16 flex items-center justify-center">
            <div className="max-w-4xl text-center px-6">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>

                <p className="text-lg text-gray-400 mb-4">
                    I'm <span className="text-blue-400 font-semibold">El jamiy Abdelkrim</span>, a passionate web developer dedicated to building
                    modern, responsive, and interactive web applications. I enjoy solving
                    complex problems and bringing creative ideas to life through clean and
                    efficient code.
                </p>

                <p className="text-lg text-gray-400 mb-4">
                    I specialize in <span className="text-blue-400 font-semibold">React.js, JavaScript, Node.js, and Tailwind CSS</span>. My goal is to create
                    seamless user experiences while ensuring performance and accessibility.
                </p>

                <p className="text-lg text-gray-400">
                    When I'm not coding, you can find me exploring photography, traveling, or
                    writing about tech on my blog, <span className="text-blue-400 font-semibold">"The Journey of a Pen"</span>.
                </p>

                {/* Call to Action */}
                <div className="mt-6">
                    <a
                        href="#projects"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
                    >
                        View My Projects
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;

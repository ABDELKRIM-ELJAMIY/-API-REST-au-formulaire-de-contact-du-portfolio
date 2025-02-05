import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl w-full text-center">
                <h2 className="text-3xl font-bold mb-6">Skills</h2>
                <p className="mt-4 text-lg text-gray-300">Technologies I've worked with</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {/* Skill 1 - HTML */}
                    <div className="skill">
                        <div className="flex justify-center items-center">
                            <img src="/images/html5-removebg-preview.png" alt="HTML5" className="w-16 h-16 object-contain" />
                        </div>
                        <p className="mt-2 text-gray-300">HTML</p>
                    </div>

                    {/* Skill 2 - CSS */}
                    <div className="skill">
                        <div className="flex justify-center items-center">
                            <img src="/images/css3-logo-removebg-preview.png" alt="CSS3" className="w-16 h-16 object-contain" />
                        </div>
                        <p className="mt-2 text-gray-300">CSS</p>
                    </div>

                    {/* Skill 3 - JavaScript */}
                    <div className="skill">
                        <div className="flex justify-center items-center">
                            <img src="/images/javascript-logo2.webp" alt="JavaScript" className="w-16 h-16 object-contain" />
                        </div>
                        <p className="mt-2 text-gray-300">JavaScript</p>
                    </div>

                    {/* Skill 4 - React */}
                    <div className="skill">
                        <div className="flex justify-center items-center">
                            <img src="/images/png-clipart-react-javascript-webbylab-computer-icons-angularjs-github-text-logo-removebg-preview.png" alt="React" className="w-16 h-16 object-contain" />
                        </div>
                        <p className="mt-2 text-gray-300">React</p>
                    </div>

                    {/* Skill 5 - Node.js */}
                    <div className="skill">
                        <div className="flex justify-center items-center">
                            <img src="/images/node22-removebg-preview.png" alt="Node.js" className="w-16 h-16 object-contain" />
                        </div>
                        <p className="mt-2 text-gray-300">Node.js</p>
                    </div>

                    {/* Skill 6 - Tailwind CSS */}
                    <div className="skill">
                        <div className="flex justify-center items-center">
                            <img src="/images/tailwindcss.png" alt="Tailwind CSS" className="w-16 h-16 object-contain" />
                        </div>
                        <p className="mt-2 text-gray-300">Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

import React from "react";

function Projects() {
    const projects = [
        {
            title: "Task Manager App",
            description: "A task management app with a user-friendly UI, built using Node.js, Express.js, and MongoDB.",
            link: "https://github.com/yourgithub/task-manager",
        },
        {
            title: "Stock Management System",
            description: "A stock tracking application for small businesses, developed with JavaScript and MongoDB.",
            link: "https://github.com/yourgithub/stock-management",
        },
        {
            title: "Interactive Weather App",
            description: "A weather app fetching real-time data from OpenWeatherMap API, built with React and Tailwind CSS.",
            link: "https://github.com/yourgithub/weather-app",
        },
        {
            title: "Dynamic Portfolio",
            description: "A modern and interactive portfolio site showcasing my skills and projects using React.js and GSAP animations.",
            link: "https://github.com/yourgithub/dynamic-portfolio",
        },
    ];

    return (
        <section id="projects" className="bg-gray-900 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">My Projects</h2>
                <p className="text-lg text-gray-400 mb-8">
                    Here are some of the projects I have worked on. Click on any project to view the code on GitHub.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 font-semibold"
                            >
                                View on GitHub →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;

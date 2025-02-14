import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Projects() {
    const cardRefs = useRef([]);

    const handleIntersect = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                gsap.to(entry.target, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    stagger: 0.2,
                });
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.3,
    });

    useEffect(() => {
        cardRefs.current.forEach((card) => observer.observe(card));
    }, []);

    const projects = [
        {
            title: "C Calculator",
            description: "A simple calculator program built using C, supporting basic and advanced operations.",
            link: "",
            image: "/images/calculatrice.webp",
        },
        {
            title: "Stock Management System",
            description: "A stock tracking application for small businesses, developed with JavaScript and MongoDB.",
            link: "",
            image: "/images/Système de gestion de stock (JavaScript).jpg",
        },
        {
            title: "Task Management API",
            description: "A task management app with a user-friendly UI, built using Node.js, Express.js, and MongoDB.",
            link: "",
            image: "/images/API Task Manager (Node.js & MongoDB).jpg",
        },
        {
            title: "Personal Blog",
            description: "A personal blog website built using HTML, CSS, and JavaScript.",
            link: "",
            image: "/images/blog.jpg",
        },
        {
            title: "Startup Website (Dardiv)",
            description: "A business website created for the startup 'Dardiv' using modern web technologies.",
            link: "",
            image: "/images/dardev.png",
        },
        {
            title: "Weather App API",
            description: "A weather app fetching real-time data from OpenWeatherMap API, built with React and Tailwind CSS.",
            link: "",
            image: "/images/weather app.png",
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
                        <div
                            key={index}
                            className="bg-gray-800 p-4 rounded-lg shadow-lg opacity-0 transform translate-y-10 scale-90"
                            ref={(el) => (cardRefs.current[index] = el)}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
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

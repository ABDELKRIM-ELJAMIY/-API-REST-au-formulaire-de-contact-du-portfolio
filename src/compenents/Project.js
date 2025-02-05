import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Projects() {
    const cardRefs = useRef([]);

    const handleIntersect = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Animate the card when it enters the viewport
                gsap.to(entry.target, {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger: 0.3, // This staggers the animations for each card
                });
                // Stop observing once the card has been animated
                observer.unobserve(entry.target);
            }
        });
    };

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.5, // The card should be at least 50% in the viewport to trigger the animation
    });

    useEffect(() => {
        // Start observing each card element
        cardRefs.current.forEach((card) => observer.observe(card));
    }, []);

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
                            className="bg-gray-800 p-6 rounded-lg shadow-lg opacity-0 transform translate-y-10"
                            ref={(el) => (cardRefs.current[index] = el)}
                        >
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

import gsap from "gsap";
import { useEffect } from "react";
function About() {
    useEffect(() => {
        // Animation example when the component mounts
        gsap.fromTo(
            ".animate-me-right",
            { opacity: 0, x: -200 },
            { opacity: 1, x: 0, duration: 4.5, ease: "power3.out" }
        );

        gsap.fromTo(
            ".animate-me-left",
            { opacity: 0, x: 200 },
            { opacity: 1, x: 0, duration: 4.5, ease: "power3.out" }
        );
        gsap.fromTo(
            ".animate-me-top",
            { opacity: 0, y: 200 }, 
            { opacity: 1, y: 0, duration: 4.5, ease: "power3.out" } 
        );





    }, []);
    return (
        <section id="about" className="bg-gray-800 text-white py-16 flex items-center justify-center">
            <div className="max-w-4xl text-center px-6">
                <h2 className="text-3xl font-bold mb-6 animate-me-top">About Me</h2>

                <p className="text-lg text-gray-400 mb-4 animate-me-right">
                    I'm <span className="text-blue-400 font-semibold">El jamiy Abdelkrim</span>, a passionate web developer dedicated to building
                    modern, responsive, and interactive web applications. I enjoy solving
                    complex problems and bringing creative ideas to life through clean and
                    efficient code.
                </p>

                <p className="text-lg text-gray-400 mb-4 animate-me-left">
                    I specialize in <span className="text-blue-400 font-semibold ">React.js, JavaScript, Node.js, and Tailwind CSS</span>. My goal is to create
                    seamless user experiences while ensuring performance and accessibility.
                </p>

                <p className="text-lg text-gray-400 animate-me-right">
                    When I'm not coding, you can find me exploring photography, traveling, or
                    writing about tech on my blog, <span className="text-blue-400 font-semibold">"The Journey of a Pen"</span>.
                </p>

               
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

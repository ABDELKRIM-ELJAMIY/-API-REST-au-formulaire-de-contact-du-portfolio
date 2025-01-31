import gsap from "gsap";
import React, { useEffect } from "react";

function Home() {
    useEffect(() => {
        gsap.from("#home-title", { opacity: 4, y: -50, duration: 1.5, ease: "power3.out" });
    }, []);
    return (
        <section id="home" className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <div className="max-w-4xl text-center px-6">
                {/* Profile Image */}
                <div className="flex justify-center">
                    <img
                        src="/ME.jpg"  // ✅ Correct path (Assuming ME.jpg is inside 'public/')
                        alt="Your Name"
                        className="w-40 h-40 rounded-full border-4 border-gray-500 shadow-lg"
                    />
                </div>

                {/* Introduction */}
                <h1 className="text-4xl font-bold mt-6 " id="home-title">Hello, I'm El jamiy Abdelkrim 👋</h1>
                <p className="text-lg text-gray-400 mt-4">
                    I am a passionate web developer, building interactive and responsive applications using modern technologies.
                </p>

                {/* Call to Action */}
                <div className="mt-6">
                    <a
                        href="#projects"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
                    >
                        View My Work
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;

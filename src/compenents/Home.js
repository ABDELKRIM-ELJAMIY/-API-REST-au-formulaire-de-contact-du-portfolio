import gsap from "gsap";
import { useEffect } from "react";
import '../index.css';
function Home() {
    // useEffect(() => {
    //     gsap.from("#home-title", { opacity: 20, y: -50, duration: 1.5, ease: "power3.out" });
    // }, []);
    // const imageRef = useRef(null);

    // useEffect(() => {
    //     gsap.from(imageRef.current, { opacity: 0, scale: 0.8, duration: 1, ease: "power2.out" });
    // }, []);
    useEffect(() => {
        // Animation example when the component mounts
        gsap.fromTo(
            ".animate-me-right",  
            { opacity: 0, x: -200 }, 
            { opacity: 1, x: 0, duration: 3.5, ease: "power3.out" } 
        );

        gsap.fromTo(
            ".animate-me-left",  
            { opacity: 0, x: 200 }, 
            { opacity: 1, x: 0, duration: 3.5, ease: "power3.out" } 
        );
       
    }, []);
  
    return (
        <section id="home" className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <div className="max-w-4xl text-center px-6">
                
                <div className="flex justify-center  animate-me-right ">
                    <img
                        // ref={imageRef}
                        src="/ME.jpg"
                        alt="Your Name"
                        className="w-40 h-40 rounded-full border-4 shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-blue-400"
                    />
                </div>

                <h1 className="text-4xl font-bold mt-6 animate-me-left scroll-animate" id="home-title">Hello, I'm El jamiy Abdelkrim </h1>
                <p className="text-lg text-gray-400 mt-4 animate-me-right">
                    I am a passionate web developer, building interactive and responsive applications using modern technologies.
                </p>

                <div className="mt-6">
                    <a
                        href="#projects"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300 "  >
                        View My Work
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;

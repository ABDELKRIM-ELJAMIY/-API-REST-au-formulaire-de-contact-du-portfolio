// import React, { useState, useEffect } from "react";
// import { FaMoon, FaSun } from "react-icons/fa"; // Import icons from react-icons
// import gsap from "gsap";

// function DarkModeToggle() {
//     const [darkMode, setDarkMode] = useState(() => {
//         return localStorage.getItem("theme") === "dark";
//     });

//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("theme", "dark");
//         } else {
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme", "light");
//         }
//     }, [darkMode]);

//     const toggleDarkMode = () => {
//         setDarkMode(!darkMode);
//         gsap.to("body", { backgroundColor: darkMode ? "#f3f4f6" : "#111827", duration: 0.5 });
//     };

//     return (
//         <button
//             onClick={toggleDarkMode}
//             className="fixed top-4 right-4 p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 shadow-lg transition-all"
//         >
//             {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
//         </button>
//     );
// }

// export default DarkModeToggle;

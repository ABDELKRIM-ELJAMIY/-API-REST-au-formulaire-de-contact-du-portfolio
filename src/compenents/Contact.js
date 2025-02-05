import React, { useState, useEffect } from "react";
import gsap from "gsap";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        // gsap.from("#contact-form", { opacity: 0, y: 50, duration: 1.5, ease: "power3.out" });
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Le nom est obligatoire";
        if (!formData.email) newErrors.email = "L'email est obligatoire";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email invalide";
        if (!formData.message) newErrors.message = "Le message est obligatoire";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Message envoyé avec succès !");
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        }
    };

    return (
        <section id="contact" className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl w-full text-center">
                <h2 className="text-3xl font-bold mb-6">Contact Me </h2>

                <form id="contact-form" className="bg-gray-800 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-left text-gray-300">Nom</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                        {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-left text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                        {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-left text-gray-300">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                            rows="4"
                        ></textarea>
                        {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300">
                        Envoyer
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;

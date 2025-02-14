import React, { useState, useEffect } from "react";
import { sendContactForm } from "../utils/api"; 
function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(""); 

    useEffect(() => {
        
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Le nom est requis";
        if (!formData.email) newErrors.email = "L'email est requis";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "L'email n'est pas valide";
        if (!formData.message) newErrors.message = "Le message est requis";
        if (!formData.phone) newErrors.phone = "Le numéro de téléphone est requis";
        else if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) newErrors.phone = "Le numéro de téléphone n'est pas valide";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await sendContactForm("/contacts", formData);
                setStatus("Message envoyé avec succès !");
                setFormData({ name: "", email: "", message: "", phone: "" });
                setErrors({});
            } catch (error) {
                setStatus("Une erreur s'est produite lors de l'envoi du message. Essayez à nouveau.");
                console.error(error);
            }
        }
    };

    return (
        <section id="contact" className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl w-full text-center">
                <h2 className="text-3xl font-bold mb-6">Contactez-moi</h2>

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
                        <label className="block text-left text-gray-300">Numéro de téléphone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-700 text-white"
                        />
                        {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}
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

                    {status && <p className="mt-4">{status}</p>} {/* Display the status message */}
                </form>
            </div>
        </section>
    );
}

export default Contact;

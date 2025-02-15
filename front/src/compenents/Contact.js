import React, { useState } from "react";
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
    const [loading, setLoading] = useState(false); // حالة التحميل

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
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await sendContactForm('http://localhost:5000/api/contact', formData);
            if (!response.ok) {
                // في حالة عدم نجاح الاستجابة، اطبع تفاصيل الخطأ
                const errorData = await response.text();  // أو response.json() إذا كان التنسيق JSON
                console.error('Erreur dans la réponse du serveur:', errorData);
                throw new Error(`Erreur: ${errorData}`);
            }
            alert('Message envoyé avec succès');
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);  // طباعة تفاصيل الخطأ في وحدة التحكم
            alert('Une erreur s\'est produite lors de l\'envoi du message. Essayez à nouveau.');
        }
    };




    return (
        <section id="contact" className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl w-full text-center">
                <h2 className="text-3xl font-bold mb-6">Contactez-moi</h2>
                <form id="contact-form" className="bg-gray-800 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
                    {["name", "email", "phone", "message"].map((field) => (
                        <div className="mb-4" key={field}>
                            <label className="block text-left text-gray-300">
                                {field === "name" ? "Nom" : field === "email" ? "Email" : field === "phone" ? "Numéro de téléphone" : "Message"}
                            </label>
                            {field === "message" ? (
                                <textarea
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-700 text-white"
                                    rows="4"
                                ></textarea>
                            ) : (
                                <input
                                    type={field === "email" ? "email" : "text"}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-700 text-white"
                                />
                            )}
                            {errors[field] && <p className="text-red-400 text-sm">{errors[field]}</p>}
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
                        disabled={loading}
                    >
                        {loading ? "Envoi en cours..." : "Envoyer"}
                    </button>
                    {status && <p className="mt-4">{status}</p>}
                </form>
            </div>
        </section>
    );
}

export default Contact;

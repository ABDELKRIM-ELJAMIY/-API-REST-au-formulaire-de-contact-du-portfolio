
export const sendContactForm = async (formData) => {
    try {
        const response = await fetch("/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error("Failed to send message");
        }

        return await response.json();
    } catch (error) {
        console.error("Error sending contact form:", error);
        throw error;  
    }
};

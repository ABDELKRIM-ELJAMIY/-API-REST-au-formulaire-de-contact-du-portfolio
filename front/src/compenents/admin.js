import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminPage() {
    const [messages, setMessages] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchMessages();
    }, []);

    // Fetch the data from the backend
    const fetchMessages = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/contacts"); // Correct URL for fetching contacts
            console.log(response.data); // Check the response in the console
            setMessages(response.data);
        } catch (error) {
            console.error("Error fetching messages", error);
        }
    };

    // Delete a contact by ID
    const deleteMessage = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/contact/${id}`);
            setMessages(messages.filter(message => message._id !== id));
        } catch (error) {
            console.error("Error deleting message", error);
        }
    };

    // Filter messages based on search input
    const filteredMessages = messages.filter(message =>
        message.name.toLowerCase().includes(search.toLowerCase()) ||
        message.email.toLowerCase().includes(search.toLowerCase()) ||
        message.phone.includes(search)
    );

    return (
        <div className="p-6 bg-gray-900 min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-300">Admin - Messages Reçus</h1>
            <input
                type="text"
                placeholder="Rechercher par nom, email ou téléphone"
                className="p-2 border rounded w-full mb-4"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="bg-white shadow-md rounded-lg p-4">
                {filteredMessages.length > 0 ? (
                    filteredMessages.map((message) => (
                        <div key={message._id} className="p-3 border-b flex justify-between items-center">
                            <div>
                                <p><strong>Nom:</strong> {message.name}</p>
                                <p><strong>Email:</strong> {message.email}</p>
                                <p><strong>Téléphone:</strong> {message.phone}</p>
                                <p><strong>Message:</strong> {message.message}</p>
                            </div>
                            <button
                                className="bg-red-500 text-white px-3 py-1 rounded"
                                onClick={() => deleteMessage(message._id)}
                            >
                                <i class='bx bx-trash'></i>
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Aucun message trouvé.</p>
                )}
            </div>
        </div>
    );
}

export default AdminPage;

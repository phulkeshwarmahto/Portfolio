import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const { name, email, message } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/contact', formData);
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center border-b-2 border-indigo-500 inline-block pb-2">Get In Touch</h2>

            <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
                {status && (
                    <div className={`mb-6 text-center py-2 px-4 rounded ${status.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {status}
                    </div>
                )}
                <form onSubmit={onSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={onChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Your Email"
                            />
                        </div>
                    </div>
                    <div className="mb-8 relative">
                        <div className="flex justify-between items-center mb-2">
                            <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                            <button
                                type="button"
                                onClick={async () => {
                                    if (!message || message.trim().length < 5) {
                                        setStatus('Message must be at least 5 characters long to improve.');
                                        return;
                                    }
                                    try {
                                        setStatus('Improving with AI...');
                                        const { data } = await axios.post('/api/ai/improve-message', { message });
                                        if (data.success) {
                                            setFormData({ ...formData, message: data.improvedMessage });
                                            setStatus('Message improved! ✨');
                                        }
                                    } catch (error) {
                                        setStatus(`AI Error: ${error.response?.data?.message || error.message}`);
                                    }
                                }}
                                className="text-sm bg-indigo-50 text-indigo-600 px-3 py-1 rounded-md hover:bg-indigo-100 transition duration-200 flex items-center gap-1 border border-indigo-200"
                            >
                                <span role="img" aria-label="sparkles">✨</span> Improve with AI
                            </button>
                        </div>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={onChange}
                            required
                            rows="5"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your Message..."
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 shadow-md">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;

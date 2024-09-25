import { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si'; 
import { Link } from 'react-router-dom';
import './ContactUs.css'; 

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form data:', formData);
            sendEmail(formData)
                .then(() => {
                    setShowPopup(true);
                    setFormData({ name: '', email: '', message: '' });
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                });
        }
    };

    const sendEmail = async (data) => {
        const response = await fetch('YOUR_EMAIL_SENDING_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: 'info.demamproducts@gmail.com',
                subject: `New message from ${data.name}`,
                message: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to send email');
        }
    };

    return (
        <div className="bg-[#faedcd] p-6 animated-bg">
            <div className="bg-transparent p-6 ml-8 mr-8 text-center">
                <h1 className="text-4xl font-bold text-[#dda15e]">Demam Products</h1>
            </div>

            <div className="max-w-6xl mx-auto p-6 flex flex-col lg:flex-row">
                <div className="lg:w-2/3 p-6 bg-[#faedcd] rounded-lg shadow-md animated-bg">
                    <h2 className="text-xl font-bold mb-4 text-center text-[#dda15e]">Demam Information</h2>
                    <ul className="space-y-2 mb-6 text-center text-[#dda15e]">
                        <li className="flex items-center justify-center space-x-2">
                            <FaPhone size={20} />
                            <a href="tel:0989989996" className="hover:underline text-[#dda15e]">Phone Number: 0989989996</a>
                        </li>
                        <li className="flex items-center justify-center space-x-2">
                            <FaEnvelope size={20} />
                            <a href="mailto:info.demamproducts@gmail.com" className="hover:underline text-[#dda15e]">Email: info.demamproducts@gmail.com</a>
                        </li>
                        <li className="text-[#dda15e]">
                            <span>Company Name: Demam Products</span>
                        </li>
                        <li className="text-[#dda15e]">
                            <span>Contact Person: Megdelawit Mazengia</span>
                        </li>
                    </ul>
                    <div className="flex justify-center space-x-4">
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon-container text-blue-700">
                            <FaFacebook size={24} />
                        </Link>
                        <Link to="https://instagram.com/_demam_" target="_blank" rel="noopener noreferrer" className="icon-container text-red-500">
                            <FaInstagram size={24} />
                        </Link>
                        <Link to="https://tiktok.com/@_demam-" target="_blank" rel="noopener noreferrer" className="icon-container text-black">
                            <FaTiktok size={24} />
                        </Link>
                        <Link to="https://telegram.org/@demam_products" target="_blank" rel="noopener noreferrer" className="icon-container text-blue-600">
                            <SiTelegram size={24} />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center lg:w-2/5 p-6 bg-white rounded-lg shadow-md animated-bg">
                    <h2 className="text-3xl font-bold mb-4 text-[#dda15e]">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-[#dda15e] text-sm font-bold mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="border border-[#dda15e] rounded-lg w-full p-2"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-[#dda15e] text-sm font-bold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-[#dda15e] rounded-lg w-full p-2"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-[#dda15e] text-sm font-bold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="border border-[#dda15e] rounded-lg w-full p-2"
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            className="bg-[#dda15e] text-white px-4 py-2 rounded-lg hover:bg-[#c79a50] transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-2xl font-bold mb-4 text-[#dda15e]">Message Sent</h3>
                        <p>Thank you for contacting us. We will get back to you soon.</p>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-4 bg-[#dda15e] text-white px-4 py-2 rounded-lg hover:bg-[#c79a50]"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUs;

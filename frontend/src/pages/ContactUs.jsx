import React, { useState } from 'react';

// Icons
const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.161V6a2 2 0 00-2-2H3z" />
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-2.332.805c.26.92.73 1.81 1.37 2.45s1.53.97 2.45 1.37l.805-2.332a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5h-1.148a1.5 1.5 0 01-1.465-1.175l-.716-3.223a1.5 1.5 0 011.052-1.767l2.332-.805C16.27 8.71 15.8 7.81 15.16 7.17s-1.54-.97-2.45-1.37l-.805 2.332A1.5 1.5 0 0110.15 9.19l-3.223-.716A1.5 1.5 0 015.75 7.009V5.852A1.5 1.5 0 017.009 4.7l2.332.805c.92-.26 1.81-.73 2.45-1.37S13.29 2.73 13.7 1.81l-.805 2.332A1.5 1.5 0 0111.81 5.23l-3.223-.716A1.5 1.5 0 017.41 3.339H6.261a1.5 1.5 0 01-1.175-1.465L1.863 11.16a1.5 1.5 0 01-1.052 1.767l-.805 2.332A1.5 1.5 0 011.175 16.73l3.223.716A1.5 1.5 0 015.852 18H7.009a1.5 1.5 0 011.465-1.175l.716-3.223a1.5 1.5 0 01-1.052-1.767l-2.332-.805c.26-.92.73-1.81 1.37-2.45s1.53-.97 2.45-1.37l.805 2.332A1.5 1.5 0 0110.15 9.19l-3.223-.716A1.5 1.5 0 015.75 7.009V5.852a1.5 1.5 0 011.259-1.465L9.34 3.673a1.5 1.5 0 011.767 1.052l.805 2.332c.92.26 1.81.73 2.45 1.37s.97 1.53 1.37 2.45l2.332-.805a1.5 1.5 0 011.052 1.767l-.716 3.223A1.5 1.5 0 0116.661 17H15.5a1.5 1.5 0 01-1.465 1.175l-3.223-.716a1.5 1.5 0 01-1.052-1.767l.805-2.332c-.92-.26-1.81-.73-2.45-1.37s-.97-1.53-1.37-2.45l-2.332.805A1.5 1.5 0 014.85 10.81l.716-3.223A1.5 1.5 0 016.74 6.41L8.852 5.688a1.5 1.5 0 011.052-1.767l3.223-.716A1.5 1.5 0 0114.648 4.5H15.5A1.5 1.5 0 0117 3.009V1.852A1.5 1.5 0 0115.741.7l-3.223.716a1.5 1.5 0 01-1.767-1.052L9.947.033A1.5 1.5 0 018.482.009L7.339 1.184a1.5 1.5 0 01-1.175 1.465L2.94 3.366a1.5 1.5 0 01-1.767 1.052l-2.332-.805A1.5 1.5 0 01.009 5.077v1.148A1.5 1.5 0 011.184 7.69l3.223.716a1.5 1.5 0 011.052 1.767L4.655 12.5a1.5 1.5 0 01-1.175 1.465L.257 14.682a1.5 1.5 0 01-1.052-1.767L.01 10.583A1.5 1.5 0 011.184 9.118l3.223-.716a1.5 1.5 0 011.767 1.052l.805 2.332c.92.26 1.81.73 2.45 1.37s.97 1.53 1.37 2.45l.805-2.332a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 12.991v1.148a1.5 1.5 0 01-1.175 1.465l-3.223.716a1.5 1.5 0 01-1.767-1.052l-.805-2.332c-.92-.26-1.81-.73-2.45-1.37s-.97-1.53-1.37-2.45l-2.332.805A1.5 1.5 0 014.85 10.81l.716-3.223A1.5 1.5 0 016.74 6.41l2.112-.722a1.5 1.5 0 011.052 1.767l-.716 3.223a1.5 1.5 0 01-1.465 1.175H7.57a1.5 1.5 0 01-1.465-1.175L5.39 8.441a1.5 1.5 0 011.052-1.767l2.332-.805C9.69 6.13 10.58 6.6 11.22 7.23s1.11 1.54 1.37 2.45l.805 2.332A1.5 1.5 0 0111.81 13.09l-3.223.716a1.5 1.5 0 01-1.465-1.175V11.5a1.5 1.5 0 011.5-1.5h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-2.332.805c.26.92.73 1.81 1.37 2.45s1.53.97 2.45 1.37l.805-2.332A1.5 1.5 0 0110.15 15.19l-3.223-.716A1.5 1.5 0 015.75 13.009V11.852A1.5 1.5 0 017.009 10.7l2.332.805c.92-.26 1.81-.73 2.45-1.37s.97-1.53 1.37-2.45l2.332.805a1.5 1.5 0 011.052 1.767l-.716 3.223A1.5 1.5 0 0114.661 15H13.5a1.5 1.5 0 01-1.465 1.175l-3.223-.716a1.5 1.5 0 01-1.052-1.767l.805-2.332c-.92-.26-1.81-.73-2.45-1.37s-.97-1.53-1.37-2.45L2.94 8.366a1.5 1.5 0 01-1.767 1.052l-2.332-.805A1.5 1.5 0 01.009 7.148V6a1.5 1.5 0 011.5-1.5H2z" clipRule="evenodd" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.1.4-.22.655-.36a6.56 6.56 0 0 0 1.37-1.111 16.822 16.822 0 0 0 2.22-3.11c.475-1.03.771-2.11.771-3.191C15.63 4.54 13.17 1 10 1S4.37 4.54 4.37 8.132c0 1.08.296 2.161.77 3.191.68 1.48 1.444 2.453 2.22 3.11a6.56 6.56 0 0 0 1.37 1.112c.255.14.47.26.656.36a5.741 5.741 0 0 0 .28.14l.018.008.006.003ZM10 11.25a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z" clipRule="evenodd" />
    </svg>
);


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSent, setIsSent] = useState(false);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend endpoint
        console.log('Form data submitted:', formData);
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        We’d love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                </div>

                {/* Main Content: Form + Info */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        
                        {/* Column 1: Contact Information */}
                        <div className="bg-blue-600 p-8 md:p-12 text-white">
                            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                            <p className="text-blue-100 mb-8">
                                Fill up the form and our team will get back to you within 24 hours.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3">
                                    <PhoneIcon />
                                    <span className="text-lg">+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <MailIcon />
                                    <span className="text-lg">stayoutbooking@gmail.com</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <LocationIcon />
                                    <span className="text-lg">
                                        123 Stay Out Ave,<br />
                                        CBE, India
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Contact Form */}
                        <div className="p-8 md:p-12">
                            {isSent ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                                    <p className="text-gray-600">Your message has been sent successfully. We'll be in touch soon.</p>
                                </div>
                            ) : (
                                <form onSubmit={onSubmit} className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            onChange={onChange}
                                            required
                                            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={onChange}
                                            required
                                            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            value={formData.subject}
                                            onChange={onChange}
                                            required
                                            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Question about a booking"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={onChange}
                                            required
                                            className="w-full px-4 py-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Your message..."
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition-all"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

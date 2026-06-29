import React from 'react';
import { Link } from 'react-router-dom';

// SVG Icons for Social Media (self-contained components)
const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
);

const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);

const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12.315 2.105a.75.75 0 01.37.03c.52.121 1.038.308 1.52.53 1.042.47 1.97.99 2.812 1.832.84.84 1.362 1.77 1.832 2.812.222.482.409 1 .53 1.52a.75.75 0 01.03.37l.004 2.85a.75.75 0 01-.03.37c-.121.52-.308 1.038-.53 1.52-.47 1.042-.99 1.97-1.832 2.812a6.924 6.924 0 01-2.812 1.832c-.482.222-1 .409-1.52.53a.75.75 0 01-.37.03l-2.85.004a.75.75 0 01-.37-.03c-.52-.121-1.038-.308-1.52-.53-1.042-.47-1.97-.99-2.812-1.832a6.924 6.924 0 01-1.832-2.812c-.222-.482-.409-1-.53-1.52a.75.75 0 01-.03-.37l-.004-2.85a.75.75 0 01.03-.37c.121-.52.308-1.038.53-1.52.47-1.042.99-1.97 1.832-2.812.84-.84 1.77-1.362 2.812-1.832.482-.222 1-.409 1.52-.53a.75.75 0 01.37-.03l2.85-.004zm-2.02 1.88a5.244 5.244 0 00-1.113.183 5.176 5.176 0 00-2.03 1.28A5.176 5.176 0 005.87 7.5c-.71 1.01-.93 2.14-.81 3.29a5.244 5.244 0 00.183 1.113 5.176 5.176 0 001.28 2.03 5.176 5.176 0 002.03 1.28c1.15.52 2.39.4 3.5-.32a5.176 5.176 0 002.03-1.28 5.176 5.176 0 001.28-2.03c.52-1.15.4-2.39-.32-3.5a5.176 5.176 0 00-1.28-2.03 5.176 5.176 0 00-2.03-1.28 5.244 5.244 0 00-1.113-.183l-2.85-.004zm-1.17 1.933a3.17 3.17 0 110 6.34 3.17 3.17 0 010-6.34zm5.077-1.01a.97.97 0 100-1.94.97.97 0 000 1.94z" clipRule="evenodd" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Column 1: Brand */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Stay Out</h3>
                        <p className="text-sm text-gray-400">Your perfect stay, just a click away.</p>
                        <div className="flex space-x-4 mt-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
                            <li><a href="./BookingPage" className="text-gray-400 hover:text-white transition-colors text-sm">My Bookings</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Sign Up</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Log In</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a></li>
                            <Link className="text-gray-400 hover:text-white transition-colors text-sm" to="/contactus">Contact Us</Link>
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-10 pt-6">
                    <p className="text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Stay Out. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

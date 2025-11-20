import React from "react";
import Logo from "../../public/Saysri_Logo.png"

export default function Footer() {
    return (
        <footer className="bg-black text-white ">
            <div className="container mx-auto !pb-0">
                {/* Top Section: Tagline and Subscription */}
                <div className="flex flex-col md:flex-row justify-center items-start mb-12 gap-6">
                    <div className="mb-6 md:mb-0">
                        <h2 className="max-w-lg font-bold mb-4 bg-gradient-to-r from-[#CBF0D1] to-[#FFE1C6] text-transparent bg-clip-text text-4xl md:text-5xl">
                            Saysri.ai — Humanizing AI for the world of work.
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-col items-start space-y-4 sm:space-y-0 md:space-y-2 sm:space-x-4">
                        <p className="">Stay ahead of the hiring revolution.</p>
                        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 w-full max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="px-4 py-2 rounded-md border border-white text-white bg-transparent focus:outline-none flex-1"
                            />
                            <button className="px-6 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition-colors hover:cursor-pointer w-full sm:w-auto">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Links and Logo */}
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#8D8D8D66]">
                    <div className=" w-full md:w-[45%] grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 md:mb-0">
                        <div className="space-y-3">
                            <a href="#" className="block text-white hover:text-white transition-colors">About</a>
                            <a href="#" className="block text-white hover:text-white transition-colors mt-2">VibraHire</a>
                            <a href="#" className="block text-white hover:text-white transition-colors mt-2">Blog</a>
                            <a href="#" className="block text-white hover:text-white transition-colors mt-2">Contact</a>
                        </div>
                        <div className="space-y-3">
                            <a href="#" className="block text-white hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="block text-white hover:text-white transition-colors mt-2">Website Accessibility</a>
                            <a href="#" className="block text-white hover:text-white transition-colors mt-2">Manage Cookies</a>
                            <a href="#" className="block text-white hover:text-white transition-colors mt-2">Terms of Service</a>
                        </div>
                    </div>
                    <div className="w-full md:w-[55%] border-t border-[#8D8D8D66] md:border-s border-[#8D8D8D66] md:px-10 py-10">
                        <div className="flex justify-between items-center ">
                            <div className="">
                                <img
                                    src={Logo.src}
                                    alt="Saysri.ai Logo"
                                    className="w-30 object-contain "
                                />
                            </div>
                            <div className="flex space-x-4">
                                <a href="#" className="text-white hover:text-white transition-colors">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="#" className="text-white hover:text-white transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </a>
                                <a href="#" className="text-white hover:text-white transition-colors">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.146.06 1.448.06 4.023v.001c0 2.643 0 2.926-.06 4.043-.047 1.056-.218 1.772-.465 2.438a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.66 0-1.37-.067-2.418-.168-.976-.095-1.704-.26-2.438-.465-.977-.253-1.772-.655-2.438-1.153a4.902 4.902 0 01-1.772-1.772 4.902 4.902 0 01-1.153-2.438c-.094-.976-.168-1.704-.168-2.418V8.001c0-1.08.06-1.38.168-2.438a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.66 0 1.37.067 2.418.168.976.095 1.704.26 2.438.465.977.253 1.772.655 2.438 1.153.78.445 1.464.749 2.02.912.556.163 1.21.246 2.02.246v.001c0 1.109 0 1.368-.067 2.648a4.902 4.902 0 01-.465 2.427 4.902 4.902 0 01-1.772 1.772 4.902 4.902 0 01-1.772-1.772 4.902 4.902 0 01-1.153-1.772.06-.06 0 01-.067-.168 11.616 11.616 0 006.29-1.84" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="text-center text-[#979797] mt-8 pt-8 ">
                            <p>© 2025 Saysri.ai — Empowering smarter hiring with AI. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

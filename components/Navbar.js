'use client'

import { useState } from 'react';

import { Code, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <>
            <div className="fixed z-40 top-0 left-0 w-full p-4 pt-6">
                <nav className="container flex items-center justify-between mx-auto p-2 bg-black/60 text-foreground backdrop-blur-xl rounded-2xl shadow-2xl">
                    <Link href="/" className="flex items-center gap-2 p-1 bg-white/20 rounded-2xl">
                        <Code className="w-12 h-12 p-3 bg-gradient-primary rounded-xl" />
                        <span className="mr-2 font-bold text-2xl">Cybit</span>
                    </Link>

                    <button onClick={_ => setIsMenuVisible(true)} className="lg:hidden p-4 hover:bg-white/10 active:bg-white/20 rounded-xl">
                        <Menu className="w-6 h-6" />
                    </button>

                    <div className="hidden lg:flex items-center gap-2">
                        <a href="#services" className="hover:text-primary p-4 hover:bg-white/10 active:bg-white/20 rounded-xl">Solutions</a>
                        <a href="#about" className="hover:text-primary p-4 hover:bg-white/10 active:bg-white/20 rounded-xl">About Us</a>
                        <a href="#faq" className="hover:text-primary p-4 hover:bg-white/10 active:bg-white/20 rounded-xl">FAQ</a>
                    </div>

                    <div className="hidden lg:flex items-center gap-2">
                        <a href="#contact" className="p-4 px-8 bg-secondary rounded-xl">Contact</a>
                    </div>
                </nav>
            </div>
            <div onClick={_ => setIsMenuVisible(false)} className={!isMenuVisible && "hidden" || "fixed z-50 top-0 left-0 w-screen h-screen text-foreground bg-black/20 backdrop-blur shadow-xl lg:hidden"}>
                <div className="max-w-80 w-full h-full flex flex-col items-end ml-auto m-2 p-2 bg-background rounded-xl">
                    <button onClick={_ => setIsMenuVisible(false)} className="w-max p-4 hover:bg-white/10 active:bg-white/20 rounded-xl">
                        <X className="w-6 h-6" />
                    </button>
                    <a href="#services" className="w-full text-right p-4 hover:text-primary hover:bg-white/10 active:bg-white/20 rounded-xl">Services</a>
                    <a href="#about" className="w-full text-right p-4 hover:text-primary hover:bg-white/10 active:bg-white/20 rounded-xl">About Us</a>
                    <a href="#faq" className="w-full text-right p-4 hover:text-primary hover:bg-white/10 active:bg-white/20 rounded-xl">FAQ</a>
                    <a href="#contact" className="w-full text-right p-4 hover:text-primary hover:bg-white/10 active:bg-white/20 rounded-xl">Contact</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;

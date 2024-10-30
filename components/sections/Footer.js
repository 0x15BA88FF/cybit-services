'use client'

import { Code } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black px-4 py-8">
            <div className="container mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Link href="/" className="w-max flex items-center gap-2 p-1 bg-white/20 rounded-2xl">
                    <Code className="w-12 h-12 p-3 bg-gradient-primary rounded-xl" />
                    <span className="mr-2 font-bold text-2xl">Cybit</span>
                </Link>
                <nav className="flex flex-wrap gap-4">
                    <Link href="#services">Services</Link>
                    <Link href="#about">About Us</Link>
                    <Link href="#faq">FAQ</Link>
                    <Link href="#contact">Contact</Link>
                </nav>
            </div>
            <hr className="container mx-auto my-4 border-[2px] border-white/10" />
            <p className="container mx-auto text-right">All rights reserved. &copy; 2024</p>
        </footer>
    );
};

export default Footer;

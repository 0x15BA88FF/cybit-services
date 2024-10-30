'use client'

import Link from 'next/link';

const CTASection = () => {
    return (
        <section id="contact" className="px-4 py-8">
            <div className="container mx-auto p-20 text-center bg-gradient-hero border-white/10 border-2 rounded-3xl">
                <h2 className="text-4xl font-bold mb-4">Ready to Elevate Your Business?</h2>
                <p className="text-lg mb-8">Contact us today to learn how Cybit can help you achieve your goals.</p>
                <Link href="" className="px-8 py-4 text-lg font-semibold bg-gradient-secondary rounded-2xl hover:bg-secondary">Get in Touch</Link>
            </div>
        </section>
    );
};

export default CTASection;

'use client'

import FAQCard from '@/components/FAQCard';

const faqs = [
    {
        question: 'What is your return policy?',
        answer: 'You can return any item within 30 days for a full refund.'
    },
    {
        question: 'How do I track my order?',
        answer: 'Once your order has shipped, you will receive an email with tracking information.'
    },
    {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to over 100 countries worldwide.'
    },
];

const FAQ = () => {
    return (
        <section id="faq">
            <div className="flex flex-col gap-8 container mx-auto px-4 py-8">
                <h2 className="text-4xl font-bold text-center">Frequently Asked Questions</h2>
                <div className="flex flex-col gap-8">
                    {faqs.map((faq, index) => (
                        <FAQCard key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

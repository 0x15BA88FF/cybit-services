import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQCard = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-3 border-white/10 border-2 rounded-2xl">
            <div className="flex justify-between items-center py-4 cursor-pointer" onClick={_ => setIsOpen(!isOpen)} >
                <h3 className="text-xl font-semibold">{question}</h3>
                <ChevronDown className={`w-12 h-12 p-2 bg-white/5 border-white/20 border-2 rounded-full ${isOpen ? "rotate-180" : ""}`} size={24} />
            </div>
            <div className={`overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
                <p className="text-lg text-foreground">{answer}</p>
            </div>
        </div>
    );
};

export default FAQCard;

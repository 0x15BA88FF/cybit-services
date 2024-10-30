'use client'

import { Globe, Cpu, BarChart } from 'lucide-react';

const services = [
    {
        title: 'Web Development',
        description: 'Expertly crafted websites and web applications to elevate your online presence.',
        Icon: Globe,
    },
    {
        title: 'AI & Automation',
        description: 'Harness the power of AI and automation to streamline your workflows and boost productivity.',
        Icon: Cpu,
    },
    {
        title: 'Data Collection & Analysis',
        description: 'Leverage data-driven insights to make informed decisions and drive business growth.',
        Icon: BarChart,
    },
];

const Services = () => {
    return (
        <section id="services">
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-4xl font-bold mb-8 text-center">Our Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.Icon;
                        return (
                            <div key={index} className="flex flex-col gap-4 p-8 border-white/10 border-2 rounded-2xl shadow-lg hover:shadow-2xl" >
                                <IconComponent className="w-14 h-14 p-4 bg-gradient-primary rounded-xl" />
                                <h3 className="text-2xl font-bold">{service.title}</h3>
                                <p className="text-text-muted">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;

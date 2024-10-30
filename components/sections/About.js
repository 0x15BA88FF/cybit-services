'use client'

import { Globe, Cpu, BarChart, UsersRound } from 'lucide-react';

const About = () => {
    return (
        <>
            <section id="about">
                <div className="flex flex-col gap-8 container mx-auto px-4 py-8">
                    <h2 className="text-4xl font-bold text-center">About Us</h2>
                    <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                        <div className="w-[120rem] flex items-center gap-2 text-secondary">
                            <UsersRound />
                            <p className="font-bold">Who We Are.</p>
                        </div>
                        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula felis nec lorem malesuada, sit amet tincidunt purus tristique. Integer convallis lacus in ante consequat, nec varius enim varius. Ut et semper purus. Cras suscipit urna sit amet justo ullamcorper, et sagittis purus suscipit. Integer mollis, erat eget dictum fermentum, elit leo tristique elit, ac facilisis nibh elit euismod nisi. Phasellus egestas vulputate eros ac aliquet. Nulla facilisi. Nullam auctor convallis sagittis.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
                        <div className="flex flex-col gap-4 p-8 border-white/10 border-2 rounded-2xl shadow-lg hover:shadow-2xl" >
                            <h3 className="text-4xl font-bold">Empowering</h3>
                            <p className="text-text-muted">To empower individuals and organizations with cutting-edge technology that simplifies tasks and enhances productivity.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-8 border-white/10 border-2 rounded-2xl shadow-lg hover:shadow-2xl" >
                            <h3 className="text-4xl font-bold">Solutions</h3>
                            <p className="text-text-muted">To create smart solutions that improve efficiency and effectiveness across various industries, enhancing performance and user satisfaction.</p>
                        </div>
                        <div className="flex flex-col gap-4 p-8 border-white/10 border-2 rounded-2xl shadow-lg hover:shadow-2xl" >
                            <h3 className="text-4xl font-bold">Connectivity</h3>
                            <p className="text-text-muted">To enhance connectivity across the globe, enabling people to communicate and collaborate effortlessly.</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                // <section>
                //     <div className="container mx-auto p-4">
                //         <h2 className="text-4xl font-bold mb-8 text-center">The Team</h2>
                //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8">
                //         </div>
                //     </div>
                // </section>
            }
        </>
    );
};

export default About;

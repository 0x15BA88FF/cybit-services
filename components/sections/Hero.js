'use client'

const Hero = () => {
    return (
        <section className="h-screen p-2">
            <div className="h-full p-4 bg-gradient-hero border-white/10 border-2 rounded-3xl">
                <div className="h-full max-w-[700px] w-full mx-auto pt-20 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-7xl text-center font-bold mb-4">Unlock Your Business Potential</h1>
                    <p className="text-lg text-center mb-8">Cybit provides cutting-edge software solutions and expert tech support to help businesses of all sizes thrive in the digital age.</p>
                    <div className="flex gap-4">
                        <button className="w-32 md:w-40 py-3 text-center bg-gradient-secondary hover:bg-primary rounded-xl">Explore</button>
                        <button className="w-32 md:w-40 py-3 text-center border-foreground border-2 hover:bg-secondary rounded-xl">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

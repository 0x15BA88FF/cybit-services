import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

const Home = () => {
    return (
        <div className="bg-background text-foreground">
            <Hero />
            <Services />
            <About />
            <FAQ />
            <CTASection />
            <Footer />
        </div>
    );
};

export default Home;

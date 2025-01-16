import {Navbar} from "../components/Navbar";
import {HeroSection} from "../components/HeroSection";
import {EventSection} from "../components/EventSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <EventSection />
            <Footer />
        </>
    );
}
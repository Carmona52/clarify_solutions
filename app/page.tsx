import HeroSection from "@/components/sections/hero-section";
import MarqueeLogos from "@/components/sections/logos-marquee";
import {Stack} from "@mui/joy";

export default function Home() {
    return (
        <>
            <Stack>
                <HeroSection/>
                <MarqueeLogos/>
            </Stack>
        </>
    );
}

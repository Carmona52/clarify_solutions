import HeroSection from "@/components/sections/hero-section";
import MarqueeLogos from "@/components/sections/logos-marquee";
import TeamSection from "@/components/sections/team-section";
import ProcessSection from "@/components/sections/proccess-section";
import {Stack} from "@mui/joy";

export default function Home() {
    return (
        <>
            <Stack>
                <HeroSection/>
                <MarqueeLogos/>
                <TeamSection/>
                <ProcessSection/>
            </Stack>
        </>
    );
}

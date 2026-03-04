import HeroSection from "@/components/sections/hero-section";
import MarqueeLogos from "@/components/sections/logos-marquee";
import TeamSection from "@/components/sections/team-section";
import ProcessSection from "@/components/sections/proccess-section";
import ReviewSection from "@/components/sections/review-section";
import {Stack, Box} from "@mui/joy";

export default function Home() {
    return (
        <Box component="main">
            <Stack spacing={{xs: 3, md: 4, lg: 5}}>

                <HeroSection/>
                <MarqueeLogos/>
                <TeamSection/>
                <ProcessSection/>
                <ReviewSection/>
            </Stack>
        </Box>
    );
}
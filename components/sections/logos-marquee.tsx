'use client'
import {Box, Typography} from "@mui/joy";
import Image from "next/image";
import {useState} from "react";

export default function MarqueeLogos() {
    const [isPaused, setIsPaused] = useState(false);

    const marketingCompanies = [
        {name: "Google Ads", logo: "/logos/google-ads.svg", color: "#4285F4"},
        {name: "Meta Bussiness", logo: "/logos/meta.svg", color: "#1877F2"},
        {name: "HubSpot", logo: "/logos/hubspot.svg", color: "#FF7A59"},
        {name: "Mailchimp", logo: "/logos/mailchimp.svg", color: "#FFE01B"},
        {name: "Canva", logo: "/logos/canva.svg", color: "#00C4CC"},
        {name: "Shopify", logo: "/logos/shopify.svg", color: "#7AB55C"},
        {name: "Capcut", logo: "/logos/capcut.svg", color: "#FF6424"},
        {name: "Envato", logo: "/logos/envato.svg", color: "#9C1C1F"},
        {name: "Notion", logo: "/logos/notion.svg", color: "#000000"},
        {name: "Tik Tok", logo: "/logos/tiktok.svg", color: "#4A154B"},
        {name: "Zoom", logo: "/logos/zoom.svg", color: "#2D8CFF"},
        {name: "Trello", logo: "/logos/trello.svg", color: "#0079BF"},
        {name: "Asana", logo: "/logos/asana.svg", color: "#273347"},
        {name: "Adobe", logo: "/logos/adobe.svg", color: "#FF0000"},
        {name: "Photoshop", logo: "/logos/photoshop.svg", color: "#FF7B31"},
        {name: "Illustrator", logo: "/logos/illustrator.svg", color: "#231F20"},
    ];

    const doubleCompanies = [...marketingCompanies, ...marketingCompanies];

    return (
        <Box sx={{p: 5, display: 'flex', flexDirection: 'column', justifyContent: "center", textAlign: 'center'}}>
            <Typography level="h2" sx={styles.title} className="timeline-view animate-zoom-in animate-range-[entry_0%_cover_30%]">
                Trabajamos con las mejores herramientas del mercado
            </Typography>
            <Typography level="body-lg" sx={styles.subtitle} className="timeline-view animate-zoom-in animate-range-[entry_0%_cover_30%]">
                Integramos las plataformas líderes en marketing digital para maximizar tus resultados
            </Typography>

            <Box sx={styles.marqueeContainer} className="timeline-view animate-zoom-in animate-range-[entry_0%_cover_30%]">
                <Box
                    sx={{
                        ...styles.marqueeTrack,
                        animation: 'marqueeRight 40s linear infinite',
                        animationPlayState: isPaused ? 'paused' : 'running',
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {doubleCompanies.map((company, index) => (
                        <Box key={`top-${index}`} sx={styles.logoItem} className="hover:animate-jelly hover:animate-infinite hover:animate-duration-700">
                            <Box sx={styles.logoWrapper}>
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={80}
                                    height={80}
                                />
                            </Box>
                            <Typography level="body-sm" sx={styles.logoName}>
                                {company.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box
                    sx={{
                        ...styles.marqueeTrack,
                        animation: 'marqueeLeft 35s linear infinite',
                        animationPlayState: isPaused ? 'paused' : 'running',

                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {[...doubleCompanies].reverse().map((company, index) => (
                        <Box key={`bottom-${index}`} sx={styles.logoItem} className="hover:animate-jelly hover:animate-infinite hover:animate-duration-700">
                            <Box sx={styles.logoWrapper}>
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={60}
                                    height={60}
                                />
                            </Box>
                            <Typography level="body-sm" sx={styles.logoName}>
                                {company.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

const styles = {
    title: {
        fontSize: {xs: '2rem', md: '2.5rem', lg: '3rem'},
        fontWeight: 'bold',
        mb: 2,
        color: 'white',
    },

    subtitle: {
        fontSize: {xs: '1rem', md: '1.2rem'},
        color: 'white',
        mb: 6,
        mx: 'auto',
    },

    marqueeContainer: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        py: 2,
        '&:hover': {
            '& .marquee-track': {
                animationPlayState: 'paused',
            },
        },
    },

    marqueeTrack: {
        display: 'flex',
        gap: 4,
        width: 'max-content',
        py: 1,

        '@keyframes marqueeRight': {
            '0%': {
                transform: 'translateX(0)',
            },
            '100%': {
                transform: 'translateX(-50%)',
            },
        },

        '@keyframes marqueeLeft': {
            '0%': {
                transform: 'translateX(-50%)',
            },
            '100%': {
                transform: 'translateX(0)',
            },
        },
    },

    logoItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 1   ,
        py: 1,
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        minWidth: '140px',
        cursor: 'pointer',

    },

    logoWrapper: {
        width: '110px',
        height: '110px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '16px',
        backgroundColor: 'white',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease',
        mb: 1,
        overflow: 'hidden',
        position: 'relative',
        className: 'logo-wrapper',
    },

    logoPlaceholder: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '16px',
    },

    logoText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        textAlign: 'center',
    },

    logoName: {
        color: 'white',
        fontSize: '0.875rem',
        transition: 'all 0.3s ease',
        className: 'logo-name',
    },

    logo: {
        objectFit: 'contain',
        padding: '12px',
    },
};
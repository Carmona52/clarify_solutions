'use client'
import {Box, Typography, Container} from "@mui/joy";
import Image from "next/image";
import {useState} from "react";

export default function MarqueeLogos() {
    const [isPaused, setIsPaused] = useState(false);

    const marketingCompanies = [
        {name: "Google Ads", logo: "/logos/google-ads.svg", color: "#4285F4"},
        {name: "Meta", logo: "/logos/meta.svg", color: "#1877F2"},
        {name: "HubSpot", logo: "/logos/hubspot.svg", color: "#FF7A59"},
        {name: "Mailchimp", logo: "/logos/mailchimp.svg", color: "#FFE01B"},
        {name: "Canva", logo: "/logos/canva.svg", color: "#00C4CC"},
        {name: "Shopify", logo: "/logos/shopify.svg", color: "#7AB55C"},
        {name: "Capcut", logo: "/logos/capcut.svg", color: "#FF6424"},
        {name: "Envato", logo: "/logos/envato.svg", color: "#9C1C1F"},
        {name: "Notion", logo: "/logos/notion.svg", color: "#000000"},
        {name: "Slack", logo: "/logos/slack.svg", color: "#4A154B"},
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
            <Typography level="h1" sx={styles.title}>
                Trabajamos con las mejores herramientas del mercado
            </Typography>
            <Typography level="body-lg" sx={styles.subtitle}>
                Integramos las plataformas líderes en marketing digital para maximizar tus resultados
            </Typography>

            <Box sx={styles.marqueeContainer}>

                <Box sx={{...styles.marqueeTrack, animation: isPaused ? 'none' : 'marqueeRight 40s linear infinite',}}
                     onMouseEnter={() => setIsPaused(true)}
                     onMouseLeave={() => setIsPaused(false)}>
                    {doubleCompanies.map((company, index) => (
                        <Box
                            key={`top-${index}`}
                            sx={styles.logoItem}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}>
                            <Box sx={styles.logoWrapper}>
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    width={60}
                                    height={60}/>


                            </Box>
                            <Typography level="body-sm" sx={styles.logoName}>
                                {company.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>


                <Box
                    sx={{...styles.marqueeTrack, animation: isPaused ? 'none' : 'marqueeLeft 35s linear infinite',}}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}>
                    {[...doubleCompanies].reverse().map((company, index) => (
                        <Box
                            key={`bottom-${index}`}
                            sx={styles.logoItem}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}>
                            <Box sx={styles.logoWrapper}>
                                <Image src={company.logo} alt={company.name} width={60} height={60}/>
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
        py: 2,
        '&:hover': {
            animationPlayState: 'paused',
        },

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
        px: 2,
        py: 1,
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        minWidth: '140px',
        cursor: 'pointer',

        '&:hover': {
            transform: 'translateY(-8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.02)',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',

            '& .logo-wrapper': {
                transform: 'scale(1.1)',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
            },

            '& .logo-name': {
                color: 'primary.600',
                fontWeight: 'bold',
            },
        },
    },

    logoWrapper: {
        width: '80px',
        height: '80px',
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
        fontWeight: 500,
        transition: 'all 0.3s ease',
        className: 'logo-name',
    },

    logo: {
        objectFit: 'contain',
        padding: '12px',
    },
};
import React from "react";
import {Box, Typography, Button, Grid} from "@mui/joy";
import Image from "next/image";

interface TeamMember {
    src: string;
    alt: string;
}

const teamMembers: TeamMember[] = [
    {src: "/team1.png", alt: "Profesional 1"},
    {src: "/team2.jpg", alt: "Profesional 2"},
    {src: "/team1.png", alt: "Profesional 3"},
    {src: "/team2.jpg", alt: "Profesional 4"},
    {src: "/team1.png", alt: "Profesional 5"},
    {src: "/team2.jpg", alt: "Profesional 6"},
];

export default function TeamSection() {
    return (
        <Box
            component="section"
            sx={{
                py: {xs: 6, md: 6},
                px: {xs: 3, md: 8, lg: 12},
                position: "relative",
            }}
        >
            <Grid container spacing={{xs:4, md:5}} alignItems="center">

                <Grid xs={12} md={6}>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: {xs: 2, md: 3},
                        }}
                    >
                        {teamMembers.map((member, index) => (
                            <Box key={index} sx={styles.imageWrapper}>
                                <Image
                                    src={member.src}
                                    alt={member.alt}
                                    fill
                                    sizes="(max-width: 768px) 100px, 200px"
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Grid>

                <Grid xs={12} md={6}>
                    <Box sx={{maxWidth: 560}}>

                        <Typography
                            level="body-sm"
                            sx={styles.eyebrow}
                        >
                            Nuestro Equipo
                        </Typography>

                        <Typography level="h2" sx={styles.title}>
                            Conoce al equipo que impulsa tu crecimiento
                        </Typography>

                        <Typography level="body-lg" sx={styles.description}>
                            En <b>Clarify Solutions</b> contamos con un equipo
                            multidisciplinario preparado para impulsar tu marca
                            con estrategia clara, procesos medibles y resultados reales.
                        </Typography>

                        <Button size="lg" sx={styles.ctaButton}>
                            Saber Más
                        </Button>


                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}

const styles = {
    imageWrapper: {
        position: "relative",
        width: "100%",
        aspectRatio: "1 / 1",
        borderRadius: "22px",
        overflow: "hidden",
        transition: "all 0.4s ease",
        cursor: "pointer",
        boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
        "&:hover": {
            transform: "translateY(-8px) scale(1.05)",
            boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
        },
    },

    eyebrow: {
        color: "white",
        fontWeight: 700,
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        mb: 2,
    },

    title: {
        color: "white",
        fontSize: {xs: "2.2rem", md: "3.2rem"},
        fontWeight: 800,
        lineHeight: 1.1,
        mb: 3,
    },

    description: {
        color: "rgba(255,255,255,0.85)",
        fontSize: {xs: "1rem", md: "1.15rem"},
        lineHeight: 1.8,
        mb: 4,
        maxWidth: "520px",
    },

    ctaButton: {
        backgroundColor: "white",
        color: "#6236FF",
        px: 6,
        py: 1.6,
        borderRadius: "16px",
        fontWeight: 700,
        fontSize: "1rem",
        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
        transition: "all 0.3s ease",
        "&:hover": {
            backgroundColor: "#f5f5f5",
            transform: "translateY(-3px)",
        },
    },

    statsContainer: {
        display: "flex",
        gap: 6,
        mt: 6,
        flexWrap: "wrap",
    },

    statValue: {
        color: "white",
        fontWeight: 800,
    },

    statLabel: {
        color: "rgba(255,255,255,0.7)",
    },
};

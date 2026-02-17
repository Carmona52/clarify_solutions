"use client";

import {
    Box,
    Typography,
    Grid,
    Card,
    Stack,
    Avatar,
    Divider,
    Button,
} from "@mui/joy";

import GlobalMapSection from "@/components/navigation/map";
export default function AboutPage() {
    const team = [
        {
            name: "Tania Mojica",
            role: "Founder & CEO",
            img: "/team/tania.jpg",
        },
        {
            name: "Nayeli",
            role: "Head of Growth",
            img: "/team/nayeli.jpg",
        },
        {
            name: "Paulina Hernandez",
            role: "Design Lead",
            img: "/team/paulina.jpg",
        },
        {
            name: "Carlos Ramos",
            role: "Performance Strategist",
            img: "/team/carlos.jpg",
        },
    ];

    return (
        <Box sx={{ px: { xs: 3, md: 8 }, py: { xs: 10, md: 16 } }}>

            {/* HERO SECTION */}
            <Box sx={{ textAlign: "center", mb: 14 }}>
                <Typography
                    level="h2"
                    sx={{
                        fontWeight: 700,
                        color: "common.white",
                        mb: 2,
                        fontSize: { xs: "2rem", md: "2.8rem" },
                    }}
                >
                    Estamos aquí para
                </Typography>

                <Typography
                    level="h1"
                    sx={{
                        fontWeight: 900,
                        fontSize: { xs: "2.5rem", md: "4rem" },
                        background: "linear-gradient(90deg,#ffffff,#cfcfff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 3,
                    }}
                >
                    impulsar tu crecimiento
                </Typography>

                <Box
                    sx={{
                        width: 160,
                        height: 4,
                        mx: "auto",
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.3)",
                    }}
                />
            </Box>

            {/* INTRO CARD */}
            <Box sx={{ maxWidth: 1100, mx: "auto", mb: 18 }}>
                <Card
                    variant="soft"
                    sx={{
                        p: { xs: 4, md: 8 },
                        borderRadius: "32px",
                        backdropFilter: "blur(12px)",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.15)",
                    }}
                >
                    <Typography
                        level="body-lg"
                        sx={{
                            color: "white",
                            fontSize: { xs: "1.1rem", md: "1.4rem" },
                            lineHeight: 1.7,
                        }}
                    >
                        En Clarify ayudamos a empresas a transformar incertidumbre en dirección estratégica.
                        Diseñamos sistemas de crecimiento donde cada decisión tiene propósito, cada inversión tiene
                        métrica y cada acción genera impacto real.
                        <br /><br />
                        No vendemos marketing. Construimos claridad.
                    </Typography>
                </Card>
            </Box>

            {/* GLOBAL PRESENCE SECTION */}
            <Box sx={{ textAlign: "center", mb: 18 }}>
                <Typography
                    level="h2"
                    sx={{ fontWeight: 800, color: "common.white", mb: 2 }}
                >
                    Estamos contigo
                </Typography>

                <Typography
                    level="h1"
                    sx={{
                        fontWeight: 900,
                        fontSize: { xs: "2rem", md: "3rem" },
                        mb: 4,
                        color: "primary.300",
                    }}
                >
                    sin importar dónde estés
                </Typography>

              <GlobalMapSection/>
            </Box>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", my: 14 }} />

            {/* MISSION SECTION */}
            <Box sx={{ mb: 18 }}>
                <Typography
                    level="h1"
                    sx={{
                        fontWeight: 900,
                        color: "common.white",
                        mb: 6,
                    }}
                >
                    Nuestra <span style={{ color: "#a78bfa" }}>Misión</span>
                </Typography>

                <Grid container spacing={6}>
                    {[
                        {
                            title: "Claridad Estratégica",
                            desc: "Convertimos datos en decisiones claras que impulsan crecimiento real.",
                        },
                        {
                            title: "Precisión",
                            desc: "Cada acción tiene una métrica, cada inversión un propósito.",
                        },
                        {
                            title: "Experiencia",
                            desc: "Combinamos estrategia, creatividad y performance.",
                        },
                        {
                            title: "Tecnología",
                            desc: "La mejor combinación entre sistemas inteligentes y talento humano.",
                        },
                    ].map((item, i) => (
                        <Grid xs={12} md={6} key={i}>
                            <Stack spacing={2}>
                                <Typography
                                    level="title-lg"
                                    sx={{ fontWeight: 700, color: "common.white" }}
                                >
                                    {item.title}
                                </Typography>

                                <Typography level="body-md" sx={{ color: "neutral.300" }}>
                                    {item.desc}
                                </Typography>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.15)", my: 14 }} />

            {/* TEAM SECTION */}
            <Box sx={{ textAlign: "center", mb: 18 }}>
                <Typography
                    level="h1"
                    sx={{ fontWeight: 900, color: "primary.300", mb: 8 }}
                >
                    Nuestro Success Team
                </Typography>

                <Grid container spacing={6} sx={{ maxWidth: 1200, mx: "auto" }}>
                    {team.map((member, i) => (
                        <Grid xs={12} sm={6} md={3} key={i}>
                            <Stack alignItems="center" spacing={3}>
                                <Avatar
                                    src={member.img}
                                    sx={{
                                        width: 160,
                                        height: 200,
                                        borderRadius: "20px",
                                        boxShadow: "lg",
                                    }}
                                />

                                <Typography
                                    level="title-md"
                                    sx={{ fontWeight: 700, color: "common.white" }}
                                >
                                    {member.name}
                                </Typography>

                                <Typography
                                    level="body-sm"
                                    sx={{ color: "primary.300", fontWeight: 600 }}
                                >
                                    {member.role}
                                </Typography>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* FINAL CTA */}
            <Box sx={{ textAlign: "center", mt: 10 }}>
                <Button size="lg" variant="solid" color="primary">
                    Trabajemos juntos
                </Button>
            </Box>
        </Box>
    );
}

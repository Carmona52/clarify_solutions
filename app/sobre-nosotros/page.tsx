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
    Container,
} from "@mui/joy";
import GlobalMapSection from "@/components/navigation/map";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import InsightsIcon from '@mui/icons-material/Insights';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

export default function AboutPage() {
    const team = [
        { name: "Tania Mojica", role: "Founder & CEO", img: "/team/tania.jpg" },
        { name: "Nayeli", role: "Head of Growth", img: "/team/nayeli.jpg" },
        { name: "Paulina Hernandez", role: "Design Lead", img: "/team/paulina.jpg" },
        { name: "Carlos Ramos", role: "Performance Strategist", img: "/team/carlos.jpg" },
    ];

    const missionItems = [
        { title: "Claridad Estratégica", desc: "Convertimos datos en decisiones claras que impulsan crecimiento real.", icon: <InsightsIcon sx={{ color: '#B19DFF' }} /> },
        { title: "Precisión", desc: "Cada acción tiene una métrica, cada inversión un propósito.", icon: <CenterFocusStrongIcon sx={{ color: '#B19DFF' }} /> },
        { title: "Experiencia", desc: "Combinamos estrategia, creatividad y performance.", icon: <RocketLaunchIcon sx={{ color: '#B19DFF' }} /> },
        { title: "Tecnología", desc: "La mejor combinación entre sistemas inteligentes y talento humano.", icon: <PrecisionManufacturingIcon sx={{ color: '#B19DFF' }} /> },
    ];

    return (
        <Box component="main" sx={{ pb: 16 }}>
            {/* --- HERO SECTION --- */}
            <Box sx={{
                pt: { xs: 15, md: 22 },
                pb: 12,
                textAlign: "center",
                background: 'radial-gradient(circle at 50% 0%, rgba(112,68,255,0.15) 0%, transparent 50%)'
            }}>
                <Container maxWidth="md">
                    <Typography level="body-sm" sx={{ color: '#B19DFF', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', mb: 2 }}>
                        Nuestra Esencia
                    </Typography>
                    <Typography level="h1" sx={{
                        fontWeight: 900,
                        fontSize: { xs: "3rem", md: "5rem" },
                        color: 'white',
                        lineHeight: 1,
                        mb: 2
                    }}>
                        Estamos aquí para <br />
                        <span style={{
                            background: "linear-gradient(90deg, #B19DFF, #F1F0FB)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>impulsar tu éxito</span>
                    </Typography>
                </Container>
            </Box>

            {/* --- INTRO CARD (Efecto Glass avanzado) --- */}
            <Container maxWidth="md" sx={{ mb: 20 }}>
                <Card variant="soft" sx={{
                    p: { xs: 4, md: 6 },
                    borderRadius: "40px",
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    textAlign: "center",
                    boxShadow: '0 40px 100px rgba(0,0,0,0.4)'
                }}>
                    <Typography level="body-lg" sx={{
                        color: "#D6CFF9",
                        fontSize: { xs: "1.2rem", md: "1.6rem" },
                        lineHeight: 1.6,
                        fontWeight: 500
                    }}>
                        "En <span style={{ color: 'white', fontWeight: 700 }}>Clarify</span> ayudamos a empresas a transformar incertidumbre en dirección estratégica. No vendemos marketing. <span style={{ color: '#B19DFF' }}>Construimos claridad.</span>"
                    </Typography>
                </Card>
            </Container>

            <Container maxWidth="lg" sx={{ mb: 20 }}>
                <Stack spacing={1} sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography level="h2" sx={{ fontWeight: 800, color: "white", fontSize: '2.5rem' }}>
                        Presencia Nacional
                    </Typography>
                    <Typography sx={{ color: '#D6CFF9', fontSize: '1.2rem' }}>
                        Sin fronteras, impulsando negocios desde cualquier lugar.
                    </Typography>
                </Stack>
                <Box sx={{
                    p: 4,
                    borderRadius: '40px',
                    background: 'rgba(0,0,0,0.2)',
                }}>
                    <GlobalMapSection />
                </Box>
            </Container>

            {/* --- MISSION GRID --- */}
            <Container maxWidth="lg" sx={{ mb: 20 }}>
                <Grid container spacing={4}>
                    <Grid xs={12} md={4}>
                        <Typography level="h2" sx={{ color: 'white', fontSize: '3rem', fontWeight: 800, lineHeight: 1.1 }}>
                            Nuestra <br /><span style={{ color: '#B19DFF' }}>Misión</span>
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={8}>
                        <Grid container spacing={4}>
                            {missionItems.map((item, i) => (
                                <Grid xs={12} sm={6} key={i}>
                                    <Stack spacing={2} sx={{
                                        p: 3,
                                        borderRadius: '24px',
                                        transition: '0.3s',
                                        '&:hover': { bgcolor: 'rgba(255,255,255,0.03)' }
                                    }}>
                                        <Box sx={{
                                            width: 48, height: 48, borderRadius: '12px',
                                            bgcolor: 'rgba(177, 157, 255, 0.1)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                                        }}>
                                            {item.icon}
                                        </Box>
                                        <Typography level="title-lg" sx={{ color: "white", fontWeight: 700 }}>
                                            {item.title}
                                        </Typography>
                                        <Typography sx={{ color: "#D6CFF9", lineHeight: 1.6 }}>
                                            {item.desc}
                                        </Typography>
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <Box sx={{ bgcolor: 'rgba(255,255,255,0.02)', py: 15, borderBlock: '1px solid rgba(255,255,255,0.05)' }}>
                <Container maxWidth="lg">
                    <Typography level="h2" sx={{ fontWeight: 900, color: "white", mb: 8, textAlign: 'center', fontSize: '3rem' }}>
                        Success Team
                    </Typography>

                    <Grid container spacing={4}>
                        {team.map((member, i) => (
                            <Grid xs={12} sm={6} md={3} key={i}>
                                <Box sx={{
                                    textAlign: 'center',
                                    '&:hover img': { transform: 'scale(1.05)', filter: 'grayscale(0)' }
                                }}>
                                    <Box sx={{
                                        borderRadius: '24px',
                                        overflow: 'hidden',
                                        mb: 3,
                                        height: 350,
                                        position: 'relative',
                                        bgcolor: 'rgba(255,255,255,0.05)'
                                    }}>
                                        <Avatar
                                            src={member.img}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: 0,
                                                filter: 'grayscale(1)',
                                                transition: '0.5s ease'
                                            }}
                                        />
                                    </Box>
                                    <Typography level="title-lg" sx={{ color: "white", fontWeight: 700 }}>
                                        {member.name}
                                    </Typography>
                                    <Typography level="body-sm" sx={{ color: "#B19DFF", fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        {member.role}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Container maxWidth="sm" sx={{ mt: 15, textAlign: "center" }}>
                <Stack spacing={4} alignItems="center">
                    <Typography level="h2" sx={{ color: 'white', fontWeight: 800 }}>
                        ¿Listo para dar el siguiente paso?
                    </Typography>
                    <Button
                        size="lg"
                        variant="solid"
                        sx={{
                            borderRadius: 'xl',
                            px: 6, py: 2,
                            fontSize: '1.1rem',
                            background: 'linear-gradient(45deg, #7044ff, #B19DFF)',
                            boxShadow: '0 10px 20px rgba(112,68,255,0.3)',
                            '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 15px 30px rgba(112,68,255,0.4)' }
                        }}
                    >
                        Trabajemos juntos
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}
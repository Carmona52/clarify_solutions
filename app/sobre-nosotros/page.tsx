'use client'
import {
    Box,
    Typography,
    Grid,
    Card,
    Stack,
    Button,
    Container,
    AspectRatio,
} from "@mui/joy";
import Image from "next/image";
import GlobalMapSection from "@/components/navigation/map";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import InsightsIcon from '@mui/icons-material/Insights';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from "next/link";

const glassStyle = {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "30px",
};

export default function AboutPage() {
    const team = [
        { name: "Tania Mojica", role: "Founder & CEO", img: "/team/tania.jpg" },
        { name: "Nayeli", role: "Head of Growth", img: "/team/nayeli.jpg" },
        { name: "Paulina Hernandez", role: "Design Lead", img: "/team/paulina.jpg" },
        { name: "Carlos Ramos", role: "Performance Strategist", img: "/team/carlos.jpg" },
    ];

    const missionItems = [
        {
            title: "Claridad Estratégica",
            desc: "Convertimos datos crudos en decisiones ejecutables que impulsan crecimiento real.",
            icon: <InsightsIcon sx={{ fontSize: '2rem', color: 'primary.400' }} />
        },
        {
            title: "Precisión Quirúrgica",
            desc: "Cada acción tiene una métrica, cada inversión tiene un propósito claro y medible.",
            icon: <CenterFocusStrongIcon sx={{ fontSize: '2rem', color: 'primary.400' }} />
        },
        {
            title: "Experiencia Integrada",
            desc: "Combinamos visión de negocio, creatividad funcional y marketing de performance.",
            icon: <RocketLaunchIcon sx={{ fontSize: '2rem', color: 'primary.400' }} />
        },
        {
            title: "Tecnología Humana",
            desc: "La sinergia perfecta entre sistemas inteligentes automatizados y talento humano.",
            icon: <PrecisionManufacturingIcon sx={{ fontSize: '2rem', color: 'primary.400' }} />
        },
    ];

    return (
        <Container
            component="main"
            maxWidth={false}
            sx={{
                py: { xs: 8, md: 12 },
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                px: 5
            }}>

            <Box component="section" sx={{ mb: 20, mt: { xs: 8, md: 10 }, position: 'relative', width: '100%', maxWidth: '1400px' }}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '20%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '50vw',
                    background: 'radial-gradient(circle, rgba(177, 157, 255, 0.08) 0%, transparent 60%)',
                    zIndex: -1,
                    pointerEvents: 'none'
                }} />

                <Grid container spacing={8} sx={{ alignItems: 'center' }}>
                    <Grid xs={12} md={7}>
                        <Stack spacing={4}>
                            <Typography
                                level="body-sm"
                                sx={{ color: 'primary.400', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                                Nuestra Esencia
                            </Typography>

                            <Typography
                                level="h1"
                                component="h1"
                                sx={{
                                    fontWeight: 900,
                                    fontSize: { xs: "3.2rem", md: "4.8rem" },
                                    color: 'white',
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.02em'
                                }}>
                                Estamos aquí para <Typography component="span" sx={{ color: 'primary.400' }}>impulsar</Typography> tu éxito
                            </Typography>

                            <Card variant="plain" sx={{
                                ...glassStyle,
                                p: { xs: 3, md: 4 },
                                borderLeft: '4px solid',
                                borderLeftColor: 'white',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                            }}>
                                <Typography level="body-lg" sx={{
                                    color: "white", // Texto en blanco
                                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                                    lineHeight: 1.7,
                                    fontWeight: 400
                                }}>
                                    "En <Typography component="span" sx={{ color: 'white', fontWeight: 700 }}>Clarify</Typography> ayudamos a empresas a transformar incertidumbre en dirección estratégica. No vendemos marketing vacío. <Typography component="span" sx={{ color: 'primary.300', fontWeight: 600 }}>Construimos claridad.</Typography>"
                                </Typography>
                            </Card>
                        </Stack>
                    </Grid>

                    <Grid xs={12} md={5}>
                        <Box sx={{ position: 'relative', width: '100%', mx: 'auto', maxWidth: '500px' }}>
                            <AspectRatio
                                ratio="4/5"
                                variant="plain"
                                sx={{
                                    ...glassStyle,
                                    bgcolor: 'transparent',
                                    borderRadius: '30px',
                                    overflow: 'hidden',
                                }}>
                                <Box sx={{ borderRadius: '20px', overflow: 'hidden', width: '100%', height: '100%', position: 'relative' }}>
                                    <Image
                                        src="/stadistic.jpg"
                                        alt="Esencia Clarify"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        priority
                                    />
                                </Box>
                            </AspectRatio>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box component="section" sx={{ mb: 20, width: '100%'}}>
                <Stack spacing={2} sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography level="h2" component="h2" sx={{ fontWeight: 800, color: "white", fontSize: '3rem', letterSpacing: '-0.02em' }}>
                        Presencia <Typography component="span" sx={{ color: 'primary.400' }}>Nacional</Typography>
                    </Typography>

                    <Typography sx={{
                        color: 'white',
                        fontSize: '1.2rem',

                        textAlign: 'center',
                        mx: 'auto'
                    }}>
                        Sin fronteras. Operamos y escalamos negocios desde cualquier lugar del país mediante estrategias digitales.
                    </Typography>
                </Stack>

                <Box sx={{ ...glassStyle, p: { xs: 2, md: 4 }, overflow: 'hidden' }}>
                    <GlobalMapSection />
                </Box>
            </Box>

            <Box component="section" sx={{ mb: 20, width: '100%', maxWidth: '1400px' }}>
                <Stack spacing={2} sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography level="h2" component="h2" sx={{ color: 'white', fontSize: { xs: '3rem', md: '4.2rem' }, fontWeight: 800 }}>
                        Nuestra <Typography component="span" sx={{ color: 'primary.400' }}>Misión</Typography>
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: '1.2rem', mx: 'auto', opacity: 0.9 }}>
                        Creemos que el crecimiento sostenible no es producto de la suerte, sino de una metodología implacable, análisis profundo y ejecución precisa.
                    </Typography>
                </Stack>

                <Grid container spacing={3}>
                    {missionItems.map((item, i) => (
                        <Grid key={i} xs={12} sm={6} md={3}>
                            <Card variant="plain" sx={{
                                ...glassStyle,
                                p: 4,
                                height: '100%',
                                textAlign: 'center',
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <Box sx={{
                                    width: 70, height: 70, borderRadius: '20px',
                                    bgcolor: 'rgba(177, 157, 255, 0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3
                                }}>
                                    {item.icon}
                                </Box>
                                <Typography level="title-lg" component="h3" sx={{ color: "white", fontWeight: 700, mb: 1.5 }}>
                                    {item.title}
                                </Typography>
                                <Typography level="body-md" sx={{ color: "white", opacity: 0.8 }}>
                                    {item.desc}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box component="section" sx={{ mb: 20, width: '100%', maxWidth: '1400px' }}>
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <Typography level="h2" component="h2" sx={{ fontWeight: 800, color: "white", fontSize: '3.5rem', mb: 2 }}>
                        Success <Typography component="span" sx={{ color: 'primary.400' }}>Team</Typography>
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: '1.2rem', maxWidth: '600px', mx: 'auto' }}>
                        Conoce a las mentes estratégicas detrás del crecimiento de nuestros aliados.
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {team.map((member, i) => (
                        <Grid xs={12} sm={6} md={3} key={i}>
                            <Box sx={{ textAlign: 'center' }}>
                                <AspectRatio ratio="3/4" sx={{ ...glassStyle, p: 1, mb: 3, overflow: 'hidden' }}>
                                    <Box sx={{ borderRadius: '20px', overflow: 'hidden', width: '100%', height: '100%', position: 'relative' }}>
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            fill
                                            style={{ objectFit: 'cover', filter: 'grayscale(1)' }}
                                        />
                                    </Box>
                                </AspectRatio>
                                <Typography level="title-lg" sx={{ color: "white", fontWeight: 700 }}>
                                    {member.name}
                                </Typography>
                                <Typography level="body-sm" sx={{ color: "primary.400", fontWeight: 700, textTransform: 'uppercase', mt: 0.5 }}>
                                    {member.role}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box component="section" sx={{
                ...glassStyle,
                p: { xs: 6, md: 10 },
                textAlign: "center",
                maxWidth: '1000px',
                mx: 'auto',
                width: '100%',
                mb: 10
            }}>
                <Stack spacing={4} alignItems="center">
                    <Typography level="h2" component="h2" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                        ¿Listo para dar el <br /> <Typography component="span" sx={{ color: 'primary.400' }}>siguiente paso?</Typography>
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: '1.2rem', opacity: 0.9 }}>
                        Dejemos de adivinar y comencemos a ejecutar. Agenda una sesión de diagnóstico hoy mismo.
                    </Typography>
                    <Button
                        component={Link}
                        href="/contacto"
                        size="lg"
                        endDecorator={<ArrowForwardIcon />}
                        sx={{
                            borderRadius: 'xl',
                            px: 6, py: 2.5,
                            fontWeight: 700,
                            bgcolor: 'primary.500',
                            color: 'white',
                            '&:hover': { bgcolor: 'primary.400' }
                        }}
                    >
                        Trabajemos juntos
                    </Button>
                </Stack>
            </Box>
        </Container>
    );
}
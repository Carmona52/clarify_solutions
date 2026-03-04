import {Box, Typography, Grid, Card, Container, AspectRatio, Stack} from "@mui/joy";
import ContactForm from "@/components/forms/contact-form";
import Image from "next/image";

const glassStyle = {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "24px",
};

export default function ServiciosPage() {
    const servicios = [
        {
            titulo: "Diagnóstico de Claridad",
            descripcion: "Analizamos tu estructura actual para identificar dónde se pierde el presupuesto. Sin tecnicismos, solo una radiografía honesta.",
            numero: "01",
        },
        {
            titulo: "Estrategia Impulsora",
            descripcion: "Diseñamos el mapa de ruta que tu PyME necesita para escalar. Un plan estructurado basado en datos reales.",
            numero: "02",
        },
        {
            titulo: "Marketing de Performance",
            descripcion: "Ejecución enfocada en resultados tangibles. Transformamos la inversión en crecimiento medible y reportes claros.",
            numero: "03",
        },
        {
            titulo: "Acompañamiento de Aliado",
            descripcion: "No somos externos; nos sentamos a tu mesa. Consultoría estratégica continua para que nunca estés solo.",
            numero: "04",
        },
    ];

    return (
        <Container component="main" maxWidth='xl' sx={{
            py: 5,
            px: {xs: 5, md: 1},
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Box component="section" sx={{mb: {xs: 15, md: 20}}}>
                <Grid container spacing={8} sx={{alignItems: 'center'}}>

                    <Grid xs={12} md={7}>
                        <Stack spacing={5}>
                            <Typography level="h1" component="h1" sx={{
                                fontSize: {xs: '3rem', md: '5rem'},
                                fontWeight: 900,
                                lineHeight: 1.05,
                                color: 'white',
                                letterSpacing: '-0.04em'
                            }}>
                                Servicios diseñados para llevar tu negocio al <Typography component="span" sx={{color: 'primary.400'}}>siguiente nivel</Typography>
                            </Typography>

                            <Typography level="body-lg" component="p" sx={{
                                color: 'white',
                                lineHeight: 1.8,
                                fontSize: {xs: '1.2rem', md: '1.4rem'},
                                fontWeight: 400,
                                opacity: 0.9,
                                maxWidth: '550px'
                            }}>
                                En Clarify Solutions eliminamos la <Typography component="span" sx={{color: 'white', fontWeight: 700}}>confusión
                                estratégica</Typography>. Te ofrecemos claridad, datos y ejecución real para que tu PyME
                                domine su mercado con autoridad.
                            </Typography>
                        </Stack>
                    </Grid>

                    <Grid xs={12} md={5}>
                        <Box sx={{position: 'relative', width: '100%', ml: {md: 5}}}>
                            <AspectRatio ratio="3/4"
                                variant="plain"
                                sx={{
                                    bgcolor: 'transparent',
                                    borderRadius: '40px',
                                    overflow: 'hidden',
                                }}>
                                <Image
                                    src="/girl-stadistics.png"
                                    alt="Análisis de estadísticas"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center top',
                                    }}
                                    priority
                                />
                            </AspectRatio>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box component="section" sx={{mb: 15}}>
                <Typography level="h2" component="h2" sx={{color: 'white', mb: 8, fontWeight: 700, fontSize: '2.5rem'}}>
                    Nuestra <Typography component="span" sx={{color: 'primary.400'}}>Metodología</Typography>
                </Typography>

                <Grid container spacing={3}>
                    {servicios.map((item) => (
                        <Grid key={item.numero} xs={12} sm={6} md={3}>
                            <Card
                                component="article"
                                variant="plain"
                                sx={{
                                    ...glassStyle,
                                    p: 4,
                                    height: '100%',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        background: "rgba(255, 255, 255, 0.07)",
                                    }
                                }}>
                                <Typography level="h2" sx={{
                                    mb: 1,
                                    color: 'white',
                                    fontWeight: 900,
                                    fontSize: '3rem',
                                    opacity: 0.5
                                }}>
                                    {item.numero}
                                </Typography>
                                <Typography level="title-lg" component="h3"
                                            sx={{color: 'white', mb: 1.5, fontWeight: 700}}>
                                    {item.titulo}
                                </Typography>
                                <Typography level="body-md" sx={{color: 'white', fontSize: '1.05rem', opacity: 0.8}}>
                                    {item.descripcion}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box component="section" id="contacto" sx={{
                ...glassStyle,
                p: {xs: 4, md: 8},
                mb: 10
            }}>
                <Grid container spacing={6} sx={{alignItems: 'center'}}>
                    <Grid xs={12} md={5}>
                        <Typography level="h2" component="h2" sx={{color: 'white', mb: 2, fontWeight: 700}}>
                            ¿Hablamos de tu <Typography component="span"
                                                        sx={{color: 'primary.400'}}>crecimiento</Typography>?
                        </Typography>
                        <Typography level="body-md" sx={{color: 'white', opacity: 0.8}}>
                            Completa el formulario y un especialista analizará tu caso para una sesión de diagnóstico
                            sin costo.
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={7}>
                        <ContactForm/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
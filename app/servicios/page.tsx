import {Box, Typography, Grid, Button, Stack, Card} from "@mui/joy";
import ContactForm from "@/components/forms/contact-form";

export default function ServiciosPage() {
    const servicios = [
        {
            titulo: "Diagnóstico de Claridad",
            descripcion:
                "Analizamos tu estructura actual para identificar dónde se pierde el presupuesto. Sin tecnicismos, solo una radiografía honesta de tu marketing.",
            numero: "01",
        },
        {
            titulo: "Estrategia Impulsora",
            descripcion:
                "Diseñamos el mapa de ruta que tu PyME necesita para escalar. Un plan estructurado basado en datos, no en suposiciones.",
            numero: "02",
        },
        {
            titulo: "Marketing de Performance",
            descripcion:
                "Ejecución enfocada en resultados tangibles. Transformamos la inversión en crecimiento medible y reportes que sí entiendes.",
            numero: "03",
        },
        {
            titulo: "Acompañamiento de Aliado",
            descripcion:
                "No somos externos; nos sentamos a tu mesa. Consultoría estratégica continua para que nunca vuelvas a sentirte perdido.",
            numero: "04",
        },
    ];

    return (
        <Box sx={{py: {xs: 10, md: 14}, px: 3}}>
            <Box sx={{maxWidth: 900, mx: "auto", textAlign: "center", mb: 12}}>
                <Typography
                    level="body-sm"
                    sx={{
                        textTransform: "uppercase",
                        letterSpacing: 2,
                        fontWeight: 600,
                        color: "primary.300",
                        mb: 2,
                    }}
                >
                    Servicios Estratégicos
                </Typography>

                <Typography
                    level="h1"
                    sx={{
                        fontSize: {xs: "2.5rem", md: "3.8rem"},
                        fontWeight: 800,
                        mb: 3,
                        lineHeight: 1.1,
                        color: "common.white",
                    }}>
                    Estrategia que impulsa.
                    <br/>
                    Claridad que transforma.
                </Typography>

                <Typography
                    level="body-lg"
                    sx={{
                        maxWidth: 600,
                        mx: "auto",
                        color: "neutral.200",
                    }}>
                    Ayudamos a las PyMEs a tomar el control de su crecimiento con procesos
                    definidos y resultados medibles.
                </Typography>
            </Box>

            <Grid container spacing={4} sx={{maxWidth: 1200, mx: "auto"}}>
                {servicios.map((servicio, i) => (
                    <Grid xs={12} md={6} key={i}>
                        <Card
                            variant="soft"
                            sx={{
                                p: 5,
                                height: "100%",
                                borderRadius: "xl",
                                backgroundColor: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                transition: "all 0.25s ease",
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                                "&:hover": {
                                    transform: "translateY(-4px)",
                                    borderColor: "primary.400",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "0.9rem",
                                    fontWeight: 700,
                                    letterSpacing: 2,
                                    color: "primary.400",
                                }}
                            >
                                {servicio.numero}
                            </Typography>

                            <Typography
                                level="title-lg"
                                sx={{
                                    fontWeight: 700,
                                    color: "common.white",
                                }}
                            >
                                {servicio.titulo}
                            </Typography>

                            <Typography
                                level="body-md"
                                sx={{
                                    color: "neutral.300",
                                    lineHeight: 1.7,
                                    flexGrow: 1,
                                }}
                            >
                                {servicio.descripcion}
                            </Typography>
                        </Card>

                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    mt: 20,
                    py: {xs: 10, md: 14},
                    px: {xs: 3, md: 6},
                }}>
                <Grid
                    container
                    spacing={8}
                    alignItems="center"
                    sx={{maxWidth: 1200, mx: "auto"}}
                >

                    <Grid xs={12} md={5}>
                        <Typography
                            level="h2"
                            sx={{
                                fontWeight: 800,
                                mb: 3,
                                color: "common.white",
                                lineHeight: 1.1,
                            }}
                        >
                            ¿Hablamos claro sobre tu negocio?
                        </Typography>

                        <Typography
                            level="body-lg"
                            sx={{
                                mb: 5,
                                color: "neutral.300",
                                lineHeight: 1.7,
                            }}
                        >
                            Si buscas un aliado estratégico que transforme tu inversión
                            en crecimiento real, comencemos con una conversación honesta.
                        </Typography>

                        <Button
                            size="lg"
                            variant="outlined"
                            sx={{
                                px: 5,
                                borderRadius: "xl",
                                fontWeight: 700,
                                borderColor: "rgba(255,255,255,0.3)",
                                color: "common.white",
                            }}
                        >
                            Ver Casos de Éxito
                        </Button>
                    </Grid>
                    <Grid xs={12} md={7}>
                        <ContactForm/>
                    </Grid>

                </Grid>
            </Box>

        </Box>
    );
}

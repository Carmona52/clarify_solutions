import {Box, Typography, Grid, Button, Stack, Card} from "@mui/joy";

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
                        <Card variant="soft"
                              sx={{
                                  p: 5,
                                  height: "100%",
                                  borderRadius: "xl",
                                  backdropFilter: "blur(6px)",
                                  backgroundColor: "rgba(255,255,255,0.06)",
                                  border: "1px solid rgba(255,255,255,0.1)",
                                  transition: "all 0.3s ease",
                                  "&:hover": {
                                      transform: "translateY(-6px)",
                                      boxShadow: "lg",
                                  },
                              }}>
                            <Typography
                                level="h4"
                                sx={{
                                    fontWeight: 800,
                                    color: "primary.300",
                                    mb: 2,
                                }}>
                                {servicio.numero}
                            </Typography>

                            <Typography
                                level="title-lg"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    color: "common.white",
                                }}>
                                {servicio.titulo}
                            </Typography>

                            <Typography
                                level="body-md"
                                sx={{
                                    color: "neutral.300",
                                    lineHeight: 1.7,
                                }}>
                                {servicio.descripcion}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{mt: 16, textAlign: "center"}}>
                <Typography
                    level="h2"
                    sx={{
                        fontWeight: 800,
                        mb: 3,
                        color: "common.white",
                    }}>
                    ¿Hablamos claro sobre tu negocio?
                </Typography>

                <Typography
                    level="body-lg"
                    sx={{
                        maxWidth: 600,
                        mx: "auto",
                        mb: 6,
                        color: "neutral.300",
                    }}>
                    Si buscas un aliado estratégico que hable tu idioma y transforme tu
                    inversión en crecimiento real, estamos listos.
                </Typography>

                <Stack
                    direction={{xs: "column", sm: "row"}}
                    spacing={3}
                    justifyContent="center">

                    <Button size="lg"
                            variant="solid"
                            color="primary"
                            sx={{
                                px: 5,
                                borderRadius: "xl",
                                fontWeight: 700,
                            }}>
                        Agendar Diagnóstico Gratis
                    </Button>

                    <Button
                        size="lg"
                        variant="outlined"
                        sx={{
                            px: 5,
                            borderRadius: "xl",
                            fontWeight: 700,
                            borderColor: "rgba(255,255,255,0.3)",
                            color: "common.white",
                        }}>
                        Ver Casos de Éxito
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
}

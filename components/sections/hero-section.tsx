import Image from 'next/image';
import Grid from '@mui/joy/Grid';
import {Box, Typography, Button} from "@mui/joy";


export default function HeroSection() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Grid container spacing={3}
                  sx={{
                      height: {xs: 'auto', md: '80vh'},
                      alignItems: 'center',
                      p: 5

                  }}>
                <Grid xs={12} md={8} lg={6}
                      sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          height: '100%'
                      }}>
                    <Box>
                        <Box>
                            <Typography level="h1" sx={styles.title}>
                                Estrategia que impulsa. Claridad que transforma.
                            </Typography>

                            <Typography level="body-lg" sx={styles.subtitle}>
                                En Clarify Solutions te ayudamos a crecer con estructura, datos claros y resultados
                                medibles.
                                <span style={{
                                    color: 'white',
                                    fontWeight: 550
                                }}> Sin tecnicismos innecesarios ni rodeos.</span>
                            </Typography>

                            <Box sx={styles.buttonGroup}>
                                <Button size="lg" sx={styles.primaryButton}>
                                    ¡Háblanos de tu Proyecto!
                                </Button>
                                <Button size="lg" variant="outlined" sx={styles.secondaryButton}>
                                    Saber más
                                </Button>
                            </Box>

                            <Box sx={{
                                display: "flex",
                                gap: 4,
                                mt: 8,
                                flexWrap: "wrap",
                            }}>
                                <Box>
                                    <Typography level="h2" sx={{color: "white"}}>
                                        10K+
                                    </Typography>
                                    <Typography level="body-sm" sx={{color: "white"}}>Clientes satisfechos</Typography>
                                </Box>
                                <Box>
                                    <Typography level="h2" sx={{color: "white"}}>
                                        99%
                                    </Typography>
                                    <Typography level="body-sm" sx={{color: "white"}}>Tasa de satisfacción</Typography>
                                </Box>
                                <Box>
                                    <Typography level="h2" sx={{color: "white"}}>
                                        24/7
                                    </Typography>
                                    <Typography level="body-sm" sx={{color: "white"}}>Soporte disponible</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Grid>

                <Grid xs={0} md={4} lg={6}
                      sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%'
                      }}>

                    <Box sx={styles.imageWrapper}>
                        <Image
                            src="/descarga1.png"
                            alt="Chica de Portada Clarify Solutions"
                            width="800"
                            height="800"
                            objectFit='cover'
                            objectPosition='center'
                            priority/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}


const styles = {

    title: {
        fontSize: {xs: "2.5rem", md: "3rem", lg: "4.5rem"},
        fontWeight: "bold",
        mb: 3,
        color: "white",
        lineHeight: 1.1,
        maxWidth: "90vh",
    },

    subtitle: {
        mb: 4,
        color: "white",
        fontSize: {xs: "1.1rem", md: "1.2rem", lg: "1.3rem"},
        lineHeight: 1.6,
        maxWidth: "800px",
    },

    buttonGroup: {
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        mb: {xs: 4, md: 0},
        mx: {xs: 'auto', md: 0},
        justifyContent: {xs: 'center', md: 'flex-start'},
    },

    primaryButton: {
        px: 5,
        fontWeight: 700,
        fontSize: "1.125rem",
        backgroundColor: "white",
        color: "primary.600",
        "&:hover": {
            backgroundColor: "neutral.100",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        },
    },

    secondaryButton: {
        px: 5,
        fontWeight: 700,
        fontSize: "1.125rem",
        borderColor: "white",
        color: "white",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "white",
            transform: "translateY(-2px)",
        },
    },

    statsContainer: {
        display: "flex",
        gap: {xs: 3, md: 4, lg: 6},
        mt: 8,
        flexWrap: "wrap",
    },

    statItem: {
        flex: "1 0 auto",
        minWidth: "120px",
    },

    statNumber: {
        color: "white",
        fontSize: {xs: "2.2rem", md: "2.5rem", lg: "2.8rem"},
        fontWeight: "bold",
        mb: 0.5,
    },

    statLabel: {
        color: "white",
        opacity: 0.9,
        fontSize: {xs: "0.875rem", md: "1rem", lg: "1.1rem"},
        whiteSpace: "nowrap",
    },

    imageWrapper: {
        position: "relative",
        width: "fit-content",
        height: "fit-content",
        maxHeight: "70vh",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20px",
        overflow: "hidden",
        "&:hover": {
            transform: "scale(1.02)",
            transition: "transform 0.3s ease-in-out",
        },

    },


    textColumnAlt: {
        flex: {xs: "1 1 100%", md: "6 1 60%"},
    },
    imageColumnAlt: {
        flex: {xs: "0 0 0", md: "4 1 40%"},
    },

};
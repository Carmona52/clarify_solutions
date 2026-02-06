import Image from 'next/image';
import Grid from '@mui/joy/Grid';
import { Box, Typography, Button } from "@mui/joy";

export default function HeroSection() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: { xs: 'auto', md: '50vh' },
            position: 'relative',
            overflow: 'hidden'
        }}>
            <Grid container
                  spacing={3}
                  sx={{
                      minHeight: { xs: 'auto', md: '50vh' },
                      alignItems: 'center',
                      p: { xs: 3, md: 5 },
                      m: 0,
                      width: '100%'
                  }}>

                <Grid xs={12} md={7} lg={6}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Typography level="h1" sx={styles.title}>
                            Estrategia que impulsa. Claridad que transforma.
                        </Typography>

                        <Typography level="body-lg" sx={styles.subtitle}>
                            En Clarify Solutions te ayudamos a crecer con estructura, datos claros y resultados
                            medibles.
                            <span style={{ color: 'white', fontWeight: 550 }}> Sin tecnicismos innecesarios ni rodeos.</span>
                        </Typography>

                        <Box sx={styles.buttonGroup}>
                            <Button size="lg" sx={styles.primaryButton}>
                                ¡Háblanos de tu Proyecto!
                            </Button>
                            <Button size="lg" variant="outlined" sx={styles.secondaryButton}>
                                Saber más
                            </Button>
                        </Box>

                        <Box sx={styles.statsContainer}>
                            <Box>
                                <Typography level="h2" sx={{color: "white"}}>10K+</Typography>
                                <Typography level="body-sm" sx={{color: "white"}}>Clientes satisfechos</Typography>
                            </Box>
                            <Box>
                                <Typography level="h2" sx={{color: "white"}}>99%</Typography>
                                <Typography level="body-sm" sx={{color: "white"}}>Tasa de satisfacción</Typography>
                            </Box>
                            <Box>
                                <Typography level="h2" sx={{color: "white"}}>24/7</Typography>
                                <Typography level="body-sm" sx={{color: "white"}}>Soporte disponible</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>


                <Grid xs={0} md={5} lg={6}
                      sx={{
                          display: { xs: 'flex', md: 'flex' },
                          alignItems: 'center',
                          justifyContent: 'center',
                          mt: { xs: 0, md: 0 }
                      }}>

                    <Box sx={styles.imageWrapper}>
                        <Image
                            src="/descarga1.png"
                            alt="Chica de Portada Clarify Solutions"
                            fill
                            priority
                            style={{
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

const styles = {
    title: {
        fontSize: { xs: "2.2rem", md: "3rem", lg: "4rem" },
        fontWeight: "bold",
        mb: 3,
        color: "white",
        lineHeight: 1.1,
    },
    subtitle: {
        mb: 4,
        color: "white",
        fontSize: { xs: "1rem", md: "1.2rem" },
        lineHeight: 1.6,
        maxWidth: "600px",
    },
    buttonGroup: {
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: { xs: 'center', md: 'flex-start' },
    },
    statsContainer: {
        display: "flex",
        gap: { xs: 3, md: 4 },
        mt: { xs: 4, md: 6 },
        flexWrap: "wrap",
        justifyContent: { xs: 'center', md: 'flex-start' },
    },
    imageWrapper: {
        position: "relative",
        width: "100%",
        maxWidth: { xs: "0px", md: "500px" },
        height: { md: "600px", lg: "700px" },
        borderRadius: "24px",
        overflow: "hidden",
    },
    primaryButton: {
        backgroundColor: "white",
        color: "primary.600",
        fontWeight: 700,
        px:5,
        fontStyle: "bold",
        "&:hover": { backgroundColor: "neutral.100" }
    },
    secondaryButton: {
        color: "white",
        borderColor: "white",
        fontWeight: 700,
        px:5,
        fontStyle: "bold",
        "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" }
    }
};
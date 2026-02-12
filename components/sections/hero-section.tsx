import Image from "next/image";
import {Box, Typography, Button} from "@mui/joy";

export default function HeroSection() {
    return (
        <Box
            sx={{
                position: "relative",
                minHeight: {xs: "auto", lg: "95vh"},
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                px: {xs: 3, md: 6, lg: 5},
                py: {xs: 6, md: 2},
            }}>

            <Box
                className="animate-fade-in fill-mode-forwards"
                sx={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: {xs: "100%", md: "75%", lg: "70%"},
                }}>
                <Typography level="h1" sx={styles.title}>
                    Estrategia que impulsa.ㅤ
                    <br/>
                    <span style={{opacity: 0.9}}>
            Claridad que transforma.
          </span>
                </Typography>

                <Typography level="body-lg" sx={styles.subtitle}>
                    En <b>Clarify Solutions</b> te ayudamos a crecer con estructura,
                    datos claros y resultados medibles.ㅤ
                    <span style={{fontWeight: 600}}>
             Sin tecnicismos innecesarios ni rodeos.
          </span>
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
                    {[
                        {value: "10K+", label: "Clientes satisfechos"},
                        {value: "99%", label: "Tasa de satisfacción"},
                        {value: "24/7", label: "Soporte disponible"},
                    ].map((stat, i) => (
                        <Box key={i}>
                            <Typography level="h2" sx={{color: "white", fontWeight: 800}}>
                                {stat.value}
                            </Typography>
                            <Typography level="body-sm" sx={{color: "rgba(255,255,255,0.8)"}}>
                                {stat.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box sx={{
                display: {xs: "none", md: "block"},
                position: "relative",
                bottom: 0,
                width: {md: "480px", lg: "580px", xl: "680px"},
                opacity: 0.95,
                pointerEvents: "none",
                zIndex: 1,
            }}
                 className="animate-fade-in-up fill-mode-forwards">
                <Image
                    src="/descarga1.png"
                    alt="Chica de Portada Clarify Solutions"
                    width={700}
                    height={900}
                    priority
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                    }}
                />
            </Box>
        </Box>
    );
}

const styles = {
    title: {
        fontSize: {xs: "2.6rem", md: "4.2rem", lg: "6rem"},
        fontWeight: 900,
        lineHeight: 1.05,
        color: "white",
        mb: 4,
    },

    subtitle: {
        fontSize: {xs: "1.05rem", md: "1.25rem", lg: '1.5rem'},
        lineHeight: 1.8,
        color: "rgba(255,255,255,0.9)",
        mb: 5,
    },

    buttonGroup: {
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
        mb: 6,
    },

    statsContainer: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap",
    },

    primaryButton: {
        backgroundColor: "white",
        color: "primary.600",
        fontWeight: 700,
        px: 6,
        py: 1.5,
        borderRadius: "16px",
        transition: "all 0.3s ease",
        "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
        },
    },

    secondaryButton: {
        color: "white",
        borderColor: "white",
        fontWeight: 700,
        px: 6,
        borderRadius: "16px",
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.1)",
        },
    },
};

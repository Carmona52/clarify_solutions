'use client'

import {
    Box,
    Typography,
    Stack,
    Link,
    IconButton,
    Divider,
    Grid,
} from "@mui/joy";
import Image from "next/image";
import NextLink from "next/link";
import {
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    Mail,
    Phone,
    LocationOn,
    ArrowForward,
} from "@mui/icons-material";

export default function Footer() {
    const legales = [
        {label: "Políticas de Privacidad", href: "/privacidad"},
        {label: "Términos de Servicios", href: "/terminos"},
        {label: "Mapa del Sitio", href: "/mapa"}
    ];

    const navegacion = [
        {label: "Inicio", href: "/"},
        {label: "Servicios", href: "/servicios"},
        {label: "Nosotros", href: "/sobre-nosotros"},
        {label: "Proyectos", href: "/proyectos"},
        {label: "Blog", href: "/blog"},
        {label: "Contacto", href: "/contacto"}
    ];

    const socialMedia = [
        { label: "Facebook", href: "https://www.facebook.com/share/16v31znWz6/", icon: <Facebook /> },
        //{ label: "Twitter", href: "https://twitter.com", icon: <Twitter /> },
        { label: "Instagram", href: "https://www.instagram.com/clarify.solutions?igsh=MTN0cTZuMzM4bnJ3OA==", icon: <Instagram /> },
        { label: "Linkedin", href: "https://www.linkedin.com/company/clarify-solutions/", icon: <LinkedIn /> },
    ];

    return (
        <Box
            component="footer"
            sx={{
                width: '100%vh',
                bgcolor: 'white',
                color: 'text.primary',
                py: {xs: 4, md: 6},
                borderTop: '1px solid',
                borderColor: 'divider',
                borderRadius: "20px 20px 0px 0px",
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', px:5 }}>
                <Grid container spacing={{xs: 4, md: 6}} sx={{mb: 2}}>
                    <Grid xs={12} md={4}>
                        <Stack spacing={3}>
                            <Box sx={{mb: 2}}>
                                <Image
                                    src="/Clarify_H1.png"
                                    alt="Logo Clarify Solutions"
                                    width={180}
                                    height={60}
                                    style={{objectFit: 'contain'}}
                                    priority={false}
                                />
                            </Box>
                            <Typography sx={{fontSize: 16, fontWeight: 600}}>
                                Estrategia que impulsa. Claridad que transforma.
                            </Typography>
                            <Box>
                                <Typography level="body-sm" sx={{fontWeight: 600, mb: 2}}>
                                    Síguenos en redes sociales
                                </Typography>
                                <Stack direction="row" spacing={1.5}>
                                    {socialMedia.map((social, index) => (
                                        <IconButton
                                            key={index}
                                            component="a"
                                            href={social.href}
                                            variant="outlined"
                                            color="primary"
                                            size="sm"
                                            sx={{ borderRadius: 'md' }}>
                                            {social.icon}
                                        </IconButton>
                                    ))}
                                </Stack>
                            </Box>
                        </Stack>
                    </Grid>

                    <Grid xs={12} md={4}>
                        <Typography level="title-md" sx={{fontWeight: 700, mb: 3}}>
                            Navegación
                        </Typography>
                        <Stack spacing={2}>
                            {navegacion.map((item, index) => (
                                <Link
                                    key={index}
                                    component={NextLink}
                                    href={item.href}
                                    underline="none"
                                    sx={styles.navLink}>
                                    <ArrowForward fontSize="small" sx={{fontSize: '0.9rem'}}/>
                                    {item.label}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid xs={12} md={4}>
                        <Typography level="title-md" sx={{fontWeight: 700, mb: 3}}>
                            Contacto
                        </Typography>
                        <Stack spacing={2}>
                            <Typography level="body-sm"> <Phone/> +111 111 1111</Typography>
                            <Typography level="body-sm"> <Mail/> clarify@gmail.com</Typography>
                            <Typography level="body-sm"> <LocationOn/> Zapopan, Jalisco</Typography>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{my: 3}}/>

                <Box sx={styles.bottomBar}>
                    <Typography level="body-xs">
                        © {new Date().getFullYear()} Clarify Solutions.
                    </Typography>
                    <Stack direction="row" spacing={3}>
                        {legales.map((legal, index) => (
                            <Link
                                key={index}
                                component={NextLink}
                                href={legal.href}
                                level="body-xs"
                                sx={{color: 'text.secondary'}}
                            >
                                {legal.label}
                            </Link>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}

const styles = {
    navLink: {
        color: 'text.primary',
        transition: 'all 0.2s ease',
        '&:hover': {
            color: 'primary.600',
            transform: 'translateX(4px)',
        },
        display: 'flex',
        alignItems: 'center',
        gap: 1,
    },
    bottomBar: {
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        pb: 2
    }
};
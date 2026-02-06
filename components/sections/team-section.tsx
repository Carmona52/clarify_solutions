import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/joy';

interface TeamMember {
    src: string;
    alt: string;
}

const teamMembers: TeamMember[] = [
    { src: '/team1.png', alt: 'Profesional 1' },
    { src: '/team2.jpg', alt: 'Profesional 2' },
    { src: '/team1.png', alt: 'Profesional 3' },
    { src: '/team2.jpg', alt: 'Profesional 4' },
    { src: '/team1.png', alt: 'Profesional 5' },
    { src: '/team2.jpg', alt: 'Profesional 6' },
];

export default function TeamSection() {
    return (
        <Box component="section" sx={{ py: 8, px: { xs: 2, md: 2 } }}>
            <Grid
                container
                spacing={2}
                alignItems="center"
                sx={{
                    justifyContent: 'space-between'
                }}>
                <Grid xs={12} md={6} sx={{
                    pl: { md: 5 },
                    order: { xs: 1, md: 2 },
                    textAlign: { xs: 'center', md: 'left' }
                }}>
                    <Typography level="h1" sx={altStyles.title}>
                        Conoce A Nuestro Equipo De Profesionales
                    </Typography>

                    <Typography level="body-lg" sx={altStyles.description}>
                        En Clarify Solutions contamos con un gran equipo de Profesionales
                        Multidisciplinarios que están preparados para impulsar tu marca al siguiente nivel.
                    </Typography>


                    <Button size="lg" variant="solid" sx={{ ...altStyles.ctaButton, display: { xs: 'none', md: 'inline-flex' } }}>
                        Saber Más
                    </Button>
                </Grid>

                <Grid xs={12} md={5} sx={{ order: { xs: 2, md: 1 } }}>
                    <Grid container spacing={1.5} justifyContent="center">
                        {teamMembers.map((member, index) => (
                            <Grid xs={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Box sx={altStyles.photoContainer}>
                                    <Box
                                        component="img"
                                        src={member.src}
                                        alt={member.alt}
                                        sx={altStyles.image}
                                    />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>


                <Grid xs={12} sx={{ order: 3, display: { xs: 'flex', md: 'none' }, justifyContent: 'center', mt: 2 }}>
                    <Button size="lg" variant="solid" sx={altStyles.ctaButton}>
                        Saber Más
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

const altStyles = {
    photoContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        maxWidth: { xs: '100px', sm: '150px', md: '200px' },
        height: { xs: '100px', sm: '150px', md: '200px' },
        borderRadius: { xs: '16px', md: '24px' },
        objectFit: 'cover' as const,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        transition: 'transform 0.3s ease',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    title: {
        color: 'white',
        fontSize: { xs: '2rem', md: '3.5rem' },
        fontWeight: 'bold',
        lineHeight: 1.2,
        mb: 3,
    },
    description: {
        color: 'white',
        fontSize: '1.1rem',
        opacity: 0.9,
        maxWidth: { xs: '100%', md: '500px' },
        mb: 4,
        mx: { xs: 'auto', md: 0 }
    },
    ctaButton: {
        backgroundColor: 'white',
        color: '#6236FF',
        px: 6,
        py: 1.5,
        borderRadius: '12px',
        fontWeight: 700,
        fontSize: '1.1rem',
        boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
        '&:hover': {
            backgroundColor: '#f8f8f8',
        },
    },
};
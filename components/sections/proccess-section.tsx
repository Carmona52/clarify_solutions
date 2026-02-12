import React from 'react';
import Image from 'next/image';
import { Box, Typography, Button, Sheet, Divider, Grid } from '@mui/joy';
import { Schedule as ScheduleIcon, Explore as ExploreIcon, People as PeopleIcon, TrendingUp as TrendingUpIcon } from '@mui/icons-material';

export default function ProcessSection() {
    const steps = [
        {
            number: '01',
            title: 'Contacto y Descubrimiento',
            description: 'Todo comienza con una conversación. Analizamos tu estructura actual, definimos criterios de éxito, tiempos y presupuesto para entender exactamente cómo podemos aportar valor.',
            icon: <ExploreIcon sx={{ fontSize: 32, color:'#7044ff' }} />,
        },
        {
            number: '02',
            title: 'Estrategia y Equipo',
            description: 'En cuestión de días, finalizamos las especificaciones de tu proyecto. Diseñamos el modelo de trabajo ideal y seleccionamos al talento que se integrará a tu visión.',
            icon: <PeopleIcon sx={{ fontSize: 32, color:'#7044ff'}} />,
        },
        {
            number: '03',
            title: 'Ejecución y Resultados',
            description: 'Una vez definidos los hitos, nos ponemos manos a la obra. Monitoreamos el progreso, reportamos actualizaciones y nos adaptamos continuamente para asegurar el ROI.',
            icon: <TrendingUpIcon sx={{ fontSize: 32, color: 'green' }} />,
        },
    ];

    return (
        <Sheet sx={styles.container} className="timeline-view animate-zoom-in animate-range-[entry_5%_cover_50%]">
            <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>

                <Grid container spacing={6}>
                    <Grid xs={12} md={6}>
                        <Box sx={styles.header}>
                            <Typography level="h2" sx={styles.subtitleLabel}>
                                CÓMO TRABAJAMOS
                            </Typography>
                            <Typography level="h2" sx={styles.title}>
                                Un proceso simple.<br /> Resultados impresionantes.
                            </Typography>
                        </Box>

                        <Box sx={styles.timelineWrapper}>
                            {steps.map((step, index) => (
                                <Box key={index} sx={styles.stepItem}>
                                    <Box sx={styles.timelineColumn}>
                                        <Box sx={styles.iconCircle}>
                                            {step.icon}
                                        </Box>

                                        {index !== steps.length - 1 && (
                                            <Box sx={styles.connectingLine} />
                                        )}
                                    </Box>

                                    <Box sx={styles.contentColumn}>
                                        <Typography level="title-sm" sx={styles.stepNumber}>
                                            PASO {step.number}
                                        </Typography>

                                        <Typography level="h3" sx={styles.stepTitle}>
                                            {step.title}
                                        </Typography>

                                        <Typography level="body-lg" sx={styles.stepDescription}>
                                            {step.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        <Box sx={styles.ctaSection}>
                            <Divider sx={{ mb: 4, opacity: 0.2, backgroundColor: 'white' }} />
                            <Box sx={styles.ctaContent}>
                                <Box>
                                    <Typography level="h3" sx={{ color: 'white', mb: 1, fontSize: '1.5rem' }}>
                                        ¿Listo para empezar?
                                    </Typography>
                                    <Typography level="body-md" sx={{ color: 'neutral.400' }}>
                                        Agenda tu llamada hoy.
                                    </Typography>
                                </Box>
                                <Button
                                    size="lg"
                                    startDecorator={<ScheduleIcon />}
                                    sx={styles.ctaButton}
                                >
                                    Agendar
                                </Button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Box sx={styles.stickyImageContainer}>
                            <Box sx={styles.imageWrapper}>
                                <Image
                                    src="/descarga1.png"
                                    alt="Proceso de trabajo Clarify"
                                    fill
                                    sizes="(max-width: 1200px) 50vw, 600px"
                                    priority
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center 1%'
                                    }}
                                />
                                <Box sx={styles.imageOverlay} />
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Sheet>
    );
}

const styles = {
    container: {
        py:2,
        px: { xs: 3, md: 6 },
        backgroundColor: 'transparent',
    },

    header: {
        textAlign: 'left',
        mb: { xs: 6, md: 8 },
    },

    subtitleLabel: {
        fontSize: '0.875rem',
        fontWeight: '700',
        letterSpacing: '2px',
        color: 'white',
        mb: 2,
        textTransform: 'uppercase',
    },

    title: {
        fontSize: { xs: '2.5rem', md: '3.5rem' },
        fontWeight: 'bold',
        color: 'white',
        lineHeight: 1.1,
    },

    timelineWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
    },

    stepItem: {
        display: 'flex',
        gap: { xs: 3, md: 4 },
        position: 'relative',
    },

    timelineColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '60px',
    },

    iconCircle: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6236FF',
        zIndex: 2,
        boxShadow: '0 0 25px rgba(98, 54, 255, 0.4)',
    },

    connectingLine: {
        flex: 1,
        width: '2px',
        minHeight: { xs: '80px', md: '100px' },
        background: 'linear-gradient(to bottom, #6236FF 0%, rgba(98, 54, 255, 0.1) 100%)',
        my: 1,
    },

    contentColumn: {
        pb: { xs: 6, md: 8 },
        pt: 1.5,
    },

    stepNumber: {
        color: 'white',
        mb: 1,
        opacity: 0.5,
        letterSpacing: '1px',
        fontWeight: 'bold'
    },

    stepTitle: {
        color: 'white',
        fontSize: { xs: '1.5rem', md: '1.75rem' },
        fontWeight: 'bold',
        mb: 2,
    },

    stepDescription: {
        color: 'neutral.300',
        fontSize: { xs: '1rem', md: '1.1rem' },
        lineHeight: 1.6,
        maxWidth: '500px',
    },

    ctaSection: {
        mt: 2,
        maxWidth: '500px',
    },

    ctaContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
    },

    ctaButton: {
        backgroundColor: 'white',
        color: '#0B0D0E',
        fontWeight: 'bold',
        px: 4,
        fontSize: '1rem',
        '&:hover': {
            backgroundColor: '#f0f0f0',
            transform: 'translateY(-2px)',
        },
    },


    stickyImageContainer: {
        position: 'sticky',
        top: '100px',
        height: 'calc(100vh - 200px)',
        minHeight: '500px',
        width: '100%',
        borderRadius: '30px',
        overflow: 'hidden',
    },

    imageWrapper: {
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 'inherit',
    },

    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',

    }
};
import React from 'react';
import Image from 'next/image';
import { Box, Typography, Grid, Card, CardOverflow, AspectRatio, Chip, Avatar, Button, Divider } from '@mui/joy';
import { ArrowOutward } from '@mui/icons-material';


interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    author: {
        name: string;
        avatar: string;
    };
}


const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Transformación Digital: Más allá de la tecnología',
        excerpt: 'Descubre cómo la verdadera transformación comienza con la cultura empresarial y no solo con herramientas.',
        image: '/blog1.jpg',
        category: 'Estrategia',
        date: 'Oct 12, 2023',
        author: { name: 'Ana García', avatar: '/team1.png' }
    },
    {
        id: '2',
        title: 'Optimización de Procesos con IA',
        excerpt: 'Guía práctica para implementar inteligencia artificial en flujos de trabajo tradicionales sin fricción.',
        image: '/blog1.jpg',
        category: 'Tecnología',
        date: 'Sep 28, 2023',
        author: { name: 'Carlos Ruiz', avatar: '/team2.jpg' }
    },
    {
        id: '3',
        title: 'El futuro del Marketing B2B',
        excerpt: 'Las tendencias que están redefiniendo cómo las empresas se comunican con sus clientes corporativos.',
        image: '/blog1.jpg',
        category: 'Marketing',
        date: 'Sep 15, 2023',
        author: { name: 'Sofía M.', avatar: '/team3.png' }
    },
    {
        id: '4',
        title: 'Liderazgo en tiempos de incertidumbre',
        excerpt: 'Claves para mantener a tu equipo motivado y enfocado cuando el mercado es volátil.',
        image: '/blog1.jpg',
        category: 'Liderazgo',
        date: 'Ago 30, 2023',
        author: { name: 'Javier T.', avatar: '/team2.jpg' }
    },
];

export default function BlogPage() {
    return (
        <Box sx={{ py: 10, px: { xs: 2, md: 8 } }}>


            <Box sx={{ mb: 8, textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
                <Typography level="h1" sx={styles.pageTitle}>
                    Ideas que <span style={{ color: '#6236FF' }}>Impulsan</span>
                </Typography>
                <Typography level="body-lg" sx={styles.pageSubtitle}>
                    Noticias, estrategias y tendencias para llevar tu negocio al siguiente nivel.
                    Lecciones aprendidas directamente de nuestros expertos.
                </Typography>
            </Box>


            <Grid container spacing={4}>
                {blogPosts.map((post) => (
                    <Grid key={post.id} xs={12} md={6} lg={4}>
                        <Card variant="soft" sx={styles.card}>
                            <CardOverflow>
                                <AspectRatio ratio="1.6">
                                    <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }}/>
                                    <Box sx={styles.imageOverlay} />
                                </AspectRatio>
                            </CardOverflow>

                            <Box sx={{ pt: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Chip size="sm" variant="solid" color="primary" sx={{ bgcolor: '#6236FF' }}>
                                    {post.category}
                                </Chip>
                                <Typography level="body-xs" textColor="neutral.400">
                                    {post.date}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography level="h3" sx={styles.cardTitle}>
                                    {post.title}
                                </Typography>
                                <Typography level="body-sm" sx={styles.cardExcerpt}>
                                    {post.excerpt}
                                </Typography>
                            </Box>

                            <Divider sx={{ my: 2, opacity: 0.1, bgcolor: 'white' }} />

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                    <Avatar src={post.author.avatar} size="sm" variant="outlined" />
                                    <Typography level="body-xs" textColor="black">
                                        {post.author.name}
                                    </Typography>
                                </Box>
                                <Button
                                    variant="plain"
                                    color="neutral"
                                    endDecorator={<ArrowOutward fontSize="small" />}
                                    sx={styles.readMoreButton}
                                >
                                    Leer
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}


const styles = {
    pageTitle: {
        fontSize: { xs: '2.5rem', md: '4rem' },
        fontWeight: 'bold',
        color: 'white',
        mb: 2,
    },
    pageSubtitle: {
        color: 'white',
        fontSize: { xs: '1rem', md: '1.2rem' },
        lineHeight: 1.6,
    },
    card: {
        height: '100%',
        // backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backgroundColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            borderColor: '#6236FF',
        },
    },
    imageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        opacity: 0.6,
    },
    cardTitle: {
        color: 'black',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        mt: 1,
        mb: 1,
        lineHeight: 1.3,
    },
    cardExcerpt: {
        color: 'neutral.400',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },
    readMoreButton: {
        color: 'white',
        fontWeight: 600,
        '&:hover': {
            color: '#6236FF',
            bgcolor: 'transparent',
        }
    }
};
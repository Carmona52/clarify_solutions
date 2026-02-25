'use client'

import {Box, Typography, Avatar, Chip, Stack, Divider, Container} from "@mui/joy"
import {Post} from "@/lib/posts/blog-type"
import Image from "next/image"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function PostView({post}: { post: Post }) {
    const author = post.authors as any;

    const formattedDate = new Date(post.createdAt || '').toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <Box component="main" sx={{bgcolor: 'transparent', color: '#F1F0FB', pb: 10, position: 'relative'}}>

            {/* Luz de ambiente decorativa */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
                height: '600px',
                background: 'radial-gradient(circle at top center, rgba(112,68,255,0.2) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}/>

            {/* --- SECCIÓN TITULAR (HERO) --- */}
            <Box sx={{pt: {xs: 8, md: 10}, pb: 4, position: 'relative', zIndex: 1}}>
                <Container maxWidth="md">
                    <Stack spacing={3} alignItems="center" textAlign="center">
                        <Typography level="h1" sx={{
                            fontSize: {xs: '2.8rem', md: '4rem'},
                            fontWeight: 800,
                            lineHeight: 1.1,
                            color: '#F1F0FB',
                            textShadow: '0 4px 20px rgba(0,0,0,0.4)',
                            textWrap: 'balance'
                        }}>
                            {post.title}
                        </Typography>

                        <Typography level="body-lg" sx={{
                            color: '#D6CFF9',
                            fontSize: '1.3rem',
                            maxWidth: '750px',
                            lineHeight: 1.5,
                            opacity: 0.9
                        }}>
                            {post.excerpt}
                        </Typography>
                    </Stack>
                </Container>
            </Box>

            {/* --- IMAGEN PRINCIPAL --- */}
            <Container maxWidth="lg" sx={{mb: 4, position: 'relative', zIndex: 1}}>
                <Box sx={{
                    position: 'relative',
                    width: '100%',
                    height: {xs: 300, md: 600},
                    borderRadius: '32px',
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px -12px rgba(0,0,0,0.6), 0 18px 36px -18px rgba(112,68,255,0.4)',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <Image
                        src={post.image_url}
                        alt={post.title}
                        fill
                        priority
                        style={{objectFit: 'cover'}}
                    />
                </Box>
            </Container>

            {/* --- METADATA DEBAJO DE LA IMAGEN --- */}
            <Container maxWidth="sm">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={3}
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        mb: 6,
                        p: 2,
                        borderRadius: '20px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    {/* Info Autor */}
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1.5}}>
                        <Avatar
                            src={author?.avatar_url}
                            size="md"
                            variant="outlined"
                            sx={{border: '2px solid #7044ff'}}
                        />
                        <Box>
                            <Typography level="title-sm" sx={{color: '#F1F0FB', fontWeight: 600}}>
                                {author?.name} {author?.last_name}
                            </Typography>
                            <Chip
                                size="sm"
                                variant="soft"
                                sx={{
                                    bgcolor: 'rgba(177, 157, 255, 0.1)',
                                    color: '#B19DFF',
                                    fontWeight: 700,
                                    fontSize: '0.65rem',
                                    textTransform: 'uppercase'
                                }}
                            >
                                {post.category}
                            </Chip>
                        </Box>
                    </Box>

                    {/* Info Fecha y Lectura */}
                    <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" />}>
                        <Typography level="body-xs" sx={{display: 'flex', alignItems: 'center', gap: 0.5, color: '#D6CFF9'}}>
                            <CalendarTodayIcon sx={{fontSize: 14}}/> {formattedDate}
                        </Typography>
                        <Typography level="body-xs" sx={{display: 'flex', alignItems: 'center', gap: 0.5, color: '#D6CFF9'}}>
                            <AccessTimeIcon sx={{fontSize: 14}}/> 6 min
                        </Typography>
                    </Stack>
                </Stack>
            </Container>

            {/* --- CUERPO DEL ARTÍCULO --- */}
            <Container maxWidth="sm" sx={{
                position: 'relative',
                zIndex: 1,
                '& p': { fontSize: '1.25rem', lineHeight: 1.8, mb: 4, color: '#D6CFF9' },
                '& h2, & h3': { color: '#F1F0FB', fontWeight: 800, mt: 8, mb: 4, textShadow: '0 4px 12px rgba(0,0,0,0.3)' },
                '& strong': { color: '#FFFFFF', fontWeight: 700 },
                '& blockquote': {
                    my: 6, py: 2, pl: 4,
                    borderLeft: '4px solid #B19DFF',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '0 16px 16px 0',
                    '& p': {color: '#F1F0FB', fontStyle: 'italic', mb: 0}
                },
                '& ul, & ol': {mb: 4, pl: 3, fontSize: '1.2rem', color: '#D6CFF9'},
                '& li': {mb: 2},
                '& img': { borderRadius: '24px', my: 5, boxShadow: '0 20px 40px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }
            }}>
                <Box dangerouslySetInnerHTML={{__html: post?.content ?? ""}}/>

                {/* --- SECCIÓN DE AUTOR FINAL --- */}
                <Box sx={{
                    mt: 12,
                    p: { xs: 4, md: 6 },
                    borderRadius: '32px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: 4,
                    alignItems: 'center'
                }}>
                    <Avatar src={author?.avatar_url} sx={{ width: 100, height: 100, border: '3px solid rgba(112,68,255,0.3)' }} />
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography level="body-xs" sx={{ color: '#B19DFF', fontWeight: 700, textTransform: 'uppercase', mb: 1 }}>
                            Escrito por
                        </Typography>
                        <Typography level="h4" sx={{ color: '#F1F0FB', mb: 1.5, fontSize: '1.6rem', fontWeight: 700 }}>
                            {author?.name} {author?.last_name}
                        </Typography>
                        <Typography level="body-md" sx={{ color: '#D6CFF9', lineHeight: 1.6, opacity: 0.8 }}>
                            {author?.bio || "Estratega digital especializado en tecnología y crecimiento de negocios."}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
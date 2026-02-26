import {
    Box, Typography, Grid, Card, Avatar, Stack, Divider, Button
} from "@mui/joy";
import { Article, People, Visibility, Add } from "@mui/icons-material";
import Link from "next/link";
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import LogoutButton from "@/components/forms/log-out-button";



async function getStats() {
    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() { return cookieStore.getAll() },
            },
        }
    );

    const [postsCount, profilesCount, recentPosts] = await Promise.all([
        supabase.from('posts').select('*', { count: 'exact', head: true }),
        supabase.from('profiles').select('*', { count: 'exact', head: true }),
        supabase.from('posts').select('*').order('created_at', { ascending: false }).limit(5)
    ]);

    return {
        totalPosts: postsCount.count || 0,
        totalUsers: profilesCount.count || 0,
        latestPosts: recentPosts.data || []
    };
}



export default async function AdminDashboard() {
    const stats = await getStats();


    return (
        <Box sx={{ p: { xs: 2, md: 4 }, mt:2}}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
                <Box>
                    <Typography level="h2" sx={{ color: 'white' }}>Dashboard</Typography>
                    <Typography level="body-md" sx={{ color: 'white' }}>Resumen de actividad</Typography>
                </Box>

                <Stack direction="row" spacing={2}>
                    <LogoutButton /> {/* Botón de logout cliente */}
                    <Link href="/admin/create-post" passHref style={{ textDecoration: 'none' }}>
                        <Button startDecorator={<Add />}>Nuevo Artículo</Button>
                    </Link>
                </Stack>
            </Stack>

            <Grid container spacing={3} sx={{ mb: 5 }}>
                <StatCard title="Artículos" value={stats.totalPosts} icon={<Article />} color="primary" />
                <StatCard title="Usuarios" value={stats.totalUsers} icon={<People />} color="success" />
                <StatCard title="Vistas" value="1.2k" icon={<Visibility />} color="warning" />
            </Grid>

            <Grid container spacing={3}>
                <Grid xs={12} md={8}>
                    <Card variant="outlined" sx={{ height: '100%' }}>
                        <Typography level="title-lg" sx={{ mb: 2 }}>Últimas publicaciones</Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Stack spacing={2}>
                            {stats.latestPosts.map((post) => (
                                <Box key={post.id} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Avatar src={post.image_url}  />
                                    <Box sx={{ flex: 1 }}>
                                        <Typography level="title-sm">{post.title}</Typography>
                                        <Typography level="body-xs" sx={{ textTransform: 'capitalize' }}>{post.category}</Typography>
                                    </Box>
                                    <Link href={`/admin/edit-post/${post.slug}`} passHref style={{ textDecoration: 'none' }}>
                                        <Button size="sm" variant="soft">Editar</Button>
                                    </Link>
                                </Box>
                            ))}
                        </Stack>
                    </Card>
                </Grid>

                <Grid xs={12} md={4}>
                    <Card variant="solid" color="primary" invertedColors sx={{ height: '100%' }}>
                        <Typography level="title-lg">Atajos</Typography>
                        <Stack spacing={1.5} sx={{ mt: 2 }}>
                            <Link href="/admin/users" passHref style={{ textDecoration: 'none' }}>
                                <Button variant="soft" fullWidth>Gestionar Usuarios</Button>
                            </Link>
                            <Button variant="soft" fullWidth disabled>Configuración SEO</Button>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

function StatCard({ title, value, icon, color }: any) {
    return (
        <Grid xs={12} sm={4}>
            <Card variant="outlined" sx={{ flexDirection: 'row', alignItems: 'center', gap: 2, p: 2 }}>
                <Avatar size="lg" color={color} variant="soft">{icon}</Avatar>
                <Box>
                    <Typography level="body-xs" sx={{ color: 'neutral.400' }}>{title}</Typography>
                    <Typography level="h3">{value}</Typography>
                </Box>
            </Card>
        </Grid>
    );
}
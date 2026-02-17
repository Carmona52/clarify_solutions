import React from "react";
import {Box, Typography, Grid} from "@mui/joy";
import BlogCard from "@/components/cards/blog-card";
import {getPosts} from "@/lib/posts/get-posts";
import {BlogPost} from "@/lib/posts/blog-type";

export default async function BlogPage() {
    const posts: BlogPost[] = await getPosts()
    console.log(posts);


    return (

        <Box sx={{py: 10, px: {xs: 2, md: 8}}}>
            <Box sx={{mb: 8, textAlign: "center", maxWidth: 800, mx: "auto"}}>
                <Typography level="h1" sx={styles.pageTitle}>
                    Ideas que <span style={{color: "#6236FF"}}>Impulsan</span>
                </Typography>

                <Typography level="body-lg" sx={styles.pageSubtitle}>
                    Noticias, estrategias y tendencias para llevar tu negocio
                    al siguiente nivel.
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {posts.map((post) => (
                    <Grid key={post.id} xs={12} md={6} lg={4}>
                        <BlogCard post={post}/>
                    </Grid>
                ))}
            </Grid>


        </Box>
    );
}

const styles = {
    pageTitle: {
        fontSize: {xs: "2.5rem", md: "4rem"},
        fontWeight: "bold",
        color: "white",
        mb: 2,
    },
    pageSubtitle: {
        color: "white",
        fontSize: {xs: "1rem", md: "1.2rem"},
        lineHeight: 1.6,
    },
};

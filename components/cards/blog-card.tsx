'use client'
import React from "react";
import Image from "next/image";
import {Box, Typography, Card, CardOverflow, AspectRatio, Chip, Avatar, Button, Divider} from "@mui/joy";
import {ArrowOutward} from "@mui/icons-material";
import {useRouter} from 'next/navigation';
import {BlogPost} from "@/lib/posts/blog-type";


export default function BlogCard({post}: { post: BlogPost }) {
    const router = useRouter();
    console.log(post)
    return (
        <Card variant="soft" sx={styles.card} onClick={() => router.push(`blog/${post.slug}`)}>
            <CardOverflow>
                <AspectRatio ratio="1.6">
                    <Image
                        src={post.image_url}
                        alt={post.title}
                        fill
                        style={{objectFit: "cover"}}/>
                    <Box sx={styles.imageOverlay}/>
                </AspectRatio>
            </CardOverflow>
            <Box sx={{pt: 2, display: "flex", gap: 1, alignItems: "center"}}>
                <Chip size="sm" variant="solid" sx={{bgcolor: "#6236FF", color: "white"}}>
                    {post.category}
                </Chip>
                <Typography level="body-xs" textColor="neutral.500">
                    {post.published}
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

            <Divider sx={{my: 2, opacity: 0.1}}/>

            <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>

                <Box sx={{display: "flex", gap: 1.5, alignItems: "center"}}>

                    <Avatar src={post.authors[0]?.avatar_url} size="sm" variant="outlined"/>

                    <Typography level="body-xs" textColor="neutral.700">
                        {post.authors[0]?.name} {post.authors[0]?.last_name}
                    </Typography>

                </Box>

                <Button variant="plain" endDecorator={<ArrowOutward fontSize="small"/>} sx={styles.readMoreButton}>
                    Leer
                </Button>

            </Box>
        </Card>

    );
}

const styles = {
    card: {
        height: "100%",
        backgroundColor: "white",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
        },
        cursor: "pointer",
    },

    imageOverlay: {
        position: "absolute",
        inset: 0,
        background:
            "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
    },

    cardTitle: {
        color: "black",
        fontSize: "1.25rem",
        fontWeight: "bold",
        mt: 1,
        mb: 1,
        lineHeight: 1.3,
    },

    cardExcerpt: {
        color: "neutral.500",
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
    },

    readMoreButton: {
        fontWeight: 600,
        color: "#6236FF",
        "&:hover": {
            bgcolor: "transparent",
            textDecoration: "underline",
        },
    },
};

import React from "react";
import { Box, Typography } from "@mui/joy";
import Star from "@mui/icons-material/Star";

interface ReviewCardProps {
    name: string;
    review: string;
    rating: number;
}

export default function ReviewCard({
                                       name,
                                       review,
                                       rating,
                                   }: ReviewCardProps) {
    return (
        <Box sx={styles.card}>

            <Box sx={styles.stars}>
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        sx={{
                            fontSize: 22,
                            color: i < rating ? "#FFD700" : "rgba(255,255,255,0.2)",
                        }}
                    />
                ))}
            </Box>


            <Typography level="body-lg" sx={styles.review}>
                “{review}”
            </Typography>


            <Typography level="title-md" sx={styles.name}>
                {name}
            </Typography>
        </Box>
    );
}

const styles = {
    card: {
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(12px)",
        borderRadius: "24px",
        padding: 4,
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "all 0.4s ease",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.2)",
        },
    },

    stars: {
        display: "flex",
        gap: 0.5,
        mb: 2,
    },

    review: {
        color: "rgba(255,255,255,0.9)",
        lineHeight: 1.7,
        mb: 3,
        flexGrow: 1,
    },

    name: {
        color: "white",
        fontWeight: 700,
    },
};

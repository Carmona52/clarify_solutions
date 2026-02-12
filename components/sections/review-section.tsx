import React from "react";
import { Box, Typography, Grid } from "@mui/joy";
import ReviewCard from "@/components/cards/review-card";

interface Review {
    name: string;
    review: string;
    rating: number;
}

const reviews: Review[] = [
    {
        name: "María Fernández",
        review:
            "Clarify transformó completamente nuestra estrategia digital. Ahora tenemos procesos claros y resultados medibles.",
        rating: 5,
    },
    {
        name: "Carlos Méndez",
        review:
            "Equipo profesional y altamente estratégico. Nos ayudaron a crecer de forma estructurada.",
        rating: 5,
    },
    {
        name: "Laura Gómez",
        review:
            "La claridad en sus procesos marcó la diferencia. Totalmente recomendados.",
        rating: 4,
    },
];

export default function ReviewSection() {
    return (
        <Box
            component="section"
            sx={{
                py: { xs: 10, md: 14 },
                px: { xs: 3, md: 8, lg: 12 },
                position: "relative",
            }}
        >
            {/* Header */}
            <Box
                sx={{
                    textAlign: "center",
                    maxWidth: "700px",
                    mx: "auto",
                    mb: 8,
                }}
            >
                <Typography
                    level="body-sm"
                    sx={{
                        color: "#A78BFA",
                        fontWeight: 700,
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        mb: 2,
                    }}
                >
                    Testimonios
                </Typography>

                <Typography
                    level="h2"
                    sx={{
                        color: "white",
                        fontSize: { xs: "2.2rem", md: "3rem" },
                        fontWeight: 800,
                        lineHeight: 1.1,
                        mb: 3,
                    }}
                >
                    Lo que dicen nuestros clientes
                </Typography>

                <Typography
                    level="body-lg"
                    sx={{
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.8,
                    }}
                >
                    Empresas que confiaron en Clarify Solutions y hoy cuentan
                    con procesos claros y resultados medibles.
                </Typography>
            </Box>

            {/* Reviews Grid */}
            <Grid container spacing={4}>
                {reviews.map((item, index) => (
                    <Grid xs={12} sm={6} md={4} key={index}>
                        <ReviewCard
                            name={item.name}
                            review={item.review}
                            rating={item.rating}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

"use client";

import { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Typography,
    Stack,
    Alert,
} from "@mui/joy";

interface ContactFormProps {
    onSubmit?: (data: {
        name: string;
        email: string;
        company: string;
        message: string;
    }) => Promise<void> | void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            if (onSubmit) {
                await onSubmit(form);
            } else {
                console.log("Form Data:", form);
            }

            setSuccess(true);
            setForm({
                name: "",
                email: "",
                company: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                maxWidth: 700,
                mx: "auto",
                p: { xs: 3, md: 5 },
                borderRadius: "24px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
            }}
        >
            <Stack spacing={3}>
                <Typography
                    level="h2"
                    sx={{ fontWeight: 800, color: "white" }}
                >
                    Hablemos de tu crecimiento
                </Typography>

                <Typography level="body-md" sx={{ color: "neutral.300" }}>
                    Cuéntanos sobre tu proyecto y te ayudaremos a estructurarlo con claridad.
                </Typography>

                <FormControl required>
                    <FormLabel sx={{ color: "neutral.300" }}>
                        Nombre
                    </FormLabel>
                    <Input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        variant="soft"
                    />
                </FormControl>

                <FormControl required>
                    <FormLabel sx={{ color: "neutral.300" }}>
                        Correo electrónico
                    </FormLabel>
                    <Input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="correo@empresa.com"
                        variant="soft"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel sx={{ color: "neutral.300" }}>
                        Empresa
                    </FormLabel>
                    <Input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                        variant="soft"
                    />
                </FormControl>

                <FormControl required>
                    <FormLabel sx={{ color: "neutral.300" }}>
                        Mensaje
                    </FormLabel>
                    <Textarea
                        name="message"
                        minRows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe tu situación actual y qué deseas lograr..."
                        variant="soft"
                    />
                </FormControl>

                <Button
                    type="submit"
                    size="lg"
                    loading={loading}
                    sx={{
                        mt: 2,
                        fontWeight: 700,
                    }}
                >
                    Enviar mensaje
                </Button>

                {success && (
                    <Alert color="success" variant="soft">
                        Hemos recibido tu mensaje. Te contactaremos pronto.
                    </Alert>
                )}
            </Stack>
        </Box>
    );
}

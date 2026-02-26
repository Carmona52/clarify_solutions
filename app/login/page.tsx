"use client";

import {
    Box, Button, FormControl, FormLabel, Input,
    Typography, Card, Stack, Divider
} from "@mui/joy";
import {login} from "./actions";
import {useState} from "react";
import LockPersonIcon from '@mui/icons-material/LockPerson';

export default function LoginPage() {
    const [loading, setLoading] = useState(false);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                px: 2,
            }}>
            <Card
                variant="outlined"
                sx={{
                    width: "100%",
                    maxWidth: 400,
                    p: 4,
                    boxShadow: "lg",
                    borderRadius: "xl",
                }}>
                <Stack spacing={1} sx={{mb: 3, textAlign: "center"}}>
                    <Box sx={{display: 'flex', justifyContent: 'center', mb: 1}}>
                        <LockPersonIcon sx={{fontSize: 40, color: 'primary.main'}}/>
                    </Box>
                    <Typography level="h3">Bienvenido</Typography>
                    <Typography level="body-sm">
                        Ingresa tus credenciales para acceder al panel
                    </Typography>
                </Stack>

                <Divider sx={{mb: 3}}/>

                <form
                    action={async (formData) => {
                        setLoading(true);
                        await login(formData);
                        setLoading(false);
                    }}>
                    <Stack spacing={2.5}>
                        <FormControl required>
                            <FormLabel>Correo electrónico</FormLabel>
                            <Input
                                name="email"
                                type="email"
                                placeholder="admin@tuempresa.com"
                                variant="outlined"
                            />
                        </FormControl>

                        <FormControl required>
                            <FormLabel>Contraseña</FormLabel>
                            <Input
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                variant="outlined"
                            />
                        </FormControl>

                        <Button
                            type="submit"
                            loading={loading}
                            fullWidth
                            sx={{mt: 1}}>
                            Iniciar sesión
                        </Button>
                    </Stack>
                </form>
            </Card>

            <Typography level="body-xs" sx={{mt: 3, color: 'text.tertiary'}}>
                &copy; {new Date().getFullYear()} Tu Blog Admin - Protegido por Supabase
            </Typography>
        </Box>
    );
}
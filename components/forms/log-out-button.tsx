"use client";

import {Button} from "@mui/joy";
import {Logout} from "@mui/icons-material";
import {supabaseConfig} from "@/lib/supabase-client";
import {useRouter} from "next/navigation";
import {useNotification} from "@/hooks/use-notification";

export default function LogoutButton() {
    const router = useRouter();
    const {notify, NotificationComponent} = useNotification();

    const handleLogout = async () => {
        try {
            // 1. Aviso a Supabase para invalidar la sesión en el servidor
            await supabaseConfig.auth.signOut();

            // 2. Limpieza manual de cookies de Supabase (por si el signOut falla en borrarlas)
            // Las cookies de Supabase suelen empezar por "sb-"
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i];
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
                if (name.startsWith("sb-")) {
                    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
                }
            }

            // 3. Redirección forzada
            window.location.href = "/login";
        } catch (error) {
            console.error("Error crítico en logout:", error);
        }
    };

    return (
        <>
            <Button
                variant="soft"
                color="danger"
                startDecorator={<Logout/>}
                onClick={handleLogout}
            >
                Salir
            </Button>
            {NotificationComponent}
        </>
    );
}
"use client";

import { Button } from "@mui/joy";
import { Logout } from "@mui/icons-material";
import { supabaseConfig } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";
import { useNotification } from "@/hooks/use-notification";

export default function LogoutButton() {
    const router = useRouter();
    const { notify, NotificationComponent } = useNotification();

    const handleLogout = async () => {
        try {
            const { error } = await supabaseConfig.auth.signOut();
            if (error) throw error;

            notify("Cerrando sesión...", "neutral");

            setTimeout(() => {
                router.push("/login");
                router.refresh();
            }, 800);
        } catch (error) {
            notify("Error al cerrar sesión", "danger");
        }
    };

    return (
        <>
            <Button
                variant="soft"
                color="danger"
                startDecorator={<Logout />}
                onClick={handleLogout}
            >
                Salir
            </Button>
            {NotificationComponent}
        </>
    );
}
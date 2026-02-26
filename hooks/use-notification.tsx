"use client";

import {useState, useCallback} from "react";
import {Snackbar, Typography, Stack} from "@mui/joy";
import {CheckCircle, Error as ErrorIcon, Warning, Info} from "@mui/icons-material";

type NotificationType = "success" | "danger" | "warning" | "neutral";

export function useNotification() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState<NotificationType>("success");

    const notify = useCallback((msg: string, variant: NotificationType = "success") => {
        setMessage(msg);
        setType(variant);
        setOpen(true);
    }, []);

    const getIcon = () => {
        switch (type) {
            case "success":
                return <CheckCircle/>;
            case "danger":
                return <ErrorIcon/>;
            case "warning":
                return <Warning/>;
            default:
                return <Info/>;
        }
    };

    const NotificationComponent = (
        <Snackbar
            autoHideDuration={4000}
            open={open}
            variant="soft"
            color={type}
            onClose={() => setOpen(false)}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            startDecorator={getIcon()}
            sx={{mt: 10}}>
            <Typography level="body-sm">
                {message}
            </Typography>
        </Snackbar>
    );

    return {notify, NotificationComponent};
}
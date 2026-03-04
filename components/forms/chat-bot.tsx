'use client'

import {useState, useEffect, useRef} from "react";
import {
    Box,
    Sheet,
    Typography,
    IconButton,
    Input,
    Button,
    Stack,
    CircularProgress
} from "@mui/joy";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import {searchAnswers} from "@/lib/chat-bot/find-answer";
import {cleanAndTokenize} from "@/lib/chat-bot/utils";


export default function FloatingChatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        {role: "bot", text: "Hola 👋 Soy el asistente de Clarify. ¿En qué puedo ayudarte?"}
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const KNOWN_KEYWORDS = ["hola", "precios", "costos", "planes", "contacto", "horario", "ubicacion", "ayuda"];
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userText = input.trim();
        setInput("");

        setMessages((prev) => [...prev, {role: "user", text: userText}]);


        const tokens = cleanAndTokenize(userText);
        const keywordToSearch = tokens.find(token => KNOWN_KEYWORDS.includes(token));
        if (!keywordToSearch) {
            setIsLoading(true);
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    role: "bot",
                    text: "No estoy seguro de cómo ayudarte con eso. Intenta preguntando por 'precios', 'contacto' o 'planes'."
                }]);
                setIsLoading(false);
            }, 600);
            return;
        }

        if (keywordToSearch === "hola") {
            setMessages(prev => [...prev, { role: "bot", text: "¡Hola! ¿En qué puedo ayudarte hoy?" }]);
            return;
        }
        setIsLoading(true);

        try {
            const result = await searchAnswers(keywordToSearch);
            const botText = result
                ? result
                : "Entiendo que preguntas por " + keywordToSearch + ", pero no tengo esa información a la mano ahora mismo.";

            setMessages((prev) => [...prev, {role: "bot", text: botText}]);
        } catch (error) {
            console.error("Error en handleSend:", error);
            setMessages((prev) => [...prev, {
                role: "bot",
                text: "Lo siento, tuve un problema al conectar con mi base de datos."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {!open && (
                <IconButton
                    onClick={() => setOpen(true)}
                    sx={{
                        position: "fixed", bottom: 24, right: 24, zIndex: 2,
                        borderRadius: "50%", width: 96, height: 96, boxShadow: "lg", p: 0
                    }}>
                    <Image src="/icon-chat.png" alt="Chat Assistant" fill style={{objectFit: "cover"}}/>
                </IconButton>
            )}

            {open && (
                <Sheet
                    sx={{
                        position: "fixed", bottom: 24, right: 24,
                        width: {xs: "90%", sm: 380}, height: 500,
                        borderRadius: "xl", boxShadow: "xl", display: "flex",
                        flexDirection: "column", overflow: "hidden", zIndex: 2,
                    }}>
                    <Box sx={{
                        bgcolor: "primary.600",
                        color: "white",
                        p: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <Typography fontWeight={600} sx={{color: "white", fontSize: 16}}>
                            Asistente Clarify
                        </Typography>
                        <IconButton size="sm" onClick={() => setOpen(false)} sx={{color: "white"}}>
                            <CloseIcon sx={{color: "white"}}/>
                        </IconButton>
                    </Box>

                    <Box
                        ref={scrollRef}
                        sx={{
                            flex: 1,
                            p: 2,
                            overflowY: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: 1.5,
                            bgcolor: "#f9f9f9"
                        }}>
                        {messages.map((msg, index) => (
                            <Box
                                key={index}
                                sx={{
                                    alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                                    bgcolor: msg.role === "user" ? "primary.500" : "white",
                                    px: 2, py: 1, borderRadius: "lg", maxWidth: "80%", boxShadow: "sm"
                                }}
                            >
                                <Typography level="body-sm" sx={{color: msg.role === "user" ? "#fff" : "text.primary"}}>
                                    {msg.text}
                                </Typography>
                            </Box>
                        ))}

                        {isLoading && (
                            <Box sx={{alignSelf: "flex-start", mt: 1}}>
                                <CircularProgress size="sm" variant="plain"/>
                            </Box>
                        )}
                    </Box>

                    <Stack direction="row" spacing={1} sx={{p: 2, borderTop: '1px solid #eee'}}>
                        <Input
                            fullWidth
                            placeholder="Escribe tu mensaje..."
                            value={input}
                            autoFocus
                            disabled={isLoading}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                        />
                        <Button
                            loading={isLoading}
                            onClick={handleSend}
                            variant="solid"
                        >
                            <SendIcon/>
                        </Button>
                    </Stack>
                </Sheet>
            )}
        </>
    );
}
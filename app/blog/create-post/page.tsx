"use client";

import {useState} from "react";
import {
    Box,
    Input,
    Button,
    Typography,
    Card,
    AspectRatio,
    Divider,
} from "@mui/joy";
import PostEditor from "@/components/edit/create-posts";
import {createPost} from "@/lib/posts/create-post";
import {uploadImage} from "@/lib/upload-image";

export default function CreatePostPage() {
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [coverUrl, setCoverUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);

            await createPost({
                title,
                excerpt,
                content,
                image_url: coverUrl ?? undefined,
                author_id: "e4081bef-0898-4313-9fa1-0b7d39d32d7a",
                category: "prueba",
            });

            alert("Post creado con éxito");
        } catch (err) {
            console.error(err);
            alert("Error al guardar");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                mx: "auto",
                py: 6,
                px: 5,
            }}
        >
            <Box sx={{mb: 4}}>
                <Typography level="h2" sx={{mb: 1, color: 'white'}}>
                    Crear nuevo artículo
                </Typography>
                <Typography level="body-sm" sx={{mb: 1, color: 'white'}}>
                    Escribe y publica tu contenido
                </Typography>
            </Box>

            <Card
                variant="outlined"
                sx={{
                    p: 4,
                    borderRadius: "xl",
                    boxShadow: "sm",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                }}
            >
                {/* Título */}
                <Box>
                    <Typography level="title-sm" sx={{mb: 1}}>
                        Título
                    </Typography>
                    <Input
                        size="lg"
                        placeholder="Escribe un título atractivo..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Box>

                {/* Resumen */}
                <Box>
                    <Typography level="title-sm" sx={{mb: 1}}>
                        Resumen
                    </Typography>
                    <Input
                        placeholder="Breve descripción del artículo..."
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                    />
                </Box>

                {/* Imagen de portada */}
                <Box>
                    <Typography level="title-sm" sx={{mb: 1}}>
                        Imagen de portada
                    </Typography>

                    {coverUrl && (
                        <AspectRatio
                            ratio="16/9"
                            sx={{
                                borderRadius: "lg",
                                overflow: "hidden",
                                mb: 2,
                            }}
                        >
                            <img src={coverUrl} alt="Preview portada"/>
                        </AspectRatio>
                    )}

                    <Button component="label" variant="soft">
                        Subir imagen
                        <input
                            hidden
                            type="file"
                            accept="image/*"
                            onChange={async (e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;

                                const url = await uploadImage(file);
                                setCoverUrl(url);
                            }}
                        />
                    </Button>
                </Box>

                <Divider/>

                <Box>
                    <Typography level="title-sm" sx={{mb: 2}}>
                        Contenido
                    </Typography>
                    <PostEditor content={content} onChange={setContent}/>
                </Box>

                <Box sx={{display: "flex", justifyContent: "flex-end", mt: 2, gap:3}}>

                        <Button size="lg" color='danger'>
                            Cancelar
                        </Button>
                        <Button
                            className='hover:animate-jelly'
                            size="lg"
                            loading={loading}
                            onClick={handleSubmit}>
                            Publicar artículo
                        </Button>

                </Box>
            </Card>
        </Box>
    );
}

"use client";

import {useState} from "react";
import {
    Box, Input, Button, Typography, Card, AspectRatio,
    Divider, Select, Option, Stack, Chip, Skeleton
} from "@mui/joy";
import PostEditor from "@/components/forms/create-posts";
import {createPost} from "@/lib/posts/create-post";
import {uploadImage} from "@/lib/upload-image";
import ImageCropperModal from "@/components/modals/image-cropper";
import {useNotification} from "@/hooks/use-notification";
import {useRouter} from "next/navigation";

const CATEGORIES = ["Estrategia", "Tecnología", "Crecimiento", "Diseño", "Marketing", "Prueba"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export default function CreatePostPage() {
    const router = useRouter();
    const {notify, NotificationComponent} = useNotification();

    // Estados del formulario
    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [coverUrl, setCoverUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // Estados de imagen y modal
    const [currentImagePath, setCurrentImagePath] = useState<string | null>(null);
    const [tempImage, setTempImage] = useState<string | null>(null);
    const [isCropperOpen, setIsCropperOpen] = useState(false);

    const handleCropFinished = async (croppedBlob: Blob) => {
        if (croppedBlob.size > MAX_FILE_SIZE) {
            notify("La imagen es demasiado pesada (máx 5MB)", "danger");
            return;
        }

        setLoading(true);
        try {
            const result = await uploadImage(croppedBlob, currentImagePath || undefined);
            setCoverUrl(result.url);
            setCurrentImagePath(result.path);
            notify("Imagen de portada lista", "success");
        } catch (error) {
            notify("Error al subir la imagen", "danger");
        } finally {
            setLoading(false);
            setIsCropperOpen(false);
        }
    };

    const handleSubmit = async () => {
        if (!title.trim() || !content.trim()) {
            notify("Título y contenido requeridos", "warning");
            return;
        }

        setLoading(true);
        try {
            await createPost({
                title,
                excerpt,
                content,
                image_url: coverUrl ?? undefined,
                category: selectedCategories.join(", "),
            });

            notify("¡Post publicado!", "success");
            setTimeout(() => router.push("/admin/dashboard"), 1500);
        } catch (err: any) {
            notify(err.message, "danger");
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryChange = (_e: any, newValue: string[] | null) => {
        if (newValue && newValue.length <= 3) {
            setSelectedCategories(newValue);
        }
    };

    return (
        <Box sx={{width: "70%", mx: "auto", py: 6, px: 5}}>
            <Box sx={{mb: 4}}>
                <Typography level="h2" sx={{mb: 1, color: 'white'}}>
                    Crear nuevo artículo
                </Typography>
                <Typography level="body-sm" sx={{color: 'white'}}>
                    Diseña y publica tu contenido para la comunidad
                </Typography>
            </Box>

            <Card variant="outlined" sx={{p: 4, borderRadius: "xl", boxShadow: "sm", gap: 3}}>
                <Box>
                    <Typography level="title-sm" sx={{mb: 1}}>Título</Typography>
                    <Input
                        size="lg"
                        placeholder="Título del post..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Box>

                <Box>
                    <Typography level="title-sm" sx={{mb: 1}}>Resumen (Excerpt)</Typography>
                    <Input
                        placeholder="Una breve descripción..."
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                    />
                </Box>

                <Box>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{mb: 1}}>
                        <Typography level="title-sm">Categorías (Máx. 3)</Typography>
                        <Typography level="body-xs" color={selectedCategories.length === 3 ? "danger" : "neutral"}>
                            {selectedCategories.length} / 3
                        </Typography>
                    </Stack>
                    <Select
                        multiple
                        placeholder="Selecciona..."
                        value={selectedCategories}
                        onChange={handleCategoryChange}
                        renderValue={(selected) => (
                            <Box sx={{display: 'flex', gap: '0.25rem'}}>
                                {selected.map((item) => (
                                    <Chip variant="soft" color="primary" key={item.value}>{item.label}</Chip>
                                ))}
                            </Box>
                        )}
                    >
                        {CATEGORIES.map((cat) => (
                            <Option
                                key={cat}
                                value={cat.toLowerCase()}
                                disabled={selectedCategories.length >= 3 && !selectedCategories.includes(cat.toLowerCase())}
                            >
                                {cat}
                            </Option>
                        ))}
                    </Select>
                </Box>

                <Box>
                    <Typography level="title-sm" sx={{mb: 1}}>Imagen de portada</Typography>
                    <AspectRatio ratio="16/9"
                                 sx={{borderRadius: "lg", overflow: "hidden", mb: 2, bgcolor: 'background.level2'}}>
                        <Skeleton loading={loading}>
                            {coverUrl ? (
                                <img src={coverUrl} alt="Portada" style={{objectFit: 'cover'}}/>
                            ) : (
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%'
                                }}>
                                    <Typography level="body-xs">No hay imagen seleccionada</Typography>
                                </Box>
                            )}
                        </Skeleton>
                    </AspectRatio>

                    <Button component="label" variant="soft" disabled={loading}>
                        {coverUrl ? "Cambiar imagen" : "Subir imagen"}
                        <input
                            hidden
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    setTempImage(URL.createObjectURL(file));
                                    setIsCropperOpen(true);
                                    e.target.value = "";
                                }
                            }}
                        />
                    </Button>
                </Box>

                <Divider/>

                <Box>
                    <Typography level="title-sm" sx={{mb: 2}}>Contenido del artículo</Typography>
                    <PostEditor content={content} onChange={setContent}/>
                </Box>

                <Box sx={{display: "flex", justifyContent: "flex-end", mt: 2, gap: 2}}>
                    <Button size="lg" color='neutral' variant="plain" onClick={() => router.back()}>
                        Cancelar
                    </Button>
                    <Button
                        size="lg"
                        loading={loading}
                        onClick={handleSubmit}
                        sx={{minWidth: 200}}
                    >
                        Publicar artículo
                    </Button>
                </Box>
            </Card>

            {NotificationComponent}

            {tempImage && (
                <ImageCropperModal
                    image={tempImage}
                    open={isCropperOpen}
                    onClose={() => setIsCropperOpen(false)}
                    onCropComplete={handleCropFinished}
                />
            )}
        </Box>
    );
}
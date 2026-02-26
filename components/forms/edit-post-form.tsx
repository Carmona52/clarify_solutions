"use client";

import { useState } from "react";
import {
    Box, Input, Button, Typography, Card, AspectRatio, Divider,
    Stack, FormControl, FormLabel, Skeleton, Switch, Modal, ModalDialog, DialogTitle, DialogContent, DialogActions
} from "@mui/joy";
import { DeleteForever, Visibility, VisibilityOff, Save, Warning } from '@mui/icons-material';
import { useNotification } from "@/hooks/use-notification"
import PostEditor from "@/components/forms/create-posts";
import ImageCropperModal from "@/components/modals/image-cropper";
import { uploadImage } from "@/lib/upload-image";
import { useRouter } from "next/navigation";
import { updatePostAction, deletePostComplete } from "@/lib/posts/edit-post";

export default function EditPostForm({ post }: { post: any }) {
    const router = useRouter();
    const { notify, NotificationComponent } = useNotification();

    const [loading, setLoading] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    // Estados del Formulario
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [isPublished, setIsPublished] = useState(post.published ?? true);
    const [coverUrl, setCoverUrl] = useState(post.image_url);
    const [currentImagePath, setCurrentImagePath] = useState(post.image_url);

    const [tempImage, setTempImage] = useState<string | null>(null);
    const [isCropperOpen, setIsCropperOpen] = useState(false);

    const handleUpdate = async () => {
        setLoading(true);
        try {
            await updatePostAction(post.id, {
                title, content, published: isPublished, image_url: coverUrl,
            });
            notify("Cambios guardados con éxito", "success");
            setTimeout(() => { router.push("/admin/dashboard"); router.refresh(); }, 1000);
        } catch (err) {
            notify("Error al guardar cambios", "danger");
        } finally { setLoading(false); }
    };

    const handleDelete = async () => {
        setOpenDeleteModal(false);
        setLoading(true);
        try {
            await deletePostComplete(post.id, coverUrl);
            notify("Post eliminado correctamente", "neutral");
            setTimeout(() => { router.push("/admin/dashboard"); router.refresh(); }, 1000);
        } catch (err) {
            notify("No se pudo eliminar el post", "danger");
        } finally { setLoading(false); }
    };

    return (
        <Box sx={{ width: '70%', mx: "auto", py: 4, px: 2 }}>
            <Typography level="h2" sx={{ mb: 3, color: 'white', textAlign: 'center' }}>Editar Artículo</Typography>

            <Card variant="outlined" sx={{ p: 4, gap: 3 }}>
                {/* Selector de visibilidad */}
                <FormControl orientation="horizontal" sx={{ justifyContent: 'space-between', alignItems: 'center', bgcolor: 'background.level1', p: 2, borderRadius: 'md' }}>
                    <Box>
                        <FormLabel sx={{ mb: 0 }}>Estado de publicación</FormLabel>
                        <Typography level="body-xs">{isPublished ? "Público" : "Borrador"}</Typography>
                    </Box>
                    <Switch checked={isPublished} onChange={(e) => setIsPublished(e.target.checked)} color={isPublished ? "success" : "neutral"} endDecorator={isPublished ? <Visibility /> : <VisibilityOff />} />
                </FormControl>

                <FormControl>
                    <FormLabel>Título</FormLabel>
                    <Input size="lg" value={title} onChange={(e) => setTitle(e.target.value)} />
                </FormControl>

                {/* Zona de Imagen */}
                <Box>
                    <AspectRatio ratio="16/9" sx={{ borderRadius: "lg", mb: 2 }}>
                        <Skeleton loading={loading}>
                            {coverUrl ? <img src={coverUrl} style={{ objectFit: 'cover' }} /> : <Typography>Sin imagen</Typography>}
                        </Skeleton>
                    </AspectRatio>
                    <Button component="label" variant="outlined" color="neutral" fullWidth sx={{ borderStyle: 'dashed' }}>
                        Cambiar Portada
                        <input hidden type="file" accept="image/*" onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) { setTempImage(URL.createObjectURL(file)); setIsCropperOpen(true); }
                        }} />
                    </Button>
                </Box>

                <Divider />

                <Box sx={{ minHeight: 400 }}>
                    <PostEditor content={content} onChange={setContent} />
                </Box>

                <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ mt: 2 }}>
                    <Button variant="soft" color="danger" startDecorator={<DeleteForever />} onClick={() => setOpenDeleteModal(true)} loading={loading}>Eliminar</Button>
                    <Stack direction="row" spacing={1.5}>
                        <Button variant="plain" color="neutral" onClick={() => router.back()}>Cancelar</Button>
                        <Button variant="solid" color="primary" startDecorator={<Save />} loading={loading} onClick={handleUpdate}>Guardar</Button>
                    </Stack>
                </Stack>
            </Card>

            {NotificationComponent}

            <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
                <ModalDialog role="alertdialog">
                    <DialogTitle><Warning /> Confirmar</DialogTitle>
                    <DialogContent>¿Estás seguro de borrar este artículo permanentemente?</DialogContent>
                    <DialogActions>
                        <Button variant="solid" color="danger" onClick={handleDelete}>Borrar</Button>
                        <Button variant="plain" color="neutral" onClick={() => setOpenDeleteModal(false)}>Cancelar</Button>
                    </DialogActions>
                </ModalDialog>
            </Modal>

            {tempImage && (
                <ImageCropperModal
                    image={tempImage} open={isCropperOpen}
                    onClose={() => setIsCropperOpen(false)}
                    onCropComplete={async (blob) => {
                        setLoading(true);
                        try {
                            const res = await uploadImage(blob, currentImagePath);
                            setCoverUrl(res.url);
                            setCurrentImagePath(res.path);
                            notify("Imagen actualizada", "success");
                        } catch (e) { notify("Error al subir imagen", "danger"); }
                        finally { setLoading(false); setIsCropperOpen(false); }
                    }}
                />
            )}
        </Box>
    );
}
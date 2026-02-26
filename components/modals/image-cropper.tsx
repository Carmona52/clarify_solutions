'use client'

import { useState, useCallback } from 'react'
import Cropper from 'react-easy-crop'
import { Modal, ModalDialog, Typography, Button, Box, Slider, Stack } from '@mui/joy'

interface Props {
    image: string;
    open: boolean;
    onClose: () => void;
    onCropComplete: (croppedImage: Blob) => void;
}

export default function ImageCropperModal({ image, open, onClose, onCropComplete }: Props) {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null)

    const onCropChange = (crop: any) => setCrop(crop)
    const onZoomChange = (zoom: number) => setZoom(zoom)

    const onCropCompleteInternal = useCallback((_: any, pixels: any) => {
        setCroppedAreaPixels(pixels)
    }, [])

    const handleConfirm = async () => {
        try {
            const croppedBlob = await getCroppedImg(image, croppedAreaPixels)
            onCropComplete(croppedBlob)
            onClose()
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <Modal open={open} onClose={onClose}>
            <ModalDialog sx={{ width: '100%', maxWidth: 600, p: 0, overflow: 'hidden' }}>
                <Box sx={{ position: 'relative', width: '100%', height: 400, bgcolor: '#333' }}>
                    <Cropper
                        image={image}
                        crop={crop}
                        zoom={zoom}
                        aspect={16 / 9}
                        onCropChange={onCropChange}
                        onCropComplete={onCropCompleteInternal}
                        onZoomChange={onZoomChange}
                    />
                </Box>
                <Box sx={{ p: 3 }}>
                    <Typography level="title-md" sx={{ mb: 2 }}>Ajustar imagen de portada</Typography>
                    <Stack spacing={2}>
                        <Box>
                            <Typography level="body-xs">Zoom</Typography>
                            <Slider
                                value={zoom}
                                min={1}
                                max={3}
                                step={0.1}
                                onChange={(_, newValue) => setZoom(newValue as number)}
                            />
                        </Box>
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <Button variant="plain" color="neutral" onClick={onClose}>Cancelar</Button>
                            <Button onClick={handleConfirm}>Confirmar Recorte</Button>
                        </Stack>
                    </Stack>
                </Box>
            </ModalDialog>
        </Modal>
    )
}

// FUNCIÓN AUXILIAR PARA CORTAR LA IMAGEN (Pura lógica de Canvas)
async function getCroppedImg(imageSrc: string, pixelCrop: any): Promise<Blob> {
    const image = new Image()
    image.src = imageSrc
    await new Promise((resolve) => (image.onload = resolve))

    const canvas = document.createElement('canvas')
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height
    const ctx = canvas.getContext('2d')

    if (!ctx) throw new Error('No se pudo obtener el contexto del canvas')

    ctx.drawImage(
        image,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
    )

    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            if (blob) resolve(blob)
        }, 'image/webp', 0.9)
    })
}
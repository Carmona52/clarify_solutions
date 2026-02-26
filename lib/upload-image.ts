import {supabaseConfig} from "@/lib/supabase-client";
import imageCompression from "browser-image-compression";

export async function uploadImage(file: File | Blob, oldPath?: string | null) {
    try {
        if (oldPath) {
            const fileNameToDelete = oldPath.includes('/') ? oldPath.split('/').pop() : oldPath;
            if (fileNameToDelete) {
                const {error: deleteError} = await supabaseConfig.storage
                    .from("posts")
                    .remove([fileNameToDelete]);

                if (deleteError) console.warn("No se pudo borrar la imagen vieja:", deleteError);
            }
        }

        const options = {
            maxSizeMB: 0.2,
            maxWidthOrHeight: 1200,
            useWebWorker: true,
            fileType: "image/webp",
        };

        const compressedFile = await imageCompression(file as File, options);


        const fileName = `${Date.now()}-cover.webp`;

        const {error: uploadError} = await supabaseConfig.storage
            .from("posts")
            .upload(fileName, compressedFile);

        if (uploadError) throw uploadError;

        const {data} = supabaseConfig.storage
            .from("posts")
            .getPublicUrl(fileName);

        return {
            url: data.publicUrl,
            path: fileName
        };
    } catch (error) {
        console.error("Error en uploadAndOptimizeImage:", error);
        throw error;
    }
}
"use server"; // Indica que esto solo corre en el servidor

import {createServerClient} from "@supabase/ssr";
import {cookies} from "next/headers";

interface CreatePostParams {
    title: string;
    content: string;
    excerpt: string;
    image_url?: string;
    category?: string;
}

export async function createPost({
                                     title,
                                     content,
                                     excerpt,
                                     image_url,
                                     category,
                                 }: CreatePostParams) {
    const cookieStore = await cookies();

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({name, value, options}) =>
                            cookieStore.set(name, value, options)
                        );
                    } catch {

                    }
                },
            },
        }
    );

    const {data: {user}, error: authError} = await supabase.auth.getUser();
    console.log("Intentando publicar con ID:", user?.id);

    if (authError || !user) {
        throw new Error("No se encontró una sesión activa. Por favor, inicia sesión.");
    }

    const slug = title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

    const {data, error} = await supabase
        .from("posts")
        .insert({
            title,
            slug,
            excerpt,
            content,
            image_url,
            category,
            published: true,
            author_id: user.id,
        })
        .select()
        .single();

    if (error) {
        throw new Error(`Error en la base de datos: ${error.message}`);
    }

    return data;
}
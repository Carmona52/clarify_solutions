// app/admin/edit-post/[slug]/page.tsx
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import EditPostForm from '../../../../components/forms/edit-post-form'; // Ruta según tu imagen

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const cookieStore = await cookies();
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        { cookies: { getAll: () => cookieStore.getAll() } }
    );

    const { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

    if (error || !post) {
        console.error("Error buscando post:", error);
        notFound();
    }

    return <EditPostForm post={post} />;
}
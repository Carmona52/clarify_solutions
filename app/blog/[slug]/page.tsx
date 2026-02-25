import { getPostBySlug, getPosts } from "@/lib/posts/get-posts"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import PostView from "./PostView"

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug)

    if (!post) return { title: "Post no encontrado" }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.image_url ? [post.image_url] : [],
            type: "article",
        },
    }
}

export async function generateStaticParams() {
    const posts = await getPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPage(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const post = await getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return <PostView post={post} />
}
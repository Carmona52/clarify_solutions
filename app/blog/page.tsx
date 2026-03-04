import {getPosts} from "@/lib/posts/get-posts";
import {BlogPost} from "@/lib/posts/blog-type";
import {Metadata} from "next";
import BlogView from "./BlogView";

export const metadata: Metadata = {
    title: "Blog | Ideas que impulsan | Clarify",
    description: "Explora noticias, estrategias de crecimiento y tendencias tecnológicas para llevar tu negocio al siguiente nivel con Clarify.",
    keywords: [
        "Clarify",
        "blog de negocios",
        "estrategias empresariales",
        "tendencias tecnológicas",
        "crecimiento de negocio",
        "innovación",
        "marketing digital",
        "emprendimiento",
        "ideas de negocio",
        "transformación digital"
    ],
};

export default async function BlogPage() {
    const posts: BlogPost[] = await getPosts();
    return <BlogView posts={posts}/>;
}
import {getPosts} from "@/lib/posts/get-posts";
import {BlogPost} from "@/lib/posts/blog-type";
import {Metadata} from "next";
import BlogView from "./BlogView";

export const metadata: Metadata = {
    title: "Blog | Ideas que impulsan",
    description: "Noticias, estrategias y tendencias para llevar tu negocio al siguiente nivel.",
};


export const revalidate = 3600;

export default async function BlogPage() {
    const posts: BlogPost[] = await getPosts();
    return <BlogView posts={posts}/>;
}
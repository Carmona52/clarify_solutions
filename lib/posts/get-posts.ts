import {supabaseConfig} from "../supabase-client";
import {BlogPost} from "@/lib/posts/blog-type";

export async function getPosts(): Promise<BlogPost[]> {
    const {data, error} = await supabaseConfig
        .from("posts")
        .select(`
      id,
      title,
      excerpt,
      published,
      image_url,
      category,
      created_at,
      slug,
      profiles (
        name,
        last_name,
        avatar_url
      )
    `)
        .eq("published", true)
        .limit(9)
        .order("created_at", {ascending: false});

    if (error || !data) {
        console.error(error);
        return [];
    }

    return data.map((post: any) => ({
        ...post,
        authors: Array.isArray(post.authors) ? post.authors[0] : post.authors
    })) as BlogPost[];


}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
    const {data, error} = await supabaseConfig
        .from("posts")
        .select(`
          *,
          profiles(
            name,
            last_name,
            avatar_url
          )
        `)
        .eq("slug", slug)
        .single()

    if (error) {
        throw error;
    }


    return data
}


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
      authors(
        name,
        last_name,
        avatar_url
      )
    `)
        .eq("published", true)
        .limit(9)
        .order("created_at", {ascending: false});

    if (error) {
        console.error(error);
        return [];
    }

    return data;

}

export async function getPostById(id: string): Promise<BlogPost> {
    const {data, error} = await supabaseConfig
        .from("posts")
        .select(`
          *,
          authors(
            name,
            last_name,
            avatar_url
          )
        `)
        .eq("id", id)
        .single();

    return data;
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
    const {data, error} = await supabaseConfig
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single()

    return data
}


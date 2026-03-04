export type Profile = {
    name: string;
    last_name: string;
    avatar_url: string;
}

export type BlogPost = {
    id: string;
    title: string;
    excerpt: string;
    image_url: string;
    category: string;
    published: boolean;
    profiles: Profile;
    createdAt?: string;
    slug?: string;
}

export interface Post extends BlogPost {
    content?: string;
    updatedAt?: string;
}

export type sinlgePost = {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image_url: string;
    category: string;
    published: boolean;
    authors: Profile;
    createdAt?: string;
    updatedAt?: string;
}

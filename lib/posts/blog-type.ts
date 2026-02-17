export type Author = {
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
    authors: Author[];
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
    authors: Author;
    createdAt?: string;
    updatedAt?: string;
}

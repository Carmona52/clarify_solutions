'use client'

import {useEffect, useState} from 'react'
import {useParams} from 'next/navigation'
import {Box, Typography, Skeleton} from "@mui/joy"
import {getPostBySlug} from "@/lib/posts/get-posts"
import {Post} from "@/lib/posts/blog-type"
import Image from "next/image"

export default function BlogPage() {
    const params = useParams<{ slug: string }>()
    const [post, setPost] = useState<Post>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchPost() {
            if (!params?.slug) return
            const data = await getPostBySlug(params.slug)
            setPost(data)
            setLoading(false)
        }

        fetchPost()
    }, [params?.slug])

    if (!post && !loading) return <div>No encontrado</div>

    return (
        <Box sx={{maxWidth: '90%', mx: "auto", py: 8, px: 2}}>
            {loading ? (
                <>
                    <Skeleton variant="text" sx={{fontSize: "2rem", mb: 2, width: "70%"}}/>
                    <Skeleton variant="text" sx={{fontSize: "1rem", mb: 4, width: "90%"}}/>
                    <Skeleton variant="rectangular" sx={{width: "100%", height: 400, borderRadius: "16px", mb: 4}}/>
                    <Skeleton variant="text" sx={{width: "100%", height: 200}}/>
                </>
            ) : (
                <>
                    <Typography level="h1" sx={{mb: 2, color:'white', fontSize: '3rem'}}>
                        {post?.title}
                    </Typography>

                    <Typography level="body-lg" sx={{mb: 4, color:'white', fontSize: '1.6rem'}}>
                        {post?.excerpt}
                    </Typography>

                    {post?.image_url && (
                        <Image
                            src={post.image_url}
                            alt={post.title}
                            width={900}
                            height={500}
                            style={{
                                maxWidth: '100%',
                                minWidth: "100%",
                                height: "auto",
                                borderRadius: "16px",
                                marginBottom: "2rem",
                            }}
                        />
                    )}

                    <Box
                        sx={{
                            "& h1": {fontSize: "2rem", fontWeight: 700, mb: 2, color: 'white'},
                            "& h2": {fontSize: "1.6rem", fontWeight: 600, mt: 4, mb: 2, color: 'white'},
                            "& strong": {color: 'white'},
                            "& p": {fontSize:'1.6rem',mb: 2, lineHeight: 1.8, color: 'white'},
                            "& ul": {pl: 3, mb: 2, color: 'white'},
                            "& li": {mb: 1, color: 'white'},
                            "& img": {maxWidth: "100%", borderRadius: "12px", my: 3},
                            "& blockquote": {
                                color: 'white',
                                borderLeft: "4px solid",
                                pl: 2,
                                fontStyle: "italic",
                                my: 3,
                            },
                        }}
                        dangerouslySetInnerHTML={{__html: post?.content ?? ""}}
                    />
                </>
            )}
        </Box>
    )
}
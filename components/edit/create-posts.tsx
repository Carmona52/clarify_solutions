"use client";

import {useEditor, EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import {
    Box,
    IconButton,
    Divider,
    Tooltip,
} from "@mui/joy";
import {
    FormatBold,
    FormatItalic,
    FormatListBulleted,
    FormatListNumbered,
    FormatUnderlined,
    Image as ImageIcon,
    FormatAlignLeft,
    FormatAlignCenter,
    FormatAlignRight,
    Title,
} from "@mui/icons-material";
import {useRef} from "react";
import {uploadImage} from "@/lib/upload-image";

interface Props {
    content: string;
    onChange: (value: string) => void;
}

export default function PostEditor({content, onChange}: Props) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Underline,
            Placeholder.configure({
                placeholder: "Empieza a escribir tu artículo...",
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
        ],
        content,
        immediatelyRender: false,
        onUpdate: ({editor}) => {
            onChange(editor.getHTML());
        },
    });

    if (!editor) return null;

    const handleImageUpload = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            const imageUrl = await uploadImage(file);

            editor.chain().focus().setImage({src: imageUrl}).run();
        } catch (error) {
            console.error("Error subiendo imagen:", error);
        }
    };

    return (
        <Box
            sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: "xl",
                overflow: "hidden",
                backgroundColor: "background.body",
                boxShadow: "sm",
            }}
        >
            {/* Toolbar */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    px: 2,
                    py: 1,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "background.level1",
                }}
            >
                <Tooltip title="Negrita">
                    <IconButton
                        size="sm"
                        variant={editor.isActive("bold") ? "solid" : "soft"}
                        onClick={() => editor.chain().focus().toggleBold().run()}
                    >
                        <FormatBold/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Cursiva">
                    <IconButton
                        size="sm"
                        variant={editor.isActive("italic") ? "solid" : "soft"}
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                    >
                        <FormatItalic/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Subrayado">
                    <IconButton
                        size="sm"
                        variant={editor.isActive("underline") ? "solid" : "soft"}
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                    >
                        <FormatUnderlined/>
                    </IconButton>
                </Tooltip>

                <Divider orientation="vertical"/>

                <Tooltip title="Alinear izquierda">
                    <IconButton
                        size="sm"
                        onClick={() => editor.chain().focus().setTextAlign("left").run()}
                    >
                        <FormatAlignLeft/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Centrar">
                    <IconButton
                        size="sm"
                        onClick={() => editor.chain().focus().setTextAlign("center").run()}
                    >
                        <FormatAlignCenter/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Alinear derecha">
                    <IconButton
                        size="sm"
                        onClick={() => editor.chain().focus().setTextAlign("right").run()}
                    >
                        <FormatAlignRight/>
                    </IconButton>
                </Tooltip>

                <Divider orientation="vertical"/>

                <Tooltip title="Encabezado">
                    <IconButton
                        size="sm"
                        variant={
                            editor.isActive("heading", {level: 2}) ? "solid" : "soft"
                        }
                        onClick={() =>
                            editor.chain().focus().toggleHeading({level: 2}).run()
                        }
                    >
                        <Title/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Lista con viñetas">
                    <IconButton
                        size="sm"
                        variant={editor.isActive("bulletList") ? "solid" : "soft"}
                        onClick={() =>
                            editor.chain().focus().toggleBulletList().run()
                        }
                    >
                        <FormatListBulleted/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Lista numerada">
                    <IconButton
                        size="sm"
                        variant={editor.isActive("orderedList") ? "solid" : "soft"}
                        onClick={() =>
                            editor.chain().focus().toggleOrderedList().run()
                        }
                    >
                        <FormatListNumbered/>
                    </IconButton>
                </Tooltip>

                <Divider orientation="vertical"/>

                <Tooltip title="Insertar imagen">
                    <IconButton
                        size="sm"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <ImageIcon/>
                    </IconButton>
                </Tooltip>

                <input
                    type="file"
                    hidden
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageUpload}
                />
            </Box>

            <Box
                sx={{
                    px: 4,
                    py: 3,
                    minHeight: 300,
                    "& .ProseMirror": {
                        outline: "none",
                        fontSize: "1rem",
                        lineHeight: 1.8,
                    },
                    "& h2": {
                        fontSize: "1.6rem",
                        fontWeight: 700,
                        margin: "1.5rem 0 0.75rem",
                    },
                    "& p": {
                        margin: "0.75rem 0",
                    },
                    "& ul, & ol": {
                        paddingLeft: "1.2rem",
                        margin: "0.75rem 0",
                    },
                    "& img": {
                        maxWidth: "100%",
                        borderRadius: "16px",
                        margin: "1.5rem 0",
                        boxShadow: "md",
                    },
                }}
            >
                <EditorContent editor={editor}/>
            </Box>
        </Box>
    );
}

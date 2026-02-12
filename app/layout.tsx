import type {Metadata} from "next";
import localFont from "next/font/local";
import ThemeRegistry from "@/theme/theme";
import "./globals.css";
import NavBar from "@/components/navigation/navBar";
import Footer from "@/components/navigation/footer";

const hurmeFont = localFont({
    src: [
        {
            path: "./fonts/HurmeGeometricSans2-Regular.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/HurmeGeometricSans2-Hairline.woff",
            weight: "200",
            style: "normal",
        },
        {
            path: "./fonts/HurmeGeometricSans2-Bold.woff",
            weight: "700",
            style: "normal",
        },

        {
            path: "./fonts/HurmeGeometricSans2-HairlineObl.woff",
            weight: "200",
            style: "oblique",
        },
    ],
    variable: "--font-hurme",
    display: "swap",
    preload: true,
    fallback: ["system-ui", "sans-serif"],
    adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
    title: "Clarify Solutions",
    description: "Clarify Solutions, empresa de marketing digital",
    keywords: ["Clarify", "Solutions", "Marketing", "Digital", "Redes Sociales"],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className={hurmeFont.variable}>
        <body
            className="antialiased"
            style={{
                background: "linear-gradient(120deg, #7044ff 0%, #5c2fe3 25%, #4a1dc7 50%, #3d14a6 75%, #330d85 100%)",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                margin: 0,
                fontFamily: "var(--font-hurme), system-ui, sans-serif",
            }}
        >
        <ThemeRegistry>
            <NavBar/>
            <main style={{flex: 1, display: "flex", flexDirection: "column"}}>
                {children}
            </main>
            <Footer/>
        </ThemeRegistry>
        </body>
        </html>
    );
}
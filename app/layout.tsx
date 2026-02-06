import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import ThemeRegistry from "@/theme/theme";
import "./globals.css";
import NavBar from "@/components/navigation/navBar";
import Footer from "@/components/navigation/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Clarify Solutions",
    description: "Clarify Solutions, empresa de marketing digital",
    keywords: ["Clarify", "Solutions", "Clarify Solutions", "Marketing", "Digital", "Marketing Digital", "Redes", "Sociales", "Redes Sociales"],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body style={{
            background: 'linear-gradient(120deg, #7044ff 0%, #5c2fe3 25%, #4a1dc7 50%, #3d14a6 75%, #330d85 100%)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            margin: 0
        }}
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeRegistry>
            <NavBar />
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
            <Footer />
        </ThemeRegistry>
        </body>
        </html>
    );
}

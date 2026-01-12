import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Ahmed | Full Stack Software Engineer",
  description: "Full Stack Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies. View my projects and get in touch.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Mohamed Ahmed" }],
  openGraph: {
    title: "Mohamed Ahmed | Full Stack Software Engineer",
    description: "Full Stack Software Engineer specializing in React, Next.js, TypeScript, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}

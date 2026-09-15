import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Bennamane — Engineering Student",
  description:
    "Engineering student at NHSAST. I build tools that solve real problems — from student platforms to maze-solving robots.",
  openGraph: {
    title: "Mohamed Bennamane — Engineering Student",
    description:
      "Engineering student at NHSAST. I build tools that solve real problems — from student platforms to maze-solving robots.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Bennamane — Engineering Student",
    description:
      "Engineering student at NHSAST. I build tools that solve real problems — from student platforms to maze-solving robots.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}

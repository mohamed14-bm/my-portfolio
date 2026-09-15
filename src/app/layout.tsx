import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamed Bennamane — Autonomous Systems & Robotics",
  description:
    "Engineering student at NHSAST (Autonomous Systems Technologies). Team Delta Robotics, Epsilite, NHSAST-Info, and technical authoring.",
  openGraph: {
    title: "Mohamed Bennamane — Autonomous Systems & Robotics",
    description:
      "Engineering student at NHSAST (Autonomous Systems Technologies). Team Delta Robotics, Epsilite, NHSAST-Info, and technical authoring.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

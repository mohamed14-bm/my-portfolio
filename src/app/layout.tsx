import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeContext";
import "./globals.css";

const SITE_URL = "https://mohamed-bennamane.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mohamed Bennamane — Robotics & AI Engineer | NHSAST Algeria",
  description:
    "Portfolio of Mohamed Bennamane — robotics & autonomous systems engineering student at NHSAST, Algeria. Team Delta robotics, Epsilite tutoring, technical author of Analysis textbooks, IEEE AI Manager.",
  keywords: [
    "Mohamed Bennamane",
    "NHSAST",
    "robotics engineer",
    "autonomous systems",
    "Team Delta",
    "Epsilite",
    "Algeria",
    "ESP32",
    "embedded systems",
    "portfolio",
  ],
  authors: [{ name: "Mohamed Bennamane", url: SITE_URL }],
  creator: "Mohamed Bennamane",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "Mohamed Bennamane — Robotics & AI Engineer",
    description:
      "Engineering student at NHSAST building autonomous robots, web platforms used by 1,500+ visitors, and co-authoring calculus textbooks. Team Delta · Epsilite · IEEE NHSAST.",
    url: SITE_URL,
    siteName: "Mohamed Bennamane",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Mohamed Bennamane — Robotics & AI Engineer | NHSAST Algeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Bennamane — Robotics & AI Engineer",
    description:
      "Robotics student at NHSAST, Algeria. Building autonomous robots, web platforms, and authoring calculus textbooks.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

// JSON-LD structured data for Person + WebSite
const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohamed Bennamane",
  givenName: "Mohamed",
  familyName: "Bennamane",
  jobTitle: "Robotics & AI Engineering Student",
  description:
    "Second-year preparatory engineering student at NHSAST specializing in autonomous systems. Team Delta robotics member, Epsilite co-founder, Analysis textbook co-author, IEEE NHSAST AI Manager.",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  email: "mailto:mbennamane4@gmail.com",
  affiliation: {
    "@type": "EducationalOrganization",
    name: "NHSAST — National Higher School of Autonomous Systems Technologies",
    url: "https://nhsast-info.vercel.app",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sidi Abdellah",
      addressRegion: "Algiers",
      addressCountry: "DZ",
    },
  },
  memberOf: [
    { "@type": "Organization", name: "Team Delta", description: "NHSAST robotics competition team" },
    { "@type": "Organization", name: "IEEE NHSAST", description: "IEEE student branch at NHSAST" },
    { "@type": "Organization", name: "ASTCS", description: "NHSAST scientific club" },
  ],
  knowsAbout: [
    "Robotics",
    "Autonomous Systems",
    "ESP32",
    "Arduino",
    "Motor Control",
    "PID Control",
    "C++",
    "Python",
    "SolidWorks",
    "Fusion 360",
    "3D Printing",
    "LaTeX",
    "Next.js",
    "AI Agents",
  ],
  sameAs: [
    "https://github.com/mohamed14-bm",
    "https://www.linkedin.com/in/mohamed-bennamane-22402b264/",
    "https://t.me/MohamedBennamne",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mohamed Bennamane",
  url: SITE_URL,
  description:
    "Personal portfolio of Mohamed Bennamane — robotics & autonomous systems engineering student at NHSAST, Algeria.",
  author: { "@type": "Person", name: "Mohamed Bennamane" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

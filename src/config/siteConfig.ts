import { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Abdulrahman Shaban - Full Stack Developer",
  description:
    "Full Stack Developer specializing in modern web technologies. Over 3 years of experience building scalable applications and delivering exceptional user experiences.",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [
    {
      name: "Abdulrahman Shaban",
      url: "https://github.com/abdulrahmanshaban",
    },
  ],
  creator: "Abdulrahman Shaban",
  publisher: "Abdulrahman Shaban",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdulrahmanshaban.com",
    title: "Abdulrahman Shaban - Full Stack Developer",
    description:
      "Full Stack Developer specializing in modern web technologies. Over 3 years of experience building scalable applications and delivering exceptional user experiences.",
    siteName: "Abdulrahman Shaban Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abdulrahman Shaban Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulrahman Shaban - Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
    creator: "@abdulrahmanshaban",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  other: {
    ["fb:app_id"]: "1161229469068313",
  },
  // manifest: "/site.webmanifest",
};

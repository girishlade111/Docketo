import type { Metadata } from "next";
import "@/styles/tokens.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://127.0.0.1:3000"),
  title: "Docketo - Webflow HTML website template",
  description:
    "Build and scale your fintech products with Docketo. Access embedded bank accounts, business accounts, safeguarding, and savings infrastructure using our secure API.",
  icons: {
    icon: [
      { url: "/assets/brand/6aa4ea57206d0bff76e6239a_32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/brand/6aa4ea5863af38598cbd05ea_32.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/assets/brand/6aa4ea57eaa6c8dbc3fc80f0_32.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Docketo - Webflow HTML website template",
    description:
      "Build and scale your fintech products with Docketo. Access embedded bank accounts, business accounts, safeguarding, and savings infrastructure using our secure API.",
    images: ["/assets/brand/6ab3605d38c4d903471081f8_4e0f9a46939f3d6e449f4c3c7c7afb62_Graph.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

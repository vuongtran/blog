import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

const title = "Vuong's blog 👋"
const description = "Vuong's blog 👋."
export const metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "Next.js",
    "JavaScript",
    "TypeScript",
    "React",
    "TailwindCSS",
    "contentlayer",
    "App Router",
  ],
  authors: [
    {
      name: "vuongtran",
      url: "https://github.com/vuongtran",
    },
  ],
  creator: "vuongtran",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title,
    description,
    siteName: title,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`],
    creator: "@vuong",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-2xl px-4 py-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

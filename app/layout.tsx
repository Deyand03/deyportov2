import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import SplashScreenProvider from "@/components/SplashScreen";
import { DrawLineText } from "@/components/gsap/draw-line-text";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Defry | Portofolio",
  description: "Halo, saya Defry Yandy, seorang Fullstack Developer dan juga Game Developer.",
  keywords: ["Defry Yandy", "Portfolio", "Web Developer", "Game Developer", "React", "Next.js", "Jambi"],
  authors: [{ name: "Defry Yandy", url: "https://deyportov2.vercel.app" }],
  openGraph: {
    title: "Defry | Portofolio",
    description: "Halo, saya Defry Yandy, seorang Fullstack Developer dan juga Game Developer.",
    url: "https://deyportov2.vercel.app",
    siteName: "Defry Yandy Portfolio",
    images: [
      {
        url: "/projects/portov2.png",
        width: 1200,
        height: 630,
        alt: "Defry Yandy Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreenProvider
            splashContent={
              <div className="flex flex-col items-center gap-4">
                <DrawLineText
                  className="font-medium"
                  fontSize={60}
                  strokeWidth={1.5}
                  text="Deyporto"
                  color="var(--color-foreground)"
                />
              </div>
            }
          >
            <Navbar />
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </SplashScreenProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

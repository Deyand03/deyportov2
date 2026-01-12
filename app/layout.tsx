import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import SplashScreenProvider from "@/components/SplashScreen";
import { DrawLineText } from "@/components/gsap/draw-line-text";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Defry | Portofolio",
  description: "Halo, saya Defry Yandy, seorang Fullstack Developer dan juga Game Developer",
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

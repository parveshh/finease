import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${geistMono.variable} ${geistSans.variable} antialiased min-h-screen`}
      >
        <ThemeProvider attribute="class" enableSystem={false} value={{ light: 'light', dark: 'dark' }}>
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 flex-grow">
          {children}
        </main>
       <Footer  />
      </div>
      </ThemeProvider>
      </body>
    </html>
  );
}

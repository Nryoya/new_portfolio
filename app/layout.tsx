import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header/Index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "ryoya Portfolio",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header />
        <main className="h-screen flex justify-center items-center">
          <section className="flex max-w-7xl mx-auto">{children}</section>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;

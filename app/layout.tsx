import Link from "next/link";
import "./globals.css";
import Providers from "@/components/providers";
import { store } from "@/store/store";
import { useSelector } from "react-redux";
import { selectAuthState } from "@/store/authslice";
import Navigation from "@/components/navigation";

export const metadata = {
  title: "Hidden Forest",
  description: "Share your journies into the forest.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Providers>
          <Navigation />
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

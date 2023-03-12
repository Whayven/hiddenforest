import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/posts" className="nav-link">Posts</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}

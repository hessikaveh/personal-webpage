import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sam Kaveh's Personal Web page",
  description:
    "A personal webpage to know a little about me and my work experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar bg-base-200 fixed">
          <div className="navbar-start">
            <Link className="btn btn-ghost btn-circle" href="/">
              <Image
                src="https://raw.githubusercontent.com/hessikaveh/personal-webpage/main/app/favicon.ico"
                width={256}
                height={256}
                alt="Sam Kaveh"
              />
            </Link>
          </div>
          <div className="navbar-center">
            <div className="btn-group">
              <Link className="btn btn-neutral btn-sm" href="/">
                About Me
              </Link>
              <Link className="btn btn-neutral btn-sm" href="/projects/">
                Projects
              </Link>
              <Link className="btn btn-neutral btn-sm" href="/articles/">
                Articles
              </Link>
            </div>
          </div>
          <div className="navbar-end"></div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}

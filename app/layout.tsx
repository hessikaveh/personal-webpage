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
        <div className="navbar bg-base-200 ">
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
            <ul className="menu menu-vertical lg:menu-horizontal bg-base-300 rounded-box">
              <li>
                {" "}
                <Link href="/">About Me</Link>
              </li>
              <li>
                <Link href="/projects/">Projects</Link>
              </li>
              <li>
                <Link href="/talks/">Talks</Link>
              </li>
              <li>
                <Link href="/blog/">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">

          </div>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}

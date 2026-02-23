// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkAlert from "remark-github-blockquote-alert";
import { notFound } from "next/navigation";
import 'remark-github-blockquote-alert/alert.css'

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);
  return files.map((filename) => ({ slug: filename.replace(".md", "") }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <article className="prose lg:prose-xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        {data.date && <time className="text-gray-500">{data.date}</time>}
      </header>

      {/* This component converts Markdown string to HTML elements */}
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkAlert]}>
        {content}
      </ReactMarkdown>
    </article>
  );
}

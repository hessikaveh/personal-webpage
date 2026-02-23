// app/blog/page.tsx
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default async function Page() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);

  const posts = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(contentDir, filename), "utf-8");
    const { data } = matter(fileContent);
    return {
      title: data.title,
      slug: filename.replace(".md", ""),
    };
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="prose lg:prose-xl prose-img:mx-auto">
        <p>Some of my thoughts and personal opinions:</p>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}

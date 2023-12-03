import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="prose lg:prose-xl prose-img:mx-auto">
        <Link href="/articles/post01">
          <h1>AsyncIO in Python</h1>
        </Link>
        <p>
          A few notes on async programming in python, the article contains few
          interactive quizes! Work in progress.
        </p>
        <Link href="/articles/post01"></Link>
      </article>
    </main>
  );
}

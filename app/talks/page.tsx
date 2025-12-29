export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="prose lg:prose-xl prose-img:mx-auto">

        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-6">Talks &amp; Presentations</h1>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/GA3NU7Tmb2U" // Replace with your actual YouTube ID
                title="PyCon & PyData DE 2025 Talk"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-8">
              <h2 className="mt-0 text-2xl font-bold">PyCon &amp; PyData DE 2025</h2>
              <p className="text-slate-600 dark:text-slate-400">
                In this talk, I showcased how I built a small Rust physics engine with Python integration.
                What started as a weekend side project evolved into a deep dive into high-performance
                bridge technologies between systems languages and data science ecosystems.
              </p>
              <div className="flex flex-wrap gap-3 mt-6 not-prose">
                <a
                  href="https://github.com/hessikaveh/sylt-2d"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded-lg hover:bg-slate-900 transition"
                >
                  💻 Source Code
                </a>
                <a
                  href="https://hessikaveh.github.io/sylt-wasm-example/"
                  className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-lg hover:bg-orange-700 transition"
                >
                  🕹️ WASM Demo
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['#PyCon', '#Rust', '#Python', '#GameDev', '#WASM', '#SideProject'].map(tag => (
                  <span key={tag} className="text-xs font-mono bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </article>
    </main >
  );
}

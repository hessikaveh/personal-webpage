import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="prose">
        <h1>Sustainable supply chains</h1>
        <p>kdfdj.</p>
        <h1>Hunting for Higgs</h1>
        <p>Higgs</p>
        <div>
          <Image
            src="/higgs_frame.svg"
            alt="higgs analysis overview"
            width={900}
            height={450}
          ></Image>
        </div>
        <h1>Building virtual skies</h1>
        <p>dome</p>
      </article>
    </main>
  );
}

import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="prose lg:prose-xl prose-img:mx-auto">
        <h1>Sustainable supply chains</h1>
        <p>
          At my current position with Blue Yonder I support retailers and
          grocers from the replenishment and demand forcasting side up to
          intelligent pricing solutions. Incorporating the solutions that use
          modern technologies such as cloud infrastructure and machine learning
          help companies save costs and compete within a world with many
          uncertainty factors to manage and help reduce wastage and bad practice
          that hurts our environment and lives.
        </p>
        <Image
          src="https://raw.githubusercontent.com/hessikaveh/personal-webpage/main/public/supplychain01.png"
          alt="supply chain"
          width={900}
          height={450}
        ></Image>
        <h1>Hunting for Higgs</h1>
        <p>Higgs</p>
        <div>
          <Image
            src="https://raw.githubusercontent.com/hessikaveh/personal-webpage/main/public/higgs_frame.svg"
            alt="higgs analysis overview"
            width={900}
            height={450}
          ></Image>
        </div>
        <h1>Building virtual skies</h1>
        <p>dome</p>
        <Image
          className="items-center"
          src="https://raw.githubusercontent.com/hessikaveh/personal-webpage/main/public/dome.svg"
          alt="starry night dome"
          width={300}
          height={200}
        ></Image>
      </article>
    </main>
  );
}

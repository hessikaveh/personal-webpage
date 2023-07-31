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
          uncertainty factors to manage. It also helps us reduce waste and bad
          business practices that hurts our environment and lives.
        </p>
        <Image
          src="https://raw.githubusercontent.com/hessikaveh/personal-webpage/main/public/supplychain01.png"
          alt="supply chain"
          width={900}
          height={450}
        ></Image>
        <h1>Hunting for Higgs</h1>
        <p>
          During my time as a physicist I contributed to the search and
          observation of the Higgs particle. This mysterious particle of nature
          helps us understand why atoms and their subparts have mass and will be
          a gateway to new technologies as we learn more about it. To study this
          particle I learned a lot about experiment design, complex data in
          large volumes and how to analyse them using deep learning methods.
        </p>
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

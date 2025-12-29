import Image from "next/image";
import AgenticMLOpsArchitecture from "../components/Visuals/agenticmlops"
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="prose lg:prose-xl prose-img:mx-auto">
        <h1>Agentic MLOps</h1>
        <p>
          To make demand forecasting more accessible, I developed an agent-based
          layer that simplifies the complexity of MLOps for Demand Forecasting domain. By implementing the
          <strong> Model Context Protocol (MCP)</strong> for interfacing APIs and tools
          and <strong>Agent-to-Agent (A2A)</strong> protocol for agent orchestration,
          I built a system where specialized subagents collaborate to
          handle from configuration to data analysis. Using <strong>Retrieval-Augmented Generation (RAG)</strong>,
          the system surfaces in-house best practices at the moment of decision-making,
          ensuring that complex model adjustments are reproducible, deterministic,
          and transparent for users.
        </p>

        <AgenticMLOpsArchitecture />

        <h1>Sustainable supply chains</h1>
        <p>
          At my current position with Blue Yonder I support retailers and
          grocers from the replenishment and demand forecasting side up to
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
        <p>
          As an entrepreneur I founded a company that specialized in creating
          full dome projection experiments. The devices and software I helped
          write and design are used in small and large planetarium projection
          systems created by the founded company.
        </p>
        <Image
          className="mx-auto"
          src="https://raw.githubusercontent.com/hessikaveh/personal-webpage/main/public/dome.svg"
          alt="starry night dome"
          width={300}
          height={200}
        ></Image>
      </article>
    </main >
  );
}

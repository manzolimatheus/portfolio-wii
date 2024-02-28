// next
import Image from "next/image";

// Components
import { ScaleFade } from "@chakra-ui/react";
import PreviewFooter from "@/components/wii-preview-footer";
import Slider from "@/components/slider";

export default function Contact() {
  return (
    <ScaleFade initialScale={0.1} in>
      <div className="h-screen flex flex-col justify-between overflow-hidden text-slate-700">
        <div className="flex flex-col gap-2 overflow-x-hidden px-4 pt-4 pb-4 lg:px-12 overflow-y-auto">
          <div className="flex items-center gap-4">
            <Image
              src="/img/me/mii.png"
              alt="Mii"
              width={70}
              height={70}
              className="rounded-full"
            />
            <h1 className="text-4xl font-bold">Licenças & Certificados</h1>
          </div>
          <div>
            <Slider
              slides={[
                {
                  image: "/img/certificates/etec.png",
                  title: "Auxiliar de Desenvolvimento de Sistemas",
                  description: "ETEC Euro Albino de Souza - 2019",
                },
                {
                  image: "/img/certificates/etec.png",
                  title: "Programador de computadores",
                  description: "ETEC Euro Albino de Souza - 2020",
                },
                {
                  image: "/img/certificates/sebrae.png",
                  title: "PRIMEIROS PASSOS GESTÃO",
                  description: "SEBRAE SP - 2020",
                },
                {
                  image: "/img/certificates/etec.png",
                  title: "Desenvolvedor de sistemas",
                  description: "ETEC Euro Albino de Souza - 2021",
                },
                {
                  image: "/img/certificates/salesforce.png",
                  title: "Salesforce Associate",
                  description: "Salesforce - 2023",
                },
              ]}
            />
          </div>
        </div>
        <PreviewFooter />
      </div>
    </ScaleFade>
  );
}

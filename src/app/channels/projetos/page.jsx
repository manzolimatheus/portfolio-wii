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
            <h1 className="text-4xl font-bold">Projetos</h1>
          </div>
          <div>
            <Slider
              slides={[
                {
                  image: "/img/projects/nadir.jfif",
                  title: "Loja Nadir Figueiredo",
                  description:
                    "E-commerce da Nadir Figueiredo desenvolvido utilizando Salesforce Commerce Cloud.",
                },
                {
                  image: "/img/projects/demo-auto1.jfif",
                  title: "Demonstração de e-commerce automotivo",
                  description:
                    "A página inicial de uma demonstração de e-commerce, do lado esquerdo, a ferramenta para construção da página em blocos, ao lado direito, o resultado construído dinamicamente via API e React.js.",
                },
                {
                  image: "/img/projects/demo-auto2.jfif",
                  title: "Demonstração automotiva de e-commerce, modelo 2",
                  description:
                    "Modelo de demonstração automotiva de Salesforce Commerce Cloud.",
                },
                {
                  image: "/img/projects/demo-auto3.jfif",
                  title: "Demonstração automotiva de e-commerce.",
                  description:
                    "A página de detalhes do produto de um carro BMW, demonstração com Salesforce Commerce Cloud.",
                },
                {
                  image: "/img/projects/hh.jfif",
                  title: "HelpHere! Site de doações",
                  description:
                    "HelpHere é o trabalho de conclusão de curso do meu grupo, um projeto que visa aproximar instituições carentes e doadores. O projeto se encontra finalizado, sendo feito utilizando tecnologias como HTML, CSS, PHP, Javascript e alguns frameworks, como Bootstrap e Laravel, além de bibliotecas relacionadas a CNPJ e PIX. Para hospedagem utilizamos 000webhost, uma solução de hospedagem gratuita oferecida pela Hostinger.",
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

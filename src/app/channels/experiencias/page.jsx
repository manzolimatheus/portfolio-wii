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
            <h1 className="text-4xl font-bold">Experiências</h1>
          </div>
          <div>
            <Slider
              slides={[
                {
                  image: "/img/xp/af.webp",
                  title: "Desenvolvedor Web",
                  description: (
                    <div className="flex flex-col gap-4">
                      <p>
                        Desenvolvi páginas WEB utilizando PHP com o framework
                        CodeIgniter.
                      </p>
                      <p>
                        Nas páginas desenvolvidas trabalhei com arquitetura MVC
                        (Model, View, Controller), Javascript para
                        interatividade, modelagem de banco de dados,
                        implementação de editores rich text, componentes para
                        upload de imagem.
                      </p>
                      <p>
                        Um dos destaques foi a construção de um compressor de
                        imagens em PHP que fiz, onde as imagens em que o usuário
                        fazia upload chegavam a serem reduzidas em até 80% seu
                        tamanho, sem perder qualidade.
                      </p>
                    </div>
                  ),
                },
                {
                  image: "/img/xp/bee.webp",
                  title: "Desenvolvedor Salesforce",
                  description: (
                    <div className="flex flex-col gap-4">
                      <p>
                        Trabalhei com desenvolvimento e personalização de
                        sistemas Salesforce, como o Salesforce CRM e Salesforce
                        Commerce Cloud e implementação em Next.js com Strapi
                        como CMS.
                      </p>
                      <p>
                        No Salesforce CRM desenvolvi automações em código APEX,
                        junto de testes automatizados. Também criei diversos
                        fluxos com a ferramenta Flow, sejam executados por ação
                        de usuário, ou, agendados. Criei diversos componentes de
                        tela utilizando Lightning Web Components (LWC) e
                        VisualForce. Além dessas experiências, realizei deploy
                        entre ambientes. Como destaque posso citar a criação de
                        um componente de telefonia e criação de componente com
                        LWC para melhor exibição de dados de integração
                        JSON/XML, contendo opção de copiar/colar e modo
                        noturno/claro.
                      </p>
                      <p>
                        Com o Salesforce Commerce Cloud, trabalhei com
                        prototipagem de interfaces utilizando a ferramenta Figma
                        para projetos de e-commerce, desenvolvimento utilizando
                        o Kit PWA para Commerce Cloud e as APIs da Salesforce
                        (Ocapi e Scapi). Utilizei React.js, Express.js, Java,
                        Javascript, rotas personalizadas Backend-for-frontend
                        (BFF), e automações no sistema do Commerce Cloud, como
                        ações pós-interação ou tarefas automatizadas/agendadas.
                        Como destaque posso citar o desenvolvimento de
                        demonstrações do Salesforce Commerce Cloud, com foco no
                        negócio automotivo e a criação de ponta à ponta do
                        e-commerce da Nadir Figueiredo.
                      </p>
                      <p>
                        Em Next.js, desenvolvi sites utilizando React.js,
                        TailwindCSS e Strapi como CMS (através de sua API Rest),
                        para controle de registros e personalização de
                        comportamento do site, como SEO, filtragem de produtos,
                        variações e gerenciamento de itens de menu
                        dinamicamente.
                      </p>
                    </div>
                  ),
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

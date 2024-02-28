"use client";

// React
import { useState } from "react";

// Components
import { Fade } from "@chakra-ui/react";
import WiiContainer from "@/components/wii-container";

// Constants
const EXIT_CODE = -1;

const dialogs = [
  {
    question:
      "👋 Olá! Eu sou o Matheus, sou um desenvolvedor de software, Pergunte-me algo para me conhecer melhor!",
    options: [
      {
        text: "Fale sobre você!",
        next: 1,
      },
      {
        text: "Quais experiências você possui?",
        next: 2,
      },
    ],
  },
  {
    question:
      "Sou um desenvolvedor de software, trabalho principalmente com tecnologias front-end, como React.JS e Next.JS. Também possuo experiência com back-end, utilizando Node.js com Express.js para APIs REST, além disso, trabalho com sistemas Salesforce, com foco em e-commerce, possuindo também conhecimento com o CRM da Salesforce e seu ecossistema.",
    options: [
      {
        text: "Quais experiências você possui?",
        next: 2,
      },
      {
        text: "😥 Encerramos por aqui!",
        next: EXIT_CODE,
      },
    ],
  },
  {
    question:
      "Tenho experiências variadas, já trabalhei com suporte ao cliente, desenvolvimento de software e sites, análise e elaboração de requisitos, prototipagem de interfaces, desenvolvimento de APIs REST, integrações com sistemas de terceiros e personalização de sistemas Salesforce no geral. 😀 Você pode conferir alguns dos projetos que já atuei no canal de 'experiências'!",
    options: [
      {
        text: "Fale sobre você!",
        next: 1,
      },
      {
        text: "😥 Encerramos por aqui!",
        next: EXIT_CODE,
      },
    ],
  },
];

export default function Dialog() {
  const [isFadeOn, setIsFadeOn] = useState(true);
  const [currentDialog, setCurrentDialog] = useState(0);

  const handleOptionClick = (next) => {
    if (next === EXIT_CODE) {
      setCurrentDialog(0);
      return;
    }
    setCurrentDialog(next);
    setIsFadeOn(false);
    setTimeout(() => {
      setIsFadeOn(true);
    }, 200);
  };

  return (
    <Fade in={isFadeOn}>
      <div className="flex flex-col gap-6 text-slate-700 p-4 text-center">
        <p className="text-lg font-bold">
          💬 {dialogs[currentDialog]?.question}
        </p>
        <ul className="flex flex-wrap justify-center gap-2">
          {dialogs[currentDialog]?.options.map((option, i) => {
            return (
              <li key={i}>
                <WiiContainer>
                  <button onClick={() => handleOptionClick(option.next)}>
                    {option.text}
                  </button>
                </WiiContainer>
              </li>
            );
          })}
        </ul>
      </div>
    </Fade>
  );
}

// Components
import WiiContainer from "@/components/wii-container";

// Icons
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactOptions() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl">Como você quer entrar em contato?</h2>
      <div className="flex flex-wrap justify-center gap-12 font-bold text-2xl">
        <a
          href="mailto:manzoli.contato@gmail.com"
          className="w-fit flex flex-col gap-2 items-center"
        >
          <WiiContainer>
            <div className="flex flex-col items-center justify-center gap-4 h-64 email-floating">
              <MdOutlineEmail className="text-[96pt] text-slate-500 email" />
              <h4>Entrar em contato por e-mail</h4>
            </div>
          </WiiContainer>
        </a>
        <a
          href="tel:+5519998883053"
          className="w-fit flex flex-col gap-2 items-center"
        >
          <WiiContainer>
            <div className="flex flex-col items-center justify-center gap-4 h-64 phone-ring">
              <MdLocalPhone className="text-slate-500 text-[96pt] phone" />
              <h4>Entrar em contato por telefone</h4>
            </div>
          </WiiContainer>
        </a>
      </div>
    </div>
  );
}

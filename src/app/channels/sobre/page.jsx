// next
import Image from "next/image";

// Components
import { ScaleFade } from "@chakra-ui/react";
import PreviewFooter from "@/components/wii-preview-footer";
import Dialog from "./partials/dialog";
import WiiContainer from "@/components/wii-container";

export default function About() {
  return (
    <ScaleFade initialScale={0.1} in>
      <div className="h-screen flex flex-col justify-between overflow-hidden bg-[url('/img/office.jpg')] bg-no-repeat bg-cover bg-center text-white">
        <div className="flex flex-col gap-2 overflow-x-hidden px-4 pt-4 pb-4 lg:px-12 overflow-y-auto">
          <div className="flex items-center gap-4">
            <Image
              src="/img/me/mii.png"
              alt="Mii"
              width={70}
              height={70}
              className="rounded-full"
            />
            <h1 className="text-4xl font-bold">Sobre mim</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/img/me/mii-full.png"
                alt="Mii"
                width={259}
                height={593}
                className="object-contain floating"
              />
            </div>
            <WiiContainer>
              <Dialog />
            </WiiContainer>
          </div>
        </div>
        <PreviewFooter />
      </div>
    </ScaleFade>
  );
}

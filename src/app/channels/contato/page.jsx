// next
import Image from "next/image";

// Components
import { ScaleFade } from "@chakra-ui/react";
import PreviewFooter from "@/components/wii-preview-footer";
import ContactOptions from "./partials/options";

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
            <h1 className="text-4xl font-bold">Contato</h1>
          </div>
          <ContactOptions />
        </div>
        <PreviewFooter />
      </div>
    </ScaleFade>
  );
}

// Next
import Link from "next/link";

// Components
import { ScaleFade } from "@chakra-ui/react";

export default function WiiChannels({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 p-4 lg:p-12 overflow-y-auto">
      {items.map((item, index) => (
        <ScaleFade key={index} in>
          <Link
            href={item?.href || "/"}
            className={`border-2 border-slate-400 h-[100px] w-full overflow-hidden bg-cover bg-repeat-space bg-center rounded-3xl transition-all hover:scale-105 hover:shadow-2xl hover:cursor-pointer flex items-center justify-center`}
            style={{
              backgroundImage: `url('${
                item?.backgroundImage || "/img/wii-static.gif"
              }')`,
            }}
          >
            {!item?.backgroundImage && <p>{item?.title}</p>}
          </Link>
        </ScaleFade>
      ))}
    </div>
  );
}

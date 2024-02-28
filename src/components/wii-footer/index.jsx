"use client";
// Next
import Image from "next/image";

// React
import { useEffect, useState } from "react";

// Icons
import { MdOutlineEmail } from "react-icons/md";

export default function WiiFooter() {
  const renderTime = () => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    return `${hour}:${minutes}`;
  };

  const [time, setTime] = useState(renderTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(renderTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full hidden lg:grid grid-cols-3 bg-[url('/img/wii-menu.webp')] bg-center bg-contain">
      <div className="flex justify-start">
        <div className="border-4 border-l-0 border-cyan-500 w-1/2 p-4 shadow-2xl rounded-e-full flex justify-end bg-gradient-to-t from-slate-200 to-slate-300 relative -top-5 -left-20 hover:left-0 transition-all">
          <button className="border-2 bg-gradient-radial from-slate-100 to-slate-400 border-cyan-500 shadow-lg rounded-full p-4 transition-all hover:scale-105 hover:shadow-2xl">
            <Image
              src="/img/wii-logo.png"
              width={60}
              height={60}
              alt="Logo Wii"
              className="object-contain"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center text-slate-700 text-xl lg:text-3xl text-center">
        <p>{time}</p>
        <p>
          {new Date().toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "numeric",
          })}
        </p>
      </div>
      <div className="flex justify-end">
        <div className="border-4 border-cyan-500 border-r-0 w-1/2 p-4 shadow-2xl rounded-s-full flex justify-start bg-gradient-to-t from-slate-200 to-slate-300 relative -top-5 -right-20 hover:right-0 transition-all">
          <button className="border-2 bg-gradient-radial from-slate-100 to-slate-400 border-cyan-500 shadow-lg rounded-full p-4 transition-all hover:scale-105 hover:shadow-2xl">
            <MdOutlineEmail className="h-[60px] w-[60px] text-slate-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

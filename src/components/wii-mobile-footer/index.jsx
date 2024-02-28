"use client";
// React
import { useEffect, useState } from "react";

// Components
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

// Icons
import { IoMdArrowDropup } from "react-icons/io";

export default function WiiMobileFooter() {
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
    <div className="w-full flex flex-col justify-center items-center lg:hidden bg-gradient-to-t from-slate-100 to-slate-300 border-t-2 border-cyan-500">
      <div className="flex flex-col gap-2 items-center justify-center text-slate-700 text-xl text-center p-1">
        <p>{time}</p>
        <p>
          {new Date().toLocaleDateString("pt-BR", {
            weekday: "long",
            day: "numeric",
            month: "numeric",
          })}
        </p>
      </div>
      {/* <MobileMenu /> */}
    </div>
  );
}

function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        className="bg-gradient-to-t from-slate-100 to-slate-300 w-full flex justify-center"
        title="Menu"
        onClick={onOpen}
      >
        <IoMdArrowDropup />
      </button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
        <DrawerOverlay>
          <DrawerContent bg="x" className="bg-gradient-to-t from-slate-100 to-slate-400 border-t-2 border-cyan-500">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

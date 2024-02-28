// Data
import { channels } from "@/data";

// Components
import { ScaleFade } from "@chakra-ui/react";
import WiiFooter from "@/components/wii-footer";
import WiiChannels from "@/components/wii-channels";
import WiiMobileFooter from "@/components/wii-mobile-footer";

// Constants
const SLOTS = 21;

export default function WiiHome() {
  const items = [];

  for (let i = 0; i < SLOTS; i++) {
    items.push(channels[i]);
  }

  return (
    <ScaleFade initialScale={0.1} in>
      <div className="flex flex-col justify-between h-screen overflow-hidden">
        <WiiChannels items={items} />
        <WiiFooter />
        <WiiMobileFooter />
      </div>
    </ScaleFade>
  );
}

// Next
import Link from "next/link";
import WiiContainer from "../wii-container";

export default function WiiButtonLink({ href, label }) {
  return (
    <Link href={href}>
      <WiiContainer>
        <button className="cursor-default">
          <span>{label}</span>
        </button>
      </WiiContainer>
    </Link>
  );
}

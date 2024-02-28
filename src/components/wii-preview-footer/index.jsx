// Components
import WiiButtonLink from "@/components/wii-button-link";

export default function PreviewFooter() {
  return (
    <div className="w-full bg-gradient-to-t from-slate-200 to-slate-300 text-slate-800 bg-opacity-70 backdrop-blur-sm p-4 text-center text-xl font-bold border-t-2 border-cyan-500 flex justify-center gap-12">
      <WiiButtonLink href="/" label="Voltar para o início" />
    </div>
  );
}

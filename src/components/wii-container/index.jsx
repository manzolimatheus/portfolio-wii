export default function WiiContainer({ children }) {
  return (
    <div className="h-fit border-2 border-cyan-500 p-4 rounded-3xl shadow-lg bg-gradient-to-b from-slate-100 to-slate-300 transition-all hover:shadow-2xl">
      {children}
    </div>
  );
}

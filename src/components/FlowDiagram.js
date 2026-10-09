import Reveal from "./Reveal";
import GlassCard from "./GlassCard";

export default function FlowDiagram({ nodes, className = "" }) {
  return (
    <Reveal className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center gap-3">
          <GlassCard className="rounded-xl px-4 py-3 text-center text-[0.8rem] font-semibold text-white">
            {node}
          </GlassCard>
          {i < nodes.length - 1 && <span className="text-text-3">→</span>}
        </div>
      ))}
    </Reveal>
  );
}

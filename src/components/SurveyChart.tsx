import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { PALETTE, type Question } from "@/data/survey";

export function SurveyChart({ q, index }: { q: Question; index: number }) {
  const data = q.slices.map((s, i) => ({ ...s, color: PALETTE[i % PALETTE.length] }));
  const plotted = data.filter((d) => d.value !== null);
  const missing = data.some((d) => d.value === null);
  return (
    <article className={`card-surface reveal flex flex-col p-6 ${q.featured ? "ring-1 ring-primary/40" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs text-muted-foreground">Q{String(index + 1).padStart(2, "0")}</span>
        <span className="shrink-0 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">{q.responses} responses</span>
      </div>
      <h3 className="mt-2 text-lg font-semibold leading-snug">{q.title}</h3>
      {q.featured && <span className="mt-2 w-fit rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">Key finding</span>}
      <div className="mt-4 grid items-center gap-4 sm:grid-cols-[200px_1fr]">
        <div className="mx-auto h-[200px] w-[200px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={plotted} dataKey="value" nameKey="label" innerRadius={55} outerRadius={92} paddingAngle={2} stroke="var(--card)" isAnimationActive>
                {plotted.map((d) => <Cell key={d.label} fill={d.color} />)}
              </Pie>
              <Tooltip
                formatter={(v: number) => `${v.toFixed(1)}%`}
                contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 8, color: "var(--foreground)" }}
                itemStyle={{ color: "var(--foreground)" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="space-y-1.5 text-sm">
          {data.map((d) => (
            <li key={d.label} className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-sm" style={{ background: d.color }} />
              <span className="min-w-0 flex-1 text-muted-foreground">{d.label}</span>
              <span className={`shrink-0 font-mono ${d.value === null ? "text-xs text-warning" : "text-foreground"}`}>
                {d.value === null ? "Needs verification" : `${d.value.toFixed(1)}%`}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {missing && <p className="mt-3 text-xs text-warning">Some small slices were not labelled in the source chart and are not plotted.</p>}
      <p className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">{q.insight}</p>
    </article>
  );
}

export type FaqItem = { question: string; answer: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-navy/10 rounded-lg border border-navy/10 bg-white">
      {items.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="cursor-pointer list-none font-medium text-charcoal marker:content-none">
            <span className="flex items-center justify-between gap-4">
              {item.question}
              <span className="text-navy transition-transform group-open:rotate-45">+</span>
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

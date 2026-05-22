type Props = {
  title: string;
  subtitle: string;
};

export default function Section({
  title,
  subtitle,
}: Props) {
  return (
    <section className="section-padding border-t border-[var(--border)]">
      <div className="container-custom max-w-4xl">
        <p className="text-[var(--green-soft)] uppercase tracking-[0.2em] text-sm mb-4">
          Philosophy
        </p>

        <h2 className="text-4xl md:text-5xl mb-6">
          {title}
        </h2>

        <p className="text-[var(--muted)] text-lg leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

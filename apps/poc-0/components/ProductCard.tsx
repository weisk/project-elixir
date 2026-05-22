type Props = {
  name: string;
  subtitle: string;
  price: string;
};

export default function ProductCard({
  name,
  subtitle,
  price,
}: Props) {
  return (
    <div className="group bg-[var(--bg-soft)] border border-[var(--border)] rounded-3xl overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-[var(--gold)]">
      <div className="h-72 bg-gradient-to-br from-[#1c1c1c] to-[#101010]" />

      <div className="p-6">
        <p className="text-[var(--green-soft)] text-sm mb-2">
          CBD Collection
        </p>

        <h3 className="text-2xl mb-2">{name}</h3>

        <p className="text-[var(--muted)] mb-5">
          {subtitle}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-[var(--gold)] font-semibold">
            {price}
          </span>

          <button className="text-sm border border-[var(--border)] px-4 py-2 rounded-full transition hover:border-[var(--gold)] hover:text-[var(--gold)]">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

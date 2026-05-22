const links = [
  "About Us",
  "FAQ",
  "Terms of Use",
  "Privacy Policy",
  "Help",
  "Shipping",
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 px-6">
      <div className="container-custom flex flex-col md:flex-row gap-10 justify-between">
        <div>
          <div className="text-2xl font-bold text-[var(--gold)] mb-4">
            ELIXIR
          </div>

          <p className="text-[var(--muted)] max-w-sm">
            Luxury CBD experiences crafted for elevated wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-[var(--muted)]">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-[var(--gold)] transition"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

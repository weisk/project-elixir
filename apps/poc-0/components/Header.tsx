const navLinks = [
  "Shop",
  "Collections",
  "Origins",
  "FAQ",
  "Contact",
];

export default function Header() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="container-custom flex items-center justify-between py-5 px-6">
        <div className="text-2xl font-bold tracking-[0.2em] text-[var(--gold)]">
          ELIXIR
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-[var(--muted)]">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="transition hover:text-[var(--gold)]"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default function Hero() {
  return (
    <section className="section-padding">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[var(--green-soft)] uppercase tracking-[0.3em] text-sm mb-4">
            Premium CBD Experience
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Discover the Essence of Pure Relaxation
          </h1>

          <p className="text-[var(--muted)] text-lg mb-8 max-w-xl">
            Luxury-crafted CBD edibles designed for calmness,
            balance and elevated wellbeing.
          </p>

          <p className="text-[var(--muted)] text-lg mb-8 max-w-xl">
            Nos dan el trapo, y luego nos lo quitan.
            Que nos den el trapo, el trapo, el trapo, el trapo, dame el trapo, el trapo , el trapo.
          </p>

          <button className="px-8 py-4 rounded-full gold-gradient text-black font-semibold transition hover:scale-105 cursor-pointer">
            Explore Collection
          </button>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-72 h-72 rounded-full bg-[var(--green)] blur-3xl opacity-20" />

          <div className="relative rounded-[2rem] overflow-hidden border border-[var(--border)]">
            <img
              src="https://images.unsplash.com/photo-1603909223429-69bb7101f420?q=80&w=1200&auto=format&fit=crop"
              alt="CBD"
              className="w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

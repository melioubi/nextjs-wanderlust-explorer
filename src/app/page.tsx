"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Discover the World&apos;s
            <span className="block text-amber-400">Most Unique Experiences</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-200 sm:text-xl">
            From sailing the Adriatic to trekking Patagonia, find adventures
            that will stay with you forever.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/experiences"
              className="rounded-xl bg-amber-500 px-8 py-3.5 text-base font-semibold text-black shadow-sm transition-all hover:bg-amber-400 hover:shadow-md active:scale-95"
            >
              Explore Experiences
            </Link>
            <Link
              href="/profile"
              className="rounded-xl border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
          {[
            { label: "Adventures", value: "40+" },
            { label: "Destinations", value: "30+" },
            { label: "Countries", value: "25+" },
            { label: "Rating", value: "4.8★" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-zinc-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
            Browse by Category
          </h2>
          <p className="mt-2 text-zinc-500">
            Find the perfect experience for your next adventure
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {[
              { name: "Adventure", emoji: "🏔️", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
              { name: "Culture", emoji: "🎭", color: "bg-purple-50 text-purple-700 border-purple-200" },
              { name: "Food", emoji: "🍜", color: "bg-orange-50 text-orange-700 border-orange-200" },
              { name: "Wellness", emoji: "🧘", color: "bg-blue-50 text-blue-700 border-blue-200" },
              { name: "Nature", emoji: "🌿", color: "bg-green-50 text-green-700 border-green-200" },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={`/experiences?category=${cat.name}`}
                className={`flex flex-col items-center gap-2 rounded-2xl border p-6 text-center transition-all hover:shadow-md hover:-translate-y-0.5 ${cat.color}`}
              >
                <span className="text-3xl">{cat.emoji}</span>
                <span className="font-semibold">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

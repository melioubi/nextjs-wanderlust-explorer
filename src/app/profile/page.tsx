"use client";

import { useFavorites } from "@/context/FavoritesContext";
import Link from "next/link";

export default function ProfilePage() {
  const { favoritesCount } = useFavorites();

  return (
    <div className="flex-1 bg-zinc-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 text-3xl font-bold text-white">
              LM
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-zinc-900">Lea Moreau</h1>
              <p className="text-zinc-500">Product Manager at Wanderlust Labs</p>
              <p className="mt-1 text-sm text-zinc-400">
                Building the future of travel experiences
              </p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-center">
            <p className="text-2xl font-bold text-zinc-900">{favoritesCount}</p>
            <p className="mt-1 text-sm text-zinc-500">Favorites</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-center">
            <p className="text-2xl font-bold text-zinc-900">8</p>
            <p className="mt-1 text-sm text-zinc-500">Trips Planned</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-center">
            <p className="text-2xl font-bold text-zinc-900">23</p>
            <p className="mt-1 text-sm text-zinc-500">Countries</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 text-center">
            <p className="text-2xl font-bold text-zinc-900">4.9★</p>
            <p className="mt-1 text-sm text-zinc-500">Avg. Rating</p>
          </div>
        </div>

        {/* About */}
        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-900">About</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            Wanderlust Labs helps travelers discover authentic, curated experiences
            around the globe. From cooking classes in Marrakech to glacier hiking
            in Patagonia, we connect adventurers with unforgettable moments.
          </p>
          <p className="mt-2 text-sm leading-7 text-zinc-600">
            As Product Manager, I work with an amazing team of engineers and
            designers to build tools that make travel planning seamless and
            inspiring.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/experiences"
            className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:shadow-sm hover:-translate-y-0.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-zinc-900">Explore Experiences</p>
              <p className="text-sm text-zinc-500">Discover 100+ unique adventures</p>
            </div>
          </Link>
          <Link
            href="/favorites"
            className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:shadow-sm hover:-translate-y-0.5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-zinc-900">View Favorites</p>
              <p className="text-sm text-zinc-500">{favoritesCount} experiences saved</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
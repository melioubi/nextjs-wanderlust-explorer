"use client";

import { useFavorites } from "@/context/FavoritesContext";
import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoriteExperiences = experiences.filter((exp) => favorites.has(exp.id));

  return (
    <div className="flex-1 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900">My Favorites</h1>
          <p className="mt-1 text-zinc-500">
            {favoriteExperiences.length === 0
              ? "You haven't saved any favorites yet"
              : `You have ${favoriteExperiences.length} saved experience${favoriteExperiences.length !== 1 ? "s" : ""}`}
          </p>
        </div>

        {favoriteExperiences.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favoriteExperiences.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-16 w-16 text-zinc-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              No favorites yet
            </h3>
            <p className="mt-1 text-sm text-zinc-500">
              Start exploring and save experiences you love.
            </p>
            <Link
              href="/experiences"
              className="mt-6 rounded-xl bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              Browse Experiences
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
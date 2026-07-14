"use client";

import Link from "next/link";
import { Experience } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(experience.id);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(experience.id);
          }}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm transition-colors hover:bg-white"
          aria-label={fav ? "Remove from favorites" : "Add to favorites"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={fav ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
            className={`h-5 w-5 transition-colors ${
              fav ? "text-rose-500" : "text-zinc-600"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <span className="absolute bottom-3 left-3 rounded-full bg-white/80 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold text-zinc-700">
          {experience.category}
        </span>
      </div>
      <Link href={`/experiences/${experience.id}`} className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center gap-1 text-sm text-amber-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">{experience.rating}</span>
        </div>
        <h3 className="text-base font-semibold leading-tight text-zinc-900 line-clamp-2">
          {experience.title}
        </h3>
        <p className="mt-1 text-xs text-zinc-500">{experience.destination}</p>
        <p className="mt-2 text-sm text-zinc-600 line-clamp-2 flex-1">
          {experience.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-zinc-900">
            ${experience.price}
            <span className="text-sm font-normal text-zinc-500">/person</span>
          </span>
          <span className="text-xs font-medium text-emerald-600">
            Book now
          </span>
        </div>
      </Link>
    </div>
  );
}
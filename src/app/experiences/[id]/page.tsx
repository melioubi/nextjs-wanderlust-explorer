"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/context/FavoritesContext";
import { useEffect } from "react";

export default function ExperienceDetailPage() {
  const params = useParams();
  const { isFavorite, toggleFavorite } = useFavorites();
  const experience = experiences.find(
    (exp) => exp.id === Number(params.id)
  );

  useEffect(() => {
    if (experience) {
      document.title = `${experience.title} - Wanderlust Explorer`;
    }
    return () => {
      document.title = "Wanderlust Explorer";
    };
  }, [experience]);

  if (!experience) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center py-20 text-center">
        <h2 className="text-2xl font-bold text-zinc-900">Experience not found</h2>
        <p className="mt-2 text-zinc-500">
          The experience you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/experiences"
          className="mt-6 rounded-xl bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Back to Explorer
        </Link>
      </div>
    );
  }

  const fav = isFavorite(experience.id);

  return (
    <div className="flex-1 bg-white">
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 md:h-96">
        <img
          src={experience.imageUrl}
          alt={experience.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
            {experience.category}
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Navigation */}
        <Link
          href="/experiences"
          className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Back to Explorer
        </Link>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl font-bold text-zinc-900 sm:text-3xl">
                {experience.title}
              </h1>
              <button
                onClick={() => toggleFavorite(experience.id)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 transition-colors hover:bg-zinc-50"
                aria-label={fav ? "Remove from favorites" : "Add to favorites"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={fav ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth={2}
                  className={`h-5 w-5 ${fav ? "text-rose-500" : "text-zinc-600"}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-2 flex items-center gap-4 text-sm text-zinc-500">
              <span>{experience.destination}</span>
              <span className="flex items-center gap-1 text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clipRule="evenodd" />
                </svg>
                {experience.rating}
              </span>
            </div>

            <p className="mt-6 text-base leading-7 text-zinc-700">
              {experience.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Guided tour", "All equipment", "Insurance", "Local guide", "Meals included"].map(
                (feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    ✓ {feature}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="sticky top-20 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-zinc-900">
                  ${experience.price}
                  <span className="text-base font-normal text-zinc-500">/person</span>
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Free cancellation
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Best price guarantee
                </li>
                <li className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Instant confirmation
                </li>
              </ul>
              <button className="mt-6 w-full rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useMemo } from "react";
import { Experience } from "@/data/experiences";
import { experiences } from "@/data/experiences";

interface UseFiltersProps {
  search: string;
  category: string;
  destination: string;
}

export function useFilters({
  search,
  category,
  destination,
}: UseFiltersProps): Experience[] {
  const filtered = useMemo(() => {
    return experiences.filter((exp) => {
      if (search) {
        const regex = new RegExp(search, "i");
        if (!regex.test(exp.title)) return false;
      }
      if (category && exp.category !== category) return false;
      if (destination) {
        const destRegex = new RegExp(destination, "i");
        if (!destRegex.test(exp.destination)) return false;
      }
      return true;
    });
  }, [search, category, destination]);

  return filtered;
}
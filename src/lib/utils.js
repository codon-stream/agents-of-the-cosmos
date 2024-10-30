import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classValues) {
  return twMerge(clsx(classValues));
}

export const toURLSlug = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/^-+|-+$/g, "");
};

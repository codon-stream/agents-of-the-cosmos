import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classValues) {
  return twMerge(clsx(classValues));
}

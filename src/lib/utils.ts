import { clsx, type ClassValue } from 'clsx';

/** Merge class names conditionally. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/** Section metadata used by the navbar and scroll tracking. */
export const sections = [
  { id: 'home', label: 'Home', ref: '01' },
  { id: 'about', label: 'About', ref: '02' },
  { id: 'skills', label: 'Skills', ref: '03' },
  { id: 'projects', label: 'Projects', ref: '04' },
  { id: 'experience', label: 'Experience', ref: '05' },
  { id: 'certifications', label: 'Certifications', ref: '06' },
  { id: 'contact', label: 'Contact', ref: '07' },
] as const;

export type SectionId = (typeof sections)[number]['id'];

import { DivideIcon as LucideIcon } from 'lucide-react';

export interface TechnologyType {
  icon: LucideIcon;
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  stats: Record<string, string>;
  diagram: string;
  code: string;
}
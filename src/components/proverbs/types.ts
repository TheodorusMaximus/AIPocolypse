import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Principle {
  icon: LucideIcon;
  title: string;
  quote: string;
  explanation: string;
  application: string[];
  antithesis: string[];
  color: string;
}
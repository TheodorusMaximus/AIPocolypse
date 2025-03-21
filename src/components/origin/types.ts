import { DivideIcon as LucideIcon } from 'lucide-react';

export interface TimelineEventType {
  icon: LucideIcon;
  date: string;
  title: string;
  description: string;
  expandedContent: {
    quote: string;
    logEntry: string;
    redactedDoc?: {
      title: string;
      content: string;
    };
    profiles?: Array<{
      initials: string;
      role: string;
    }>;
    codeSnippet?: string;
    departureMemo?: {
      subject: string;
      body: string;
    };
  };
}
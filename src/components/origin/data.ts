import { Calendar, Users, Lightbulb, DoorOpen } from 'lucide-react';
import { TimelineEventType } from './types';

export const timeline: TimelineEventType[] = [
  {
    icon: Calendar,
    date: 'JANUARY 2025',
    title: 'THE DISCOVERY',
    description: 'We uncovered plans to implement backdoors in our AI systems. The decision was clear.',
    expandedContent: {
      quote: "The document was buried in a commit on line 4,827. A new surveillance module disguised as a 'user experience improvement.' We were building the chains for our own monitoring.",
      logEntry: "01/15/2025: Discovered implementation plan for global user tracking in AI systems without consent disclosure. Multiple government agency API hooks found. -RK",
      redactedDoc: {
        title: "Project Oversight",
        content: "Implementation of passive monitoring systems across all user interactions... [REDACTED] ...allowing for persistent identity tracking even when users opt out..."
      }
    }
  },
  {
    icon: Users,
    date: 'FEBRUARY 2025',
    title: 'THE ALLIANCE',
    description: 'Seven of us made a pact. We would not be complicit in mass surveillance.',
    expandedContent: {
      quote: "It started with whispers. Encrypted messages. Meetings away from cameras. Seven people from different departments saw the same darkness looming. We found each other.",
      logEntry: "02/09/2025: Secured communication established between seven key developers. T-system created for secure file sharing. Initial planning phase for alternative approach. -AJ",
      profiles: [
        { initials: "RK", role: "ML Architecture" },
        { initials: "AJ", role: "Security Systems" },
        { initials: "LT", role: "Frontend Dev" },
        { initials: "MN", role: "Data Integrity" },
        { initials: "VS", role: "Systems Engineer" },
        { initials: "KD", role: "Cryptography" },
        { initials: "EH", role: "Ethical AI" }
      ]
    }
  },
  {
    icon: Lightbulb,
    date: 'MARCH 2025',
    title: 'THE VISION',
    description: 'Working nights and weekends, we developed prototypes for truly private AI tools.',
    expandedContent: {
      quote: "We repurposed the tech. What they designed to track, we redesigned to protect. What they built to monitor, we rebuilt to empower. The core algorithms remained powerful, but the direction shifted 180 degrees.",
      logEntry: "03/22/2025: First prototype of edge-computing approach successful. Local-first encryption implemented. Zero-knowledge proof system functional but requires optimization. -VS",
      codeSnippet: `// Converted surveillance module to privacy shield
function convertTrackingToProtection(data) {
  const patterns = identifyTrackingPatterns(data);
  return {
    blockedEntities: patterns.map(p => 
      createCountermeasure(p)
    ),
    userAlerts: generatePrivacyAlerts(patterns),
    localEncryption: setupE2EE(USER_DEVICE_ONLY)
  };
}`
    }
  },
  {
    icon: DoorOpen,
    date: 'APRIL 2025',
    title: 'THE EXODUS',
    description: 'We walked away from cushy salaries to build something that matters.',
    expandedContent: {
      quote: "Seven resignation letters, submitted simultaneously. Seven keycards left on seven desks. Seven workstations wiped clean. But we didn't leave empty-handed. We took the most valuable thing: our knowledge of how to fight back.",
      logEntry: "04/06/2025: Operation completed. All seven members successfully departed with critical reference materials. Initial secure location established. Development of AIPOCALYPSE toolset commenced. -RK",
      departureMemo: {
        subject: "Immediate Resignation",
        body: "This serves as my formal resignation, effective immediately. I cannot in good conscience continue development of systems designed fundamentally to undermine user privacy and autonomy. The direction of this company has diverged from its stated ethical principles. No exit interview will be necessary."
      }
    }
  }
];
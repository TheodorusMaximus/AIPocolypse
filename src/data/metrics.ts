import { Users, Shield, MessageSquare, Star } from 'lucide-react';

export const metrics = [
  {
    icon: Users,
    value: '10,000+',
    label: 'ACTIVE RESISTANCE MEMBERS',
    growthRate: '+127% monthly',
    detail: 'Across 43 countries and growing daily',
    color: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    icon: Shield,
    value: '1M+',
    label: 'SURVEILLANCE ATTEMPTS BLOCKED',
    growthRate: '24,752 today',
    detail: 'Corporate trackers, government backdoors, and AI scrapers',
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: MessageSquare,
    value: '500K+',
    label: 'ENCRYPTED MESSAGES SENT',
    growthRate: '1,432 this hour',
    detail: 'Zero metadata leakage, perfect forward secrecy',
    color: 'from-purple-500/20 to-violet-500/20'
  },
  {
    icon: Star,
    value: '99.9%',
    label: 'UPTIME ACROSS NETWORK',
    growthRate: '72 active nodes',
    detail: 'Resilient mesh architecture with no single point of failure',
    color: 'from-yellow-500/20 to-orange-500/20'
  }
];
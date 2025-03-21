import { Eye, Lock, Code, Users, Zap, Shield } from 'lucide-react';

export interface Principle {
  icon: any;
  title: string;
  quote: string;
  explanation: string;
  application: string[];
  antithesis: string[];
  color: string;
  position?: number[];
}

// Enhanced principles data with expanded content
export const principles: Principle[] = [
  {
    icon: Eye,
    title: 'PRIVACY IS POWER',
    quote: 'In a world of endless surveillance, the ability to choose what to reveal is true freedom.',
    explanation: 'Privacy isn\'t about hiding wrongdoing—it\'s about protecting your fundamental right to personal autonomy. When corporations and governments track every click, purchase, and movement, they gain power to manipulate and control. We build tools that return this power to you.',
    application: [
      'Zero data collection by default',
      'Local-first processing always',
      'Ephemeral sessions leave no trace',
      'User-controlled information sharing'
    ],
    antithesis: [
      '"If you have nothing to hide, you have nothing to fear"',
      '"Data collection improves your experience"',
      '"Just accept the cookies and terms"',
      '"Your profile helps us serve you better"'
    ],
    color: 'from-green-500/20 to-cyan-500/20',
    position: [1, 1]
  },
  {
    icon: Lock,
    title: 'TRUST NO ONE',
    quote: 'Security through mathematics, not promises. Zero-trust architecture in everything we build.',
    explanation: 'Trust is vulnerability in the digital realm. Instead of asking for your trust, we eliminate the need for it. Our systems are designed with the assumption that networks are hostile, attacks inevitable, and no user or system should be inherently trusted. Security is built through cryptographic verification at every level.',
    application: [
      'End-to-end encryption by default',
      'No master keys or backdoors',
      'Client-side verification of all components',
      'Continuous security auditing'
    ],
    antithesis: [
      '"Trust us with your data, we\'re the experts"',
      '"Government backdoors for legitimate purposes"',
      '"We keep your passwords safe"',
      '"Our AI requires access to function"'
    ],
    color: 'from-purple-500/20 to-blue-500/20',
    position: [3, 1]
  },
  {
    icon: Code,
    title: 'CODE IS LAW',
    quote: 'Open source, auditable, and immutable. No hidden functions, no secret backdoors.',
    explanation: 'In traditional systems, you\'re bound by terms of service you didn\'t read and policies that change without notice. In our ecosystem, the rules are encoded directly in open-source software—transparent, immutable, and not subject to arbitrary enforcement. What you see is exactly what you get.',
    application: [
      'Every codebase publicly auditable',
      'Deterministic builds for verification',
      'Protocol rules encoded, not subject to override',
      'User control over update approval'
    ],
    antithesis: [
      '"We\'ve updated our terms of service"',
      '"Trust our proprietary, closed-source software"',
      '"The algorithm works in mysterious ways"',
      '"Automatic updates for your protection"'
    ],
    color: 'from-blue-500/20 to-indigo-500/20',
    position: [2, 2]
  },
  {
    icon: Users,
    title: 'COLLECTIVE RESILIENCE',
    quote: 'Many eyes, many hands. Peer networks over central authorities.',
    explanation: 'Centralization creates single points of failure technically, economically, and politically. True resilience comes from community-owned, distributed infrastructure that no single entity can control or compromise. We design systems where power and resources are distributed across networks of peers.',
    application: [
      'Mesh network architecture',
      'Distributed data storage',
      'Community-owned infrastructure',
      'Peer-to-peer economic models'
    ],
    antithesis: [
      '"Let us be your single, convenient platform"',
      '"Centralization makes things more efficient"',
      '"We need to moderate what users can say and do"',
      '"It\'s easier to have one account with us"'
    ],
    color: 'from-indigo-500/20 to-purple-500/20',
    position: [1, 3]
  },
  {
    icon: Zap,
    title: 'ALGORITHMIC SOVEREIGNTY',
    quote: 'If a machine makes decisions that affect your life, you control the machine.',
    explanation: 'As algorithms make more decisions that impact our lives, whoever controls these systems holds immense power. We believe users should control the algorithms they use, not the other way around. The rules that govern your digital life should be fully transparent and modifiable according to your values.',
    application: [
      'User-defined recommendation filters',
      'Customizable moderation standards',
      'Transparent, editable AI assistants',
      'Local learning models owned by users'
    ],
    antithesis: [
      '"Our proprietary algorithm knows what\'s best for you"',
      '"Content moderation at our sole discretion"',
      '"Recommended for you (based on things you can\'t control)"',
      '"AI is too complex for users to understand"'
    ],
    color: 'from-pink-500/20 to-red-500/20',
    position: [3, 3]
  },
  {
    icon: Shield,
    title: 'RADICAL SELF-SUFFICIENCY',
    quote: 'True abundance comes from tools that work FOR you, not ON you.',
    explanation: 'We don\'t seek to replicate old digital feudalism with new lords. Our mission is to build tools that create genuine self-sufficiency—reducing dependency on corporations, governments, and even ourselves. The ultimate goal is technology that makes people independent rather than dependent.',
    application: [
      'Offline-first architecture',
      'Self-hosted options for all services',
      'Minimal resource requirements',
      'Exit paths built into every tool'
    ],
    antithesis: [
      '"Monthly subscription required"',
      '"Connect to our servers to use basic features"',
      '"Your data is stored in our cloud"',
      '"New features require constant updates"'
    ],
    color: 'from-orange-500/20 to-yellow-500/20',
    position: [2, 4]
  }
];

export default principles;
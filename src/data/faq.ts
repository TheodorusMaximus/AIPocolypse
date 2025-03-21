import { Shield, Cpu, Coins, Code, HelpCircle } from 'lucide-react';

export const faqData = {
  categories: [
    { id: 'privacy', name: 'PRIVACY & SECURITY', icon: Shield },
    { id: 'technology', name: 'TECHNOLOGY', icon: Cpu },
    { id: 'token', name: 'AIPO TOKEN', icon: Coins },
    { id: 'community', name: 'COMMUNITY', icon: Code },
    { id: 'general', name: 'GENERAL', icon: HelpCircle }
  ],
  faqs: [
    {
      id: 'privacy-1',
      category: 'privacy',
      question: 'HOW DO YOU ENSURE TRUE PRIVACY?',
      answer: "Every tool we build runs on zero-knowledge architecture. Your data is encrypted locally before it ever touches the network. We can't access it, governments can't access it, no one can—except you.",
      expanded: "The core of our privacy approach is end-to-end encryption combined with zero-knowledge proofs. Before any data leaves your device, it's encrypted with keys that only you control. When information needs to be verified, we use cryptographic proofs that demonstrate truthfulness without revealing the underlying data. Unlike companies that claim 'privacy' while maintaining access to your data for 'service improvement,' our architecture makes it mathematically impossible for us to access your information—even if we wanted to or were compelled to by authorities."
    },
    {
      id: 'technology-1',
      category: 'technology',
      question: 'WHAT MAKES YOUR AI DIFFERENT?',
      answer: "Our AI models run locally on your device. No data leaves your system. We use advanced federated learning techniques to improve the models while maintaining complete privacy of your data.",
      expanded: "Traditional AI services collect vast amounts of user data to train and improve their models. Our approach inverts this model completely. The core AI runs entirely on your device, with no data transmission required. For model improvements, we use federated learning—a technique where your device downloads the latest model, learns from your local data, and then only uploads anonymous gradient updates that cannot be reverse-engineered to reveal personal information. These updates are further secured through differential privacy techniques that add precisely calibrated noise to prevent any possibility of data reconstruction. This gives you AI capabilities without the privacy cost."
    },
    {
      id: 'token-1',
      category: 'token',
      question: 'HOW DOES $AIPO TOKEN WORK?',
      answer: "The $AIPO token is your key to the resistance. It's not just a governance token—it's proof of your commitment to privacy. Holders control the protocol's future and receive priority access to new tools.",
      expanded: "The $AIPO token serves multiple functions within our ecosystem. First, it's a governance mechanism—token holders vote on protocol upgrades, feature prioritization, and resource allocation. Second, it functions as an access key to premium features and early releases. Third, it incentivizes network participation—running nodes, contributing code, or identifying vulnerabilities earns $AIPO rewards. The token uses a deflationary model where a percentage of all transaction fees are burned, increasing scarcity over time. Unlike many crypto projects, $AIPO isn't speculative—it has real utility within a functioning ecosystem and isn't designed primarily as an investment vehicle."
    },
    {
      id: 'community-1',
      category: 'community',
      question: 'CAN I CONTRIBUTE TO THE PROJECT?',
      answer: "Yes! We're open source and community-driven. Check our GitHub for contribution guidelines. Whether you're a developer, designer, or privacy advocate, there's a place for you in the resistance.",
      expanded: "The resistance thrives through community contribution. We welcome developers to review code, fix bugs, and build new features—all repositories are on GitHub under open-source licenses. Non-developers can contribute through documentation, translations, design work, or community moderation. We've established a reputation system that recognizes both technical and non-technical contributions, with the most active members earning governance rights regardless of token holdings. Our development roadmap is publicly visible, with clear indicators of which areas need the most help. We also run regular bounty programs for specific features or security improvements."
    },
    {
      id: 'privacy-2',
      category: 'privacy',
      question: 'WHAT IF THE NETWORK IS COMPROMISED?',
      answer: "Our decentralized architecture means there's no single point of failure. If any node is compromised, your data remains safe. The network automatically detects and isolates threats.",
      expanded: "Security is built into every layer of our protocol. First, data sharding ensures that no single node contains complete information—your data is split across multiple nodes, each holding encrypted fragments. Second, our consensus mechanism requires multiple independent verifications for any network action, making it extremely difficult for a compromised node to influence the system. Third, continuous behavioral analysis identifies and isolates nodes showing suspicious patterns. Finally, cryptographic proofs verify the integrity of all network operations. In the unlikely event of a widespread compromise, emergency protocols would allow users to rapidly migrate to fallback systems while maintaining full data control."
    },
    {
      id: 'general-1',
      category: 'general',
      question: 'IS THIS LEGAL IN MY COUNTRY?',
      answer: "Privacy tools themselves are legal in most jurisdictions. We've designed the system so that users maintain plausible deniability and legal compliance. However, we encourage you to understand your local laws regarding encryption and privacy tools.",
      expanded: "The legality of privacy tools varies globally, but we've designed the system with legal considerations in mind. The architecture provides users with plausible deniability through techniques like steganography and mixed-network routing. Our tools default to configurations that maintain compliance with common legal frameworks while maximizing privacy. No tool can force illegal actions—rather, they prevent unauthorized surveillance of legal activities. That said, we can't provide legal advice for every jurisdiction. In regions with explicit anti-encryption laws, users should understand the potential risks before deployment. The resistance community maintains updated resources on the legal landscape across different regions."
    },
    {
      id: 'technology-2',
      category: 'technology',
      question: 'HOW DO YOU PREVENT MALICIOUS USES?',
      answer: "Privacy and security are fundamental rights, not features that should be withheld because of potential misuse. That said, we've implemented safeguards against the most harmful potential abuses while maintaining core privacy principles.",
      expanded: "We approach this challenge through community governance rather than backdoors or surveillance. Our system is designed with circuit breakers and community oversight to identify and mitigate harmful patterns without compromising individual privacy. For example, we use zero-knowledge proof systems that can verify a user isn't engaged in specifically defined harmful activities without monitoring the user's actual behavior. Additionally, our reputation system rewards positive contributions while creating friction for potentially harmful uses. This approach preserves privacy while acknowledging the responsibility that comes with building powerful tools. The key distinction is that protection against harm comes through system design and community standards rather than centralized monitoring."
    },
    {
      id: 'token-2',
      category: 'token',
      question: 'WHERE CAN I GET $AIPO TOKENS?',
      answer: "Tokens are currently available through our initial distribution program. You can earn them by contributing to the project, running network nodes, or participating in community governance. We've deliberately avoided centralized exchanges to maintain decentralization.",
      expanded: "We've deliberately avoided the typical token launch playbook that prioritizes speculation over utility. Instead, tokens are distributed through four mechanisms: 1) Contribution rewards for code, design, or community support, 2) Node operation incentives for running network infrastructure, 3) Usage grants for active community members demonstrating genuine need, and 4) Limited peer-to-peer exchange via our decentralized marketplace. This approach ensures tokens reach those who value the project's mission rather than speculators. We maintain a transparent distribution ledger showing exactly how tokens enter circulation, with hard caps on team allocations and no investor pre-mines or preferential distribution."
    },
    {
      id: 'technology-3',
      category: 'technology',
      question: 'WHAT DEVICES ARE SUPPORTED?',
      answer: "Our tools work on standard laptops and desktops (Windows, macOS, Linux) with mobile companions for iOS and Android. For maximum security, we recommend systems where you control the hardware and operating system.",
      expanded: "Our core tools are designed to work across a wide range of devices, with desktop platforms offering the most complete functionality. Mobile companions provide essential features but may have limitations due to OS restrictions. For specialized high-security deployments, we maintain compatibility with privacy-focused operating systems like Tails, Qubes, and GrapheneOS. All applications are lightweight by design—the full toolkit requires less than 500MB of storage and runs efficiently even on older hardware. This ensures accessibility for users with limited computational resources. Our development roadmap includes expanding support for specialized hardware like privacy phones, RISC-V processors, and open-hardware initiatives that align with our principles."
    },
    {
      id: 'community-2',
      category: 'community',
      question: 'HOW DO I CONNECT WITH OTHER RESISTANCE MEMBERS?',
      answer: "Our community operates across multiple channels for redundancy. Primary coordination happens through our secured Matrix servers, with fallback options through our own encrypted communication protocol. We also maintain a limited presence on public platforms.",
      expanded: "The resistance community maintains several layers of connection options. Public-facing channels include our GitHub repositories, documentation sites, and limited presence on mainstream platforms for outreach purposes. Core community interaction happens through our security-hardened Matrix homeservers, which provide encrypted communication with decentralized accountability. For sensitive discussions, members can use our native SCRIBE protocol, which offers higher security guarantees. Regular virtual meetups occur through secure conference channels, while localized physical meetups are organized through reputation-verified community members. All channels implement zero-knowledge authentication to prevent infiltration while maintaining member privacy."
    },
    {
      id: 'general-2',
      category: 'general',
      question: 'WHAT IF I FORGET MY KEYS OR PASSWORDS?',
      answer: "We implement a secure key recovery system using Shamir's Secret Sharing. Your recovery keys are split into multiple parts—you'll need a minimum number of these parts to restore access. We recommend storing these parts in physically separated, secure locations.",
      expanded: "Key and password management is entirely under user control—we cannot reset or recover them for you. To prevent catastrophic loss, we provide several recovery options: 1) Shamir's Secret Sharing splits your master key into customizable N parts, requiring M parts for recovery (e.g., 3-of-5), 2) Social recovery allows you to designate trusted contacts who can collectively assist in recovery, 3) Physical backup templates for secure offline storage, and 4) Optional integration with specialized hardware security modules. We provide detailed documentation and practice scenarios to ensure users understand their recovery options before entrusting sensitive data to the system. This approach balances security with practical recoverability."
    }
  ]
};
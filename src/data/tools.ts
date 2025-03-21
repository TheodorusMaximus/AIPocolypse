import { Shield, Eye, Terminal } from 'lucide-react';

export const tools = [
  {
    icon: Shield,
    name: 'SCRIBE',
    tagline: 'YOUR DIGITAL SHADOW',
    description: 'Tracks your footprint—apps, emails, socials. Encrypts it locally, cuts the leaks.',
    longDescription: 'Scribe continuously maps and monitors your digital footprint across applications, communication channels, and social platforms. Using edge-based encryption, it secures your data locally, identifies high-risk exposure points, and systematically cuts the data leaks feeding corporate surveillance networks.',
    status: 'ACTIVE: 127,842 USERS',
    stats: [
      { label: 'Trackers Blocked', value: '1.23M' },
      { label: 'Data Exposure Reduction', value: '78%' },
      { label: 'New Methods Identified', value: '346' }
    ],
    features: ['End-to-end encryption', 'Self-destructing messages', 'Decentralized storage', 'Exposure heatmapping'],
    testimonial: {
      quote: "Scribe caught my banking app sending location data to ad networks—something even my VPN missed. One tap to block, and my financial movements are mine again.",
      author: "Anonymous User, verified"
    },
    codeSnippet: `// Scribe protection protocol
function secureChannel() {
  const entropy = generateEntropy(256);
  const encryptedTunnel = new E2EE(entropy);
  
  return encryptedTunnel.establish({
    metadata: false,
    trackers: 'blocked',
    persistence: 'zero'
  });
}`
  },
  {
    icon: Eye,
    name: 'FORAGER',
    tagline: 'YOUR HUSTLE\'S EDGE',
    description: 'Sniffs out deals—supplies, gigs, markets. Built for the grind.',
    longDescription: 'Forager deploys autonomous agents to hunt down financial inefficiencies across markets, supply chains, and gig economies. It identifies price disparities, arbitrage opportunities, and hidden fees that platforms use to extract value. Your earning potential is optimized against corporate margin grabs.',
    status: 'BETA: 53,218 USERS',
    stats: [
      { label: 'Fees Saved', value: '$53,892' },
      { label: 'Arbitrage Routes', value: '116' },
      { label: 'Avg. Cost Reduction', value: '23.7%' }
    ],
    features: ['Pattern detection', 'Market inefficiency scanning', 'Fee avoidance routing', 'Supply chain gap identification'],
    testimonial: {
      quote: "Forager found me clients willing to pay 40% more for the same work I was doing on traditional platforms—and without the middleman tax. My freelance business isn't just surviving now; it's thriving.",
      author: "J.K., verified"
    },
    codeSnippet: `// Forager opportunity detection
async function scanMarkets() {
  const markets = await fetchDecentralized();
  
  return markets.filter(m => {
    const inefficiency = calculateSpread(m);
    return inefficiency > THRESHOLD;
  }).sort((a, b) => 
    b.opportunity - a.opportunity
  );
}`
  },
  {
    icon: Terminal,
    name: 'WARDEN',
    tagline: 'YOUR TRUTH FILTER',
    description: 'Scores the noise—news, posts, claims. Cuts through botspam.',
    longDescription: 'Warden deploys advanced semantic analysis to evaluate content credibility across news sources, social media, and information channels. It differentiates between human-generated and AI-generated content, identifies coordinated narrative pushing, and cuts through the noise of botspam.',
    status: 'ALPHA: 28,560 USERS',
    stats: [
      { label: 'Posts Analyzed', value: '10.2M' },
      { label: 'Bot Networks Found', value: '342' },
      { label: 'Credibility Profiles', value: '28,000+' }
    ],
    features: ['Source reputation tracking', 'Content provenance verification', 'Narrative pattern analysis', 'Bot network identification'],
    testimonial: {
      quote: "During the Austin blackouts, Warden helped me filter out the disinformation. While others panicked over fake supply shortages, I had reliable updates on power restoration. Information clarity when it mattered most.",
      author: "T.M., verified"
    },
    codeSnippet: `// Warden truth filtering
function analyzeClaim(content) {
  const vectors = nlpEmbed(content);
  const sourceRep = checkSourceHistory();
  const botProb = detectSyntheticPatterns();
  
  return {
    truthScore: calculateBayesian([
      vectors, sourceRep, botProb
    ]),
    confidenceInterval: 0.92
  };
}`
  }
];
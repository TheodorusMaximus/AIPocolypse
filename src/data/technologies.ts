import { Server, Lock, Network, Cpu, Shield, Key, Code, GitBranch } from 'lucide-react';

// Technology data types
export interface TechStat {
  [key: string]: string;
}

export interface Technology {
  icon: any;
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  stats: TechStat;
  diagram: string;
  code: string;
}

// Enhanced technologies data with expanded content
export const technologies: Technology[] = [
  {
    icon: Server,
    name: 'DECENTRALIZED STORAGE',
    description: 'Data fragmented across a network of secure nodes. No single point of failure.',
    longDescription: 'Your data is sharded, encrypted, and distributed across the resistance network. Each fragment is meaningless on its own and requires your keys to reassemble. No central authority can access your complete data, even under legal pressure.',
    tech: ['IPFS', 'Arweave', 'LibP2P'],
    stats: {
      nodes: '8,432',
      uptime: '99.998%',
      resilience: 'F+1 Byzantine'
    },
    diagram: 'storage',
    code: `// Data sharding and encryption process
async function storeSecurely(data, userKeys) {
  const shards = await splitIntoShards(data, 10);
  
  return Promise.all(shards.map(async (shard, i) => {
    const encrypted = await encryptShard(
      shard, 
      userKeys.shardKeys[i]
    );
    
    // Distribute to random network nodes
    const nodes = selectOptimalNodes(3);
    return nodes.map(node => 
      node.store(encrypted, getProofOfWork())
    );
  }));
}`
  },
  {
    icon: Lock,
    name: 'ZERO-KNOWLEDGE PROOFS',
    description: 'Verify without revealing. Your data stays yours.',
    longDescription: 'When you need to prove something about your data without exposing the data itself, our zero-knowledge protocols step in. Authenticate your identity, verify your age, prove your credentials - all without revealing the underlying information that powers these facts.',
    tech: ['zk-SNARKs', 'Bulletproofs', 'PLONK'],
    stats: {
      proofSize: '< 1kb',
      verifyTime: '< 10ms',
      securityLevel: '256-bit'
    },
    diagram: 'zkproof',
    code: `// Zero-knowledge authentication flow
function generateProof(privateData, publicChallenge) {
  const circuit = loadVerificationCircuit();
  const witness = generateWitness(
    privateData, 
    publicChallenge
  );
  
  return {
    proof: circuit.prove(witness),
    publicSignals: circuit.getPublicSignals()
  };
}`
  }
  // Additional tech items will continue here
];

export default technologies; 
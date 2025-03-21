import React from 'react';
import { StorageDiagram } from './StorageDiagram';
import { ZkProofDiagram } from './ZkProofDiagram';
import { MeshNetworkDiagram } from './MeshNetworkDiagram';
import { LocalAIDiagram } from './LocalAIDiagram';
import { QuantumResistanceDiagram } from './QuantumResistanceDiagram';
import { KeyManagementDiagram } from './KeyManagementDiagram';

interface TechDiagramProps {
  type: string;
}

export const TechDiagram: React.FC<TechDiagramProps> = ({ type }) => {
  const renderDiagram = () => {
    switch (type) {
      case 'storage':
        return <StorageDiagram />;
      case 'zkproof':
        return <ZkProofDiagram />;
      case 'mesh':
        return <MeshNetworkDiagram />;
      case 'localai':
        return <LocalAIDiagram />;
      case 'quantum':
        return <QuantumResistanceDiagram />;
      case 'keymanagement':
        return <KeyManagementDiagram />;
      default:
        return <div className="flex items-center justify-center h-full text-gray-400">No diagram available</div>;
    }
  };

  return (
    <div className="w-full h-full">
      {renderDiagram()}
    </div>
  );
};

export default TechDiagram; 
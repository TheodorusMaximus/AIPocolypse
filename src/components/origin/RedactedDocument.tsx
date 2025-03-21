import React from 'react';
import { FileText, Lock } from 'lucide-react';

interface RedactedDocumentProps {
  title: string;
  content: string;
}

export function RedactedDocument({ title, content }: RedactedDocumentProps) {
  return (
    <div className="bg-black bg-opacity-80 border border-concrete p-4 font-mono text-sm">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-concrete">
        <div className="flex items-center">
          <FileText size={14} className="text-gray-400 mr-2" />
          <span className="text-gray-300">{title}</span>
        </div>
        <div className="flex items-center text-xs text-gray-500">
          <Lock size={12} className="mr-1" />
          CLASSIFIED
        </div>
      </div>
      
      <div className="text-gray-400 leading-relaxed">
        {content.split('[REDACTED]').map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < content.split('[REDACTED]').length - 1 && (
              <span className="inline-block bg-resistance text-black px-2 opacity-70">[REDACTED]</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
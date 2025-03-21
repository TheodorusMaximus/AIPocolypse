import React from 'react';

interface DepartureMemoProps {
  subject: string;
  body: string;
}

export function DepartureMemo({ subject, body }: DepartureMemoProps) {
  return (
    <div className="bg-black bg-opacity-50 border border-concrete p-4 font-mono text-sm">
      <div className="border-b border-concrete pb-2 mb-3">
        <div className="text-gray-400 mb-1">
          <span className="text-gray-500">To:</span> leadership@deepseek.com
        </div>
        <div className="text-gray-400 mb-1">
          <span className="text-gray-500">From:</span> [undisclosed]
        </div>
        <div className="text-gray-400">
          <span className="text-gray-500">Subject:</span> {subject}
        </div>
      </div>
      <div className="text-gray-300 leading-relaxed">{body}</div>
      <div className="mt-4 flex justify-end">
        <div className="text-resistance">— Resistance</div>
      </div>
    </div>
  );
}
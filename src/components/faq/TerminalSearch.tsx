import React, { useState } from 'react';
import { Terminal, Search, ChevronRight } from 'lucide-react';

interface TerminalSearchProps {
  faqs: any[];
  onSelect: (id: string) => void;
}

export function TerminalSearch({ faqs, onSelect }: TerminalSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    
    setTimeout(() => {
      const results = faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };
  
  return (
    <div className="bg-black bg-opacity-80 border border-concrete rounded-sm p-4">
      <div className="flex items-center px-3 py-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-auto text-xs text-gray-500 font-mono">resistance@terminal:~/faq</div>
      </div>
      
      <form onSubmit={handleSearch} className="flex mb-4">
        <div className="flex-1 flex items-center bg-black border border-concrete px-3 py-2">
          <Terminal size={14} className="text-resistance mr-2" />
          <span className="text-gray-500 mr-2">$</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search the knowledge base..."
            className="flex-1 bg-transparent border-none outline-none text-gray-300 font-mono"
          />
        </div>
        <button 
          type="submit" 
          className="bg-resistance text-black px-4 font-mono flex items-center"
        >
          <Search size={14} className="mr-2" />
          SEARCH
        </button>
      </form>
      
      <div className="font-mono text-sm">
        {isSearching && (
          <div className="text-resistance">
            Searching database for "{searchQuery}"...
          </div>
        )}
        
        {!isSearching && searchResults.length > 0 && (
          <div>
            <div className="text-gray-500 mb-2">
              Found {searchResults.length} results for "{searchQuery}":
            </div>
            <ul className="space-y-2">
              {searchResults.map(result => (
                <li key={result.id}>
                  <button 
                    className="text-resistance hover:underline text-left flex items-start"
                    onClick={() => onSelect(result.id)}
                  >
                    <ChevronRight size={14} className="mr-2 mt-1 flex-shrink-0" />
                    <span>{result.question}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {!isSearching && searchResults.length === 0 && searchQuery && (
          <div className="text-gray-400">
            No results found. Try different keywords or ask the community.
          </div>
        )}
        
        {!searchQuery && !isSearching && (
          <div className="text-gray-500">
            Enter a question or keywords to search the resistance knowledge base.
          </div>
        )}
      </div>
    </div>
  );
}
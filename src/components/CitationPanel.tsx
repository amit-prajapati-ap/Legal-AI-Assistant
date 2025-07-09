import React, { useState } from 'react';
import { ExternalLink, FileText, Eye, Highlighter } from 'lucide-react';

interface Citation {
  text: string;
  pdfLink: string;
  scrollToHighlight: boolean;
  source?: string;
}

interface CitationPanelProps {
  citation: Citation;
  isVisible: boolean;
}

const CitationPanel: React.FC<CitationPanelProps> = ({ citation, isVisible }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  if (!isVisible) return null;

  const handlePDFOpen = () => {
    setIsOpening(true);
    
    // Simulate PDF opening and highlighting
    setTimeout(() => {
      window.open(citation.pdfLink, '_blank');
      setIsHighlighted(true);
      setIsOpening(false);
      
      // Remove highlight after animation
      setTimeout(() => setIsHighlighted(false), 4000);
    }, 1000);
  };

  const simulateHighlight = () => {
    setIsHighlighted(true);
    setTimeout(() => setIsHighlighted(false), 3000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="h-5 w-5 text-orange-600" />
        <h3 className="text-lg font-semibold text-gray-800">Legal Citation</h3>
      </div>
      
      <div className="space-y-4">
        
        <div 
          className={`p-4 bg-gray-50 rounded-lg border-l-4 border-orange-400 transition-all duration-300 ${
            isHighlighted ? 'bg-yellow-100 shadow-md transform scale-[1.02]' : ''
          }`}
        >
          <p className="text-gray-700 italic leading-relaxed">
            "{citation.text}"
          </p>
        </div>
        
        <div className="flex gap-3 pt-2">
          <button
            onClick={handlePDFOpen}
            disabled={isOpening}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center cursor-pointer gap-2 transition-all duration-200"
          >
            {isOpening ? (
              <>
                <Eye className="h-4 w-4 animate-pulse hidden sm:block" />
                Opening PDF...
              </>
            ) : (
              <>
                <ExternalLink className="h-4 w-4 hidden sm:block" />
                Open PDF Source
              </>
            )}
          </button>
          
          <button
            onClick={simulateHighlight}
            className="border-orange-300 text-orange-700 hover:bg-orange-50 px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer max-sm:bg-yellow-400 max-sm:text-white transition-all duration-200"
          >
            <Highlighter className="h-4 w-4 hidden sm:block" />
            Preview Highlight
          </button>
        </div>
      </div>
    </div>
  );
};

export default CitationPanel;
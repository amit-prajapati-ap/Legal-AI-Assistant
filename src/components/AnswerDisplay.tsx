import React from 'react';
import { Scale, CheckCircle } from 'lucide-react';

interface AnswerDisplayProps {
  answer: string;
  isVisible: boolean;
}

const AnswerDisplay: React.FC<AnswerDisplayProps> = ({ answer, isVisible }) => {
  if (!isVisible) return null;

  const formatAnswer = (text: string) => {
    // Split text into paragraphs and format legal terms
    const paragraphs = text.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      // Highlight legal sections and important terms
      const formattedText = paragraph
        .replace(/(Section \d+[A-Z]*)/g, '<strong class="text-blue-700 font-semibold">$1</strong>')
        .replace(/(Act,? \d{4})/g, '<strong class="text-blue-700 font-semibold">$1</strong>')
        .replace(/(Supreme Court|High Court|District Court)/g, '<strong class="text-green-700 font-semibold">$1</strong>')
        .replace(/(compensation|damages|liability)/gi, '<span class="bg-yellow-100 text-yellow-800 px-1 rounded">$1</span>');
      
      return (
        <p
          key={index}
          className="mb-4 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
      );
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg border border-blue-200 p-6 mb-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <Scale className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">Legal Analysis</h3>
        <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
      </div>
      <div className="prose prose-blue max-w-none">
        <div className="text-gray-700 text-sm md:text-base">
          {formatAnswer(answer)}
        </div>
      </div>
    </div>
  );
};

export default AnswerDisplay;
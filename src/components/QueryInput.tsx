import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';

interface QueryInputProps {
  onSubmit: (query: string) => void;
  isLoading: boolean;
}

const QueryInput: React.FC<QueryInputProps> = ({ onSubmit, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === '') {
        toast("Please enter a query.");
    }
    if (query.trim() && !isLoading) {
      onSubmit(query.trim());
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Ask Your Legal Question
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your legal query here... (e.g., Can the accident victim's family get compensation if the victim was a minor without a license?)"
          className="min-h-[120px] resize-none border w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 outline-none rounded-lg px-4 py-2"
          disabled={isLoading}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={!query.trim() || isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit Query
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QueryInput;
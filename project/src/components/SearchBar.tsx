import React from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  return (
    <div className="sticky top-0 z-50 bg-white p-3 shadow-md">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search for materials or tools..."
          className="w-full rounded-full border border-gray-300 bg-gray-100 py-2 px-4 pl-10 text-sm focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
        <Search className="absolute left-3 h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBar;
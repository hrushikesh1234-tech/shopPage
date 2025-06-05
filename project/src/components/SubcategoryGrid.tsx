import React from 'react';
import { Category } from '../data/categories';

interface SubcategoryGridProps {
  category: Category;
}

const SubcategoryGrid: React.FC<SubcategoryGridProps> = ({ category }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {category.subcategories.map((subcategory) => (
        <button
          key={subcategory}
          className="flex aspect-square flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md"
        >
          <span className="text-sm font-medium text-gray-800">{subcategory}</span>
        </button>
      ))}
    </div>
  );
};

export default SubcategoryGrid;
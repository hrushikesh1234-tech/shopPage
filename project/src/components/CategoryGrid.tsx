import React from 'react';
import { Category } from '../data/categories';
import CategoryIcon from './CategoryIcon';

interface CategoryGridProps {
  categories: Category[];
  topCategoryIds: string[];
  onCategoryClick: (categoryId: string) => void;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  topCategoryIds,
  onCategoryClick
}) => {
  // Filter top categories
  const topCategories = categories.filter(cat => 
    topCategoryIds.includes(cat.id)
  );

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Top Categories for You</h2>
      
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        {topCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <CategoryIcon name={category.icon as any} size={28} />
            </div>
            <span className="mt-2 text-center text-sm font-medium text-gray-800">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
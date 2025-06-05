import React from 'react';
import { Category } from '../data/categories';

interface CategorySidebarProps {
  categories: Category[];
  activeCategory: string | null;
  onCategoryClick: (categoryId: string) => void;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
  activeCategory,
  onCategoryClick
}) => {
  return (
    <div className="h-full w-[100px] flex-shrink-0 overflow-hidden border-r border-gray-200 bg-white md:w-[180px]">
      <div 
        className="flex h-full flex-col overflow-y-auto scrollbar-hide"
        style={{ 
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            className={`flex w-full flex-col items-center justify-center p-4 text-center transition-colors duration-200 md:flex-row md:justify-start md:gap-3 md:text-left
              ${activeCategory === category.id ? 'bg-amber-50 text-amber-600' : 'text-gray-700 hover:bg-gray-50'}`}
          >
            <div className="h-12 w-12 overflow-hidden rounded-lg md:h-10 md:w-10">
              <img 
                src={`/${category.image}`} 
                alt={category.name}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="mt-1 text-xs font-medium md:mt-0 md:text-sm">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
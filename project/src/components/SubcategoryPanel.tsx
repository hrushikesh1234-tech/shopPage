import React from 'react';
import { Category } from '../data/categories';
import CategoryIcon from './CategoryIcon';
import { X } from 'lucide-react';

interface SubcategoryPanelProps {
  category: Category | null;
  onClose: () => void;
}

const SubcategoryPanel: React.FC<SubcategoryPanelProps> = ({ category, onClose }) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 md:absolute md:inset-auto md:left-[180px] md:top-0 md:h-full md:w-[280px] md:bg-white md:bg-opacity-100 md:p-0 md:shadow-lg">
      <div className="max-h-[80vh] w-full max-w-md rounded-lg bg-white p-6 shadow-xl md:h-full md:max-h-none md:rounded-none md:shadow-none">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <CategoryIcon name={category.icon as any} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
          </div>
          <button 
            onClick={onClose} 
            className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          {category.subcategories.map((subcat) => (
            <button
              key={subcat}
              className="flex h-20 flex-col items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-3 text-center transition-colors hover:border-amber-300 hover:bg-amber-50"
            >
              <span className="text-sm font-medium text-gray-800">{subcat}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubcategoryPanel;
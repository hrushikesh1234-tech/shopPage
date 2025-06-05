import React from 'react';
import CategoryIcon from './CategoryIcon';

interface NavItem {
  id: string;
  name: string;
  icon: string;
}

interface BottomNavigationProps {
  items: NavItem[];
  activeItem?: string;
  onItemClick: (id: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  items,
  activeItem = '',
  onItemClick
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white">
      <div className="flex justify-around">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onItemClick(item.id)}
            className={`flex w-full flex-col items-center justify-center py-3 
              ${activeItem === item.id ? 'text-amber-600' : 'text-gray-600'}`}
          >
            <CategoryIcon 
              name={item.icon as any} 
              className={activeItem === item.id ? 'text-amber-600' : 'text-gray-600'} 
            />
            <span className="mt-1 text-xs">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
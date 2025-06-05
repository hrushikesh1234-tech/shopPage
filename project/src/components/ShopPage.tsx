import React, { useState } from 'react';
import { categories, navigation } from '../data/categories';
import SearchBar from './SearchBar';
import CategorySidebar from './CategorySidebar';
import SubcategoryGrid from './SubcategoryGrid';
import BottomNavigation from './BottomNavigation';

const ShopPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeNavItem, setActiveNavItem] = useState('menu');

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId === activeCategory ? null : categoryId);
  };

  const handleNavItemClick = (id: string) => {
    setActiveNavItem(id);
  };

  const selectedCategory = categories.find(
    (category) => category.id === activeCategory
  );

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <SearchBar />
      
      <div className="flex flex-1 overflow-hidden">
        <CategorySidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />
        
        <div className="flex-1 overflow-y-hidden p-4">
          {selectedCategory ? (
            <div>
              <h2 className="mb-6 text-xl font-semibold text-gray-900">{selectedCategory.name}</h2>
              <SubcategoryGrid category={selectedCategory} />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center text-gray-500">
              Select a category to view items
            </div>
          )}
        </div>
      </div>
      
      <BottomNavigation 
        items={navigation} 
        activeItem={activeNavItem}
        onItemClick={handleNavItemClick}
      />
    </div>
  );
};

export default ShopPage;
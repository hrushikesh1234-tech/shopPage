import React from 'react';
import * as LucideIcons from 'lucide-react';

interface CategoryIconProps {
  name: keyof typeof LucideIcons;
  className?: string;
  size?: number;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ 
  name, 
  className = "", 
  size = 20 
}) => {
  const Icon = LucideIcons[name] || LucideIcons.LayoutGrid;
  
  return <Icon size={size} className={className} />;
};

export default CategoryIcon;
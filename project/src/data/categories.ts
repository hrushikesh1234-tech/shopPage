export interface Category {
  id: string;
  name: string;
  image: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: 'cement',
    name: 'Cement',
    image: 'cement.jpg',
    subcategories: ['OPC 43', 'OPC 53', 'PPC', 'White Cement', 'RMC']
  },
  {
    id: 'bricks',
    name: 'Bricks',
    image: 'bricks.jpg',
    subcategories: ['Red Bricks', 'Fly Ash Bricks', 'AAC Blocks']
  },
  {
    id: 'aggregate',
    name: 'Aggregate',
    image: 'AGGREGATE.jpg',
    subcategories: ['10mm', '20mm', '40mm']
  },
  {
    id: 'steel',
    name: 'Steel',
    image: 'Steel.jfif',
    subcategories: ['TMT Bars', 'Binding Wire', 'Steel Rods']
  },
  {
    id: 'stone-dust',
    name: 'Stone Dust',
    image: 'stone dust.jpg',
    subcategories: ['Crushed Dust', 'M-Sand']
  },
  {
    id: 'rubblestone',
    name: 'Rubblestone',
    image: 'Rubblestone.jfif',
    subcategories: ['Black', 'Grey']
  },
  {
    id: 'cement-paint',
    name: 'Cement Paint',
    image: 'Cement paints.jfif',
    subcategories: ['Waterproof', 'White', 'Primer']
  },
  {
    id: 'tools',
    name: 'Tools',
    image: 'Tools.jfif',
    subcategories: ['Trowel', 'Wheelbarrow', 'Level', 'Cutter', 'Hammer']
  },
  {
    id: 'safety-gears',
    name: 'Safety Gears',
    image: 'safety gears.jfif',
    subcategories: ['Helmet', 'Gloves', 'Boots', 'Vest']
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    image: 'plumbing.jfif',
    subcategories: ['Pipes', 'Fittings', 'Taps', 'Valves']
  },
  {
    id: 'electrical',
    name: 'Electrical',
    image: 'electricals.jfif',
    subcategories: ['Wires', 'Switches', 'Boards', 'Conduits']
  }
];

export const navigation = [
  { id: 'orders', name: 'Orders', icon: 'ClipboardList' },
  { id: 'menu', name: 'Menu', icon: 'Menu' },
  { id: 'liked', name: 'Liked', icon: 'Heart' },
  { id: 'cart', name: 'Cart', icon: 'ShoppingBag' }
];
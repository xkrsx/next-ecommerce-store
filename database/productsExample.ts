import { Product } from '../migrations/00000-createTableProducts';

export const category = {
  equipment: 'equipment',
  bike: 'bike',
  protection: 'protection',
};

export const products: Product[] = [
  {
    id: 1,
    name: 'mallet',
    category: category.equipment,
    description:
      'Discover the precision and durability of our Bike Polo Mallet, designed for enthusiasts and professionals alike. Crafted from lightweight yet sturdy materials, this mallet ensures optimal balance and control during intense gameplay. The ergonomic handle offers a comfortable grip, while the reinforced head provides excellent impact resistance. Elevate your bike polo experience with a mallet built to last and perform at the highest level.',

    price: 20,
    count: 20,
  },
  {
    id: 2,
    name: 'bike',
    category: category.bike,
    description:
      'Unleash your potential on the court with our top-tier Bike Polo Bike. Engineered specifically for the demands of bike polo, this bike features a robust frame for maximum durability, precise steering for agile maneuvers, and a lightweight build for speed and control. With custom components designed to withstand intense play, our bike ensures a smooth, responsive ride that keeps you in command of every match. Equip yourself with the ultimate bike polo machine and dominate the game.',

    price: 400,
    count: 10,
  },
  {
    id: 3,
    name: 'helmet',
    category: category.protection,
    description:
      "Ensure your safety and enhance your performance with our Bike Polo Helmet with Cage. Designed for ultimate protection, this helmet features a sturdy cage to guard your face against impacts and flying balls. Its lightweight, aerodynamic design offers comfort and breathability, while the adjustable fit system guarantees a secure and personalized fit. Play confidently knowing you're protected with a helmet that combines superior safety and style.",
    price: 50,
    count: 10,
  },
  {
    id: 4,
    name: 'ball',
    category: category.equipment,
    description:
      "Elevate your game with our premium Bike Polo Ball, designed for consistency and durability. Made from high-quality materials, this ball offers excellent grip and control on any surface, ensuring precise play and reliable performance. Its vibrant color enhances visibility, making it easy to track during fast-paced matches. Trust in a ball that's crafted to meet the rigorous demands of bike polo and keep you at the top of your game.",
    price: 5,
    count: 30,
  },
  {
    id: 5,
    name: 'goal',
    category: category.equipment,
    description:
      'Upgrade your court with our high-quality Bike Polo Goal, built for durability and easy setup. Constructed from robust materials, this goal can withstand the rigors of intense matches while maintaining its shape and stability. Its compact, portable design makes it perfect for both temporary and permanent play areas. Enhance your game with a goal designed to provide consistent performance and reliability, match after match.',
    price: 60,
    count: 5,
  },
  {
    id: 6,
    name: 'gloves',
    category: category.protection,
    description:
      'Enhance your grip and protect your hands with our Bike Polo Gloves. These gloves are crafted from durable, breathable materials, offering comfort and flexibility for optimal control. Reinforced padding protects against impacts and abrasions, while the adjustable wrist closure ensures a secure fit. Play with confidence and precision, knowing your hands are well-protected with gloves designed specifically for the demands of bike polo.',
    price: 40,
    count: 10,
  },
  {
    id: 7,
    name: 'front brake',
    category: category.bike,
    description:
      'Achieve unmatched stopping power and control with our Front Disc Brake for Bike Polo. Engineered for the high-intensity demands of the sport, this disc brake offers superior performance and reliability. Featuring a robust rotor and precision-calibrated caliper, it ensures smooth, responsive braking in all conditions. Enhance your game with a front disc brake designed to provide consistent, reliable stopping power and durability, keeping you in command of every move.',
    price: 65,
    count: 5,
  },
];

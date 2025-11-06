export const categories = [
  { id: "dollar-deals", name: "Dollar Deals", blurb: "Budget-friendly basics", img: "https://placehold.co/600x400?text=Dollar+Deals" },
  { id: "household", name: "Household", blurb: "Cleaners, paper goods, kitchen", img: "https://placehold.co/600x400?text=Household" },
  { id: "snacks", name: "Snacks & Drinks", blurb: "Chips, candy, sodas", img: "https://placehold.co/600x400?text=Snacks+%26+Drinks" },
  { id: "health", name: "Health & Beauty", blurb: "Personal care essentials", img: "https://placehold.co/600x400?text=Health+%26+Beauty" },
];

// Expanded product catalogue to provide lots of items for horizontal scrollers
export const products = [
  // household
  { id: "p1", title: "Ultra Paper Towels (6-pack)", price: 7.99, category: "household", img: "https://placehold.co/500x500?text=Paper+Towels", rating: 4.2 },
  { id: "p2", title: "All-Purpose Cleaner 32oz", price: 3.49, category: "household", img: "https://placehold.co/500x500?text=Cleaner", rating: 4.0 },
  { id: "p9", title: "Dish Soap Refill 24oz", price: 2.29, category: "household", img: "https://placehold.co/500x500?text=Dish+Soap", rating: 3.9 },
  { id: "p10", title: "Trash Bags 30-pack", price: 6.49, category: "household", img: "https://placehold.co/500x500?text=Trash+Bags", rating: 4.1 },
  { id: "p11", title: "Spill Mop", price: 12.99, category: "household", img: "https://placehold.co/500x500?text=Spill+Mop", rating: 4.3 },
  { id: "p12", title: "Glass Cleaner 16oz", price: 3.19, category: "household", img: "https://placehold.co/500x500?text=Glass+Cleaner", rating: 4.0 },
  { id: "p13", title: "Bamboo Cutting Board", price: 8.99, category: "household", img: "https://placehold.co/500x500?text=Cutting+Board", rating: 4.5, badge: "new" },
  { id: "p14", title: "Storage Containers (3-pack)", price: 9.99, category: "household", img: "https://placehold.co/500x500?text=Containers", rating: 4.1 },

  // snacks
  { id: "p3", title: "Sparkle Soda 12-pack", price: 5.99, category: "snacks", img: "https://placehold.co/500x500?text=Soda", rating: 3.8 },
  { id: "p4", title: "Party Chips XXL", price: 2.49, category: "snacks", img: "https://placehold.co/500x500?text=Chips", rating: 4.4, badge: "bestseller" },
  { id: "p15", title: "Chocolate Bar Variety (6)", price: 4.99, category: "snacks", img: "https://placehold.co/500x500?text=Chocolate", rating: 4.6, badge: "discount" },
  { id: "p16", title: "Trail Mix 14oz", price: 3.99, category: "snacks", img: "https://placehold.co/500x500?text=Trail+Mix", rating: 4.2 },
  { id: "p17", title: "Gummy Bears", price: 1.99, category: "snacks", img: "https://placehold.co/500x500?text=Gummies", rating: 3.9 },
  { id: "p18", title: "Sparkling Water 8-pack", price: 6.49, category: "snacks", img: "https://placehold.co/500x500?text=Sparkling+Water", rating: 4.0 },
  { id: "p19", title: "Pretzel Thins", price: 2.29, category: "snacks", img: "https://placehold.co/500x500?text=Pretzels", rating: 4.1 },
  { id: "p20", title: "Salsa Chunky 16oz", price: 3.49, category: "snacks", img: "https://placehold.co/500x500?text=Salsa", rating: 4.3 },

  // health
  { id: "p5", title: "Vitamin C Gummies", price: 9.99, category: "health", img: "https://placehold.co/500x500?text=Vitamins" },
  { id: "p6", title: "2-Blade Razors (12ct)", price: 4.29, category: "health", img: "https://placehold.co/500x500?text=Razors" },
  { id: "p21", title: "Hand Sanitizer 8oz", price: 2.99, category: "health", img: "https://placehold.co/500x500?text=Sanitizer", rating: 4.0 },
  { id: "p22", title: "Face Mask 10-pack", price: 5.99, category: "health", img: "https://placehold.co/500x500?text=Masks", rating: 3.8 },
  { id: "p23", title: "Daily Multivitamin", price: 11.99, category: "health", img: "https://placehold.co/500x500?text=Multivitamin", rating: 4.2 },
  { id: "p24", title: "Lip Balm 3-pack", price: 2.49, category: "health", img: "https://placehold.co/500x500?text=Lip+Balm", rating: 4.1 },
  { id: "p25", title: "Shampoo 12oz", price: 4.99, category: "health", img: "https://placehold.co/500x500?text=Shampoo", rating: 4.0 },
  { id: "p26", title: "Conditioner 12oz", price: 4.99, category: "health", img: "https://placehold.co/500x500?text=Conditioner", rating: 4.0 },

  // dollar-deals (many small items)
  { id: "p7", title: "Kitchen Sponge 3-pk", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Sponge" },
  { id: "p8", title: "Premium Pen 2-pk", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Pens" },
  { id: "p27", title: "Notepad 50-page", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Notepad" },
  { id: "p28", title: "Reusable Straw", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Straw" },
  { id: "p29", title: "Keychain Light", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Keychain+Light" },
  { id: "p30", title: "Snack Cup", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Snack+Cup" },
  { id: "p31", title: "Hair Ties 12-pack", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Hair+Ties" },
  { id: "p32", title: "Shoe Laces", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Shoe+Laces" },
  { id: "p33", title: "Mini Screwdriver", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Screwdriver" },
  { id: "p34", title: "Measuring Spoon", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Spoon" },
  { id: "p35", title: "Travel Toothbrush", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Toothbrush" },
  { id: "p36", title: "Mini Notebook", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Notebook" },
  { id: "p37", title: "Snack Bag", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Snack+Bag" },
  { id: "p38", title: "Fridge Magnet", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Magnet" },
  { id: "p39", title: "Earbuds (basic)", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Earbuds" },
  { id: "p40", title: "Mini Flashlight", price: 1.0, category: "dollar-deals", img: "https://placehold.co/500x500?text=Flashlight" }
];

// Make more items featured so the featured scroller is long
export const featuredIds = [
  "p7","p4","p1","p5","p3","p15","p16","p9","p10","p11","p21","p23"
];

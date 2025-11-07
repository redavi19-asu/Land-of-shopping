export const categories = [
  { id: "dollar-deals", name: "Dollar Deals", blurb: "Budget-friendly basics", img: "images/c-dollar-deals.svg" },
  { id: "household", name: "Household", blurb: "Cleaners, paper goods, kitchen", img: "images/c-household.svg" },
  { id: "snacks", name: "Snacks & Drinks", blurb: "Chips, candy, sodas", img: "images/c-snacks.svg" },
  { id: "health", name: "Health & Beauty", blurb: "Personal care essentials", img: "images/c-health.svg" },
  { id: "electronics", name: "Electronics", blurb: "Affordable gadgets & accessories", img: "images/c-electronics.svg" },
  { id: "toys", name: "Toys & Games", blurb: "Fun for all ages", img: "images/c-toys.svg" },
  { id: "kitchen", name: "Kitchen", blurb: "Cookware & utensils", img: "images/c-kitchen.svg" },
  { id: "outdoors", name: "Outdoors", blurb: "Garden, camping & more", img: "images/c-outdoors.svg" },
  { id: "pets", name: "Pet Supplies", blurb: "Treats, toys and care", img: "images/c-pets.svg" },
];

// Expanded product catalogue to provide lots of items for horizontal scrollers
export const products = [
  // household
  { id: "p1", title: "Ultra Paper Towels (6-pack)", price: 7.99, category: "household", img: "images/p1.jpg", rating: 4.2 },
  { id: "p2", title: "All-Purpose Cleaner 32oz", price: 3.49, category: "household", img: "images/p2.jpg", rating: 4.0 },
  { id: "p9", title: "Dish Soap Refill 24oz", price: 2.29, category: "household", img: "images/p9.jpg", rating: 3.9 },
  { id: "p10", title: "Trash Bags 30-pack", price: 6.49, category: "household", img: "images/p10.jpg", rating: 4.1 },
  { id: "p11", title: "Spill Mop", price: 12.99, category: "household", img: "images/p11.jpg", rating: 4.3 },
  { id: "p12", title: "Glass Cleaner 16oz", price: 3.19, category: "household", img: "images/p12.jpg", rating: 4.0 },
  { id: "p13", title: "Bamboo Cutting Board", price: 8.99, category: "household", img: "images/p13.jpg", rating: 4.5, badge: "new" },
  { id: "p14", title: "Storage Containers (3-pack)", price: 9.99, category: "household", img: "images/p14.jpg", rating: 4.1 },

  // snacks
  { id: "p3", title: "Sparkle Soda 12-pack", price: 5.99, category: "snacks", img: "images/p3.jpg", rating: 3.8 },
  { id: "p4", title: "Party Chips XXL", price: 2.49, category: "snacks", img: "images/p4.jpg", rating: 4.4, badge: "bestseller" },
  { id: "p15", title: "Chocolate Bar Variety (6)", price: 4.99, category: "snacks", img: "images/p15.jpg", rating: 4.6, badge: "discount" },
  { id: "p16", title: "Trail Mix 14oz", price: 3.99, category: "snacks", img: "images/p16.jpg", rating: 4.2 },
  { id: "p17", title: "Gummy Bears", price: 1.99, category: "snacks", img: "images/p17.jpg", rating: 3.9 },
  { id: "p18", title: "Sparkling Water 8-pack", price: 6.49, category: "snacks", img: "images/p18.jpg", rating: 4.0 },
  { id: "p19", title: "Pretzel Thins", price: 2.29, category: "snacks", img: "images/p19.jpg", rating: 4.1 },
  { id: "p20", title: "Salsa Chunky 16oz", price: 3.49, category: "snacks", img: "images/p20.jpg", rating: 4.3 },

  // health
  { id: "p5", title: "Vitamin C Gummies", price: 9.99, category: "health", img: "images/p5.jpg", rating: 4.0 },
  { id: "p6", title: "2-Blade Razors (12ct)", price: 4.29, category: "health", img: "images/p6.jpg", rating: 4.0 },
  { id: "p21", title: "Hand Sanitizer 8oz", price: 2.99, category: "health", img: "images/p21.jpg", rating: 4.0 },
  { id: "p22", title: "Face Mask 10-pack", price: 5.99, category: "health", img: "images/p22.jpg", rating: 3.8 },
  { id: "p23", title: "Daily Multivitamin", price: 11.99, category: "health", img: "images/p23.jpg", rating: 4.2 },
  { id: "p24", title: "Lip Balm 3-pack", price: 2.49, category: "health", img: "images/p24.jpg", rating: 4.1 },
  { id: "p25", title: "Shampoo 12oz", price: 4.99, category: "health", img: "images/p25.jpg", rating: 4.0 },
  { id: "p26", title: "Conditioner 12oz", price: 4.99, category: "health", img: "images/p26.jpg", rating: 4.0 },

  // dollar-deals (many small items)
  { id: "p7", title: "Kitchen Sponge 3-pk", price: 1.0, category: "dollar-deals", img: "images/p7.jpg" },
  { id: "p8", title: "Premium Pen 2-pk", price: 1.0, category: "dollar-deals", img: "images/p8.jpg" },
  { id: "p27", title: "Notepad 50-page", price: 1.0, category: "dollar-deals", img: "images/p27.jpg" },
  { id: "p28", title: "Reusable Straw", price: 1.0, category: "dollar-deals", img: "images/p28.jpg" },
  { id: "p29", title: "Keychain Light", price: 1.0, category: "dollar-deals", img: "images/p29.jpg" },
  { id: "p30", title: "Snack Cup", price: 1.0, category: "dollar-deals", img: "images/p30.jpg" },
  { id: "p31", title: "Hair Ties 12-pack", price: 1.0, category: "dollar-deals", img: "images/p31.jpg" },
  { id: "p32", title: "Shoe Laces", price: 1.0, category: "dollar-deals", img: "images/p32.jpg" },
  { id: "p33", title: "Mini Screwdriver", price: 1.0, category: "dollar-deals", img: "images/p33.jpg" },
  { id: "p34", title: "Measuring Spoon", price: 1.0, category: "dollar-deals", img: "images/p34.jpg" },
  { id: "p35", title: "Travel Toothbrush", price: 1.0, category: "dollar-deals", img: "images/p35.jpg" },
  { id: "p36", title: "Mini Notebook", price: 1.0, category: "dollar-deals", img: "images/p36.jpg" },
  { id: "p37", title: "Snack Bag", price: 1.0, category: "dollar-deals", img: "images/p37.jpg" },
  { id: "p38", title: "Fridge Magnet", price: 1.0, category: "dollar-deals", img: "images/p38.jpg" },
  { id: "p39", title: "Earbuds (basic)", price: 1.0, category: "dollar-deals", img: "images/p39.jpg" },
  { id: "p40", title: "Mini Flashlight", price: 1.0, category: "dollar-deals", img: "images/p40.jpg" },

  // electronics
  { id: "e1", title: "USB-C Phone Charger", price: 9.99, category: "electronics", img: "images/e1.jpg", rating: 4.1 },
  { id: "e2", title: "Wireless Earbuds", price: 24.99, category: "electronics", img: "images/e2.jpg", rating: 4.0, badge: "hot" },
  { id: "e3", title: "Portable Power Bank 10k", price: 19.99, category: "electronics", img: "images/e3.jpg", rating: 4.2 },
  { id: "e4", title: "Bluetooth Speaker Mini", price: 29.99, category: "electronics", img: "images/e4.jpg", rating: 4.3 },

  // toys
  { id: "t1", title: "Building Blocks Set", price: 14.99, category: "toys", img: "images/t1.jpg", rating: 4.5 },
  { id: "t2", title: "Puzzle 500pc", price: 9.99, category: "toys", img: "images/t2.jpg", rating: 4.2 },
  { id: "t3", title: "Plush Bunny", price: 6.99, category: "toys", img: "images/t3.jpg", rating: 4.6, badge: "popular" },

  // kitchen
  { id: "k1", title: "Nonstick Frying Pan 10in", price: 24.99, category: "kitchen", img: "images/k1.jpg", rating: 4.4 },
  { id: "k2", title: "Chef Knife 8in", price: 19.99, category: "kitchen", img: "images/k2.jpg", rating: 4.5 },
  { id: "k3", title: "Silicone Spatula Set", price: 7.99, category: "kitchen", img: "images/k3.jpg", rating: 4.1 },

  // outdoors
  { id: "o1", title: "Camping Lantern", price: 18.99, category: "outdoors", img: "images/o1.jpg", rating: 4.0 },
  { id: "o2", title: "Insulated Water Bottle", price: 14.99, category: "outdoors", img: "images/o2.jpg", rating: 4.3 },

  // pets
  { id: "pet1", title: "Dog Chew Toy", price: 6.99, category: "pets", img: "images/pet1.jpg", rating: 4.6 },
  { id: "pet2", title: "Cat Treats 8oz", price: 3.99, category: "pets", img: "images/pet2.jpg", rating: 4.2 }
];

// Make more items featured so the featured scroller is long
export const featuredIds = [
  // expanded so featured scroller is longer on load
  "p1","p2","p3","p4","p5","p6","p7","p8","p9","p10",
  "p11","p12","p13","p14","p15","p16","p17","p18","p19","p20",
  "p21","p22","p23","p24","p25","p26","p27","p28","p29","p30",
  "p31","p32","p33","p34","p35","p36","p37","p38","p39","p40",
  "e1","e2","e3","e4","t1","t2","t3","k1","k2","k3","o1","o2","pet1","pet2"
];

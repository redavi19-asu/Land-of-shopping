export const categories = [
  { id: "dollar-deals", name: "Dollar Deals", blurb: "Budget-friendly basics", img: "https://source.unsplash.com/600x400/?shopping" },
  { id: "household", name: "Household", blurb: "Cleaners, paper goods, kitchen", img: "https://source.unsplash.com/600x400/?household,cleaning" },
  { id: "snacks", name: "Snacks & Drinks", blurb: "Chips, candy, sodas", img: "https://source.unsplash.com/600x400/?snacks,drinks" },
  { id: "health", name: "Health & Beauty", blurb: "Personal care essentials", img: "https://source.unsplash.com/600x400/?health,beauty" },
  { id: "electronics", name: "Electronics", blurb: "Affordable gadgets & accessories", img: "https://source.unsplash.com/600x400/?electronics,gadgets" },
  { id: "toys", name: "Toys & Games", blurb: "Fun for all ages", img: "https://source.unsplash.com/600x400/?toys,games" },
  { id: "kitchen", name: "Kitchen", blurb: "Cookware & utensils", img: "https://source.unsplash.com/600x400/?kitchen,cookware" },
  { id: "outdoors", name: "Outdoors", blurb: "Garden, camping & more", img: "https://source.unsplash.com/600x400/?outdoors,camping" },
  { id: "pets", name: "Pet Supplies", blurb: "Treats, toys and care", img: "https://source.unsplash.com/600x400/?pets,dogs,cats" },
];

// Expanded product catalogue to provide lots of items for horizontal scrollers
export const products = [
  // household
  { id: "p1", title: "Ultra Paper Towels (6-pack)", price: 7.99, category: "household", img: "https://source.unsplash.com/500x500/?paper+towels,household", rating: 4.2 },
  { id: "p2", title: "All-Purpose Cleaner 32oz", price: 3.49, category: "household", img: "https://source.unsplash.com/500x500/?cleaner,cleaning", rating: 4.0 },
  { id: "p9", title: "Dish Soap Refill 24oz", price: 2.29, category: "household", img: "https://source.unsplash.com/500x500/?dish+soap,kitchen", rating: 3.9 },
  { id: "p10", title: "Trash Bags 30-pack", price: 6.49, category: "household", img: "https://source.unsplash.com/500x500/?trash+bags,garbage", rating: 4.1 },
  { id: "p11", title: "Spill Mop", price: 12.99, category: "household", img: "https://source.unsplash.com/500x500/?mop,cleaning", rating: 4.3 },
  { id: "p12", title: "Glass Cleaner 16oz", price: 3.19, category: "household", img: "https://source.unsplash.com/500x500/?glass+cleaner,cleaning", rating: 4.0 },
  { id: "p13", title: "Bamboo Cutting Board", price: 8.99, category: "household", img: "https://source.unsplash.com/500x500/?cutting+board,kitchen", rating: 4.5, badge: "new" },
  { id: "p14", title: "Storage Containers (3-pack)", price: 9.99, category: "household", img: "https://source.unsplash.com/500x500/?storage+containers,kitchen", rating: 4.1 },

  // snacks
  { id: "p3", title: "Sparkle Soda 12-pack", price: 5.99, category: "snacks", img: "https://source.unsplash.com/500x500/?soda,beverage", rating: 3.8 },
  { id: "p4", title: "Party Chips XXL", price: 2.49, category: "snacks", img: "https://source.unsplash.com/500x500/?chips,snack", rating: 4.4, badge: "bestseller" },
  { id: "p15", title: "Chocolate Bar Variety (6)", price: 4.99, category: "snacks", img: "https://source.unsplash.com/500x500/?chocolate,candy", rating: 4.6, badge: "discount" },
  { id: "p16", title: "Trail Mix 14oz", price: 3.99, category: "snacks", img: "https://source.unsplash.com/500x500/?trail+mix,snack", rating: 4.2 },
  { id: "p17", title: "Gummy Bears", price: 1.99, category: "snacks", img: "https://source.unsplash.com/500x500/?gummy,candy", rating: 3.9 },
  { id: "p18", title: "Sparkling Water 8-pack", price: 6.49, category: "snacks", img: "https://source.unsplash.com/500x500/?sparkling+water,beverage", rating: 4.0 },
  { id: "p19", title: "Pretzel Thins", price: 2.29, category: "snacks", img: "https://source.unsplash.com/500x500/?pretzels,snack", rating: 4.1 },
  { id: "p20", title: "Salsa Chunky 16oz", price: 3.49, category: "snacks", img: "https://source.unsplash.com/500x500/?salsa,condiment", rating: 4.3 },

  // health
  { id: "p5", title: "Vitamin C Gummies", price: 9.99, category: "health", img: "https://source.unsplash.com/500x500/?vitamins,health", rating: 4.0 },
  { id: "p6", title: "2-Blade Razors (12ct)", price: 4.29, category: "health", img: "https://source.unsplash.com/500x500/?razor,shaving", rating: 4.0 },
  { id: "p21", title: "Hand Sanitizer 8oz", price: 2.99, category: "health", img: "https://source.unsplash.com/500x500/?hand+sanitizer,health", rating: 4.0 },
  { id: "p22", title: "Face Mask 10-pack", price: 5.99, category: "health", img: "https://source.unsplash.com/500x500/?face+mask,health", rating: 3.8 },
  { id: "p23", title: "Daily Multivitamin", price: 11.99, category: "health", img: "https://source.unsplash.com/500x500/?multivitamin,health", rating: 4.2 },
  { id: "p24", title: "Lip Balm 3-pack", price: 2.49, category: "health", img: "https://source.unsplash.com/500x500/?lip+balm,health", rating: 4.1 },
  { id: "p25", title: "Shampoo 12oz", price: 4.99, category: "health", img: "https://source.unsplash.com/500x500/?shampoo,hair", rating: 4.0 },
  { id: "p26", title: "Conditioner 12oz", price: 4.99, category: "health", img: "https://source.unsplash.com/500x500/?conditioner,hair", rating: 4.0 },

  // dollar-deals (many small items)
  { id: "p7", title: "Kitchen Sponge 3-pk", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?sponge,cleaning" },
  { id: "p8", title: "Premium Pen 2-pk", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?pen,stationery" },
  { id: "p27", title: "Notepad 50-page", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?notepad,stationery" },
  { id: "p28", title: "Reusable Straw", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?straw,eco" },
  { id: "p29", title: "Keychain Light", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?keychain,light" },
  { id: "p30", title: "Snack Cup", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?snack,cup" },
  { id: "p31", title: "Hair Ties 12-pack", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?hair,ties" },
  { id: "p32", title: "Shoe Laces", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?shoelaces,shoes" },
  { id: "p33", title: "Mini Screwdriver", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?screwdriver,tools" },
  { id: "p34", title: "Measuring Spoon", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?measuring+spoon,kitchen" },
  { id: "p35", title: "Travel Toothbrush", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?toothbrush,travel" },
  { id: "p36", title: "Mini Notebook", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?notebook,stationery" },
  { id: "p37", title: "Snack Bag", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?snack,bag" },
  { id: "p38", title: "Fridge Magnet", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?magnet,fridge" },
  { id: "p39", title: "Earbuds (basic)", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?earbuds,headphones" },
  { id: "p40", title: "Mini Flashlight", price: 1.0, category: "dollar-deals", img: "https://source.unsplash.com/500x500/?flashlight,light" },

  // electronics
  { id: "e1", title: "USB-C Phone Charger", price: 9.99, category: "electronics", img: "https://picsum.photos/seed/e1/500/500", rating: 4.1 },
  { id: "e2", title: "Wireless Earbuds", price: 24.99, category: "electronics", img: "https://picsum.photos/seed/e2/500/500", rating: 4.0, badge: "hot" },
  { id: "e3", title: "Portable Power Bank 10k", price: 19.99, category: "electronics", img: "https://picsum.photos/seed/e3/500/500", rating: 4.2 },
  { id: "e4", title: "Bluetooth Speaker Mini", price: 29.99, category: "electronics", img: "https://picsum.photos/seed/e4/500/500", rating: 4.3 },

  // toys
  { id: "t1", title: "Building Blocks Set", price: 14.99, category: "toys", img: "https://picsum.photos/seed/t1/500/500", rating: 4.5 },
  { id: "t2", title: "Puzzle 500pc", price: 9.99, category: "toys", img: "https://picsum.photos/seed/t2/500/500", rating: 4.2 },
  { id: "t3", title: "Plush Bunny", price: 6.99, category: "toys", img: "https://picsum.photos/seed/t3/500/500", rating: 4.6, badge: "popular" },

  // kitchen
  { id: "k1", title: "Nonstick Frying Pan 10in", price: 24.99, category: "kitchen", img: "https://picsum.photos/seed/k1/500/500", rating: 4.4 },
  { id: "k2", title: "Chef Knife 8in", price: 19.99, category: "kitchen", img: "https://picsum.photos/seed/k2/500/500", rating: 4.5 },
  { id: "k3", title: "Silicone Spatula Set", price: 7.99, category: "kitchen", img: "https://picsum.photos/seed/k3/500/500", rating: 4.1 },

  // outdoors
  { id: "o1", title: "Camping Lantern", price: 18.99, category: "outdoors", img: "https://picsum.photos/seed/o1/500/500", rating: 4.0 },
  { id: "o2", title: "Insulated Water Bottle", price: 14.99, category: "outdoors", img: "https://picsum.photos/seed/o2/500/500", rating: 4.3 },

  // pets
  { id: "pet1", title: "Dog Chew Toy", price: 6.99, category: "pets", img: "https://picsum.photos/seed/pet1/500/500", rating: 4.6 },
  { id: "pet2", title: "Cat Treats 8oz", price: 3.99, category: "pets", img: "https://picsum.photos/seed/pet2/500/500", rating: 4.2 }
];

// Make more items featured so the featured scroller is long
export const featuredIds = [
  "p7","p4","p1","p5","p3","p15","p16","p9","p10","p11","p21","p23",
  "e2","t3","k1","o2","pet1"
];

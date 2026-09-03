export const categories = [
  { id: "dollar-deals", name: "Dollar Deals", blurb: "Budget-friendly basics", img: "images/c-dollar-deals.jpg" },
  { id: "household", name: "Household", blurb: "Cleaners, paper goods, kitchen", img: "images/c-household.jpg" },
  { id: "snacks", name: "Snacks & Drinks", blurb: "Chips, candy, sodas", img: "images/c-snacks.jpg" },
  { id: "health", name: "Health & Beauty", blurb: "Personal care essentials", img: "images/c-health.jpg" },
  { id: "electronics", name: "Electronics", blurb: "Affordable gadgets & accessories", img: "images/c-electronics.jpg" },
  { id: "toys", name: "Toys & Games", blurb: "Fun for all ages", img: "images/c-toys.jpg" },
  { id: "kitchen", name: "Kitchen", blurb: "Cookware & utensils", img: "images/c-kitchen.jpg" },
  { id: "outdoors", name: "Outdoors", blurb: "Garden, camping & more", img: "images/c-outdoors.jpg" },
  { id: "pets", name: "Pet Supplies", blurb: "Treats, toys and care", img: "images/c-pets.jpg" },
  { id: "clothing", name: "Clothing", blurb: "Basics & seasonal wear", img: "images/p31.jpg" },
  { id: "baby", name: "Baby", blurb: "Care & essentials for little ones", img: "images/c-household.jpg" },
  { id: "books", name: "Books", blurb: "Fiction, non-fiction & kids", img: "images/p27.jpg" },
  { id: "office", name: "Office", blurb: "Supplies & desk essentials", img: "images/p8.jpg" },
  { id: "home-decor", name: "Home Decor", blurb: "Small accents & wall art", img: "images/c-household.jpg" },
  { id: "sports", name: "Sports", blurb: "Outdoor & gym gear", img: "images/c-outdoors.jpg" },
  { id: "automotive", name: "Automotive", blurb: "Car care & accessories", img: "images/e3.jpg" },
  { id: "beauty", name: "Beauty", blurb: "Cosmetics & skincare", img: "images/c-health.jpg" }
];

const baseProducts = [
  { id:"p1",title:"Ultra Paper Towels (6-pack)",price:7.99,category:"household",img:"images/p1.jpg",rating:4.2 },
  { id:"p2",title:"All-Purpose Cleaner 32oz",price:3.49,category:"household",img:"images/p2.jpg",rating:4.0 },
  { id:"p9",title:"Dish Soap Refill 24oz",price:2.29,category:"household",img:"images/p9.jpg",rating:3.9 },
  { id:"p10",title:"Trash Bags 30-pack",price:6.49,category:"household",img:"images/p10.jpg",rating:4.1 },
  { id:"p11",title:"Spill Mop",price:12.99,category:"household",img:"images/p11.jpg",rating:4.3 },
  { id:"p12",title:"Glass Cleaner 16oz",price:3.19,category:"household",img:"images/p12.jpg",rating:4.0 },
  { id:"p13",title:"Bamboo Cutting Board",price:8.99,category:"household",img:"images/p13.jpg",rating:4.5,badge:"new" },
  { id:"p14",title:"Storage Containers (3-pack)",price:9.99,category:"household",img:"images/p14.jpg",rating:4.1 },
  { id:"p3",title:"Sparkle Soda 12-pack",price:5.99,category:"snacks",img:"images/p3.jpg",rating:3.8 },
  { id:"p4",title:"Party Chips XXL",price:2.49,category:"snacks",img:"images/p4.jpg",rating:4.4,badge:"bestseller" },
  { id:"p15",title:"Chocolate Bar Variety (6)",price:4.99,category:"snacks",img:"images/p15.jpg",rating:4.6 },
  { id:"p16",title:"Trail Mix 14oz",price:3.99,category:"snacks",img:"images/p16.jpg",rating:4.2 },
  { id:"p17",title:"Gummy Bears",price:1.99,category:"snacks",img:"images/p17.jpg",rating:3.9 },
  { id:"p18",title:"Sparkling Water 8-pack",price:6.49,category:"snacks",img:"images/p18.jpg",rating:4.0 },
  { id:"p19",title:"Pretzel Thins",price:2.29,category:"snacks",img:"images/p19.jpg",rating:4.1 },
  { id:"p20",title:"Salsa Chunky 16oz",price:3.49,category:"snacks",img:"images/p20.jpg",rating:4.3 },
  { id:"p5",title:"Vitamin C Gummies",price:9.99,category:"health",img:"images/p5.jpg",rating:4.0 },
  { id:"p6",title:"2-Blade Razors (12ct)",price:4.29,category:"health",img:"images/p6.jpg",rating:4.0 },
  { id:"p21",title:"Hand Sanitizer 8oz",price:2.99,category:"health",img:"images/p21.jpg",rating:4.0 },
  { id:"p22",title:"Face Mask 10-pack",price:5.99,category:"health",img:"images/p22.jpg",rating:3.8 },
  { id:"p23",title:"Daily Multivitamin",price:11.99,category:"health",img:"images/p23.jpg",rating:4.2 },
  { id:"p24",title:"Lip Balm 3-pack",price:2.49,category:"health",img:"images/p24.jpg",rating:4.1 },
  { id:"p25",title:"Shampoo 12oz",price:4.99,category:"health",img:"images/p25.jpg",rating:4.0 },
  { id:"p26",title:"Conditioner 12oz",price:4.99,category:"health",img:"images/p26.jpg",rating:4.0 },
  { id:"e1",title:"USB-C Phone Charger",price:9.99,category:"electronics",img:"images/e1.jpg",rating:4.1 },
  { id:"e2",title:"Wireless Earbuds",price:24.99,category:"electronics",img:"images/e2.jpg",rating:4.0,badge:"hot" },
  { id:"e3",title:"Portable Power Bank 10k",price:19.99,category:"electronics",img:"images/e3.jpg",rating:4.2 },
  { id:"e4",title:"Bluetooth Speaker Mini",price:29.99,category:"electronics",img:"images/e4.jpg",rating:4.3 },
  { id:"t1",title:"Building Blocks Set",price:14.99,category:"toys",img:"images/t1.jpg",rating:4.5 },
  { id:"t2",title:"Puzzle 500pc",price:9.99,category:"toys",img:"images/t2.jpg",rating:4.2 },
  { id:"t3",title:"Plush Bunny",price:6.99,category:"toys",img:"images/t3.jpg",rating:4.6 },
  { id:"k1",title:"Nonstick Frying Pan 10in",price:24.99,category:"kitchen",img:"images/k1.jpg",rating:4.4 },
  { id:"k2",title:"Chef Knife 8in",price:19.99,category:"kitchen",img:"images/k2.jpg",rating:4.5 },
  { id:"k3",title:"Silicone Spatula Set",price:7.99,category:"kitchen",img:"images/k3.jpg",rating:4.1 },
  { id:"o1",title:"Camping Lantern",price:18.99,category:"outdoors",img:"images/o1.jpg",rating:4.0 },
  { id:"o2",title:"Insulated Water Bottle",price:14.99,category:"outdoors",img:"images/o2.jpg",rating:4.3 },
  { id:"pet1",title:"Dog Chew Toy",price:6.99,category:"pets",img:"images/pet1.jpg",rating:4.6 },
  { id:"pet2",title:"Cat Treats 8oz",price:3.99,category:"pets",img:"images/pet2.jpg",rating:4.2 }
];

const dollarNames=["Kitchen Sponge 3-pk","Premium Pen 2-pk","Notepad 50-page","Reusable Straw","Keychain Light","Snack Cup","Hair Ties 12-pack","Shoe Laces","Mini Screwdriver","Measuring Spoon","Travel Toothbrush","Mini Notebook","Snack Bag","Fridge Magnet","Earbuds (basic)","Mini Flashlight"];
const dollarProducts=Array.from({length:34},(_,i)=>({id:`d${i+1}`,title:dollarNames[i%16],price:1,category:"dollar-deals",img:`images/p${i+7}.jpg`,rating:4.0}));

const filledDepartments = [
  ["clothing",["Everyday Tee","Classic Hoodie","Soft Jogger","Seasonal Layer"],["images/p31.jpg","images/p32.jpg","images/c-health.jpg","images/c-household.jpg"],[14.99,29.99,24.99,34.99]],
  ["baby",["Baby Care Set","Soft Nursery Pack","Everyday Wipes","Feeding Essentials"],["images/c-household.jpg","images/p14.jpg","images/p1.jpg","images/k3.jpg"],[12.99,18.99,5.99,9.99]],
  ["books",["Weekend Paperback","Kids Story Pick","Notebook Journal","Home Reference"],["images/p27.jpg","images/t2.jpg","images/p36.jpg","images/c-household.jpg"],[8.99,6.99,4.99,12.99]],
  ["office",["Desk Pen Set","Daily Notebook","USB Desk Charger","Workday Organizer"],["images/p8.jpg","images/p27.jpg","images/e1.jpg","images/p14.jpg"],[3.99,5.99,9.99,11.99]],
  ["home-decor",["Minimal Home Accent","Countertop Organizer","Kitchen Display Set","Storage Accent"],["images/c-household.jpg","images/p14.jpg","images/k1.jpg","images/p13.jpg"],[16.99,12.99,24.99,14.99]],
  ["sports",["Outdoor Bottle","Training Lantern","Active Day Pack","Recovery Essentials"],["images/o2.jpg","images/o1.jpg","images/c-outdoors.jpg","images/p23.jpg"],[14.99,18.99,22.99,11.99]],
  ["automotive",["Roadside Power Bank","Car USB Charger","Travel Cleaning Kit","Emergency Light"],["images/e3.jpg","images/e1.jpg","images/p2.jpg","images/o1.jpg"],[19.99,9.99,8.99,18.99]],
  ["beauty",["Daily Lip Trio","Hair Care Set","Skin Care Essentials","Beauty Travel Kit"],["images/p24.jpg","images/p25.jpg","images/c-health.jpg","images/p21.jpg"],[7.49,9.99,14.99,8.99]]
].flatMap(([category,names,imgs,prices])=>names.map((title,i)=>({id:`${category}-${i+1}`,title,price:prices[i],category,img:imgs[i],rating:4.2})));

export const products=[...baseProducts,...dollarProducts,...filledDepartments];
export const featuredIds=products.map(p=>p.id);

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'bath-salts' | 'bracelets' | 'geodes-clusters' | 'wall-hangings' | 'decor';
  categoryLabel: string;
  subcategory?: string;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  price?: string;
  availability: 'In Stock' | 'Pre-order' | 'Handcrafted Upon Request';
  featured: boolean;
  whatsappMessage?: string;
}

export const productCategories = [
  { id: 'all', label: 'All Creations' },
  { id: 'bath-salts', label: 'Bath Salts' },
  { id: 'bracelets', label: 'Bracelets' },
  { id: 'geodes-clusters', label: 'Geodes, Clusters & More' },
  { id: 'wall-hangings', label: 'Wall Hangings' },
  { id: 'decor', label: 'Sacred Décor' },
] as const;

export const productsData: Product[] = [
  // --- FEATURED BRACELET ---
  {
    id: "bracelet-love-focus",
    name: "Love & Focus Bracelet",
    slug: "love-focus-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/love-focus-bracelet.jpg",
    gallery: [
      "/love-focus-bracelet.jpg"
    ],
    shortDescription: "Rose quartz, Clear quartz & Amethyst",
    description: "Rose quartz, Clear quartz & Amethyst",
    price: "550/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Love & Focus Bracelet (550/-). Please share order and delivery details."
  },
  {
    id: "bracelet-love",
    name: "Love Bracelet",
    slug: "love-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/love-bracelet.jpg",
    gallery: [
      "/love-bracelet.jpg"
    ],
    shortDescription: "Rose quartz",
    description: "Rose quartz",
    price: "800/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Love Bracelet (800/-). Please share order and delivery details."
  },
  {
    id: "bracelet-amethyst",
    name: "Amethyst Bracelet",
    slug: "amethyst-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/amethyst-bracelet.jpg",
    gallery: [
      "/amethyst-bracelet.jpg"
    ],
    shortDescription: "Amethyst",
    description: "Amethyst",
    price: "450/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Amethyst Bracelet (450/-). Please share order and delivery details."
  },
  {
    id: "bracelet-clear-quartz",
    name: "Clear Quartz Bracelet",
    slug: "clear-quartz-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/clear-quartz-bracelet.jpg",
    gallery: [
      "/clear-quartz-bracelet.jpg"
    ],
    shortDescription: "Clear quartz",
    description: "Clear quartz",
    price: "550/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Clear Quartz Bracelet (550/-). Please share order and delivery details."
  },
  {
    id: "bracelet-citrine",
    name: "Citrine Bracelet",
    slug: "citrine-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/citrine-bracelet.jpg",
    gallery: [
      "/citrine-bracelet.jpg"
    ],
    shortDescription: "Citrine",
    description: "Citrine",
    price: "400/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Citrine Bracelet (400/-). Please share order and delivery details."
  },
  {
    id: "bracelet-sulemani-hakik",
    name: "Sulemani Hakik Bracelet",
    slug: "sulemani-hakik-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/sulemani-hakik-bracelet.jpg",
    gallery: [
      "/sulemani-hakik-bracelet.jpg"
    ],
    shortDescription: "Protection",
    description: "Sulemani hakik bracelet for protection",
    price: "650/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Sulemani Hakik Bracelet (650/-). Please share order and delivery details."
  },
  {
    id: "bracelet-money-magnet",
    name: "Money Magnet Bracelet",
    slug: "money-magnet-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    image: "/money-magnet-bracelet.jpg",
    gallery: [
      "/money-magnet-bracelet.jpg"
    ],
    shortDescription: "Garnet & Malachite",
    description: "Garnet & Malachite Bracelet",
    price: "1250/-",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Money Magnet Bracelet (1250/-). Please share order and delivery details."
  },

  // --- BATH SALTS ---
  {
    id: "salt-rose",
    name: "Rose Bath Salt",
    slug: "rose-bath-salt",
    category: "bath-salts",
    categoryLabel: "Bath Salts",
    image: "/rose-bath-salt.png",
    gallery: [
      "/rose-bath-salt.png"
    ],
    shortDescription: "Brings emotional peace • Infused with vitamin E",
    description: "Brings emotional peace • Infused with vitamin E",
    price: "200/- (250gms)",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Rose Bath Salt 200/- (250gms). Please share order and delivery details."
  },
  {
    id: "salt-peppermint-eucalyptus",
    name: "Peppermint & Eucalyptus Bath Salt",
    slug: "peppermint-eucalyptus-bath-salt",
    category: "bath-salts",
    categoryLabel: "Bath Salts",
    image: "/peppermint-eucalyptus-bath-salt.jpg",
    gallery: [
      "/peppermint-eucalyptus-bath-salt.jpg"
    ],
    shortDescription: "Enhances mental clarity & relieves stress",
    description: "Enhances mental clarity & relieves stress",
    price: "200/- (250gms)",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I would like to order the Peppermint & Eucalyptus Bath Salt 200/- (250gms). Please share order and delivery details."
  },

  // --- WALL HANGINGS ---
  {
    id: "hanging-7-chakra-raw",
    name: "7 Chakra Raw Crystal Wall Hanging",
    slug: "7-chakra-raw-crystal-wall-hanging",
    category: "wall-hangings",
    categoryLabel: "Wall Hangings",
    subcategory: "Sanctuary Hanging",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Seven unpolished raw gemstones suspended along a refined brass chain with moon phase accents.",
    description: "An editorial statement piece for living rooms, yoga nooks, or entry foyers. As sunlight touches each stone, it infuses the room with chromatic harmony.",
    price: "₹2,400",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the 7 Chakra Raw Crystal Wall Hanging on the Bespoke Healer website and I'm interested in it. Could you please share the price and availability?"
  },
  {
    id: "hanging-selenite-hamsa",
    name: "Selenite & Evil Eye Sanctuary Hanger",
    slug: "selenite-evil-eye-sanctuary-hanger",
    category: "wall-hangings",
    categoryLabel: "Wall Hangings",
    subcategory: "Protective Amulet",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Raw Moroccan selenite bar paired with artisan glass evil-eye medallion and linen cord.",
    description: "Placed upon the front doorway or window to bless those who enter while filtering away anxious or intrusive vibrations.",
    price: "₹1,850",
    availability: "In Stock",
    featured: false,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Selenite Sanctuary Hanger on the Bespoke Healer website and I'm interested in it. Could you please share the price and availability?"
  },

  // --- SACRED DÉCOR / CRYSTAL HORSES ---
  {
    id: "decor-crystal-horse",
    name: "Handcrafted Sacred Crystal Horse",
    slug: "handcrafted-crystal-horse",
    category: "decor",
    categoryLabel: "Sacred Décor",
    subcategory: "Energy Sculpture",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Carved natural crystal sculpture symbolizing relentless momentum, victory and noble grace.",
    description: "A potent talisman of vitality and forward momentum, activating inner strength, endurance, and swift breakthroughs in personal and professional endeavors.",
    price: "₹3,800",
    availability: "Handcrafted Upon Request",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Handcrafted Sacred Crystal Horse on the Bespoke Healer website and I'm interested in it. Could you please share the price and availability?"
  },
  {
    id: "decor-pyrite-cluster",
    name: "Golden Pyrite Wealth Cluster",
    slug: "golden-pyrite-wealth-cluster",
    category: "decor",
    categoryLabel: "Sacred Décor",
    subcategory: "Prosperity Specimen",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Geometric brass-gold cubic crystals naturally formed inside earth matrices.",
    description: "The gold standard stone for entrepreneurial vision. Placed near your cash register, journal, or workstation to anchor unwavering abundance consciousness.",
    price: "₹2,100",
    availability: "In Stock",
    featured: false,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Golden Pyrite Wealth Cluster on the Bespoke Healer website and I'm interested in it. Could you please share the price and availability?"
  }
];

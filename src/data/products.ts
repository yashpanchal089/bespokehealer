export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'bath-salts' | 'crystals' | 'bracelets' | 'wall-hangings' | 'decor';
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
  { id: 'crystals', label: 'Crystals' },
  { id: 'bracelets', label: 'Bracelets' },
  { id: 'wall-hangings', label: 'Wall Hangings' },
  { id: 'decor', label: 'Sacred Décor' },
] as const;

export const productsData: Product[] = [
  // --- BATH SALTS ---
  {
    id: "salt-love",
    name: "Love Bath Salt",
    slug: "love-bath-salt",
    category: "bath-salts",
    categoryLabel: "Bath Salts",
    subcategory: "Botanical Soak",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608248597359-009b0b410f9d?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Organic rose petals, Himalayan pink salt and wild jasmine for unconditional self-love.",
    description: "Formulated to soften heart walls and replenish emotional reservoir. Infused with therapeutic grade rose geranium essence and consecrated rose quartz vibrational resonance.",
    price: "₹850",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Love Bath Salt on the Bespoke Healer website and I'm interested in it. Could you please share the details?"
  },
  {
    id: "salt-stress-release",
    name: "Stress Release Bath Salt",
    slug: "stress-release-bath-salt",
    category: "bath-salts",
    categoryLabel: "Bath Salts",
    subcategory: "Restorative Soak",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Epsom magnesium crystals, lavender blooms and French chamomile to quiet the mind.",
    description: "Designed for exhausted nervous systems. Melts physical muscular tension and encourages restorative deep sleep following demanding days.",
    price: "₹850",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Stress Release Bath Salt on the Bespoke Healer website and I'm interested in it. Could you please share the details?"
  },
  {
    id: "salt-nazar",
    name: "Nazar Protection Salt",
    slug: "nazar-protection-salt",
    category: "bath-salts",
    categoryLabel: "Bath Salts",
    subcategory: "Auric Shield",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Black Hawaiian mineral salt, camphor and wild sage to dissolve psychic residue.",
    description: "Ancient Vedic and esoteric botanical blend to dispel the evil eye (Nazar), heavy environmental energies, and psychic exhaustion after public engagements.",
    price: "₹950",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Nazar Protection Salt on the Bespoke Healer website and I'm interested in it. Could you please share the details?"
  },
  {
    id: "salt-daily-detox",
    name: "Daily Detox Bath Salt",
    slug: "daily-detox-bath-salt",
    category: "bath-salts",
    categoryLabel: "Bath Salts",
    subcategory: "Purification Soak",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Pure dead sea minerals, rosemary and uplifting bergamot for everyday energetic renewal.",
    description: "A refreshing foot or body soak that resets your subtle biofield every evening. Clears sluggishness and revitalizes cellular vitality.",
    price: "₹750",
    availability: "In Stock",
    featured: false,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Daily Detox Bath Salt on the Bespoke Healer website and I'm interested in it. Could you please share the details?"
  },

  // --- CRYSTALS ---
  {
    id: "crystal-amethyst",
    name: "Natural Amethyst Cluster",
    slug: "natural-amethyst-cluster",
    category: "crystals",
    categoryLabel: "Crystals",
    subcategory: "Crown & Third Eye",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "High-frequency violet crystal for serene meditation and spiritual clarity.",
    description: "Deep natural Uruguayan amethyst formation. Radiates calm energy across your bedside or meditation sanctuary to prevent restlessness and soothe mental clutter.",
    price: "₹1,450",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Natural Amethyst Cluster on the Bespoke Healer website and I'm interested in it. Could you please share the price and availability?"
  },
  {
    id: "crystal-rose-quartz",
    name: "Rose Quartz Heart Sphere",
    slug: "rose-quartz-heart-sphere",
    category: "crystals",
    categoryLabel: "Crystals",
    subcategory: "Heart Chakra",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "The master stone of unconditional affection, gentle forgiveness and inner peace.",
    description: "Velvety translucent pink gemstone lovingly carved into a sphere of pure harmony. Invites soft relationship communication and tender self-compassion.",
    price: "₹1,200",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Rose Quartz Heart Sphere on the Bespoke Healer website and I'm interested in it. Could you please share the price and availability?"
  },
  {
    id: "crystal-clear-quartz",
    name: "Clear Quartz Master Tower",
    slug: "clear-quartz-master-tower",
    category: "crystals",
    categoryLabel: "Crystals",
    subcategory: "Universal Amplifier",
    image: "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Pristine six-sided generator tower for intention programming and energy elevation.",
    description: "Known in esoteric lore as the Supreme Healer. Amplifies the energetic vibrations of surrounding stones and channels lucid focus throughout your workspace.",
    price: "₹1,650",
    availability: "In Stock",
    featured: false,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Clear Quartz Master Tower on the Bespoke Healer website and I'm interested in it. Could you please share the price and availability?"
  },
  {
    id: "crystal-selenite-plate",
    name: "Selenite Charging Plate",
    slug: "selenite-charging-plate",
    category: "crystals",
    categoryLabel: "Crystals",
    subcategory: "Purification Base",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Silky pearlescent gypsum plate to naturally cleanse and recharge all your gemstones.",
    description: "Selenite holds liquid light frequency that never requires cleansing itself. Simply rest your jewelry and tumbled stones overnight on this disk to restore their native brilliance.",
    price: "₹1,350",
    availability: "In Stock",
    featured: false,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Selenite Charging Plate on the Bespoke Healer website and I'm interested in it. Could you please share the price and availability?"
  },
  {
    id: "crystal-citrine-point",
    name: "Natural Citrine Abundance Point",
    slug: "natural-citrine-abundance-point",
    category: "crystals",
    categoryLabel: "Crystals",
    subcategory: "Solar Plexus & Abundance",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "The premier merchant's stone for financial vitality, confidence and joyful prosperity.",
    description: "Golden honey hues reflecting the radiance of the morning sun. Stimulates willpower, breaks scarcity mindsets, and draws fortuitous synchronicities.",
    price: "₹1,800",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Natural Citrine Abundance Point on the Bespoke Healer website and I'm interested in it. Could you please share the price and availability?"
  },
  {
    id: "crystal-black-tourmaline",
    name: "Raw Black Tourmaline Shield",
    slug: "raw-black-tourmaline-shield",
    category: "crystals",
    categoryLabel: "Crystals",
    subcategory: "Root Chakra",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Dense grounding talisman against electromagnetic radiation and negative atmospheric weight.",
    description: "Essential anchor for modern homes. Keep near Wi-Fi routers, home offices, or main entryways to create a steadfast energetic perimeter.",
    price: "₹950",
    availability: "In Stock",
    featured: false,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Raw Black Tourmaline Shield on the Bespoke Healer website and I'm interested in it. Could you please share the price and availability?"
  },

  // --- BRACELETS ---
  {
    id: "bracelet-triple-protection",
    name: "Triple Protection Energy Bracelet",
    slug: "triple-protection-energy-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    subcategory: "Talisman Bracelet",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Harmonious synergy of Golden Tiger's Eye, Black Obsidian and grounding Hematite beads.",
    description: "Strung on durable stretch cord. Enhances focus, keeps your auric field secure in crowded spaces, and bolsters inner tenacity during high-pressure ventures.",
    price: "₹1,150",
    availability: "In Stock",
    featured: true,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the Triple Protection Energy Bracelet on the Bespoke Healer website and I'm interested in it. Could you please share the price and availability?"
  },
  {
    id: "bracelet-7-chakra",
    name: "7 Chakra Alignment Bracelet",
    slug: "7-chakra-alignment-bracelet",
    category: "bracelets",
    categoryLabel: "Bracelets",
    subcategory: "Holistic Harmony",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=900&auto=format&fit=crop"
    ],
    shortDescription: "Seven distinct natural gemstones corresponding to the human body's prime energy vortices.",
    description: "From Root to Crown: Red Jasper, Carnelian, Tiger's Eye, Green Aventurine, Turquoise, Lapis Lazuli, and Amethyst with lava stone diffuser beads.",
    price: "₹1,250",
    availability: "In Stock",
    featured: false,
    whatsappMessage: "Hi Dr. Srushti 👋 I saw the 7 Chakra Alignment Bracelet on the Bespoke Healer website and I'm interested in it. Could you please share the price and availability?"
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

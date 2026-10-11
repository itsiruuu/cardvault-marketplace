// CardVault Mock Data & Initial Inventory

export const CATEGORIES = [
  {
    id: 'booster-boxes',
    title: 'Booster Boxes',
    subtitle: 'Factory sealed booster boxes (36 packs)',
    count: '48 In Stock',
    image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80',
    slug: 'booster-boxes'
  },
  {
    id: 'elite-trainer-boxes',
    title: 'Elite Trainer Boxes',
    subtitle: "Collector's premium storage & bundle boxes",
    count: '32 In Stock',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    slug: 'elite-trainer-boxes'
  },
  {
    id: 'booster-packs',
    title: 'Booster Packs',
    subtitle: 'Individual booster packs from all sets',
    count: '150+ In Stock',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
    slug: 'booster-packs'
  },
  {
    id: 'tins',
    title: 'Tins',
    subtitle: 'Collector tins with exclusive promo cards',
    count: '24 In Stock',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    slug: 'tins'
  },
  {
    id: 'special-sets',
    title: 'Special Sets',
    subtitle: 'Limited release premium bundles',
    count: '18 In Stock',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    slug: 'special-sets'
  },
  {
    id: 'single-cards',
    title: 'Graded Cards',
    subtitle: 'PSA, CGC & BGS authenticated slabs',
    count: '240+ In Stock',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=600&q=80',
    slug: 'single-cards'
  }
];

export const PRODUCTS = [
  {
    id: 'charizard-vmax',
    name: 'Charizard VMAX',
    subtitle: "Champion's Path - 074/073",
    set: "Champion's Path",
    setCode: 'CHP',
    price: 425.00,
    oldPrice: 480.00,
    badge: 'HOT',
    badgeType: 'hot',
    rating: 5.0,
    reviewsCount: 124,
    condition: 'Near Mint',
    grading: 'PSA 10',
    rarity: 'Secret Rare',
    cardType: 'Fire',
    hp: 330,
    artist: 'aky CG Works',
    attacks: [
      { name: 'Claw Slash', damage: '100', cost: '3 Colorless' },
      { name: 'G-Max Wildfire', damage: '300', cost: '3 Fire, 2 Colorless' }
    ],
    marketRange: { low: 410.00, mid: 440.00, high: 490.00, avg: 447.00 },
    monthlyTrend: '+12%',
    image: 'https://images.pokemontcg.io/swsh35/74_hires.png',
    fallbackImage: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80',
    category: 'single-cards',
    isFeatured: true,
    isGraded: true,
    inStock: true,
    stockCount: 3
  },
  {
    id: 'sv-etb',
    name: 'Scarlet & Violet Elite Trainer Box',
    subtitle: 'Koraidon / Miraidon Edition',
    set: 'Scarlet & Violet',
    setCode: 'SVI',
    price: 120.00,
    badge: 'NEW',
    badgeType: 'new',
    rating: 4.9,
    reviewsCount: 42,
    condition: 'Factory Sealed',
    rarity: 'Ultra Rare',
    cardType: 'All Type',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    category: 'elite-trainer-boxes',
    isFeatured: true,
    inStock: true,
    stockCount: 14
  },
  {
    id: 'crown-zenith-box',
    name: 'Crown Zenith Special Booster Box',
    subtitle: 'Galarian Gallery Edition',
    set: 'Crown Zenith',
    setCode: 'CRZ',
    price: 84.00,
    badge: 'HOT',
    badgeType: 'hot',
    rating: 4.9,
    reviewsCount: 38,
    condition: 'Factory Sealed',
    rarity: 'Ultra Rare',
    cardType: 'All Type',
    image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80',
    category: 'booster-boxes',
    isFeatured: true,
    inStock: true,
    stockCount: 8
  },
  {
    id: 'evolving-skies-pack',
    name: 'Evolving Skies Booster Pack',
    subtitle: 'Moonbreon Hunt Edition',
    set: 'Evolving Skies',
    setCode: 'EVS',
    price: 11.99,
    badge: 'POPULAR',
    badgeType: 'popular',
    rating: 4.8,
    reviewsCount: 156,
    condition: 'Factory Sealed',
    rarity: 'Holo Rare',
    cardType: 'Dragon',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
    category: 'booster-packs',
    isFeatured: true,
    inStock: true,
    stockCount: 45
  },
  {
    id: 'celebrations-tin',
    name: 'Celebrations Collector Tin',
    subtitle: '25th Anniversary Edition',
    set: 'Celebrations',
    setCode: 'CEL',
    price: 22.99,
    badge: 'RETRO',
    badgeType: 'popular',
    rating: 4.7,
    reviewsCount: 29,
    condition: 'Factory Sealed',
    rarity: 'Holo Rare',
    cardType: 'Colorless',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    category: 'tins',
    isFeatured: true,
    inStock: true,
    stockCount: 12
  },
  {
    id: 'pokemon-151-collection',
    name: 'Pokemon 151 Premium Collection',
    subtitle: 'Mew Ultra-Premium Collection',
    set: 'Pokemon 151',
    setCode: 'MEW',
    price: 79.99,
    badge: 'LIMITED',
    badgeType: 'new',
    rating: 5.0,
    reviewsCount: 64,
    condition: 'Factory Sealed',
    rarity: 'Secret Rare',
    cardType: 'Psychic',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    category: 'special-sets',
    isFeatured: true,
    inStock: true,
    stockCount: 6
  },
  {
    id: 'paldean-fates-box',
    name: 'Paldean Fates Booster Box',
    subtitle: 'Shiny Treasure Edition (36 Packs)',
    set: 'Paldean Fates',
    setCode: 'PAF',
    price: 120.00,
    badge: 'TRENDING',
    badgeType: 'hot',
    rating: 4.9,
    reviewsCount: 51,
    condition: 'Factory Sealed',
    rarity: 'Secret Rare',
    cardType: 'All Type',
    image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80',
    category: 'booster-boxes',
    isFeatured: true,
    inStock: true,
    stockCount: 18
  },
  // Fresh Restocks
  {
    id: 'restock-paldean-etb',
    name: 'Paldean Fates Elite Trainer Box',
    subtitle: 'Shiny Mimikyu Promo Included',
    set: 'Paldean Fates',
    setCode: 'PAF',
    price: 48.00,
    badge: 'IN STOCK',
    rating: 4.9,
    reviewsCount: 22,
    condition: 'Factory Sealed',
    rarity: 'Ultra Rare',
    cardType: 'Psychic',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    category: 'elite-trainer-boxes',
    isRestock: true,
    inStock: true,
    stockCount: 15
  },
  {
    id: 'restock-obsidian-box',
    name: 'Obsidian Flames Booster Box',
    subtitle: 'Charizard Tera EX Edition',
    set: 'Obsidian Flames',
    setCode: 'OBF',
    price: 42.00,
    badge: 'IN STOCK',
    rating: 4.8,
    reviewsCount: 19,
    condition: 'Factory Sealed',
    rarity: 'Ultra Rare',
    cardType: 'Fire',
    image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80',
    category: 'booster-boxes',
    isRestock: true,
    inStock: true,
    stockCount: 10
  },
  {
    id: 'restock-lost-origin-pack',
    name: 'Lost Origin Booster Pack',
    subtitle: 'Giratina V Alt Hunt',
    set: 'Lost Origin',
    setCode: 'LOR',
    price: 5.99,
    badge: 'IN STOCK',
    rating: 4.7,
    reviewsCount: 88,
    condition: 'Factory Sealed',
    rarity: 'Rare Holo',
    cardType: 'Dragon',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
    category: 'booster-packs',
    isRestock: true,
    inStock: true,
    stockCount: 60
  },
  {
    id: 'restock-paradox-rift',
    name: 'Paradox Rift Build & Battle',
    subtitle: 'Prerelease Promo Deck Kit',
    set: 'Paradox Rift',
    setCode: 'PAR',
    price: 35.00,
    badge: 'IN STOCK',
    rating: 4.9,
    reviewsCount: 31,
    condition: 'Factory Sealed',
    rarity: 'Ultra Rare',
    cardType: 'All Type',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    category: 'special-sets',
    isRestock: true,
    inStock: true,
    stockCount: 14
  },
  // Graded Slabs
  {
    id: 'slab-charizard-psa10',
    name: 'Charizard VMAX Secret Rare',
    subtitle: "Champion's Path #074/073",
    set: "Champion's Path",
    price: 450.00,
    grade: 'PSA 10',
    gradeLabel: 'Gem Mint',
    condition: 'Gem Mint 10',
    rarity: 'Secret Rare',
    cardType: 'Fire',
    image: 'https://images.pokemontcg.io/swsh35/74_hires.png',
    fallbackImage: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=600&q=80',
    category: 'single-cards',
    isGraded: true,
    certNumber: '68924011',
    inStock: true
  },
  {
    id: 'slab-blastoise-psa9',
    name: 'Blastoise Base Set Holo',
    subtitle: '1999 Base Set Unlimited #2/102',
    set: 'Base Set',
    price: 290.00,
    grade: 'PSA 9',
    gradeLabel: 'Mint',
    condition: 'Mint 9',
    rarity: 'Holo Rare',
    cardType: 'Water',
    image: 'https://images.pokemontcg.io/base1/2_hires.png',
    fallbackImage: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80',
    category: 'single-cards',
    isGraded: true,
    certNumber: '51204899',
    inStock: true
  },
  {
    id: 'slab-venusaur-psa10',
    name: 'Venusaur 1st Edition Shadowless',
    subtitle: '1999 Base Set #15/102',
    set: 'Base Set',
    price: 350.00,
    grade: 'PSA 10',
    gradeLabel: 'Gem Mint',
    condition: 'Gem Mint 10',
    rarity: 'Secret Rare',
    cardType: 'Grass',
    image: 'https://images.pokemontcg.io/base1/15_hires.png',
    fallbackImage: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=600&q=80',
    category: 'single-cards',
    isGraded: true,
    certNumber: '74129800',
    inStock: true
  },
  // Shop Cards Catalog (From Image 5)
  {
    id: 'lugia-ex',
    name: 'Lugia EX',
    subtitle: 'Ancient Origins - 68/98',
    set: 'Ancient Origins',
    setCode: 'AOR',
    price: 52.00,
    badge: 'Rare Holo',
    rating: 4.8,
    condition: 'Near Mint',
    rarity: 'Holo Rare',
    cardType: 'Colorless',
    image: 'https://images.pokemontcg.io/xy7/68_hires.png',
    fallbackImage: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80',
    category: 'single-cards',
    inStock: true
  },
  {
    id: 'gengar-vmax',
    name: 'Gengar VMAX',
    subtitle: 'Fusion Strike - 271/264',
    set: 'Fusion Strike',
    setCode: 'FST',
    price: 38.00,
    badge: 'Secret Rare',
    rating: 4.9,
    condition: 'Mint',
    rarity: 'Secret Rare',
    cardType: 'Darkness',
    image: 'https://images.pokemontcg.io/swsh8/271_hires.png',
    fallbackImage: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=600&q=80',
    category: 'single-cards',
    inStock: true
  },
  {
    id: 'pikachu-vmax',
    name: 'Pikachu VMAX (Rainbow)',
    subtitle: 'Vivid Voltage - 188/185',
    set: 'Vivid Voltage',
    setCode: 'VIV',
    price: 69.99,
    badge: 'Secret Rare',
    rating: 5.0,
    condition: 'Near Mint',
    rarity: 'Secret Rare',
    cardType: 'Lightning',
    image: 'https://images.pokemontcg.io/swsh4/188_hires.png',
    fallbackImage: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80',
    category: 'single-cards',
    inStock: true
  },
  {
    id: 'mewtwo-ex',
    name: 'Mewtwo EX',
    subtitle: 'BREAKthrough - 164/162',
    set: 'BREAKthrough',
    setCode: 'BKT',
    price: 55.00,
    badge: 'Ultra Rare',
    rating: 4.8,
    condition: 'Near Mint',
    rarity: 'Ultra Rare',
    cardType: 'Psychic',
    image: 'https://images.pokemontcg.io/xy8/164_hires.png',
    fallbackImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    category: 'single-cards',
    inStock: true
  },
  {
    id: 'umbreon-vmax',
    name: 'Umbreon VMAX (Moonbreon)',
    subtitle: 'Evolving Skies - 215/203',
    set: 'Evolving Skies',
    setCode: 'EVS',
    price: 265.00,
    badge: 'Alt Art',
    rating: 5.0,
    condition: 'Near Mint',
    rarity: 'Secret Rare',
    cardType: 'Darkness',
    image: 'https://images.pokemontcg.io/swsh7/215_hires.png',
    fallbackImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
    category: 'single-cards',
    inStock: true
  },
  {
    id: 'rayquaza-v',
    name: 'Rayquaza V (Alt Art)',
    subtitle: 'Evolving Skies - 194/203',
    set: 'Evolving Skies',
    setCode: 'EVS',
    price: 45.00,
    badge: 'Ultra Rare',
    rating: 4.7,
    condition: 'Near Mint',
    rarity: 'Ultra Rare',
    cardType: 'Dragon',
    image: 'https://images.pokemontcg.io/swsh7/194_hires.png',
    fallbackImage: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=600&q=80',
    category: 'single-cards',
    inStock: true
  },
  // Cart item from Image 3
  {
    id: 'base-set-unlimited-box',
    name: 'Base Set Unlimited Booster Box',
    subtitle: 'Condition: Factory Sealed | Series: WotC',
    set: 'Base Set',
    setCode: 'BS1',
    price: 15000.00,
    badge: 'Rare',
    trend: '+2.4%',
    condition: 'Factory Sealed',
    rarity: 'Secret Rare',
    cardType: 'All Type',
    image: 'https://images.pokemontcg.io/base1/4_hires.png',
    fallbackImage: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80',
    category: 'booster-boxes',
    inStock: true
  }
];

export const GRADING_TIERS = [
  { grade: 'Ungraded', price: 255.00, change: '+5.1%', volume: '12 sales per day' },
  { grade: 'Grade 9', price: 260.00, change: '+7.4%', volume: '8 sales per day' },
  { grade: 'PSA 10', price: 949.50, change: '$2.00', volume: 'Exclusive: 3 sales per day', isPopular: true },
  { grade: 'Grade 8', price: 221.61, change: '+2.1%', volume: '4 sales per day' },
  { grade: 'Grade 7', price: 200.54, change: '+1.7%', volume: '2 sales per day' },
  { grade: 'Grade 6.5', price: 152.25, change: '+1.1%', volume: '1 sale per week' },
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Verified Buyer · 2 days ago',
    title: 'Flawless PSA 10 slab packaging!',
    comment: 'Card arrived in tamper-proof bubble mailer with double armored slab guards. Authenticity code verified on PSA database within seconds. CardVault is hands down the best marketplace in the hobby.'
  },
  {
    id: 2,
    name: 'Liam Chen',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Verified Buyer · 4 days ago',
    title: 'Extremely fast insured delivery',
    comment: 'Ordered the Base Set booster pack and Charizard VMAX. The price index tracker was spot on, and the escrow checkout gave me complete peace of mind for high-value items.'
  },
  {
    id: 3,
    name: 'Marcus Bell',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Verified Buyer · 1 week ago',
    title: 'Honest grading condition & fair prices',
    comment: 'Raw cards were strictly Near Mint as advertised with zero edge whitening. Customer support answered my questions about customs shipping in under 5 minutes.'
  },
  {
    id: 4,
    name: 'Samantha K.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    rating: 5,
    date: 'Verified Buyer · 2 weeks ago',
    title: 'The gold standard for TCG collectors',
    comment: 'The interface makes tracking market trends effortless. Love the interactive pricing curve and authentic escrow protection. Will definitely be a returning collector.'
  }
];

export const FAQS = [
  {
    category: 'Ordering & Payment',
    question: 'How does the CardVault Escrow protection work?',
    answer: 'Every transaction is protected by CardVault™ Escrow. When you place an order, your payment is held securely in escrow until the card arrives, passes your inspection, and matches the authenticated grade before funds are released.'
  },
  {
    category: 'Ordering & Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and verified crypto checkout for high-value rare collectibles.'
  },
  {
    category: 'Shipping & Delivery',
    question: 'How are graded slabs and raw cards packaged?',
    answer: 'All graded slabs are shipped in custom rigid acrylic protectors, wrapped in military-grade bubble foam, and housed in crush-resistant boxes with full insurance coverage.'
  },
  {
    category: 'Shipping & Delivery',
    question: 'Do you offer international tracked shipping?',
    answer: 'Yes! We ship worldwide to over 85 countries via DHL Express and FedEx International with full door-to-door tracking and signature delivery confirmation.'
  },
  {
    category: 'Card Condition & Grading',
    question: 'How do you verify card authenticity?',
    answer: 'Every single graded slab has its serial number and barcode verified against the official PSA, CGC, or BGS registries. Our internal grading specialists physically inspect holographic patterns, font typography, and card thickness.'
  },
  {
    category: 'Returns & Exchanges',
    question: 'What is your return policy on graded collectibles?',
    answer: 'We provide a 14-day 100% money-back authenticity guarantee. If any item does not match its certificate or description, we cover insured return shipping and issue an instant refund.'
  }
];

export const CHART_DATA_POINTS = {
  '2024': [
    { month: 'Jan', price2024: 180, price2025: 220, price2026: 340 },
    { month: 'Feb', price2024: 190, price2025: 240, price2026: 360 },
    { month: 'Mar', price2024: 210, price2025: 270, price2026: 390 },
    { month: 'Apr', price2024: 260, price2025: 350, price2026: 490 },
    { month: 'May', price2024: 420, price2025: 580, price2026: 820 },
    { month: 'Jun', price2024: 290, price2025: 410, price2026: 550 },
    { month: 'Jul', price2024: 220, price2025: 320, price2026: 440 },
    { month: 'Aug', price2024: 210, price2025: 300, price2026: 420 },
    { month: 'Sep', price2024: 200, price2025: 290, price2026: 410 },
    { month: 'Oct', price2024: 215, price2025: 310, price2026: 430 },
    { month: 'Nov', price2024: 230, price2025: 330, price2026: 460 },
    { month: 'Dec', price2024: 250, price2025: 360, price2026: 480 },
  ]
};

// Sets Products (Screenshot 1)
export const CARD_SETS_PRODUCTS = Array.from({ length: 12 }, (_, index) => ({
  id: `set-product-${index + 1}`,
  name: 'Scarlet & Violet',
  subtitle: 'Main Expansion',
  cardsCount: 198,
  released: 'Mar 2023',
  trend: '+12.4%',
  image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80'
}));

// Card Set Explorer (Screenshot 2)
export const EXPLORER_SETS = Array.from({ length: 12 }, (_, index) => ({
  id: `set-explorer-${index + 1}`,
  name: 'Scarlet & Violet - 151',
  cardsInfo: '205 Cards • Sep 22, 2023',
  badge: 'Hot',
  marketValue: 842.12,
  trend: '+4.2%',
  image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80'
}));

// News & Articles (Screenshot 3)
export const NEWS_ARTICLES = [
  {
    id: 'news-1',
    category: 'Market Analysis',
    title: 'Top 10 Most Valuable Pokémon Cards in 2026',
    excerpt: 'Discover the most sought-after Pokémon cards that collectors are chasing this year. From vintage classics to modern chase cards...',
    author: 'Sarah Johnson',
    date: 'January 12, 2026',
    image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'news-2',
    category: 'Market Analysis',
    title: 'Top 10 Most Valuable Pokémon Cards in 2026',
    excerpt: 'Discover the most sought-after Pokémon cards that collectors are chasing this year. From vintage classics to modern chase cards...',
    author: 'Sarah Johnson',
    date: 'January 12, 2026',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'news-3',
    category: 'Market Analysis',
    title: 'Top 10 Most Valuable Pokémon Cards in 2026',
    excerpt: 'Discover the most sought-after Pokémon cards that collectors are chasing this year. From vintage classics to modern chase cards...',
    author: 'Sarah Johnson',
    date: 'January 12, 2026',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=1200&q=80'
  }
];

export const POPULAR_NEWS = [
  {
    id: 'pop-1',
    title: 'Scarlet & Violet: Temporal Forces Set Review',
    author: 'Mike Chen',
    image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'pop-2',
    title: 'How to Grade and Protect Your Pokémon Cards',
    author: 'Mike Chen',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'pop-3',
    title: 'Scarlet & Violet: Temporal Forces Set Review',
    author: 'Mike Chen',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'pop-4',
    title: 'How to Grade and Protect Your Pokémon Cards',
    author: 'Mike Chen',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'pop-5',
    title: 'Scarlet & Violet: Temporal Forces Set Review',
    author: 'Mike Chen',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'pop-6',
    title: 'How to Grade and Protect Your Pokémon Cards',
    author: 'Mike Chen',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=300&q=80'
  }
];

// Search Results Items (Screenshot 4)
export const SEARCH_RESULTS_ITEMS = [
  { id: 'sr-1', category: 'Booster Packs', title: 'Scarlet & Violet', price: 4.99, badge: 'In Stock', badgeType: 'in-stock', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' },
  { id: 'sr-2', category: 'Booster Packs', title: 'Scarlet & Violet', price: 4.99, badge: 'In Stock', badgeType: 'in-stock', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' },
  { id: 'sr-3', category: 'Booster Packs', title: 'Scarlet & Violet', price: 4.99, badge: 'In Stock', badgeType: 'in-stock', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' },
  { id: 'sr-4', category: 'Booster Packs', title: 'Scarlet & Violet', price: 4.99, badge: 'In Stock', badgeType: 'in-stock', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' },
  { id: 'sr-5', category: 'Booster Packs', title: 'Scarlet & Violet', price: 4.99, badge: 'Low Stock', badgeType: 'low-stock', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' },
  { id: 'sr-6', category: 'Booster Packs', title: 'Scarlet & Violet', price: 4.99, badge: 'In Stock', badgeType: 'in-stock', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' },
  { id: 'sr-7', category: 'Booster Packs', title: 'Scarlet & Violet', price: 4.99, badge: 'In Stock', badgeType: 'in-stock', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' },
  { id: 'sr-8', category: 'Booster Packs', title: 'Scarlet & Violet', price: 4.99, badge: 'Pre-Order', badgeType: 'pre-order', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' },
  { id: 'sr-9', category: 'Booster Packs', title: 'Scarlet & Violet', price: 4.99, badge: 'Low Stock', badgeType: 'low-stock', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' },
  { id: 'sr-10', category: 'Booster Packs', title: 'Scarlet & Violet', price: 4.99, badge: 'In Stock', badgeType: 'in-stock', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' },
  { id: 'sr-11', category: 'Booster Packs', title: 'Scarlet & Violet', price: 4.99, badge: 'In Stock', badgeType: 'in-stock', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' },
  { id: 'sr-12', category: 'Booster Packs', title: 'Scarlet & Violet', price: 4.99, badge: 'Pre-Order', badgeType: 'pre-order', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' }
];

// All Cards Grid (Screenshot 5)
export const ALL_CARDS_CATEGORIES = [
  { id: 'acc-1', title: 'Booster Boxes', subtitle: 'Shop now for the latest sets!', image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80' },
  { id: 'acc-2', title: 'Elite Trainer Boxes', subtitle: 'Everything you need to train', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80' },
  { id: 'acc-3', title: 'Booster Packs', subtitle: 'Open packs and find rare cards', image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80' },
  { id: 'acc-4', title: 'Tins', subtitle: 'Collectible tins with exclusive cards', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80' },
  { id: 'acc-5', title: 'Boxed Sets', subtitle: 'Complete collections in one box', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80' },
  { id: 'acc-6', title: 'Graded Cards', subtitle: 'Premium authenticated cards', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=600&q=80' },
  { id: 'acc-7', title: 'Tins', subtitle: 'Collectible tins with exclusive cards', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80' },
  { id: 'acc-8', title: 'Boxed Sets', subtitle: 'Complete collections in one box', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80' },
  { id: 'acc-9', title: 'Graded Cards', subtitle: 'Premium authenticated cards', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=600&q=80' }
];


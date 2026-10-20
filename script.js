/**
 * LUMIÉ BEAUTY — Luxury Botanical Skincare
 * Pure Vanilla JavaScript Application State & UI Controller
 */

// --- DATA LAYER ---
const PRODUCTS_DATA = [
  {
    id: 'lumie-01',
    name: 'Himalayan Rose & Niacinamide Radiance Serum',
    brand: 'LUMIÉ Formulations',
    category: 'Serums',
    subcategory: 'Hydration & Glow',
    price: 3450,
    originalPrice: 4200,
    rating: 4.9,
    reviewsCount: 128,
    isBestSeller: true,
    isNewArrival: false,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    badges: ['Best Seller', 'Organic Himalayan'],
    description: 'An ethereal moisture-locking elixir blending cold-pressed wild Himalayan rose extract with 10% pure Niacinamide and Multi-Molecular Hyaluronic Acid to visibly brighten and refine texture.',
    ingredients: 'Wild Himalayan Rosa Damascena Hydrosol, 10% Niacinamide, Hyaluronic Acid (Triple MW), Centella Asiatica Extract, Licorice Root, Squalane, Vitamin E.',
    sizes: [
      { label: '30ml', volume: '1.0 fl. oz.', price: 3450 },
      { label: '50ml', volume: '1.7 fl. oz.', price: 4950 }
    ],
    details: {
      skinType: 'All skin types, especially dull & dehydrated skin',
      texture: 'Silky, fast-absorbing micro-gel',
      scent: 'Subtle fresh wild damask rose',
      usage: 'Apply 3-4 drops morning and evening to cleansed skin before creams.'
    }
  },
  {
    id: 'lumie-02',
    name: 'Velvet Cloud Restorative Lipid Cream',
    brand: 'LUMIÉ Formulations',
    category: 'Skincare',
    subcategory: 'Moisturizers',
    price: 4200,
    originalPrice: 4800,
    rating: 4.8,
    reviewsCount: 94,
    isBestSeller: true,
    isNewArrival: false,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
    badges: ['Award Winner', 'Barrier Repair'],
    description: 'A rich, comforting lipid moisturizer infused with Himalayan Sea Buckthorn, 5 biomimetic ceramides, and fermented peptides to replenish deep skin elasticity.',
    ingredients: 'Himalayan Hippophae Rhamnoides (Sea Buckthorn) Kernel Oil, Ceramide NP/AP/EOP, Peptides Complex, Squalane, Shea Butter, Allantoin.',
    sizes: [
      { label: '50ml', volume: '1.7 fl. oz.', price: 4200 },
      { label: '100ml', volume: '3.4 fl. oz.', price: 6800 }
    ],
    details: {
      skinType: 'Dry, sensitive, and barrier-compromised skin',
      texture: 'Whipped cloud cashmere balm',
      scent: 'Calming alpine chamomile and vanilla',
      usage: 'Warm a dime-sized amount between fingertips and gently press into face and neck.'
    }
  },
  {
    id: 'lumie-03',
    name: 'Midnight Peony Overnight Repair Elixir',
    brand: 'LUMIÉ Botanique',
    category: 'Skincare',
    subcategory: 'Night Care',
    price: 4600,
    originalPrice: 5400,
    rating: 4.9,
    reviewsCount: 76,
    isBestSeller: true,
    isNewArrival: true,
    image: 'https://images.unsplash.com/photo-1608248597359-00f757e17c09?q=80&w=800&auto=format&fit=crop',
    badges: ['New Formula', 'Cellular Renewal'],
    description: 'A high-altitude botanical night concentrate combining 1% micro-encapsulated Bakuchiol with evening primrose and rare mountain peony to smooth fine lines overnight.',
    ingredients: 'Mountain Peony Extract, Phyto-Bakuchiol (1%), Organic Camellia Seed Oil, Evening Primrose, Blue Tansy, CoQ10, Jojoba Oil.',
    sizes: [
      { label: '30ml', volume: '1.0 fl. oz.', price: 4600 }
    ],
    details: {
      skinType: 'Mature, combination, and fine-line prone skin',
      texture: 'Weightless dry oil treatment',
      scent: 'Herbaceous botanical blossom',
      usage: 'Press 3-5 drops as the final step of your PM routine.'
    }
  },
  {
    id: 'lumie-04',
    name: 'Santale Mystique Eau De Parfum',
    brand: 'LUMIÉ Haute Parfumerie',
    category: 'Fragrance',
    subcategory: 'Artisanal Perfume',
    price: 6800,
    originalPrice: 7500,
    rating: 5.0,
    reviewsCount: 52,
    isBestSeller: true,
    isNewArrival: false,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    badges: ['Niche Fragrance', 'Long Lasting'],
    description: 'A magnetic olfactory symphony inspired by tranquil Himalayan monasteries. Rich aged sandalwood, warm amber resin, smoked cardamom, and velvety iris petals.',
    ingredients: 'Alcohol Denat., Parfum (Fragrance), Santalum Album (Sandalwood) Oil, Cardamom Extract, Benzyl Benzoate, Limonene, Linalool.',
    sizes: [
      { label: '50ml', volume: '1.7 fl. oz.', price: 6800 },
      { label: '100ml', volume: '3.4 fl. oz.', price: 10500 }
    ],
    details: {
      skinType: 'Unisex signature fragrance',
      texture: 'Fine artisanal mist',
      scent: 'Warm woody, smoky spice and golden amber',
      usage: 'Spritz pulse points behind ears, wrists, and collarbone.'
    }
  },
  {
    id: 'lumie-05',
    name: 'Glacial Alpine Cleansing Gelée',
    brand: 'LUMIÉ Cleansers',
    category: 'Skincare',
    subcategory: 'Cleansers',
    price: 2200,
    originalPrice: 2600,
    rating: 4.7,
    reviewsCount: 88,
    isBestSeller: false,
    isNewArrival: true,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
    badges: ['pH Balanced', 'Sulfate Free'],
    description: 'A gentle pH 5.5 foaming jelly cleanser loaded with green tea polyphenols, glacier water minerals, and centella to purify without stripping the barrier.',
    ingredients: 'Alpine Glacier Spring Water, Coco-Glucoside, Camellia Sinensis (Green Tea) Extract, Centella Asiatica, Panthenol (Pro-Vitamin B5), Glycerin.',
    sizes: [
      { label: '150ml', volume: '5.1 fl. oz.', price: 2200 }
    ],
    details: {
      skinType: 'All skin types, sensitive and acne-prone skin',
      texture: 'Cushioning hydra-gel',
      scent: 'Crisp green tea leaf',
      usage: 'Massage onto damp skin in circular motions, rinse with lukewarm water.'
    }
  },
  {
    id: 'lumie-06',
    name: 'Pure Botanical Hydrosol Mist',
    brand: 'LUMIÉ Botanique',
    category: 'Skincare',
    subcategory: 'Toners & Mists',
    price: 1950,
    originalPrice: 2400,
    rating: 4.8,
    reviewsCount: 65,
    isBestSeller: false,
    isNewArrival: false,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop',
    badges: ['100% Pure Distillate'],
    description: 'Steam-distilled wild rhododendron and chamomile flowers that instantly soothe redness, regulate skin pH, and prep pores for subsequent treatments.',
    ingredients: '100% Pure Rhododendron Anthopogon Distillate, Chamomilla Recutita Flower Water, Sodium PCA, Vegetable Glycerin.',
    sizes: [
      { label: '120ml', volume: '4.0 fl. oz.', price: 1950 }
    ],
    details: {
      skinType: 'Dry, irritated, or sun-exposed skin',
      texture: 'Ultra-fine hydrating dew',
      scent: 'Wild alpine blossoms and honeyed chamomile',
      usage: 'Mist generously after cleansing or throughout the day for an instant moisture burst.'
    }
  },
  {
    id: 'lumie-07',
    name: 'Himalayan Amber & Wild Fig Candle',
    brand: 'LUMIÉ Maison',
    category: 'Fragrance',
    subcategory: 'Home & Atmosphere',
    price: 2800,
    originalPrice: 3200,
    rating: 4.9,
    reviewsCount: 42,
    isBestSeller: false,
    isNewArrival: true,
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=800&auto=format&fit=crop',
    badges: ['Soy Wax Blend', '50hr Burn Time'],
    description: 'Hand-poured coconut soy candle infused with lush wild fig leaf, sun-warmed amber, cedar bark, and Himalayan mountain spices.',
    ingredients: '100% Natural Coconut Soy Wax, Braided Cotton Wick, Clean Fragrance & Essential Oils.',
    sizes: [
      { label: '240g', volume: '8.5 oz.', price: 2800 }
    ],
    details: {
      skinType: 'Atmospheric wellness',
      texture: 'Clean burning artisan candle',
      scent: 'Ripe fig, golden amber, cedarwood',
      usage: 'Trim wick to 1/4 inch before lighting. Allow wax pool to reach jar edges on first burn.'
    }
  },
  {
    id: 'lumie-08',
    name: 'Bio-Cellular Peptide Eye Lift Balm',
    brand: 'LUMIÉ Formulations',
    category: 'Skincare',
    subcategory: 'Eye Care',
    price: 3600,
    originalPrice: 4100,
    rating: 4.8,
    reviewsCount: 59,
    isBestSeller: true,
    isNewArrival: false,
    image: 'https://images.unsplash.com/photo-1512290900672-1f02a0a8e83b?q=80&w=800&auto=format&fit=crop',
    badges: ['De-Puffing', 'Dark Circles'],
    description: 'An advanced targeted eye concentrate formulated with caffeine, Matrixyl 3000 peptides, and marine glycogen to eliminate puffiness and smooth crow’s feet.',
    ingredients: 'Matrixyl 3000, 3% Green Coffee Bean Caffeine, Marine Glycogen, Squalane, Vitamin K, Niacinamide.',
    sizes: [
      { label: '15ml', volume: '0.5 fl. oz.', price: 3600 }
    ],
    details: {
      skinType: 'Tired, dark under-eye circles and fine lines',
      texture: 'Cooling peptide cream-gel',
      scent: 'Fragrance-free',
      usage: 'Gently tap a grain-sized amount along the orbital bone using your ring finger.'
    }
  }
];

const FAQ_DATA = [
  {
    q: 'Where are LUMIÉ skincare formulations crafted?',
    a: 'Our products are formulated in our state-of-the-art laboratory in Paris and blended with sustainably wild-harvested botanicals sourced from certified organic mountain cooperatives across Nepal. Final assembly and clinical batch testing are performed in Kathmandu.'
  },
  {
    q: 'How fast is express delivery across Nepal?',
    a: 'Orders placed inside Kathmandu Valley (Kathmandu, Lalitpur, Bhaktapur) are delivered within 24 hours. Outside Valley orders (Pokhara, Chitwan, Butwal, Biratnagar, etc.) arrive within 2–3 business days via our temperature-controlled courier network.'
  },
  {
    q: 'How do I qualify for Free Express Shipping?',
    a: 'All orders with a subtotal of NPR 10,000 or more automatically unlock Complimentary Express Doorstep Delivery anywhere in Nepal!'
  },
  {
    q: 'Are LUMIÉ formulations safe for sensitive and acne-prone skin?',
    a: 'Yes. All our products are 100% vegan, cruelty-free, dermatologist patch-tested, and free of synthetic dyes, harsh parabens, phthalates, and drying sulfates.'
  },
  {
    q: 'What is your return and exchange policy?',
    a: 'We offer a 14-day hassle-free return or replacement guarantee. If a product does not suit your skin type, simply contact our concierge team for an exchange or store credit.'
  }
];

const BLOG_DATA = [
  {
    id: 1,
    title: 'The Resilience of Himalayan Botanicals: Why High Altitude Flora Transforms Skin',
    category: 'Ingredient Science',
    date: 'October 14, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Explore how wild rosehips and sea buckthorn develop extraordinary antioxidant concentrations to withstand high-altitude UV radiation.',
    content: [
      'High in the pristine alpine elevations of Nepal, vegetation endures severe temperature swings and intense ultraviolet exposure. To survive and flourish, these plants synthesize super-concentrations of protective flavonoids, polyphenols, and essential fatty acids.',
      'When cold-extracted and bio-fermented, these pure botanicals deliver potent lipid replenishment and environmental defense to urban skin barriers.'
    ]
  },
  {
    id: 2,
    title: 'The Glass Skin Routine: 4 Steps to Deep Cellular Radiance',
    category: 'Rituals & Guide',
    date: 'October 28, 2024',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Step-by-step masterclass on layering molecular weights of hydration, peptides, and botanical lipid sealants for long-lasting luminosity.',
    content: [
      'True glass skin is not about surface shine—it is about cellular moisture retention and an intact stratum corneum.',
      'Start with a low-pH cleanser, follow with our Pure Botanical Hydrosol, layer the Himalayan Rose Niacinamide Serum, and seal with Velvet Cloud Lipid Cream.'
    ]
  },
  {
    id: 3,
    title: 'Clean Beauty & Sustainable Flacons: Our Eco-Conscious Promise',
    category: 'Sustainability',
    date: 'November 05, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    excerpt: 'Discover why we use UV-protective recyclable amber glass and support fair-trade wild-harvest cooperatives across rural communities.',
    content: [
      'We believe luxury beauty must protect the planet that provides our botanicals. Our bespoke flacons block harmful light spectrums to maintain freshness without chemical preservatives.'
    ]
  }
];

// --- GLOBAL APP STATE ---
const Store = {
  currentPage: 'home',
  selectedProductId: null,
  activeCategory: 'All',
  cart: JSON.parse(localStorage.getItem('lumie_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('lumie_wishlist') || '[]'),
  discountCode: '',
  discountAmount: 0,
  shippingMethod: 'standard',
  checkoutAddress: {
    fullName: '',
    email: '',
    phone: '',
    region: 'Kathmandu Valley',
    city: 'Kathmandu',
    postalCode: '44600',
    streetAddress: '',
    deliveryNotes: ''
  },
  paymentMethod: 'esewa',
  user: JSON.parse(localStorage.getItem('lumie_user') || '{"isLoggedIn":false,"name":"Aarav Adhikari","email":"aarav@example.com","phone":"+977 9841234567","address":"Lazimpat, Kathmandu"}'),
  orders: JSON.parse(localStorage.getItem('lumie_orders') || '[]'),
  completedOrder: null,
  activeQuickViewProduct: null,
  reviewsMap: {},

  saveCart() {
    localStorage.setItem('lumie_cart', JSON.stringify(this.cart));
    updateCartBadges();
  },
  saveWishlist() {
    localStorage.setItem('lumie_wishlist', JSON.stringify(this.wishlist));
    updateWishlistBadges();
  },
  saveUser() {
    localStorage.setItem('lumie_user', JSON.stringify(this.user));
  },
  saveOrders() {
    localStorage.setItem('lumie_orders', JSON.stringify(this.orders));
  },

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => sum + (item.selectedSize.price * item.quantity), 0);
  },
  getShippingCost() {
    const sub = this.getCartSubtotal();
    if (sub >= 10000 || sub === 0) return 0;
    if (this.shippingMethod === 'express') return 350;
    if (this.shippingMethod === 'pickup') return 0;
    return 200;
  },
  getTaxAmount() {
    const taxable = Math.max(0, this.getCartSubtotal() - this.discountAmount);
    return Math.round(taxable * 0.13);
  },
  getCartTotal() {
    const sub = this.getCartSubtotal();
    const ship = this.getShippingCost();
    const tax = this.getTaxAmount();
    return Math.max(0, sub - this.discountAmount) + ship + tax;
  }
};

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  updateCartBadges();
  updateWishlistBadges();
  renderCurrentView();
});

// --- NAVIGATION & ROUTING ---
function navigateTo(page, productId = null, category = null) {
  Store.currentPage = page;
  if (productId) Store.selectedProductId = productId;
  if (category) Store.activeCategory = category;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderCurrentView();

  // Close mobile drawer if open
  closeMobileMenu();
}

function renderCurrentView() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  // Update active states in desktop and mobile nav
  document.querySelectorAll('.nav-link-item, .mobile-nav-link').forEach(link => {
    const targetPage = link.getAttribute('data-nav');
    if (targetPage === Store.currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  switch (Store.currentPage) {
    case 'home':
      mainContent.innerHTML = renderHomePage();
      initHomeInteractions();
      break;
    case 'shop':
      mainContent.innerHTML = renderShopPage();
      initShopInteractions();
      break;
    case 'product':
      mainContent.innerHTML = renderProductDetailPage();
      initProductDetailInteractions();
      break;
    case 'cart':
      mainContent.innerHTML = renderCartPage();
      initCartInteractions();
      break;
    case 'checkout':
      mainContent.innerHTML = renderCheckoutPage();
      initCheckoutInteractions();
      break;
    case 'order-success':
      mainContent.innerHTML = renderOrderSuccessPage();
      break;
    case 'about':
      mainContent.innerHTML = renderAboutPage();
      break;
    case 'blog':
      mainContent.innerHTML = renderBlogPage();
      break;
    case 'faq':
      mainContent.innerHTML = renderFAQPage();
      initFAQInteractions();
      break;
    case 'contact':
      mainContent.innerHTML = renderContactPage();
      initContactInteractions();
      break;
    case 'account':
      mainContent.innerHTML = renderAccountPage();
      initAccountInteractions();
      break;
    default:
      mainContent.innerHTML = renderHomePage();
      initHomeInteractions();
  }
}

// --- VIEW TEMPLATES ---

// 1. HOME VIEW
function renderHomePage() {
  const bestSellers = PRODUCTS_DATA.filter(p => p.isBestSeller);

  return `
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-eyebrow">
              <span>✦ Pure Mountain Botanical Science</span>
            </div>
            <h1 class="hero-title">
              Discover Your <em>Natural Glow</em>
            </h1>
            <p class="hero-desc">
              Elevating your daily beauty ritual with wild-harvested Himalayan botanicals and advanced lipid science. Crafted in Paris, rooted in Kathmandu purity.
            </p>
            <div class="hero-cta-group">
              <button class="btn btn-primary btn-lg" onclick="navigateTo('shop')">
                Explore Botanical Collection
              </button>
              <button class="btn btn-secondary btn-lg" onclick="navigateTo('about')">
                Discover Our Story
              </button>
            </div>
            <div class="hero-stats-strip">
              <div class="stat-item">
                <h5>100%</h5>
                <p>Cruelty Free</p>
              </div>
              <div class="stat-item">
                <h5>24h</h5>
                <p>Nepal Express</p>
              </div>
              <div class="stat-item">
                <h5>15k+</h5>
                <p>Glowing Reviews</p>
              </div>
            </div>
          </div>

          <div class="hero-visual-wrap">
            <div class="hero-img-box">
              <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop" alt="LUMIÉ Botanical Ritual">
              <div class="hero-floating-card">
                <div class="hero-card-icon">✦</div>
                <div>
                  <h6 class="hero-card-title">100% Himalayan Botanicals</h6>
                  <p class="hero-card-subtitle">Dermatologist Tested Purity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Showcase -->
    <section class="section" style="background-color: var(--color-surface-subtle);">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Curated Collections</span>
          <h2 class="section-title">Designed for Enduring Radiance</h2>
          <p class="section-desc">Handcrafted lipid formulas targeted for individual skin types and daily rituals.</p>
        </div>

        <div class="category-grid">
          <div class="category-card" onclick="navigateTo('shop', null, 'Serums')">
            <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop" alt="Serums">
            <div class="category-card-overlay">
              <span class="category-card-subtitle">Targeted Treatment</span>
              <h3 class="category-card-title">Serums & Elixirs</h3>
            </div>
          </div>

          <div class="category-card" onclick="navigateTo('shop', null, 'Skincare')">
            <img src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop" alt="Moisturizers">
            <div class="category-card-overlay">
              <span class="category-card-subtitle">Deep Hydration</span>
              <h3 class="category-card-title">Restorative Creams</h3>
            </div>
          </div>

          <div class="category-card" onclick="navigateTo('shop', null, 'Skincare')">
            <img src="https://images.unsplash.com/photo-1512290900672-1f02a0a8e83b?q=80&w=600&auto=format&fit=crop" alt="Eye & Lip Care">
            <div class="category-card-overlay">
              <span class="category-card-subtitle">Delicate Areas</span>
              <h3 class="category-card-title">Eye & Lip Elixirs</h3>
            </div>
          </div>

          <div class="category-card" onclick="navigateTo('shop', null, 'Fragrance')">
            <img src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop" alt="Fine Fragrance">
            <div class="category-card-overlay">
              <span class="category-card-subtitle">Artisanal Scents</span>
              <h3 class="category-card-title">Haute Parfumerie</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Best Sellers Section -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-eyebrow">Most Adored</span>
          <h2 class="section-title">Iconic Beauty Essentials</h2>
          <p class="section-desc">Award-winning formulas cherished by our Kathmandu & Paris clientele.</p>
        </div>

        <div class="product-grid">
          ${bestSellers.map(product => renderProductCardHTML(product)).join('')}
        </div>

        <div style="text-align: center; margin-top: 3rem;">
          <button class="btn btn-outline-primary btn-lg" onclick="navigateTo('shop')">
            Explore All 8 Formulations
          </button>
        </div>
      </div>
    </section>

    <!-- Philosophy / Science Banner -->
    <section class="container">
      <div class="science-banner">
        <div class="science-grid">
          <div>
            <span class="badge badge-rose" style="margin-bottom: 1rem;">Clinical Efficacy</span>
            <h2 class="science-title">Rooted in Mountain Purity, Perfected by Lipid Science</h2>
            <p class="science-desc">
              High altitude flora in the Himalayas endure extreme UV exposure and frosty nights, yielding unusually concentrated antioxidant profiles. We extract these potent botanicals cold to preserve vital bio-nutrients.
            </p>
            <div class="science-features-grid">
              <div class="science-pill-card">
                <h5>✦ 98% Barrier Repair</h5>
                <p>Clinically measured moisture retention within 48 hours.</p>
              </div>
              <div class="science-pill-card">
                <h5>✦ 100% Recyclable Glass</h5>
                <p>UV-shielding amber glass to maintain ingredient bio-activity.</p>
              </div>
            </div>
          </div>
          <div style="border-radius: var(--radius-lg); overflow: hidden; max-height: 380px;">
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop" alt="LUMIÉ Lab Extraction" style="width:100%; height:100%; object-fit:cover;">
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Preview Accordion -->
    <section class="section">
      <div class="container container-narrow">
        <div class="section-header">
          <span class="section-eyebrow">Questions & Answers</span>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-desc">Everything you need to know about our sourcing, formulations, and Nepal delivery.</p>
        </div>

        <div class="faq-accordion">
          ${FAQ_DATA.map((faq, idx) => `
            <div class="accordion-item ${idx === 0 ? 'open' : ''}">
              <div class="accordion-trigger" onclick="toggleAccordion(this)">
                <span>${faq.q}</span>
                <span class="accordion-icon">▼</span>
              </div>
              <div class="accordion-content">
                <p>${faq.a}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Newsletter Subscription Box -->
        <div class="newsletter-box">
          <span class="badge badge-wine">Join The LUMIÉ Circle</span>
          <h3 style="font-size: 1.85rem; margin-top: 0.5rem;">Receive 10% Off Your First Ritual</h3>
          <p style="font-size: 0.875rem; margin-top: 0.25rem;">Subscribe to our journal for dermatologist insights, private sample drops, and exclusive invitations.</p>
          <form class="newsletter-form" onsubmit="handleNewsletterSubmit(event)">
            <input type="email" class="newsletter-input" placeholder="Enter your email address..." required>
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

// 2. SHOP CATALOG VIEW
function renderShopPage() {
  const filteredProducts = getFilteredProducts();

  return `
    <div class="shop-page-wrap">
      <div class="container">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs">
          <a href="#" onclick="navigateTo('home'); return false;">Home</a>
          <span>/</span>
          <span class="current">Shop Catalog</span>
        </div>

        <div class="section-header" style="margin-bottom: 2rem; text-align: left;">
          <span class="section-eyebrow">Full Collection (${filteredProducts.length} Items)</span>
          <h1 class="section-title" style="font-size: 2.25rem;">Botanical Skincare & Haute Fragrance</h1>
        </div>

        <!-- Filter & Search Bar -->
        <div class="shop-controls-bar">
          <div class="shop-search-input-wrap">
            <span class="shop-search-icon">🔍</span>
            <input 
              type="text" 
              id="shop-search-box"
              class="shop-search-input" 
              placeholder="Search by ingredient, name, or skin benefit..." 
              oninput="handleShopSearch(this.value)"
            >
          </div>

          <div class="category-pill-strip">
            ${['All', 'Skincare', 'Serums', 'Fragrance'].map(cat => `
              <button 
                class="category-pill ${Store.activeCategory === cat ? 'active' : ''}" 
                onclick="setShopCategory('${cat}')"
              >
                ${cat}
              </button>
            `).join('')}
          </div>

          <div class="shop-sort-wrap">
            <span class="shop-sort-label">Sort by:</span>
            <select class="shop-sort-select" onchange="handleShopSort(this.value)">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        <div id="shop-products-grid" class="product-grid">
          ${filteredProducts.length > 0 ? 
            filteredProducts.map(p => renderProductCardHTML(p)).join('') : 
            `<div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
              <p style="font-size: 1.15rem; color: var(--color-text-muted);">No botanical formulations match your criteria.</p>
              <button class="btn btn-primary" style="margin-top: 1rem;" onclick="setShopCategory('All')">Reset Filters</button>
            </div>`
          }
        </div>
      </div>
    </div>
  `;
}

// 3. PRODUCT DETAIL VIEW
function renderProductDetailPage() {
  const product = PRODUCTS_DATA.find(p => p.id === Store.selectedProductId) || PRODUCTS_DATA[0];
  const isFav = Store.wishlist.includes(product.id);
  const reviews = Store.reviewsMap[product.id] || [
    { name: 'Pooja S.', rating: 5, date: '2 days ago', title: 'Life-changing hydration for Kathmandu dry winters!', text: 'This serum absorbed instantly and transformed my dehydrated skin texture in less than a week.' },
    { name: 'Dr. Rohan K.', rating: 5, date: '1 week ago', title: 'Exceptional lipid formulation', text: 'As a dermatologist, I appreciate the clean bio-compatible ingredient deck. Truly calming.' }
  ];

  return `
    <div class="product-detail-wrap">
      <div class="container">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs">
          <a href="#" onclick="navigateTo('home'); return false;">Home</a>
          <span>/</span>
          <a href="#" onclick="navigateTo('shop'); return false;">Shop</a>
          <span>/</span>
          <a href="#" onclick="navigateTo('shop', null, '${product.category}'); return false;">${product.category}</a>
          <span>/</span>
          <span class="current">${product.name}</span>
        </div>

        <div class="pdp-grid">
          <!-- Left Gallery -->
          <div class="pdp-gallery-wrap">
            <div class="pdp-main-image-box">
              <img id="pdp-main-img" src="${product.image}" alt="${product.name}">
              ${product.badges && product.badges.length > 0 ? `
                <div class="product-card-badge-list">
                  <span class="badge badge-wine">${product.badges[0]}</span>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Right Info Panel -->
          <div class="pdp-info-panel">
            <div>
              <span class="product-brand-tag">${product.brand} • ${product.subcategory}</span>
              <h1 class="pdp-title">${product.name}</h1>
              
              <div class="rating-row" style="margin-top: 0.5rem;">
                <span class="stars-wrap">★★★★★</span>
                <span class="rating-score">${product.rating}</span>
                <span class="rating-count">(${product.reviewsCount} verified reviews)</span>
              </div>
            </div>

            <div class="pdp-price-row">
              <span id="pdp-current-price" class="pdp-price">NPR ${product.sizes[0].price.toLocaleString()}</span>
              ${product.originalPrice ? `
                <span class="pdp-price-orig">NPR ${product.originalPrice.toLocaleString()}</span>
              ` : ''}
              <span class="badge badge-emerald">In Stock • Nepal Dispatch</span>
            </div>

            <p style="font-size: 0.9375rem; line-height: 1.7; color: var(--color-text-muted);">
              ${product.description}
            </p>

            <!-- Size Selector -->
            <div>
              <label class="form-label" style="text-transform: uppercase; font-size: 0.6875rem; letter-spacing: 0.1em;">
                Select Volume / Size
              </label>
              <div class="pdp-sizes-list">
                ${product.sizes.map((sz, idx) => `
                  <button 
                    class="pdp-size-btn ${idx === 0 ? 'active' : ''}" 
                    data-price="${sz.price}"
                    data-label="${sz.label}"
                    onclick="selectPdpSize(this, ${sz.price})"
                  >
                    ${sz.label} (${sz.volume})
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- Quantity & Actions -->
            <div style="display: flex; align-items: center; gap: 1rem; margin-top: 0.5rem;">
              <div class="stepper-wrap">
                <button class="stepper-btn" onclick="updatePdpQuantity(-1)">-</button>
                <span id="pdp-qty-display" class="stepper-val">1</span>
                <button class="stepper-btn" onclick="updatePdpQuantity(1)">+</button>
              </div>

              <button 
                class="btn btn-secondary icon-btn ${isFav ? 'active' : ''}" 
                onclick="toggleWishlist('${product.id}')"
                title="Save to Wishlist"
              >
                ${isFav ? '❤️' : '🤍'}
              </button>
            </div>

            <div class="pdp-actions-row">
              <button 
                id="pdp-add-to-bag-btn" 
                class="btn btn-primary btn-lg" 
                style="flex: 1;" 
                onclick="addPdpToCart('${product.id}')"
              >
                Add to Shopping Bag
              </button>
              <button 
                class="btn btn-dark btn-lg" 
                style="flex: 1;" 
                onclick="buyPdpNow('${product.id}')"
              >
                Instant Checkout
              </button>
            </div>

            <!-- Product Highlights Box -->
            <div style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1.25rem; margin-top: 1rem;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.75rem;">
                <div><strong>Skin Compatibility:</strong><br>${product.details.skinType}</div>
                <div><strong>Sensory Texture:</strong><br>${product.details.texture}</div>
                <div><strong>Aromatic Profile:</strong><br>${product.details.scent}</div>
                <div><strong>Ritual Direction:</strong><br>${product.details.usage}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- PDP Tabs / Details -->
        <div class="pdp-tabs">
          <h3 style="font-size: 1.75rem; margin-bottom: 1.5rem;">Full Botanical Composition & Customer Reviews</h3>

          <div style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 2.5rem;">
            <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Full Ingredients (INCI)</h4>
            <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.7;">
              ${product.ingredients}
            </p>
          </div>

          <!-- Reviews Section -->
          <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
            <div>
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
                <h4 style="font-size: 1.35rem;">Customer Verified Reviews (${reviews.length})</h4>
                <button class="btn btn-outline-primary btn-sm" onclick="document.getElementById('write-review-form').scrollIntoView({behavior: 'smooth'})">
                  Write a Review
                </button>
              </div>

              ${reviews.map(rev => `
                <div class="review-item">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <div>
                      <span class="stars-wrap">★★★★★</span>
                      <strong style="font-size: 0.875rem; margin-left: 0.5rem;">${rev.name}</strong>
                      <span class="badge badge-emerald" style="margin-left: 0.5rem; font-size: 0.625rem;">Verified Ritualist</span>
                    </div>
                    <span style="font-size: 0.75rem; color: var(--color-text-subtle);">${rev.date}</span>
                  </div>
                  <h5 style="font-size: 0.9375rem; font-weight: 700; margin-bottom: 0.25rem;">${rev.title}</h5>
                  <p style="font-size: 0.8125rem; color: var(--color-text-muted);">${rev.text}</p>
                </div>
              `).join('')}

              <!-- Write Review Form -->
              <div id="write-review-form" style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.75rem; margin-top: 2rem;">
                <h4 style="font-size: 1.15rem; margin-bottom: 1rem;">Share Your Experience</h4>
                <form onsubmit="handleReviewSubmit(event, '${product.id}')">
                  <div class="form-group">
                    <label class="form-label">Your Rating</label>
                    <select id="review-rating-input" class="form-select">
                      <option value="5">★★★★★ — 5 Stars (Extraordinary)</option>
                      <option value="4">★★★★☆ — 4 Stars (Very Good)</option>
                      <option value="3">★★★☆☆ — 3 Stars (Average)</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Your Name</label>
                    <input type="text" id="review-name-input" class="form-input" placeholder="e.g. Maya S." required>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Review Headline</label>
                    <input type="text" id="review-title-input" class="form-input" placeholder="e.g. Incredibly soothing formula" required>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Detailed Thoughts</label>
                    <textarea id="review-text-input" class="form-textarea" rows="3" placeholder="Tell other skincare lovers about your results..." required></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Post Customer Review</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 4. CART VIEW
function renderCartPage() {
  const subtotal = Store.getCartSubtotal();
  const freeShipThreshold = 10000;
  const remaining = Math.max(0, freeShipThreshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / freeShipThreshold) * 100));

  if (Store.cart.length === 0) {
    return `
      <div class="container" style="padding: 5rem 1rem; text-align: center;">
        <div style="max-width: 480px; margin: 0 auto; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 3rem 2rem; box-shadow: var(--shadow-sm);">
          <div style="font-size: 3rem; color: var(--color-primary); margin-bottom: 1rem;">🛍️</div>
          <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">Your Beauty Bag is Empty</h2>
          <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 2rem;">
            Your ritual collection is waiting for you. Explore our handcrafted botanical serums, creams, and rare fragrances.
          </p>
          <button class="btn btn-primary btn-lg" onclick="navigateTo('shop')">Explore Botanical Catalog</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="container" style="padding: 2.5rem 1rem 5rem;">
      <!-- Steps Nav -->
      <div class="checkout-steps-nav">
        <div class="checkout-steps-list">
          <span class="step-chip active">1. Cart Bag</span>
          <span>→</span>
          <span class="step-chip">2. Details</span>
          <span>→</span>
          <span class="step-chip">3. Shipping</span>
          <span>→</span>
          <span class="step-chip">4. Payment</span>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="navigateTo('shop')">← Continue Shopping</button>
      </div>

      <!-- Free Shipping Progress -->
      <div class="progress-bar-wrap">
        <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700;">
          <span>
            ${remaining > 0 ? 
              `Add <strong style="color: var(--color-primary);">NPR ${remaining.toLocaleString()}</strong> more for <strong>FREE Express Shipping</strong>!` : 
              `<span style="color: var(--color-success);">✦ You unlocked Complimentary Express Delivery!</span>`
            }
          </span>
          <span>${progressPercent}%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width: ${progressPercent}%;"></div>
        </div>
      </div>

      <!-- Cart Grid -->
      <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
        <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;" class="cart-layout-grid">
          
          <!-- Left: Items List -->
          <div>
            <h2 style="font-size: 1.75rem; margin-bottom: 1.25rem;">Your Selected Rituals (${Store.cart.length})</h2>
            ${Store.cart.map(item => `
              <div class="cart-item-card">
                <div style="display: flex; align-items: center; gap: 1rem; cursor: pointer;" onclick="navigateTo('product', '${item.product.id}')">
                  <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
                  <div>
                    <span class="product-brand-tag">${item.product.brand}</span>
                    <h4 style="font-size: 1rem; margin-top: 0.15rem;">${item.product.name}</h4>
                    <p style="font-size: 0.75rem; color: var(--color-text-subtle);">Size: <strong>${item.selectedSize.label}</strong></p>
                    <p style="font-size: 0.75rem; color: var(--color-text-muted);">NPR ${item.selectedSize.price.toLocaleString()} each</p>
                  </div>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 1.5rem;">
                  <div class="stepper-wrap">
                    <button class="stepper-btn" onclick="updateCartQty('${item.product.id}', '${item.selectedSize.label}', -1)">-</button>
                    <span class="stepper-val">${item.quantity}</span>
                    <button class="stepper-btn" onclick="updateCartQty('${item.product.id}', '${item.selectedSize.label}', 1)">+</button>
                  </div>

                  <strong style="font-family: var(--font-serif); font-size: 1.2rem; min-width: 5.5rem; text-align: right;">
                    NPR ${(item.selectedSize.price * item.quantity).toLocaleString()}
                  </strong>

                  <button class="btn btn-secondary icon-btn" onclick="removeFromCart('${item.product.id}', '${item.selectedSize.label}')" title="Remove">
                    🗑️
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Right: Summary Box -->
          <div>
            <div class="summary-card">
              <h3 style="font-size: 1.35rem; border-bottom: 1px solid var(--color-border); padding-bottom: 0.75rem;">Order Summary</h3>

              <!-- Promo Code -->
              <div>
                <form onsubmit="handleApplyCoupon(event)" style="display: flex; gap: 0.5rem;">
                  <input type="text" id="coupon-code-input" class="form-input" placeholder="Promo Code (e.g. LUMIE10)" value="${Store.discountCode}">
                  <button type="submit" class="btn btn-dark btn-sm">Apply</button>
                </form>
                ${Store.discountCode ? `
                  <p style="font-size: 0.75rem; color: var(--color-success); font-weight: 700; margin-top: 0.35rem;">
                    ✦ Coupon '${Store.discountCode}' Applied (-NPR ${Store.discountAmount.toLocaleString()})
                  </p>
                ` : ''}
              </div>

              <!-- Lines -->
              <div style="display: flex; flex-direction: column; gap: 0.65rem;">
                <div class="summary-line">
                  <span>Subtotal</span>
                  <strong>NPR ${subtotal.toLocaleString()}</strong>
                </div>

                ${Store.discountAmount > 0 ? `
                  <div class="summary-line" style="color: var(--color-success);">
                    <span>Discount</span>
                    <strong>- NPR ${Store.discountAmount.toLocaleString()}</strong>
                  </div>
                ` : ''}

                <div class="summary-line">
                  <span>Estimated Shipping</span>
                  <strong>${subtotal >= 10000 ? '<span style="color:var(--color-success);">FREE</span>' : 'NPR ' + Store.getShippingCost()}</strong>
                </div>

                <div class="summary-line">
                  <span>13% Nepal VAT</span>
                  <strong>NPR ${Store.getTaxAmount().toLocaleString()}</strong>
                </div>

                <div class="summary-line total">
                  <span>Total Due</span>
                  <span style="color: var(--color-primary);">NPR ${Store.getCartTotal().toLocaleString()}</span>
                </div>
              </div>

              <button class="btn btn-primary btn-lg btn-full" onclick="navigateTo('checkout')">
                Proceed to Checkout →
              </button>

              <div style="text-align: center; font-size: 0.6875rem; color: var(--color-text-subtle);">
                🔒 256-Bit SSL Bank Grade Encryption
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
}

// 5. CHECKOUT VIEW
function renderCheckoutPage() {
  const subtotal = Store.getCartSubtotal();
  const total = Store.getCartTotal();

  return `
    <div class="container" style="padding: 2.5rem 1rem 5rem;">
      <div class="checkout-steps-nav">
        <div class="checkout-steps-list">
          <span class="step-chip" onclick="navigateTo('cart')" style="cursor: pointer;">1. Cart</span>
          <span>→</span>
          <span class="step-chip active">2. Details & Shipping</span>
          <span>→</span>
          <span class="step-chip">3. Payment</span>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="navigateTo('cart')">← Back to Bag</button>
      </div>

      <div style="display: grid; grid-template-columns: 1fr; gap: 2.5rem;" class="checkout-layout-grid">
        
        <!-- Form Area -->
        <div style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 2rem; box-shadow: var(--shadow-xs);">
          <h2 style="font-size: 1.75rem; margin-bottom: 0.5rem;">Customer Delivery & Payment</h2>
          <p style="font-size: 0.8125rem; color: var(--color-text-muted); margin-bottom: 2rem;">
            Where should our courier deliver your handcrafted skincare ritual?
          </p>

          <form id="checkout-full-form" onsubmit="handlePlaceOrder(event)">
            <!-- Contact Info -->
            <h4 style="font-size: 1.15rem; margin-bottom: 1rem; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem;">
              1. Recipient Contact
            </h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Full Name *</label>
                <input type="text" id="chk-name" class="form-input" placeholder="e.g. Aarav Adhikari" value="${Store.checkoutAddress.fullName || Store.user.name}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Email Address (for Receipt) *</label>
                <input type="email" id="chk-email" class="form-input" placeholder="aarav@example.com" value="${Store.checkoutAddress.email || Store.user.email}" required>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Phone in Nepal *</label>
                <input type="tel" id="chk-phone" class="form-input" placeholder="+977 98XXXXXXXX" value="${Store.checkoutAddress.phone || Store.user.phone}" required>
              </div>
              <div class="form-group">
                <label class="form-label">Delivery Region *</label>
                <select id="chk-region" class="form-select">
                  <option value="Kathmandu Valley">Kathmandu Valley (Kathmandu / Lalitpur / Bhaktapur)</option>
                  <option value="Outside Valley">Outside Valley (Pokhara / Chitwan / Butwal / Other)</option>
                </select>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Street Address & Landmark *</label>
                <input type="text" id="chk-street" class="form-input" placeholder="e.g. Lazimpat, House 42, Opposite Radisson" value="${Store.checkoutAddress.streetAddress || Store.user.address}" required>
              </div>
              <div class="form-group">
                <label class="form-label">City *</label>
                <input type="text" id="chk-city" class="form-input" placeholder="Kathmandu" value="${Store.checkoutAddress.city}" required>
              </div>
            </div>

            <!-- Shipping Method Selection -->
            <h4 style="font-size: 1.15rem; margin: 2rem 0 1rem; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem;">
              2. Select Delivery Option
            </h4>
            <div class="radio-card-option ${Store.shippingMethod === 'standard' ? 'selected' : ''}" onclick="setShippingMethod('standard')">
              <div>
                <strong>Standard Nepal Courier (2-3 Days)</strong>
                <p style="font-size: 0.75rem; color: var(--color-text-subtle);">Fast doorstep dispatch across Nepal</p>
              </div>
              <strong>${subtotal >= 10000 ? '<span style="color:var(--color-success);">FREE</span>' : 'NPR 200'}</strong>
            </div>

            <div class="radio-card-option ${Store.shippingMethod === 'express' ? 'selected' : ''}" onclick="setShippingMethod('express')">
              <div>
                <strong>Express Kathmandu Valley (24 Hours)</strong>
                <p style="font-size: 0.75rem; color: var(--color-text-subtle);">Guaranteed delivery by tomorrow afternoon</p>
              </div>
              <strong>${subtotal >= 10000 ? '<span style="color:var(--color-success);">FREE</span>' : 'NPR 350'}</strong>
            </div>

            <div class="radio-card-option ${Store.shippingMethod === 'pickup' ? 'selected' : ''}" onclick="setShippingMethod('pickup')">
              <div>
                <strong>Lazimpat Flagship Boutique Pickup</strong>
                <p style="font-size: 0.75rem; color: var(--color-text-subtle);">Ready in 2 hours with complimentary skin consultation</p>
              </div>
              <strong style="color: var(--color-success);">FREE</strong>
            </div>

            <!-- Payment Method Selection -->
            <h4 style="font-size: 1.15rem; margin: 2rem 0 1rem; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem;">
              3. Secure Payment Gateway
            </h4>
            <div class="radio-card-option ${Store.paymentMethod === 'esewa' ? 'selected' : ''}" onclick="setPaymentMethod('esewa')">
              <div>
                <strong>eSewa Mobile Wallet</strong>
                <p style="font-size: 0.75rem; color: var(--color-text-subtle);">Direct instant payment with your eSewa ID</p>
              </div>
              <span class="badge" style="background:#16A34A; color:#FFF;">eSewa</span>
            </div>

            <div class="radio-card-option ${Store.paymentMethod === 'khalti' ? 'selected' : ''}" onclick="setPaymentMethod('khalti')">
              <div>
                <strong>Khalti Digital Wallet</strong>
                <p style="font-size: 0.75rem; color: var(--color-text-subtle);">Pay securely with Khalti MPIN or Mobile OTP</p>
              </div>
              <span class="badge" style="background:#7E22CE; color:#FFF;">Khalti</span>
            </div>

            <div class="radio-card-option ${Store.paymentMethod === 'cod' ? 'selected' : ''}" onclick="setPaymentMethod('cod')">
              <div>
                <strong>Cash on Delivery (COD)</strong>
                <p style="font-size: 0.75rem; color: var(--color-text-subtle);">Pay with Cash or Fonepay QR upon courier arrival</p>
              </div>
              <span class="badge" style="background:#D97706; color:#FFF;">COD</span>
            </div>

            <div class="radio-card-option ${Store.paymentMethod === 'card' ? 'selected' : ''}" onclick="setPaymentMethod('card')">
              <div>
                <strong>Visa / MasterCard / UnionPay</strong>
                <p style="font-size: 0.75rem; color: var(--color-text-subtle);">Encrypted credit/debit card transaction</p>
              </div>
              <span class="badge" style="background:#2563EB; color:#FFF;">Card</span>
            </div>

            <div style="margin-top: 2rem;">
              <button type="submit" class="btn btn-primary btn-lg btn-full">
                Place Order • NPR ${total.toLocaleString()}
              </button>
            </div>
          </form>
        </div>

        <!-- Mini Summary -->
        <div>
          <div class="summary-card">
            <h3 style="font-size: 1.35rem; border-bottom: 1px solid var(--color-border); padding-bottom: 0.75rem;">
              Bag Summary (${Store.cart.length})
            </h3>
            <div style="display: flex; flex-direction: column; gap: 0.75rem; max-height: 240px; overflow-y: auto;">
              ${Store.cart.map(i => `
                <div style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.8125rem;">
                  <img src="${i.product.image}" style="width: 2.75rem; height: 2.75rem; border-radius: var(--radius-sm); object-fit: cover;">
                  <div style="flex-grow: 1;">
                    <strong style="display: block; font-size: 0.75rem;">${i.product.name}</strong>
                    <span style="font-size: 0.6875rem; color: var(--color-text-subtle);">${i.quantity}x (${i.selectedSize.label})</span>
                  </div>
                  <strong>NPR ${(i.selectedSize.price * i.quantity).toLocaleString()}</strong>
                </div>
              `).join('')}
            </div>

            <div style="border-top: 1px solid var(--color-border); padding-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
              <div class="summary-line">
                <span>Subtotal</span>
                <strong>NPR ${subtotal.toLocaleString()}</strong>
              </div>
              <div class="summary-line">
                <span>Shipping</span>
                <strong>${Store.getShippingCost() === 0 ? '<span style="color:var(--color-success);">FREE</span>' : 'NPR ' + Store.getShippingCost()}</strong>
              </div>
              <div class="summary-line total">
                <span>Total Amount</span>
                <span style="color: var(--color-primary);">NPR ${total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

// 6. ORDER SUCCESS VIEW
function renderOrderSuccessPage() {
  const order = Store.completedOrder;
  if (!order) {
    return `
      <div class="container" style="padding: 5rem 1rem; text-align: center;">
        <p>No recent confirmed order.</p>
        <button class="btn btn-primary" style="margin-top: 1rem;" onclick="navigateTo('shop')">Return to Catalog</button>
      </div>
    `;
  }

  return `
    <div class="container container-sm" style="padding: 3rem 1rem 5rem;">
      <div style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 2.5rem 2rem; box-shadow: var(--shadow-sm); text-align: center;">
        <div style="width: 4rem; height: 4rem; border-radius: var(--radius-full); background: var(--color-success-bg); color: var(--color-success); font-size: 2rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
          ✓
        </div>
        <span class="badge badge-wine">Order Confirmed</span>
        <h1 style="font-size: 2.25rem; margin: 0.5rem 0;">Thank You, ${order.address.fullName.split(' ')[0]}!</h1>
        <p style="font-size: 0.875rem; color: var(--color-text-muted); max-width: 460px; margin: 0 auto 1.5rem;">
          Your botanical ritual order <strong>#${order.id}</strong> has been secured and is being carefully assembled in our Kathmandu laboratory.
        </p>

        <!-- Tracking Timeline -->
        <div style="background: var(--color-surface-subtle); border-radius: var(--radius-lg); padding: 1.5rem; margin: 1.5rem 0; text-align: left;">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700; margin-bottom: 0.75rem;">
            <span>Estimated Delivery:</span>
            <span style="color: var(--color-primary);">${order.estimatedDelivery}</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; text-align: center; font-size: 0.75rem;">
            <div>
              <div style="width: 1.5rem; height: 1.5rem; border-radius: 50%; background: var(--color-primary); color:#FFF; margin:0 auto 0.25rem; line-height: 1.5rem; font-size: 0.625rem;">✓</div>
              <strong>Confirmed</strong>
            </div>
            <div>
              <div style="width: 1.5rem; height: 1.5rem; border-radius: 50%; background: #F59E0B; color:#FFF; margin:0 auto 0.25rem; line-height: 1.5rem; font-size: 0.625rem;">⏳</div>
              <strong>In Preparation</strong>
            </div>
            <div>
              <div style="width: 1.5rem; height: 1.5rem; border-radius: 50%; background: var(--color-border); color:#888; margin:0 auto 0.25rem; line-height: 1.5rem; font-size: 0.625rem;">3</div>
              <span>Dispatched</span>
            </div>
          </div>
        </div>

        <!-- Receipt Breakdown -->
        <div style="text-align: left; border-top: 1px solid var(--color-border); padding-top: 1.5rem; margin-top: 1.5rem;">
          <h4 style="font-size: 1rem; margin-bottom: 1rem;">Receipt Breakdown</h4>
          ${order.items.map(item => `
            <div style="display: flex; justify-content: space-between; font-size: 0.8125rem; margin-bottom: 0.5rem;">
              <span>${item.product.name} (${item.selectedSize.label}) × ${item.quantity}</span>
              <strong>NPR ${(item.selectedSize.price * item.quantity).toLocaleString()}</strong>
            </div>
          `).join('')}
          <div style="border-top: 1px solid var(--color-border-subtle); padding-top: 0.5rem; margin-top: 0.5rem; font-size: 0.875rem;">
            <div style="display: flex; justify-content: space-between; font-weight: 700; font-family: var(--font-serif); font-size: 1.25rem; color: var(--color-primary);">
              <span>Total Paid</span>
              <span>NPR ${order.total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;" class="btn-no-print">
          <button class="btn btn-secondary" onclick="window.print()">🖨️ Print Receipt</button>
          <button class="btn btn-primary" onclick="navigateTo('shop')">Continue Shopping</button>
        </div>
      </div>
    </div>
  `;
}

// 7. ABOUT & ORIGIN VIEW
function renderAboutPage() {
  return `
    <div class="container container-narrow" style="padding: 3.5rem 1rem 5rem;">
      <div class="section-header">
        <span class="section-eyebrow">Our Heritage & Craft</span>
        <h1 class="section-title">Himalayan Purity Meets French Lipid Science</h1>
        <p class="section-desc">
          Founded in Kathmandu with active formulation research in Paris, LUMIÉ was born from a desire to celebrate Nepal's rich medicinal botanical heritage with modern bio-compatible skincare technology.
        </p>
      </div>

      <div style="border-radius: var(--radius-xl); overflow: hidden; margin-bottom: 3rem; aspect-ratio: 16/9; box-shadow: var(--shadow-md);">
        <img src="https://images.unsplash.com/photo-1608248597359-00f757e17c09?q=80&w=1200&auto=format&fit=crop" alt="LUMIÉ Lab Extraction" style="width:100%; height:100%; object-fit:cover;">
      </div>

      <div style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 2.5rem; box-shadow: var(--shadow-xs); line-height: 1.8; color: var(--color-text-muted);">
        <h3 style="color: var(--color-text-main); font-size: 1.75rem; margin-bottom: 1rem;">The Art of High Altitude Extractions</h3>
        <p style="margin-bottom: 1.25rem;">
          High altitude botanicals in the Himalayas endure harsh climate extremes. In response, flora like wild sea buckthorn, rhododendron, and alpine rosehip synthesize unusually potent defensive antioxidants and barrier-strengthening lipids.
        </p>
        <p style="margin-bottom: 1.25rem;">
          We partner directly with fair-trade farming cooperatives across rural Nepalese valleys, harvesting at optimal seasonal potency and extracting pure hydrosols and cold-pressed seed oils without toxic synthetic solvents.
        </p>
        <div style="text-align: center; margin-top: 2rem;">
          <button class="btn btn-primary btn-lg" onclick="navigateTo('shop')">Explore The Formulations</button>
        </div>
      </div>
    </div>
  `;
}

// 8. BLOG / JOURNAL VIEW
function renderBlogPage() {
  return `
    <div class="container container-narrow" style="padding: 3.5rem 1rem 5rem;">
      <div class="section-header">
        <span class="section-eyebrow">The LUMIÉ Journal</span>
        <h1 class="section-title">Skincare Science & Conscious Rituals</h1>
        <p class="section-desc">Expert insights on skin barrier restoration, molecular ingredients, and mindful self-care.</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
        ${BLOG_DATA.map(post => `
          <div style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-xs); display: grid; grid-template-columns: 1fr; gap: 1.5rem;" class="blog-card-grid">
            <div style="height: 240px; overflow: hidden;">
              <img src="${post.image}" alt="${post.title}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div style="padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span class="badge badge-wine">${post.category}</span>
                <h3 style="font-size: 1.45rem; margin: 0.5rem 0;">${post.title}</h3>
                <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.6;">${post.excerpt}</p>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.25rem; font-size: 0.75rem; color: var(--color-text-subtle);">
                <span>${post.date} • ${post.readTime}</span>
                <button class="btn btn-secondary btn-sm" onclick="openBlogArticle(${post.id})">Read Article →</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 9. FAQ VIEW
function renderFAQPage() {
  return `
    <div class="container container-narrow" style="padding: 3.5rem 1rem 5rem;">
      <div class="section-header">
        <span class="section-eyebrow">Help & Guidance</span>
        <h1 class="section-title">Frequently Asked Questions</h1>
        <p class="section-desc">Clear answers regarding our botanicals, express dispatch, payment options, and returns.</p>
      </div>

      <div class="faq-accordion">
        ${FAQ_DATA.map((faq, idx) => `
          <div class="accordion-item ${idx === 0 ? 'open' : ''}">
            <div class="accordion-trigger" onclick="toggleAccordion(this)">
              <span>${faq.q}</span>
              <span class="accordion-icon">▼</span>
            </div>
            <div class="accordion-content">
              <p>${faq.a}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 2.5rem; margin-top: 3rem; text-align: center;">
        <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Still Have Questions?</h3>
        <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
          Our beauty concierge team is here to assist with personalized routine recommendations.
        </p>
        <button class="btn btn-primary" onclick="navigateTo('contact')">Contact Concierge Desk</button>
      </div>
    </div>
  `;
}

// 10. CONTACT VIEW
function renderContactPage() {
  return `
    <div class="container container-narrow" style="padding: 3.5rem 1rem 5rem;">
      <div class="section-header">
        <span class="section-eyebrow">LUMIÉ Concierge</span>
        <h1 class="section-title">Get in Touch With Us</h1>
        <p class="section-desc">Reach out for skin consultations, order support, or boutique inquiries.</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr; gap: 2.5rem;" class="contact-layout-grid">
        <!-- Contact Information -->
        <div style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 2rem;">
          <h3 style="font-size: 1.45rem; margin-bottom: 1.25rem;">Kathmandu Flagship</h3>
          
          <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.875rem; color: var(--color-text-muted);">
            <div>
              <strong style="color: var(--color-text-main); display: block;">📍 Boutique Address</strong>
              <span>Lazimpat Road, Kathmandu 44600, Nepal<br>(Opposite Hotel Radisson)</span>
            </div>
            <div>
              <strong style="color: var(--color-text-main); display: block;">📞 Phone & WhatsApp</strong>
              <span>+977 1 441 9820 / +977 9841 234567<br>(Mon–Sat 9:00 AM – 7:00 PM NPT)</span>
            </div>
            <div>
              <strong style="color: var(--color-text-main); display: block;">✉️ Email Assistance</strong>
              <span>care@lumiebeauty.com<br>Guaranteed response within 4 hours.</span>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 2rem;">
          <h3 style="font-size: 1.45rem; margin-bottom: 1rem;">Send a Note</h3>
          <form onsubmit="handleContactSubmit(event)">
            <div class="form-group">
              <label class="form-label">Full Name *</label>
              <input type="text" id="contact-name" class="form-input" placeholder="Maya Shrestha" required>
            </div>
            <div class="form-group">
              <label class="form-label">Email Address *</label>
              <input type="email" id="contact-email" class="form-input" placeholder="maya@example.com" required>
            </div>
            <div class="form-group">
              <label class="form-label">Subject</label>
              <select id="contact-subject" class="form-select">
                <option>Skin Consultation & Routine Advice</option>
                <option>Delivery & Order Status Inquiry</option>
                <option>Return / Exchange Support</option>
                <option>Press & Wholesale Inquiry</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Message *</label>
              <textarea id="contact-message" class="form-textarea" rows="4" placeholder="How may our advisors assist you?" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  `;
}

// 11. ACCOUNT / MEMBER VIEW
function renderAccountPage() {
  return `
    <div class="container container-narrow" style="padding: 3.5rem 1rem 5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid var(--color-border); padding-bottom: 1rem;">
        <div>
          <span class="section-eyebrow">Member Portal</span>
          <h1 style="font-size: 2.25rem; margin-top: 0.25rem;">Welcome, ${Store.user.name}</h1>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="handleLogout()">Sign Out</button>
      </div>

      <div style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 2rem; margin-bottom: 2rem;">
        <h3 style="font-size: 1.35rem; margin-bottom: 1rem;">Order History (${Store.orders.length})</h3>
        ${Store.orders.length > 0 ? `
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${Store.orders.map(ord => `
              <div style="background: var(--color-surface-subtle); border-radius: var(--radius-md); padding: 1.25rem; border: 1px solid var(--color-border);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.8125rem;">
                  <strong>Order #${ord.id}</strong>
                  <span class="badge badge-emerald">${ord.status}</span>
                </div>
                <div style="font-size: 0.75rem; color: var(--color-text-muted);">
                  ${ord.items.map(i => `${i.product.name} (${i.selectedSize.label}) × ${i.quantity}`).join(', ')}
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 0.75rem; font-size: 0.8125rem; font-weight: 700; border-top: 1px solid var(--color-border-subtle); padding-top: 0.5rem;">
                  <span>Placed on ${ord.createdAt}</span>
                  <span style="color: var(--color-primary);">NPR ${ord.total.toLocaleString()}</span>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <p style="font-size: 0.875rem; color: var(--color-text-muted);">You have not placed any orders yet.</p>
          <button class="btn btn-primary btn-sm" style="margin-top: 1rem;" onclick="navigateTo('shop')">Explore Catalog</button>
        `}
      </div>

      <div style="background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 2rem;">
        <h3 style="font-size: 1.35rem; margin-bottom: 1rem;">Profile & Default Delivery Address</h3>
        <form onsubmit="handleProfileUpdate(event)">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input type="text" id="acc-name" class="form-input" value="${Store.user.name}">
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" id="acc-email" class="form-input" value="${Store.user.email}">
            </div>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div class="form-group">
              <label class="form-label">Phone</label>
              <input type="tel" id="acc-phone" class="form-input" value="${Store.user.phone}">
            </div>
            <div class="form-group">
              <label class="form-label">Address</label>
              <input type="text" id="acc-address" class="form-input" value="${Store.user.address}">
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </form>
      </div>
    </div>
  `;
}

// --- HELPER RENDERING: PRODUCT CARD ---
function renderProductCardHTML(product) {
  const isFav = Store.wishlist.includes(product.id);
  const primarySize = product.sizes[0];

  return `
    <div class="product-card">
      <div class="product-card-img-wrap" onclick="navigateTo('product', '${product.id}')">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badges && product.badges.length > 0 ? `
          <div class="product-card-badge-list">
            <span class="badge badge-wine">${product.badges[0]}</span>
          </div>
        ` : ''}
        <button 
          class="product-card-fav-btn ${isFav ? 'active' : ''}" 
          onclick="event.stopPropagation(); toggleWishlist('${product.id}')"
          title="Add to Wishlist"
        >
          ${isFav ? '❤️' : '🤍'}
        </button>
        <button 
          class="product-quickview-trigger" 
          onclick="event.stopPropagation(); openQuickView('${product.id}')"
        >
          Quick View
        </button>
      </div>

      <div class="product-card-body">
        <div class="product-card-header">
          <span class="product-brand-tag">${product.brand}</span>
          <h3 class="product-card-title" onclick="navigateTo('product', '${product.id}')">
            ${product.name}
          </h3>
          <span class="product-card-sub">${product.subcategory}</span>
        </div>

        <div class="rating-row">
          <span class="stars-wrap">★★★★★</span>
          <span class="rating-score">${product.rating}</span>
          <span class="rating-count">(${product.reviewsCount})</span>
        </div>

        <div class="product-card-footer">
          <div class="product-price-wrap">
            <span class="product-price">NPR ${primarySize.price.toLocaleString()}</span>
            ${product.originalPrice ? `
              <span class="product-price-orig">NPR ${product.originalPrice.toLocaleString()}</span>
            ` : ''}
          </div>

          <button 
            class="btn-card-add" 
            onclick="addToCartFromCard('${product.id}')"
          >
            + Add to Bag
          </button>
        </div>
      </div>
    </div>
  `;
}

// --- CART & WISHLIST ACTIONS ---
function addToCart(product, selectedSize = null, quantity = 1) {
  const size = selectedSize || product.sizes[0];
  const existingIdx = Store.cart.findIndex(
    item => item.product.id === product.id && item.selectedSize.label === size.label
  );

  if (existingIdx > -1) {
    Store.cart[existingIdx].quantity += quantity;
  } else {
    Store.cart.push({
      product,
      selectedSize: size,
      quantity
    });
  }

  Store.saveCart();
  showToast('Added to Beauty Bag', `${product.name} (${size.label}) added.`, 'success');
}

function addToCartFromCard(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (product) addToCart(product);
}

function addPdpToCart(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const activeBtn = document.querySelector('.pdp-size-btn.active');
  const sizeLabel = activeBtn ? activeBtn.getAttribute('data-label') : product.sizes[0].label;
  const chosenSize = product.sizes.find(s => s.label === sizeLabel) || product.sizes[0];
  const qty = parseInt(document.getElementById('pdp-qty-display')?.innerText || '1', 10);

  addToCart(product, chosenSize, qty);
}

function buyPdpNow(productId) {
  addPdpToCart(productId);
  navigateTo('checkout');
}

function updateCartQty(productId, sizeLabel, delta) {
  const idx = Store.cart.findIndex(
    item => item.product.id === productId && item.selectedSize.label === sizeLabel
  );
  if (idx > -1) {
    Store.cart[idx].quantity += delta;
    if (Store.cart[idx].quantity <= 0) {
      Store.cart.splice(idx, 1);
    }
    Store.saveCart();
    renderCurrentView();
  }
}

function removeFromCart(productId, sizeLabel) {
  Store.cart = Store.cart.filter(
    item => !(item.product.id === productId && item.selectedSize.label === sizeLabel)
  );
  Store.saveCart();
  renderCurrentView();
  showToast('Item Removed', 'Product was removed from your bag.', 'info');
}

function updateCartBadges() {
  const count = Store.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.innerText = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function toggleWishlist(productId) {
  const idx = Store.wishlist.indexOf(productId);
  if (idx > -1) {
    Store.wishlist.splice(idx, 1);
    showToast('Removed from Saved', 'Item removed from your wishlist.', 'info');
  } else {
    Store.wishlist.push(productId);
    showToast('Saved to Wishlist', 'Item added to your saved rituals.', 'success');
  }
  Store.saveWishlist();
  renderCurrentView();
  renderWishlistDrawerItems();
}

function updateWishlistBadges() {
  const count = Store.wishlist.length;
  const badge = document.getElementById('wishlist-badge');
  if (badge) {
    badge.innerText = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  }
}

// --- MODALS & DRAWERS ---

// Search Modal
function openSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.add('open');
    const input = document.getElementById('search-modal-input');
    if (input) {
      input.value = '';
      input.focus();
      renderSearchResults('');
    }
  }
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) modal.classList.remove('open');
}

function handleSearchModalInput(query) {
  renderSearchResults(query.trim());
}

function renderSearchResults(query) {
  const container = document.getElementById('search-results-list');
  if (!container) return;

  if (!query) {
    container.innerHTML = `
      <div style="padding: 1rem 0;">
        <span class="form-label" style="text-transform: uppercase; font-size: 0.6875rem; letter-spacing: 0.1em; color: var(--color-text-subtle);">
          Trending Botanical Rituals
        </span>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.75rem;">
          ${['Himalayan Rose', 'Lipid Cream', 'Peony Elixir', 'Sandalwood Perfume', 'Glacial Cleanser'].map(tag => `
            <button class="btn btn-secondary btn-sm" onclick="setSearchModalQuery('${tag}')">${tag}</button>
          `).join('')}
        </div>
      </div>
    `;
    return;
  }

  const matches = PRODUCTS_DATA.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.ingredients.toLowerCase().includes(query.toLowerCase())
  );

  if (matches.length === 0) {
    container.innerHTML = `<p style="padding: 2rem; text-align: center; color: var(--color-text-muted); font-size: 0.875rem;">No rituals found matching "${query}".</p>`;
    return;
  }

  container.innerHTML = matches.map(p => `
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; border-radius: var(--radius-md); background: var(--color-surface-subtle); margin-bottom: 0.5rem; cursor: pointer;" onclick="closeSearchModal(); navigateTo('product', '${p.id}');">
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <img src="${p.image}" style="width: 3rem; height: 3rem; border-radius: var(--radius-sm); object-fit: cover;">
        <div>
          <strong style="font-size: 0.875rem; display: block;">${p.name}</strong>
          <span style="font-size: 0.75rem; color: var(--color-primary);">${p.subcategory} • NPR ${p.sizes[0].price.toLocaleString()}</span>
        </div>
      </div>
      <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); addToCartFromCard('${p.id}'); closeSearchModal();">+ Add</button>
    </div>
  `).join('');
}

function setSearchModalQuery(tag) {
  const input = document.getElementById('search-modal-input');
  if (input) {
    input.value = tag;
    renderSearchResults(tag);
  }
}

// Wishlist Drawer
function openWishlistDrawer() {
  renderWishlistDrawerItems();
  const drawer = document.getElementById('wishlist-drawer');
  if (drawer) drawer.classList.add('open');
}

function closeWishlistDrawer() {
  const drawer = document.getElementById('wishlist-drawer');
  if (drawer) drawer.classList.remove('open');
}

function renderWishlistDrawerItems() {
  const container = document.getElementById('wishlist-drawer-items');
  if (!container) return;

  const saved = PRODUCTS_DATA.filter(p => Store.wishlist.includes(p.id));
  if (saved.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem;">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🤍</div>
        <p style="font-size: 0.875rem; color: var(--color-text-muted);">Your saved rituals drawer is currently empty.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = saved.map(p => `
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem; border-radius: var(--radius-md); background: var(--color-surface-subtle); margin-bottom: 0.75rem;">
      <div style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;" onclick="closeWishlistDrawer(); navigateTo('product', '${p.id}');">
        <img src="${p.image}" style="width: 3.5rem; height: 3.5rem; border-radius: var(--radius-sm); object-fit: cover;">
        <div>
          <strong style="font-size: 0.8125rem; display: block;">${p.name}</strong>
          <span style="font-size: 0.75rem; color: var(--color-primary);">NPR ${p.sizes[0].price.toLocaleString()}</span>
        </div>
      </div>
      <div style="display: flex; gap: 0.35rem;">
        <button class="btn btn-primary btn-sm" onclick="addToCartFromCard('${p.id}')">Add</button>
        <button class="btn btn-secondary btn-sm" onclick="toggleWishlist('${p.id}')">✕</button>
      </div>
    </div>
  `).join('');
}

// Quick View Modal
function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  Store.activeQuickViewProduct = product;
  const modal = document.getElementById('quickview-modal');
  const body = document.getElementById('quickview-modal-body');

  if (modal && body) {
    body.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;" class="quickview-grid">
        <div style="aspect-ratio: 1/1; border-radius: var(--radius-lg); overflow: hidden; background: var(--color-surface-subtle);">
          <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div style="display: flex; flex-direction: column; justify-content: space-between; gap: 1rem;">
          <div>
            <span class="product-brand-tag">${product.brand} • ${product.subcategory}</span>
            <h3 style="font-size: 1.5rem; margin: 0.25rem 0;">${product.name}</h3>
            <div class="rating-row">
              <span class="stars-wrap">★★★★★</span>
              <span class="rating-score">${product.rating}</span>
            </div>
            <p style="font-family: var(--font-serif); font-size: 1.6rem; font-weight: 700; color: var(--color-primary); margin: 0.75rem 0;">
              NPR ${product.sizes[0].price.toLocaleString()}
            </p>
            <p style="font-size: 0.8125rem; color: var(--color-text-muted); line-height: 1.6;">
              ${product.description}
            </p>
          </div>

          <div style="display: flex; gap: 0.75rem; padding-top: 1rem; border-top: 1px solid var(--color-border-subtle);">
            <button class="btn btn-primary btn-lg" style="flex: 1;" onclick="addToCartFromCard('${product.id}'); closeQuickView();">
              Add to Bag
            </button>
            <button class="btn btn-secondary btn-lg" onclick="closeQuickView(); navigateTo('product', '${product.id}');">
              Full Details →
            </button>
          </div>
        </div>
      </div>
    `;
    modal.classList.add('open');
  }
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  if (modal) modal.classList.remove('open');
}

// Auth Modal
function openAuthModal() {
  if (Store.user.isLoggedIn) {
    navigateTo('account');
    return;
  }
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.add('open');
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.remove('open');
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('auth-email-input').value;
  const name = document.getElementById('auth-name-input')?.value || 'Aarav Adhikari';

  Store.user.isLoggedIn = true;
  Store.user.name = name;
  Store.user.email = email;
  Store.saveUser();

  closeAuthModal();
  showToast('Welcome to LUMIÉ', `Signed in as ${name}. 10% coupon LUMIE10 ready!`, 'success');
  renderCurrentView();
}

function handleLogout() {
  Store.user.isLoggedIn = false;
  Store.saveUser();
  showToast('Signed Out', 'You have been signed out of your account.', 'info');
  navigateTo('home');
}

// Mobile Menu
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) drawer.classList.toggle('open');
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) drawer.classList.remove('open');
}

// --- INTERACTIVE HANDLERS ---

function selectPdpSize(btn, price) {
  document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const priceElem = document.getElementById('pdp-current-price');
  if (priceElem) {
    priceElem.innerText = `NPR ${price.toLocaleString()}`;
  }
}

function updatePdpQuantity(delta) {
  const qtyElem = document.getElementById('pdp-qty-display');
  if (!qtyElem) return;

  let current = parseInt(qtyElem.innerText, 10);
  current = Math.max(1, current + delta);
  qtyElem.innerText = current;
}

function handleShopSearch(query) {
  const container = document.getElementById('shop-products-grid');
  if (!container) return;

  const filtered = PRODUCTS_DATA.filter(p => {
    const matchCat = Store.activeCategory === 'All' || p.category === Store.activeCategory;
    const matchQuery = !query || 
      p.name.toLowerCase().includes(query.toLowerCase()) || 
      p.ingredients.toLowerCase().includes(query.toLowerCase()) || 
      p.subcategory.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;"><p>No products match "${query}".</p></div>`;
  } else {
    container.innerHTML = filtered.map(p => renderProductCardHTML(p)).join('');
  }
}

function setShopCategory(cat) {
  Store.activeCategory = cat;
  renderCurrentView();
}

function handleShopSort(sortType) {
  const container = document.getElementById('shop-products-grid');
  if (!container) return;

  let list = getFilteredProducts();
  if (sortType === 'price-asc') {
    list.sort((a, b) => a.sizes[0].price - b.sizes[0].price);
  } else if (sortType === 'price-desc') {
    list.sort((a, b) => b.sizes[0].price - a.sizes[0].price);
  } else if (sortType === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  container.innerHTML = list.map(p => renderProductCardHTML(p)).join('');
}

function getFilteredProducts() {
  if (Store.activeCategory === 'All') return [...PRODUCTS_DATA];
  return PRODUCTS_DATA.filter(p => p.category === Store.activeCategory);
}

function handleApplyCoupon(e) {
  e.preventDefault();
  const input = document.getElementById('coupon-code-input');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (code === 'LUMIE10') {
    Store.discountCode = 'LUMIE10';
    Store.discountAmount = Math.round(Store.getCartSubtotal() * 0.10);
    showToast('Promo Code Applied', '10% discount added to your total!', 'success');
  } else if (code === 'GLOW20') {
    Store.discountCode = 'GLOW20';
    Store.discountAmount = Math.round(Store.getCartSubtotal() * 0.20);
    showToast('VIP Promo Applied', '20% special discount added!', 'success');
  } else {
    showToast('Invalid Promo Code', 'Please enter a valid promotion code.', 'warning');
  }
  renderCurrentView();
}

function setShippingMethod(method) {
  Store.shippingMethod = method;
  renderCurrentView();
}

function setPaymentMethod(method) {
  Store.paymentMethod = method;
  renderCurrentView();
}

function handlePlaceOrder(e) {
  e.preventDefault();

  const name = document.getElementById('chk-name').value;
  const email = document.getElementById('chk-email').value;
  const phone = document.getElementById('chk-phone').value;
  const region = document.getElementById('chk-region').value;
  const street = document.getElementById('chk-street').value;
  const city = document.getElementById('chk-city').value;

  if (!name || !email || !phone || !street || !city) {
    showToast('Incomplete Form', 'Please complete all required fields.', 'warning');
    return;
  }

  const newOrder = {
    id: 'LUM-' + Math.floor(100000 + Math.random() * 900000),
    createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    items: [...Store.cart],
    subtotal: Store.getCartSubtotal(),
    shippingCost: Store.getShippingCost(),
    tax: Store.getTaxAmount(),
    discount: Store.discountAmount,
    total: Store.getCartTotal(),
    address: { fullName: name, email, phone, region, city, streetAddress: street },
    paymentMethod: Store.paymentMethod,
    status: 'In Preparation (Kathmandu Lab)',
    estimatedDelivery: Store.shippingMethod === 'express' ? 'Tomorrow by 3:00 PM' : '2-3 Business Days'
  };

  Store.completedOrder = newOrder;
  Store.orders.unshift(newOrder);
  Store.saveOrders();

  // Clear cart
  Store.cart = [];
  Store.discountCode = '';
  Store.discountAmount = 0;
  Store.saveCart();

  showToast('Order Placed Successfully', 'Confirmation sent to your email.', 'success');
  navigateTo('order-success');
}

function handleReviewSubmit(e, productId) {
  e.preventDefault();
  const rating = parseInt(document.getElementById('review-rating-input').value, 10);
  const name = document.getElementById('review-name-input').value;
  const title = document.getElementById('review-title-input').value;
  const text = document.getElementById('review-text-input').value;

  if (!Store.reviewsMap[productId]) {
    Store.reviewsMap[productId] = [];
  }

  Store.reviewsMap[productId].unshift({
    name,
    rating,
    date: 'Just now',
    title,
    text
  });

  showToast('Review Published', 'Thank you for contributing your ritual feedback!', 'success');
  renderCurrentView();
}

function handleNewsletterSubmit(e) {
  e.preventDefault();
  showToast('Subscribed to LUMIÉ', 'Use code LUMIE10 for 10% off your order!', 'success');
  e.target.reset();
}

function handleContactSubmit(e) {
  e.preventDefault();
  showToast('Message Dispatched', 'A concierge specialist will contact you shortly.', 'success');
  e.target.reset();
}

function handleProfileUpdate(e) {
  e.preventDefault();
  Store.user.name = document.getElementById('acc-name').value;
  Store.user.email = document.getElementById('acc-email').value;
  Store.user.phone = document.getElementById('acc-phone').value;
  Store.user.address = document.getElementById('acc-address').value;
  Store.saveUser();
  showToast('Profile Updated', 'Your contact and address settings are saved.', 'success');
}

function toggleAccordion(triggerElem) {
  const item = triggerElem.closest('.accordion-item');
  if (item) {
    item.classList.toggle('open');
  }
}

function openBlogArticle(id) {
  const post = BLOG_DATA.find(b => b.id === id);
  if (!post) return;
  alert(`${post.title}\n\n${post.content.join('\n\n')}`);
}

// --- TOAST NOTIFICATIONS ---
function showToast(title, message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  
  let icon = '✦';
  if (type === 'success') icon = '✓';
  if (type === 'warning') icon = '⚠️';
  if (type === 'info') icon = 'ℹ️';

  toast.innerHTML = `
    <span style="font-size: 1.15rem; color: var(--color-secondary);">${icon}</span>
    <div style="flex-grow: 1;">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button onclick="this.parentElement.remove()" style="color:#A8A29E; font-size:0.875rem;">✕</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// --- EVENT LISTENERS ---
function initEventListeners() {
  // Keep image containers and layout unchanged while recovering from failed image URLs.
  const imageFallbacks = {
    serum: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    skincare: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
    fragrance: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop',
    eye: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
    nature: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=800&auto=format&fit=crop',
    default: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop'
  };

  // Capture image errors, including images rendered later by the shop, search, and drawers.
  document.addEventListener('error', (event) => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement) || img.dataset.fallbackApplied === 'true') return;

    const hint = ((img.alt || '') + ' ' +
      (img.closest('.product-card, .category-card')?.textContent || '')).toLowerCase();

    let fallback = imageFallbacks.default;
    if (/serum|niacinamide/.test(hint)) fallback = imageFallbacks.serum;
    else if (/fragrance|perfume|candle/.test(hint)) fallback = imageFallbacks.fragrance;
    else if (/eye|lip/.test(hint)) fallback = imageFallbacks.eye;
    else if (/botanical|mountain|nature|journal|lab/.test(hint)) fallback = imageFallbacks.nature;
    else if (/cream|moistur|skincare|cleanser|mist/.test(hint)) fallback = imageFallbacks.skincare;

    img.dataset.fallbackApplied = 'true';
    img.src = fallback;
  }, true);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearchModal();
      closeQuickView();
      closeWishlistDrawer();
      closeAuthModal();
      closeMobileMenu();
    }
  });

  const announcementClose = document.getElementById('close-announcement-btn');
  if (announcementClose) {
    announcementClose.addEventListener('click', () => {
      document.getElementById('top-announcement-bar').style.display = 'none';
    });
  }
}

function initHomeInteractions() {}
function initShopInteractions() {}
function initProductDetailInteractions() {}
function initCartInteractions() {}
function initCheckoutInteractions() {}
function initFAQInteractions() {}
function initContactInteractions() {}
function initAccountInteractions() {}

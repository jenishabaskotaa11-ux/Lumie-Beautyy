# LUMIÉ BEAUTY — Luxury Botanical Skincare & Haute Parfumerie

A fully functional, luxury botanical beauty e-commerce web application built entirely with **Vanilla HTML5, CSS3, and modern JavaScript (ES6+)**.

---

## ✦ Project Architecture & Structure

The project has been cleanly organized into the exact vanilla architecture:

```
├── index.html     # Semantic, accessible HTML structure and modal overlays
├── style.css      # Custom CSS design system, typography tokens, layouts, & animations
├── script.js     # State store, routing, product catalog data, cart, and UI events
├── readme.md      # Project documentation and guide
└── .gitignore     # Standard gitignore for static and web development
```

---

## ✦ Features & Interactions

1. **Brand Showcase & Curated Rituals**:
   - High-impact display typography (`Cormorant Garamond` & `Plus Jakarta Sans`).
   - Mountain Botanical philosophy highlighting wild Himalayan rosehips, sea buckthorn, and French lipid science.
   - Interactive category cards with direct catalog filtering.
   - Clinical efficacy stats and interactive FAQ accordion.

2. **Full Product Catalog & Filtering**:
   - Live search bar by ingredient, category, or product title.
   - Category filtering (All, Skincare, Serums, Fragrance).
   - Dynamic sorting (Featured, Price: Low to High, Price: High to Low, Highest Rated).
   - Product cards with quick size preview, heart wishlist toggle, and quick view popup.

3. **Rich Product Detail Pages**:
   - Volume and size variant selection (30ml, 50ml, 100ml) with dynamic price calculation.
   - Quantity stepper and instant cart notifications.
   - Full INCI ingredient deck breakdown and clinical texture notes.
   - Verified customer reviews and an interactive "Write a Review" form with star ratings.

4. **Cart & Multi-Step Checkout**:
   - Interactive free shipping progress tracker toward the NPR 10,000 complimentary threshold.
   - Promo coupon code verification (e.g. `LUMIE10` for 10% off, `GLOW20` for 20% off).
   - Multi-step checkout (Customer Recipient Info, Delivery Region selection, Nepal Shipping methods, and Payment gateways: eSewa, Khalti, COD, and Card).
   - Order Confirmation receipt with printable invoice (`window.print()`) and live delivery timeline.

5. **Modals & Drawers**:
   - Instant Search Modal with trending botanical tags and keyboard navigation (`Escape` key support).
   - Saved Rituals / Wishlist drawer.
   - Quick View popup with immediate Add to Bag.
   - Member Account & Auth Modal with order history persistence via `localStorage`.
   - Floating Toast notifications for user feedback.

---

## ✦ How to Run the Project

### Option 1: Live Preview with Vite / Node.js
```bash
npm run dev
```
The server will start at `http://localhost:3000`.

### Option 2: Any Static Web Server
Because this project uses pure vanilla HTML, CSS, and JavaScript, it can be served with any static web server:
```bash
# Using Python
python3 -m http.server 3000

# Using Node http-server or npx serve
npx serve .
```

Or simply open `index.html` in any modern web browser.

# Timbu Footwear — E-Commerce Platform

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Store-timbu--shop.vercel.app-10B981?style=for-the-badge&logo=vercel&logoColor=white)](https://timbu-shop-tau-two.vercel.app)
[![Figma](https://img.shields.io/badge/Figma-Design_Spec-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/design/O7ZwBUTiY5e2WivNeexIoR/Stage-2-Task?node-id=0-1&t=gUKyPxgcl5nDHzGb-1)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.5-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)](https://react-hook-form.com)

**[🛍️ Visit Live Store](https://timbu-shop-tau-two.vercel.app)** • **[🎨 View Figma Design](https://www.figma.com/design/O7ZwBUTiY5e2WivNeexIoR/Stage-2-Task?node-id=0-1&t=gUKyPxgcl5nDHzGb-1)**

**A modern, responsive e-commerce web application featuring dynamic product cataloging, context-driven cart state management, and schema-validated multi-step checkout.**

</div>

---

## Overview

**Timbu Footwear** is an e-commerce platform built to translate a multi-screen Figma design specification into a production-ready shopping application. It implements real-time cart manipulation, product filtering across premier footwear brands (Nike, Adidas, New Balance, Puma, Converse, Vans), and a multi-step checkout funnel with rigorous client-side form validation.

---

## Key Features

### 1. Product Discovery & Brand Navigation
- **Curated Collections**: Browse top-rated footwear, popular drops, and special discount deals.
- **Brand Showcases**: Interactive brand-filtering carousels highlighting major manufacturers (Nike, Adidas, New Balance, Converse, Puma, Vans, Reebok, Fila).
- **Responsive Navigation**: Desktop top-navigation bar paired with mobile slide-out drawer menus and integrated search.

### 2. Global Shopping Cart Architecture (`ShopContext`)
- **Centralized Cart State**: Implemented with React Context API (`ShopContext`) to manage item quantities, product variations, and selection state without prop-drilling.
- **Real-Time Financial Computation**: Automatically computes subtotal amounts, applies item-level discounts, and synchronizes badge counts on the global navbar cart icon.
- **Granular Cart Actions**: One-click quantity incrementing, decrementing, automated pruning of zero-quantity items, and item deletion.

### 3. Multi-Step Checkout & Validation (`react-hook-form` + `yup`)
- **Multi-Phase Funnel**: Clean checkout progression across Customer Info $\rightarrow$ Shipping Address $\rightarrow$ Payment Review $\rightarrow$ Order Confirmation.
- **Progress Tracking**: Dynamic step indicator (`ProgressBar`) reflecting current stage in the buying flow.
- **Strict Form Validation**: Employs `react-hook-form` integrated with `yup` schema resolvers to validate phone numbers, postal codes, and email formats with real-time error messages.

### 4. Pixel-Perfect Figma-to-Code Implementation
- **Design Fidelity**: Accurately recreated typography, spacing, SVG asset integration, and color palettes from the [Figma Stage 2 Specification](https://www.figma.com/design/O7ZwBUTiY5e2WivNeexIoR/Stage-2-Task?node-id=0-1&t=gUKyPxgcl5nDHzGb-1).
- **Responsive Layouts**: Utility-first styling via Tailwind CSS with custom scrollbar management (`tailwind-scrollbar-hide`) for seamless horizontal browsing.

---

## Route Overview

| Route | View | Description |
| :--- | :--- | :--- |
| `/` | Landing / Storefront | Brand showcase, popular collections, featured discounts, hero section |
| `/products` | Product Catalog | Comprehensive footwear listings with pricing, badges, and quick-add actions |
| `/cart` | Shopping Cart | Line-item order breakdown, quantity adjustment, subtotal computation |
| `/checkout` | Checkout Details | Shipping & delivery information form with Yup schema validation |
| `/payment` | Payment & Review | Final order confirmation, billing review, and payment processing step |

---

## Architecture

```
timbu-shop/
├── public/                     # Public static assets
├── src/
│   ├── assets/                 # Brand logos, product SVGs, iconography
│   ├── components/
│   │   ├── desktopHeader.jsx   # Top-tier desktop navigation & brand header
│   │   ├── navBar.jsx          # Category navigation links
│   │   ├── HeaderDrop.jsx      # Mobile drawer navigation
│   │   ├── MyCart.jsx          # Slide-out and inline cart row components
│   │   ├── MyOrder.jsx         # Order summary panel with subtotal math
│   │   ├── ProgressBar.jsx     # Visual checkout step indicator
│   │   ├── Deals.jsx           # Promotional discount sections
│   │   └── ProductImages.jsx   # Image gallery and card renderers
│   ├── context/
│   │   └── ShopContext.jsx     # Centralized cart state & subtotal math
│   ├── pages/
│   │   ├── landingPage.jsx     # Storefront homepage
│   │   ├── ProductPage.jsx     # Grid product catalog
│   │   ├── cartPage.jsx        # Shopping cart view
│   │   ├── CheckPage.jsx       # Customer shipping details form
│   │   ├── Payment.jsx         # Payment processing view
│   │   └── Steps.jsx           # Multi-step checkout layout wrapper
│   ├── Items.js                # Primary catalog data source
│   ├── Products.js             # Featured product catalog data
│   ├── App.jsx                 # Route configurations (React Router v6)
│   └── main.jsx                # Application root with ShopContextProvider
```

---

## Tech Stack

- **Framework / Runtime**: [React](https://react.dev/) 18.3 & [Vite](https://vitejs.dev/) 5.3
- **Routing**: [React Router DOM](https://reactrouter.com/) 6.24
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) 7.52 & [Yup](https://github.com/jquense/yup) 1.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.4 & `tailwind-scrollbar-hide`
- **Design Spec**: [Figma](https://www.figma.com/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/MUFTIATBAKARE/timbu-shop.git

# Navigate to project directory
cd timbu-shop

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to explore the store.

### Building for Production

```bash
npm run build
npm run preview
```

---

## License

This project is licensed under the MIT License.

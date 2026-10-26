# Coffee Bliss

A mobile-first coffee shop app based on the supplied Figma design. The app includes onboarding, coffee browsing and search, product details, cart/order, favorites, profile, and delivery tracking.

## Run locally

```sh
npm install
npm run dev
```

Use `npm run build` to create a production build and `npm run lint` to check the code.

## Project structure

- `public/images/` — supplied coffee and onboarding images.
- `src/components/` — shared navigation, search, category, coffee-card, and quantity components.
- `src/pages/` — onboarding, home, details, cart, favorites, profile, and delivery screens.
- `src/data/coffeeData.js` — coffee product data.
- `src/App.jsx` — screen state and navigation.

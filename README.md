# React JS Checkpoint

This is my first React project (Front End Development - React JS Fundamentals). It's a small landing page for a travel agency called TravelGo, built with React and react-bootstrap.

## What I did

- created the project with `npx create-react-app react-js-checkpoint`
- deleted everything in `src` except `index.js` and `reportWebVitals.js` (and removed the `index.css` import from `index.js`)
- installed react-bootstrap and bootstrap like in the "Get Started" page of the docs: `npm install react-bootstrap bootstrap`
- created `App.js` with the `App` component

## The App component

Everything is inside a React fragment (`<>...</>`), with a `div` that has the className `App`. Inside it, I used react-bootstrap components:

- a **Navbar** with the brand name and three links (Home, Destinations, Contact). On small screens the links go into a burger menu.
- a **heading** (`h1`) with a short text under it
- **3 Cards**, one for each destination (Paris, Marrakech and Tokyo), with the country, a description, a price and a "Book now" button. The destinations are in an array, and I use `map` to create the cards. They are placed in a `Row` with 3 `Col` so they stay side by side on a big screen and stack on mobile.

The Bootstrap CSS is imported in `App.js` with `import "bootstrap/dist/css/bootstrap.min.css"`.

## How to run it

```bash
npm install
npm start
```

Then open http://localhost:3000 in the browser.

# Dream Journal React App

This is a beginner-friendly React project built as part of a 3-hour workshop. The app allows users to jot down dreams or goals and fetch inspirational quotes using a free API.

---

## 🛠️ Getting Started from Scratch with Vite

### 1. Create a Vite + React Project
```bash
npm create vite@latest dream-journal-app --template react
cd dream-journal-app
npm install
```

### 2. Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss

```

Update or create your `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create postcss.config.js
```js

export default {
  plugins: [
    tailwindcss(),
    autoprefixer()
  ]
}
```

In `src/index.css`, add:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import it in `main.jsx`:
```js
import './index.css';
```

---

## 💡 Key Features
- Add dreams/goals via an input field
- View a list of all submitted dreams
- Fetch inspirational quotes using the [Advice Slip API](https://api.adviceslip.com)

---

## 🚀 Run the App
```bash
npm run dev
```

---

## 🌈 Styling
The app uses **Tailwind CSS** to create a friendly, colorful interface. You can personalize colors and fonts further in `tailwind.config.js` or by editing the component styles.

---

## 🧠 Concepts Covered
- React Components
- `useState` and `useEffect`
- Props and event handling
- API Fetching
- Tailwind CSS

---

Happy coding! 💖

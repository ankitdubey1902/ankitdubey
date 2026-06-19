# React Portfolio App

A modern portfolio web application built with React, React Router, Shadcn/ui components, and Tailwind CSS.

## Features

- ✨ Modern, responsive design with Tailwind CSS
- 🎨 Light/Dark theme toggle with persistence
- 🧭 Client-side routing with React Router DOM
- ⚡ Fast development with Vite
- 🎯 TypeScript support
- 📦 Component-based architecture

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

The app will automatically open at [http://localhost:5173](http://localhost:5173)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/
│   └── Navbar.jsx          # Navigation bar with theme toggle
├── pages/
│   ├── Home.jsx            # Home page
│   ├── About.jsx           # About page
│   ├── Projects.jsx        # Projects showcase
│   └── Contact.jsx         # Contact form
├── lib/
│   └── utils.js            # Utility functions
├── App.jsx                 # Main app with routing
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## Pages

- **Home** - Hero section with call-to-action buttons
- **About** - Personal information, skills, and experience
- **Projects** - Portfolio of completed projects
- **Contact** - Contact form for getting in touch

## Customization

### Themes

Edit `tailwind.config.js` to customize colors and styling.

### Navigation Links

Modify the navbar links in `src/components/Navbar.jsx`

### Content

Update page content in the corresponding files in `src/pages/`

## Technologies Used

- React 18
- React Router DOM
- Vite
- Tailwind CSS
- PostCSS
- TypeScript (tsconfig)

## License

MIT

# React Product Catalog

A React 19 application built with TypeScript and Webpack, without using Create React App, Vite, or Next.js.

## Prerequisites

- Node.js >= 25.0.0
- npm (comes with Node.js)

## Tech Stack

- **React** 19.2.3
- **TypeScript** 4.x
- **Webpack** 5 (bundler)
- **Prettier** (code formatting)

## Project Setup

This project uses a manual Webpack configuration for full control over the build process.

### Installation

```bash
npm install
```

### Development

Start the development server with hot reload:

```bash
npm start
```

The app will open automatically at [http://localhost:3000](http://localhost:3000)

### Production Build

Create an optimized production bundle:

```bash
npm run build
```

Output will be in the `dist/` directory.

### Code Formatting

Format all source files:

```bash
npm run format
```

Check formatting without making changes:

```bash
npm run format:check
```

## Project Structure

```
react_product_catalog/
├── src/                    # Source files
│   ├── index.tsx          # Entry point
│   ├── App.tsx            # Main App component
│   └── index.css          # Global styles
├── public/                # Static files
│   └── index.html         # HTML template
├── dist/                  # Build output (generated)
├── webpack.config.js      # Webpack configuration
├── tsconfig.json          # TypeScript configuration
├── .prettierrc            # Prettier configuration
└── package.json           # Dependencies and scripts

```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Node Version Management

This project enforces Node.js >= 25.0.0. If using nvm:

```bash
nvm install 25
nvm use 25
```

## License

ISC

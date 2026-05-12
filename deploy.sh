#!/bin/bash

# GitHub Pages deployment script for Vite + React app

echo "🔨 Building the project..."
pnpm build

echo "📦 Build complete! The dist folder contains your deployable site."
echo ""
echo "📋 Next steps to deploy to GitHub Pages:"
echo ""
echo "Option 1 (Recommended): Deploy using gh-pages branch"
echo "  1. Install gh-pages: npm install -g gh-pages"
echo "  2. Run: gh-pages -d dist"
echo "  3. GitHub Pages will automatically serve from the gh-pages branch"
echo ""
echo "Option 2: Commit dist folder to main branch"
echo "  1. Remove 'dist' from .gitignore (if present)"
echo "  2. git add dist"
echo "  3. git commit -m 'Add build output for GitHub Pages'"
echo "  4. git push"
echo "  5. In GitHub repo settings → Pages → set Source to 'main' and folder to '/dist'"
echo ""

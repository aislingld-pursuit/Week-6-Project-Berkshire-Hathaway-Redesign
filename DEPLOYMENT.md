# Deploying to GitHub Pages

Your site is blank because GitHub Pages needs the **built/compiled version** of your React app, not the source code.

## Quick Fix

### Step 1: Build the project
```bash
pnpm install  # Make sure dependencies are installed
pnpm build    # This creates the dist folder with compiled files
```

### Step 2: Deploy to GitHub Pages

**Option A: Using gh-pages package (Recommended)**
```bash
# Install gh-pages globally or as dev dependency
npm install -g gh-pages

# Deploy the dist folder to gh-pages branch
gh-pages -d dist
```

GitHub will automatically detect the gh-pages branch and serve your site from it.

**Option B: Manual deployment**
1. Check if `dist` is in your `.gitignore` - if so, remove that line
2. Commit the dist folder:
   ```bash
   git add dist
   git commit -m "Add build output for GitHub Pages"
   git push
   ```
3. Go to your GitHub repository settings
4. Click "Pages" in the sidebar
5. Under "Source", select "Deploy from a branch"
6. Select "main" branch and "/dist" folder
7. Click "Save"

### Step 3: Wait and refresh

GitHub Pages takes 1-2 minutes to rebuild after changes. Once done, your site will appear at:
`https://aslingkl-pursuit.github.io/Week-6-Project-Berkshire-Hathaway-Redesign/`

## What Changed

I updated `vite.config.ts` to include:
```typescript
base: '/Week-6-Project-Berkshire-Hathaway-Redesign/'
```

This tells Vite that your app won't be served from the root domain, but from a subdirectory matching your repository name. Without this, all your CSS, JS, and asset links would be broken.

## Testing Locally

To test the built version locally before deploying:
```bash
pnpm build
npx serve dist
```

Then open the URL it provides (usually `http://localhost:3000`).

## Troubleshooting

**Still seeing a blank page?**
- Check browser console (F12) for errors
- Verify GitHub Pages is set to serve from the correct branch/folder
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a full 5 minutes for GitHub's CDN to update

**404 errors on navigation?**
- This is a single-page app (SPA) routing issue
- GitHub Pages doesn't handle client-side routing by default
- Solution: Create a `404.html` in your dist folder that redirects to `index.html`
  (I can add this if needed)

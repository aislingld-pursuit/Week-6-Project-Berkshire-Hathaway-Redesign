# GitHub Pages Deployment Instructions

## ✅ Good News: Your site is now built!

The `dist` folder contains your fully compiled website. Now we need to get it onto GitHub.

## Step-by-Step Deployment

### Option 1: Push Everything to GitHub (Recommended)

**Step 1: Initialize Git (if not already done)**
```bash
cd /workspaces/default/code
git init
git add .
git commit -m "Initial commit: Berkshire Hathaway redesign"
```

**Step 2: Connect to your GitHub repository**
```bash
git remote add origin https://github.com/aslingkl-pursuit/Week-6-Project-Berkshire-Hathaway-Redesign.git
git branch -M main
git push -u origin main
```

**Step 3: Deploy to GitHub Pages**
```bash
pnpm dlx gh-pages -d dist
```

This creates a `gh-pages` branch with just the dist folder. GitHub will automatically serve from it.

---

### Option 2: Manual Upload via GitHub Website

**Step 1: Download the dist folder**
The dist folder is at: `/workspaces/default/code/dist`

**Step 2: Go to your GitHub repository**
https://github.com/aslingkl-pursuit/Week-6-Project-Berkshire-Hathaway-Redesign

**Step 3: Upload files**
1. Click "Add file" → "Upload files"
2. Drag the contents of the `dist` folder (NOT the dist folder itself, just what's inside)
3. Commit the changes

**Step 4: Configure GitHub Pages**
1. Go to Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: "main" 
4. Folder: "/" (root)
5. Save

---

### Option 3: Using GitHub Desktop (Easiest for beginners)

1. Download GitHub Desktop: https://desktop.github.com/
2. Clone your repository: File → Clone Repository
3. Copy ALL files from `/workspaces/default/code` into the cloned folder
4. Commit in GitHub Desktop
5. Push to origin
6. Then go to Settings → Pages and configure as above

---

## What's Already Done

✅ Created `index.html` entry file  
✅ Created `src/main.tsx` React entry point  
✅ Configured `vite.config.ts` with correct base path  
✅ Built production files in `dist` folder

## What Happens After Deployment

Once pushed and configured:
1. GitHub Pages takes 1-2 minutes to build
2. Your site appears at: https://aslingkl-pursuit.github.io/Week-6-Project-Berkshire-Hathaway-Redesign/
3. Any future changes: run `pnpm build` then push

## Testing the Build Locally

Before deploying, test it works:
```bash
cd /workspaces/default/code
pnpm dlx serve dist
```

Then open the URL it shows (usually http://localhost:3000).

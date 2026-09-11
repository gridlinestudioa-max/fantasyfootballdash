# Deploy to GitHub Pages

Static site, no build step.

## Files the site needs
- index.html — the app (generated copy of "Fantasy Football HQ - Prototype.dc.html")
- support.js
- _ds/ — design system tokens + styles

## First push
```sh
git init
git remote add origin https://github.com/gridlinestudioa-max/fantasyfootballdash.git
git add index.html support.js _ds "Fantasy Football HQ - Prototype.dc.html"
git commit -m "Fantasy Football HQ — live sheet feed"
git branch -M main
git push -u origin main
```

Then: repo Settings > Pages > Source: "Deploy from a branch" > main / root. Live at
https://gridlinestudioa-max.github.io/fantasyfootballdash/

## Updating
- Sheet data changes: nothing to do. The page fetches the CSVs on every load.
- Design changes: regenerate index.html from the .dc.html and push again.

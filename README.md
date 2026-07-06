# Janice Gao — Portfolio

A clean, single-page scrolling portfolio. Plain HTML, CSS and a little vanilla JS — no build step, no dependencies.

## Structure
```
index.html          markup — one page, stacked sections (#home, #about, #portfolio, #contact)
css/style.css       design system + layout
js/main.js          mobile menu + scroll-spy (highlights the active nav tab)
assets/images/      photography, headshot, JG monogram
```

## How it works
- **One-page scroll:** the nav tabs (About / Portfolio / Contact) are anchor links that smooth-scroll to each section; `scroll-margin-top` keeps them clear of the fixed nav.
- **Scroll-spy:** an IntersectionObserver adds `.active` to the tab for whichever section is in view.
- **Design:** Inter typeface, white background, `#0071e3` accent (used to highlight the portfolio stat callouts). All colors/spacing are CSS custom properties in `:root`.

## Run locally
Open `index.html` in a browser, or serve the folder:
```
http-server -p 8000 -c-1        # or:  python3 -m http.server 8000
```

## Deploy
Fully static — drag the folder onto Netlify, push to GitHub Pages, or upload to any host (replaces the current janicegao.com site).

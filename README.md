# NexGen Prints

A responsive, single-page marketing website for NexGen Prints. The site presents the company’s printing services, founders, sample portfolio, contact details, and direct order options through WhatsApp and email.

## Technologies

- Semantic HTML5
- Modern responsive CSS
- Vanilla JavaScript
- Native HTML dialog for the portfolio lightbox
- Netlify static hosting

## Project Structure

```text
.
├── index.html   # Page content and semantic structure
├── style.css    # Visual system, layout, motion, and responsive breakpoints
└── script.js    # Mobile navigation, scroll states, reveals, and lightbox behavior
```

## Run Locally

No dependency installation or build step is required. Serve the project directory with any static web server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Customization

- Replace the founder placeholders in `index.html` with real image elements when photos are available.
- Replace the CSS-generated portfolio placeholders with finished project imagery and updated captions.
- Update the social profile URLs if the final public account paths differ from `nexgenprints`.

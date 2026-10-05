# Ujjwal Sharma | Personal Portfolio

A responsive, dark-themed personal portfolio website built with plain HTML, CSS and JavaScript. No frameworks, no build step.

## Features

- Dark mode by default with an emerald accent color and Inter typography
- Animated network-style hero background that reacts to the cursor
- Typing effect that cycles through current learning interests
- Sections: Hero, About, Education, Skills, Contact
- Skill progress bars that fill as you scroll to them
- Hover effects on buttons and skill tags
- Fully responsive from mobile to desktop
- Keyboard focus styles and reduced-motion support

## Project structure

```
.
├── portfolio.html   # The whole site: markup, styles and scripts
└── README.md
```

Rename `portfolio.html` to `index.html` if you want to host it on GitHub Pages.

## Run locally

Open `portfolio.html` in any modern browser. Or serve it with a local server:

```bash
# Python
python -m http.server 8000
# then visit http://localhost:8000/portfolio.html
```

## Customize

| What to change | Where |
| --- | --- |
| Email, GitHub and LinkedIn links | The `#contact` section (`href` attributes) |
| Skill percentages | `data-w` value and label in each `.bar` in `#skills` |
| Skill tags | The `.tag` elements in `#skills` |
| Typing line words | The `words` array in the script |
| Accent color and theme | CSS variables in `:root` (for example `--accent`) |

## Deploy on GitHub Pages

1. Create a new repository and add `index.html` (the renamed `portfolio.html`) and this README.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder, then save.
4. Your site will be live at `https://<your-username>.github.io/<repository-name>/` after a minute or two.

## Tech used

- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (Canvas API, IntersectionObserver)
- Google Fonts (Inter)

## Contact

- Email: your.email@example.com
- GitHub: https://github.com/your-username
- LinkedIn: https://www.linkedin.com/in/your-username

&copy; Ujjwal Sharma

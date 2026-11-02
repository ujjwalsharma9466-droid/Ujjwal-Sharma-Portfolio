# Ujjwal Sharma | Portfolio

A minimal personal portfolio website with a built-in chatbot assistant and a WhatsApp chat button. Built with plain HTML, CSS and JavaScript, so there is nothing to install.

Design inspiration: [anuptiwari.me](http://www.anuptiwari.me/)

## Features

- Clean intro section: portrait, name, role, tagline and contact buttons
- About, Skills, Education and Connect sections
- **Chatbot assistant** ("Ask my AI") that answers questions about Ujjwal: skills, education, hobbies, hackathons and contact details
- **WhatsApp button** that opens a chat with a pre-filled message
- Light and dark mode (follows the device setting)
- Responsive layout for phones, tablets and desktops
- Keyboard-friendly, with visible focus styles and reduced-motion support

## Project structure

```
portfolio/
├── index.html   # Page structure and content
├── style.css    # Colours, layout and responsive styles
├── script.js    # Chatbot logic and knowledge base
├── photo.jpg    # Portrait shown in the intro
└── README.md
```

Keep all files in the same folder so the links work.

## Run locally

1. Download the folder.
2. Double-click `index.html` to open it in your browser.

Optional, to serve it locally:

```bash
npx serve .
# or
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Customise

**Change contact details**
Search for `7452046844`, `ujjwalsharma9466@gmail.com` and `abhieie.06` in `index.html` and `script.js`, and replace them.

**Change what the chatbot knows**
Open `script.js` and edit the `KB` list at the top. Each entry has:

- `k`: keywords that trigger the answer
- `a`: the reply (HTML links are allowed)

```js
{k:['project','built'], a:'Ujjwal built ...'}
```

**Change colours**
At the top of `style.css`, edit the variables in `:root` (`--bg`, `--ink`, `--acc` and so on). Dark mode colours are in the `prefers-color-scheme: dark` block just below.

**Change the photo**
Replace `photo.jpg` with another square-ish image of the same name.

**Add a Projects section**
Copy one of the `.item` blocks inside a `<section>` in `index.html`, then add your project name, description and links.

## Deploy

Any static host works:

- **GitHub Pages:** push the folder to a repo, then Settings → Pages → select the main branch.
- **Netlify:** drag and drop the folder at app.netlify.com/drop.
- **Vercel:** import the repo, no build settings needed.

## Contact

- WhatsApp: [7452046844](https://wa.me/917452046844)
- Email: [ujjwalsharma9466@gmail.com](mailto:ujjwalsharma9466@gmail.com)
- Instagram: [@abhieie.06](https://www.instagram.com/abhieie.06)

## About

Ujjwal Sharma is a first-year B.Tech student in Artificial Intelligence & Machine Learning at KIET Group of Institutions (Deemed to be University). He works with JavaScript, HTML, CSS, Node.js, Python and C++, and specialises in frontend and backend web development, web app dashboards and debugging.

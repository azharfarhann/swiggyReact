# swiggyReact
swiggyReact
A restaurant listing UI built in React and styled with Tailwind CSS. It grabs mock Swiggy-style data, shows cards for each restaurant, and uses React hooks (useState) to let you sort by cost or rating, filter top-rated spots, and reset back to the full list—all without refreshing the page.

Highlights

Sort low→high or high→low by cost

Filter by average rating thresholds (4+, 3.5+, etc.)

Clean, responsive card grid with Tailwind utility classes

Tech Stack
React · React Hooks · Tailwind CSS · Mock JSON data

Getting Started
Clone the repo, run npm install, then npm run dev.click the sort/filter buttons above, and watch the list rearrange itself.

├── README.md
└── client
    ├── .gitignore
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
        └── vite.svg
    ├── src
        ├── App.css
        ├── App.jsx
        ├── assets
        │   ├── Image20250623141459.png
        │   ├── download (1).jpg
        │   └── download.jpg
        ├── components
        │   ├── Card.css
        │   ├── Card.jsx
        │   ├── Header.css
        │   └── Header.jsx
        ├── index.css
        ├── intro.txt
        ├── main.jsx
        ├── pages
        │   ├── About.jsx
        │   ├── Contact.jsx
        │   ├── Home.css
        │   ├── Home.jsx
        │   └── Home2.jsx
        └── utils
        │   └── mockData.js
    └── vite.config.js


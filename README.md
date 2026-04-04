# Jeyesh Karthik — Portfolio

[![Live](https://img.shields.io/badge/jeyesh-portfolio.netlify.app/-black?style=flat-square)](https://jeyesh-portfolio.netlify.app/)
[![React](https://img.shields.io/badge/React-19-black?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-black?style=flat-square&logo=vite)](https://vite.dev)
[![Docker](https://img.shields.io/badge/Docker-black?style=flat-square&logo=docker)](https://docker.com)

A minimal, dark-themed personal portfolio built with React and Vite. Sections cover About, Skills, Projects, and Contact. Containerized with Docker and deployed on Netlify.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 + Vite 8 |
| Styling | Tailwind CSS v4 |
| Containerization | Docker + Nginx |
| Deployment | Netlify |
| Version Control | GitHub |

---

## Run Locally

```bash
git clone https://github.com/jeyeshkarthik/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Open `http://localhost:5173`

---

## Docker

**Build and run:**

```bash
docker build -t portfolio:v1 .
docker run -d -p 8081:80 portfolio:v1
```

Open `http://localhost:8081`

**To update after making changes:**

```bash
docker build -t portfolio:v2 .
docker run -d -p 8081:80 portfolio:v2
```

---

## Deployment

**Netlify (manual):**

```bash
npm run build
```

Upload the `dist/` folder to Netlify, or connect the GitHub repo for automatic deploys on push.

---

## Contact

Jeyesh Karthik — CSE Core, VIT Chennai

[jeyesh5karthik@gmail.com](mailto:jeyesh5karthik@gmail.com) · [LinkedIn](https://www.linkedin.com/in/jeyeshkarthik/) · [GitHub](https://github.com/jeyeshkarthik)

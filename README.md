# Jeyesh Karthik | Personal Portfolio

A sleek, minimalistic, dark-themed personal developer portfolio built to showcase my projects, skills, and professional journey. Crafted with a focus on high performance, modern aesthetics, and smooth user experience.

[![Live Site](https://img.shields.io/badge/Live_Site-000000?style=for-the-badge&logo=netlify&logoColor=white)](https://jeyesh-portfolio.netlify.app/)
[![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_8-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vite.dev/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](./LICENSE)

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🐳 Docker Support](#-docker-support)
- [📂 Project Structure](#-project-structure)
- [🌐 Deployment](#-deployment)
- [📞 Contact](#-contact)
- [📜 License](#-license)

---

## ✨ Features

- **Sleek Dark Theme:** A cohesive and modern visual aesthetic designed for visual clarity and impact.
- **Dynamic Project Routing:** Individual detail pages for all featured projects, complete with architecture descriptions and GitHub repository links.
- **Fully Responsive:** Adaptive layouts optimized for mobile, tablet, and desktop devices to ensure a seamless experience everywhere.
- **Lighting Fast:** Leverages Vite and React 19 for instantaneous hot module replacement and extremely fast load times.
- **Production Containerized:** Complete Docker & Nginx setup out of the box for consistent enterprise deployment.

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Frontend Setup** | [React 19](https://react.dev) |
| **Build & Tooling** | [Vite 8](https://vite.dev) |
| **CSS Framework** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Containerization** | [Docker](https://www.docker.com/) & [Nginx](https://www.nginx.com/) |
| **Cloud Target** | [Netlify](https://www.netlify.com/) |

---

## 🚀 Getting Started

Follow these steps to run the portfolio seamlessly on your local machine.

### Prerequisites

Please ensure you have the following installed:
- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jeyeshkarthik/my-portfolio.git
   cd my-portfolio
   ```

2. **Install project dependencies**
   ```bash
   npm install
   ```

3. **Spin up the development server**
   ```bash
   npm run dev
   ```

4. **View locally**
   Open your preferred browser to `http://localhost:5173`

---

## 🐳 Docker Support

The application is completely Dockerized using a multi-stage `Dockerfile`. It builds the React application and serves the static files using a lightweight Nginx web server.

### Local Container Run

1. **Build the container image:**
   ```bash
   docker build -t my-portfolio:latest .
   ```

2. **Run the image as a containerized service:**
   ```bash
   docker run -d -p 8080:80 --name portfolio-app my-portfolio:latest
   ```

3. **Verify:**
   Navigate to `http://localhost:8080` in your web browser.

### Updating Changes via Docker

When iterating or changing the code, remove the old instance and spin up a new one:

```bash
docker stop portfolio-app
docker rm portfolio-app
docker build -t my-portfolio:latest .
docker run -d -p 8080:80 --name portfolio-app my-portfolio:latest
```

---

## 📂 Project Structure

```text
my-portfolio/
├── public/               # Static assets directly served
├── src/                  # Application source code
│   ├── components/       # Reusable React UI components
│   ├── pages/            # Page templates (Home, About, Projects)
│   ├── App.jsx           # Master application layout & client routing
│   └── index.css         # Global styles and Tailwind utility injections
├── .gitignore            # Excluded version control tracking
├── Dockerfile            # Container definition and deployment stages
├── package.json          # Node dependency configurations
└── vite.config.js        # Vite runtime options
```

---

## 🌐 Deployment

The site is actively deployed using **Netlify**.

### How to Manually Deploy

1. Compile the production bundled application:
   ```bash
   npm run build
   ```
2. A new `dist/` directory will be generated. Upload this entire folder directory to the classic Netlify Drop menu to update the site manually.

### Implementing Automatic Deploys
For zero-touch deployments, link your Netlify project directly to this GitHub repository. Upon doing this, any pushes merged to the `main` branch will automatically build and publish instantly.

---

## 📞 Contact

**Jeyesh Karthik** — Computer Science Engineering, VIT Chennai

Passionate about robust backend systems, sleek frontend interfaces, and continuous technical learning.

- 📧 **Email:** [jeyesh5karthik@gmail.com](mailto:jeyesh5karthik@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/jeyeshkarthik](https://www.linkedin.com/in/jeyeshkarthik/)
- 💻 **GitHub:** [github.com/jeyeshkarthik](https://github.com/jeyeshkarthik)

---

## 📜 License

This project is protected and licensed under the **MIT License**. Check out the [LICENSE](./LICENSE) reference file for formal details.

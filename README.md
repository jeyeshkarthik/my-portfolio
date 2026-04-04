<div align="center">
  <h1>Jeyesh Karthik | Personal Portfolio</h1>
  
  <p>
    A minimal, dark-themed personal developer portfolio highlighting my skills, projects, and professional background. Designed with a focus on performance, aesthetics, and user experience.
  </p>

  <div>
    <a href="https://jeyesh-portfolio.netlify.app/">
      <img src="https://img.shields.io/badge/Live_Site-000000?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo" />
    </a>
    <a href="https://react.dev/">
      <img src="https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
    </a>
    <a href="https://vite.dev/">
      <img src="https://img.shields.io/badge/Vite_8-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    </a>
    <a href="https://docker.com/">
      <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
    </a>
    <a href="./LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="MIT License" />
    </a>
  </div>
</div>

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Installation](#local-installation)
- [Docker Support](#-docker-support)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Contact](#-contact)
- [License](#-license)

---

## ✨ Features

- **Sleek Dark Theme:** A visually cohesive and modern aesthetic crafted for optimal readability and design.
- **Dynamic Routing:** Individual project detail pages featuring GitHub repository links and comprehensive descriptions.
- **Responsive Design:** Fully responsive layout that looks great on mobile, tablet, and desktop devices.
- **Performance Optimized:** Fast load times utilizing Vite's build tools and React 19 optimizations.
- **Production Ready:** Pre-configured Docker setup and simple Netlify deployment process.

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Frontend Framework** | [React 19](https://react.dev) |
| **Build Tool** | [Vite 8](https://vite.dev) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Routing** | [React Router v7](https://reactrouter.com/) |
| **Containerization** | [Docker](https://www.docker.com/) & [Nginx](https://www.nginx.com/) |
| **Deployment** | [Netlify](https://www.netlify.com/) |

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

You will need the following installed on your system:
- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js) or **yarn** / **pnpm**
- **Git**

### Local Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jeyeshkarthik/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View the application**
   Open your browser and navigate to `http://localhost:5173`

---

## 🐳 Docker Support

The application is fully containerized using a multi-stage Docker build utilizing Nginx to serve the static frontend files.

### Build & Run the Container

1. **Build the image:**
   ```bash
   docker build -t my-portfolio:latest .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 8080:80 --name portfolio-app my-portfolio:latest
   ```

3. **View the app:**
   Navigate to `http://localhost:8080`

### Updating Docker Changes

When you make changes to the code, simply remove the old container and rebuild:

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
├── public/               # Static assets (images, icons)
├── src/                  # Application source code
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page templates (Home, About, Projects, etc.)
│   ├── App.jsx           # Main React component & Routing
│   └── index.css         # Global Tailwind CSS configurations
├── .gitignore            # Git ignored files
├── Dockerfile            # Multi-stage Docker configuration
├── package.json          # Dependency management & scripts
└── vite.config.js        # Vite configurations
```

---

## 🌐 Deployment

This application is currently deployed on **Netlify**.

### Manual Deployment

1. Create a production build:
   ```bash
   npm run build
   ```
2. Upload the newly generated `dist/` folder directly to the Netlify Drop interface.

### Continuous Deployment
For automatic deployments, connect your GitHub repository to your Netlify account. Netlify will automatically build and deploy the `main` branch whenever new commits are pushed.

---

## 📞 Contact

**Jeyesh Karthik** — Computer Science Engineering, VIT Chennai

Building modern web experiences and continually learning.

- 📧 **Email:** [jeyesh5karthik@gmail.com](mailto:jeyesh5karthik@gmail.com)
- 💼 **LinkedIn:** [linkedin.com/in/jeyeshkarthik](https://www.linkedin.com/in/jeyeshkarthik/)
- 💻 **GitHub:** [github.com/jeyeshkarthik](https://github.com/jeyeshkarthik)

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

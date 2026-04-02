# Jeyesh Karthik - Portfolio Website
 **GitHub:** https://github.com/jeyeshkarthik/my-portfolio  
 **Netlify:** https://gilded-kelpie-4d281a.netlify.app/

A minimal and professional **portfolio website** built using **React, Tailwind CSS, Docker, and Netlify**.  
This project showcases my profile, technical skills, projects, and contact information in a clean and responsive web interface.

---

## Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **Containerization:** Docker
- **Version Control:** GitHub
- **Deployment:** Netlify
- **Container Registry:** Docker Hub

---

## Features

- Responsive portfolio layout
- Home, About, Skills, Projects, and Contact sections
- Minimal professional design
- Dockerized deployment
- Easy future updates using versioned Docker images
- Public deployment via Netlify

---

## Run Locally

```bash
git clone https://github.com/jeyeshkarthik/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Docker Usage

This project is fully containerized using Docker.

### Build Image

```bash
docker build -t portfolio:v1 .
```

### Run Container

```bash
docker run -d -p 8081:80 portfolio:v1
```

Open:

```text
http://localhost:8081
```

### Future Updates

After making changes in the source code:

```bash
docker build -t portfolio:v2 .
docker run -d -p 8081:80 portfolio:v2
```

This allows future updates through the **source Dockerfile**, satisfying the project requirement.

---

## Deployment

For Netlify:

```bash
npm run build
```

Upload the `dist` folder to Netlify.

---

## Contact

**Jeyesh Karthik**  
CSE Core, VIT Chennai  

📧 jeyesh5karthik@gmail.com  
🔗 LinkedIn: https://www.linkedin.com/in/jeyeshkarthik/  
💻 GitHub: https://github.com/jeyeshkarthik

export default function Portfolio() {
  const skills = {
    languages: ['Python', 'Java', 'C', 'C++'],
    web: ['HTML5', 'CSS', 'JavaScript', 'React'],
    data: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    database: ['SQLPlus', 'Schema Design', 'Query Optimization'],
    concepts: ['Data Structures & Algorithms', 'Exploratory Data Analysis']
  };

  const projects = [
    'University Interaction System',
    'Metro Ticket Booking System',
    'Data Analysis Projects',
    'IoT Smart Home Privacy Research'
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="sticky top-0 bg-white/90 backdrop-blur border-b px-8 py-4 flex justify-between">
        <h1 className="font-bold text-xl">Jeyesh Karthik</h1>
        <div className="space-x-6 text-sm">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="px-8 py-24 text-center">
        <h2 className="text-5xl font-bold mb-4">Jeyesh Karthik</h2>
        <p className="text-xl text-gray-600">CSE Core Student • VIT Chennai • 2nd Year</p>
        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-700">
          Passionate student developer focused on software engineering, data analysis, and full-stack web development.
          I enjoy playing the keyboard, football, driving, and constantly expanding my technical knowledge through hands-on projects and research.
        </p>
      </section>

      <section id="about" className="px-8 py-16 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">About Me</h3>
        <p className="text-lg leading-8 text-gray-700">
          I am a Computer Science student at VIT Chennai with strong interest in software development,
          problem solving, data analytics, and research-driven technology solutions. I enjoy building practical systems
          that solve real-world problems, from university communication platforms to metro booking systems.
          My goal is to continuously upskill myself and grow into a versatile software engineer.
        </p>
      </section>

      <section id="skills" className="px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-semibold mb-8">Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([key, vals]) => (
              <div key={key} className="p-6 rounded-2xl shadow-sm border bg-white">
                <h4 className="font-semibold capitalize mb-3">{key}</h4>
                <div className="flex flex-wrap gap-2">
                  {vals.map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full border text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="px-8 py-16 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-8">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project} className="p-6 rounded-2xl border shadow-sm">
              <h4 className="font-semibold text-lg">{project}</h4>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Contact</h3>
          <p>Email: jeyesh5karthik@gmail.com</p>
          <p>LinkedIn: https://www.linkedin.com/in/jeyeshkarthik/</p>
          <p>GitHub: https://github.com/jeyeshkarthik</p>
        </div>
      </section>
    </div>
  );
}

/* Dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
*/

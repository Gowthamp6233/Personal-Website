export const projects = [
  {
    id: 4,
    title: "Chithara Mahal — Wedding Hall Marketing Website",
    description: "Designed and built a full production marketing website for a wedding hall business in Dindigul. Built with React, Vite, and Tailwind CSS on the frontend and Express.js with MongoDB on the backend. Implemented scroll-triggered animations and a streamlined lead-capture form to convert visitors into inquiries.",
    techStack: ["React", "Vite", "Tailwind CSS", "Express.js", "MongoDB"],
    role: "Full-Stack Developer | Freelance Client Project",
    placeholder: "💍",
    repoUrl: "https://github.com/Gowthamp6233/sithara-mahal/tree/main"
  },
  {
    id: 5,
    title: "DMS Hospital — Website Redesign (Concept)",
    description: "Built a modern, clean hospital website demo modeled after industry-leading healthcare sites, as a direct pitch to a prospective client in Batlagundu. Focused on a professional white-and-blue design system suited for a healthcare audience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    role: "Freelance Outreach Project",
    placeholder: "🏥"
  },
  {
    id: 1,
    title: "To-Do List Application",
    description: "Built a desktop To-Do List app using Java and JavaFX. Integrated PostgreSQL database for persistent task storage. Features include task reminders, sorting, drag-and-drop, and enhanced UI/UX.",
    techStack: ["Java", "JavaFX", "PostgreSQL", "OOP"],
    duration: "2 months",
    role: "Full-Stack Developer",
    image: "/todo-app.jpg",
    placeholder: "📋",
    repoUrl: "https://github.com/GOWTHAM6233/To-Do-List"
  },
  {
    id: 2,
    title: "Temperature Calculation & Weather Forecasting",
    description: "Developed a web-based temperature calculator with real-time weather data. Used JavaScript to fetch and display live weather info. Designed an intuitive and responsive user interface.",
    techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
    duration: "1 month",
    role: "Frontend Developer",
    image: "/weather-app.jpg",
    placeholder: "🌤️",
    repoUrl: "https://github.com/GOWTHAM6233/Temperature-Converter"
  },
  {
    id: 3,
    title: "Human Violence Detection",
    description: "Created a violence detection system using YOLOv8 & Inception-v3. Trained models on surveillance datasets for real-time detection. FastAPI backend for video analysis in security and monitoring.",
    techStack: ["YOLOv8", "Inception-v3", "FastAPI", "Python", "AI/ML"],
    duration: "3 months",
    role: "AI/ML Developer",
    image: "/violence-detection.jpg",
    placeholder: "🔒"
  }
];

export const projectDetails = {
  4: {
    title: "Chithara Mahal — Wedding Hall Marketing Website",
    repoUrl: "https://github.com/Gowthamp6233/sithara-mahal/tree/main",
    overview: "Designed and built a full production marketing website for a wedding hall business in Dindigul. Built with React, Vite, and Tailwind CSS on the frontend and Express.js with MongoDB on the backend. Implemented scroll-triggered animations and a streamlined lead-capture form to convert visitors into inquiries.",
    techStack: ["React", "Vite", "Tailwind CSS", "Express.js", "MongoDB"],
    features: [
      "Production marketing website",
      "Scroll-triggered animations",
      "Streamlined lead-capture form",
      "Full-stack MERN implementation",
      "Responsive design with Tailwind CSS"
    ],
    role: "Full-Stack Developer | Freelance Client Project"
  },
  5: {
    title: "DMS Hospital — Website Redesign (Concept)",
    overview: "Built a modern, clean hospital website demo modeled after industry-leading healthcare sites, as a direct pitch to a prospective client in Batlagundu. Focused on a professional white-and-blue design system suited for a healthcare audience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    features: [
      "Modern, clean healthcare design",
      "Professional white-and-blue design system",
      "Optimized for prospective client pitch"
    ],
    role: "Freelance Outreach Project"
  },
  1: {
    title: "To-Do List Application",
    repoUrl: "https://github.com/GOWTHAM6233/To-Do-List",
    overview: "A comprehensive desktop To-Do List application built with Java and JavaFX, featuring a modern user interface and robust database integration. The application provides users with an intuitive way to manage their daily tasks with advanced features like reminders, sorting, and drag-and-drop functionality.",
    techStack: ["Java", "JavaFX", "PostgreSQL", "OOP", "CRUD Operations"],
    features: [
      "Task creation, editing, and deletion",
      "PostgreSQL database for persistent storage",
      "Task reminders and notifications",
      "Drag-and-drop task reordering",
      "Advanced sorting and filtering",
      "Enhanced UI/UX with modern design"
    ],
    challenges: "Implementing real-time database synchronization and creating an intuitive drag-and-drop interface for task management.",
    solutions: "Used JavaFX's built-in drag-and-drop API and implemented efficient database connection pooling for better performance.",
    duration: "2 months",
    role: "Full-Stack Developer"
  },
  2: {
    title: "Temperature Calculation & Weather Forecasting",
    repoUrl: "https://github.com/GOWTHAM6233/Temperature-Converter",
    overview: "A responsive web application that combines temperature conversion utilities with real-time weather data. Users can convert between different temperature scales and get current weather information for any location, all through an intuitive and mobile-friendly interface.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Weather API", "Responsive Design"],
    features: [
      "Temperature conversion (Celsius, Fahrenheit, Kelvin)",
      "Real-time weather data integration",
      "Location-based weather forecasting",
      "Responsive design for all devices",
      "Clean and intuitive user interface",
      "Fast and efficient calculations"
    ],
    challenges: "Integrating external weather APIs and ensuring responsive design across different screen sizes.",
    solutions: "Used modern CSS Grid and Flexbox for responsive design, and implemented proper error handling for API calls.",
    duration: "1 month",
    role: "Frontend Developer"
  },
  3: {
    title: "Human Violence Detection",
    overview: "An advanced AI-powered system for detecting violent behavior in surveillance footage using computer vision and deep learning. The system can analyze video streams in real-time and alert security personnel when violent activities are detected, making it valuable for security and monitoring applications.",
    techStack: ["YOLOv8", "Inception-v3", "FastAPI", "Python", "OpenCV", "AI/ML", "Computer Vision"],
    features: [
      "Real-time video analysis",
      "Violence detection using YOLOv8",
      "Inception-v3 for behavior classification",
      "FastAPI backend for high performance",
      "Surveillance dataset training",
      "Alert system for security personnel"
    ],
    challenges: "Training models on limited surveillance datasets and achieving real-time performance for video analysis.",
    solutions: "Used transfer learning with pre-trained models and implemented efficient video processing pipelines with FastAPI.",
    duration: "3 months",
    role: "AI/ML Developer"
  }
};

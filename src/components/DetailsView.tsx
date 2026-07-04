import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const DetailsView = () => {
  const projects = [
    {
      title: "SYAM INFRA WEBSITE",
      category: "3D Interactive Web Experience",
      description: "Designed a 'Future-Prime' digital portal for world-class infrastructure. Engineered a custom Three.js 3D 'Living Crystal' with an immersive holographic HUD and deep glassmorphism UI.",
      achievements: "Optimized WebGL rendering and high-res assets to maintain buttery-smooth 60fps across devices.",
      tech: "HTML5, CSS3, ES6+, Three.js, Intersection Observer",
      link: "https://akshayreddy2004.github.io/syam-infra/" // Replace this with the actual URL
    },
    {
      title: "Real-Time Sign Language to Speech Conversion",
      category: "AI Accessibility Tool",
      description: "Developed an AI-powered system that converts sign language gestures into speech to improve accessibility for speech-impaired individuals.",
      achievements: "Real-time speech conversion using Gesture recognition AI.",
      tech: "Python, OpenCV, CNN, Speech Recognition",
      link: "https://signai-studio.up.railway.app"
    },
    {
      title: "Emotion Detection System",
      category: "Computer Vision",
      description: "Built a machine learning system capable of detecting human emotions from facial expressions and text inputs.",
      achievements: "Accurate facial emotion recognition & classification.",
      tech: "Python, OpenCV, Scikit-learn, DeepFace"
    },
    {
      title: "Data Sense Pro – AI Analytics Tool",
      category: "Generative AI",
      description: "Created a Generative AI-powered analytics platform that processes CSV/PDF files and provides insights using natural language queries.",
      achievements: "Interactive dashboard with AI-generated data visualization.",
      tech: "Python, Streamlit, Generative AI, Data Analysis",
      link: "https://datasense-pro.streamlit.app/"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full mt-24 mb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10"
    >
      {/* Left Column: Skills, Languages, Education */}
      <div className="lg:col-span-5 space-y-12">
        {/* Skills */}
        <motion.div variants={itemVariants} id="skills" className="scroll-mt-24">
          <h3 className="text-accent-yellow font-medium text-lg mb-6">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Python', color: 'bg-blue-600 text-white' },
              { name: 'Machine Learning', color: 'bg-[#F24E1E] text-white' },
              { name: 'NLP', color: 'bg-green-600 text-white' },
              { name: 'Computer Vision', color: 'bg-purple-600 text-white' },
              { name: 'Deep Learning', color: 'bg-indigo-600 text-white' },
              { name: 'Data Analysis', color: 'bg-pink-600 text-white' },
              { name: 'Streamlit', color: 'bg-red-500 text-white' },
              { name: 'OpenCV', color: 'bg-yellow-600 text-white' },
            ].map((skill) => (
              <motion.div 
                whileHover={{ scale: 1.15, y: -5, rotateX: 15, z: 30 }}
                key={skill.name} 
                className="flex items-center gap-2 bg-[#1a1a1a] border border-glass-border rounded-full px-4 py-2 cursor-default shadow-lg"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`w-2 h-2 rounded-full ${skill.color}`}></div>
                <span className="text-sm text-gray-300">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div variants={itemVariants}>
          <h3 className="text-accent-yellow font-medium text-lg mb-6">Languages</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="w-24 text-sm text-gray-300">Telugu</span>
              <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-accent-yellow"
                ></motion.div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-24 text-sm text-gray-300">English</span>
              <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="h-full bg-accent-yellow"
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education & Certificates */}
        <motion.div variants={itemVariants} id="summary" className="scroll-mt-24">
          <h3 className="text-accent-yellow font-medium text-lg mb-6">Education & Certificates</h3>
          <div className="space-y-6">
            <motion.div whileHover={{ x: 5 }} className="relative pl-4 border-l-2 border-accent-yellow/30 transition-transform">
              <div className="absolute w-2 h-2 bg-accent-yellow rounded-full -left-[5px] top-1.5 shadow-[0_0_8px_rgba(255,204,0,0.8)]"></div>
              <h4 className="text-white font-medium text-sm">Kalasalingam Academy of Research and Education</h4>
              <p className="text-xs text-gray-500 mt-1">B.Tech in Computer Science (AIML) — CGPA: 7.69</p>
              <p className="text-xs text-gray-600 mt-1">2021 – 2025</p>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} className="relative pl-4 border-l-2 border-accent-yellow/30 transition-transform">
              <div className="absolute w-2 h-2 bg-accent-yellow rounded-full -left-[5px] top-1.5 shadow-[0_0_8px_rgba(255,204,0,0.8)]"></div>
              <h4 className="text-white font-medium text-sm">Sri Chaitanya Jr College</h4>
              <p className="text-xs text-gray-500 mt-1">Intermediate (MPC) — CGPA: 8.36</p>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} className="relative pl-4 border-l-2 border-accent-yellow/30 transition-transform">
              <div className="absolute w-2 h-2 bg-accent-yellow rounded-full -left-[5px] top-1.5 shadow-[0_0_8px_rgba(255,204,0,0.8)]"></div>
              <h4 className="text-white font-medium text-sm">AIML for Engineers</h4>
              <p className="text-xs text-gray-500 mt-1">Simplilearn (IBM)</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Projects */}
      <div className="lg:col-span-7 flex flex-col gap-6" id="experience" style={{ perspective: "1000px" }}>
        <motion.h3 variants={itemVariants} className="text-accent-yellow font-medium text-lg mb-2 scroll-mt-24">Featured Projects</motion.h3>

        {projects.map((project, index) => (
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.03, 
              rotateX: 4, 
              rotateY: -2,
              z: 20
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            key={index}
            className="bg-[#111111] border border-glass-border p-6 rounded-2xl w-full shadow-xl relative overflow-hidden group hover:border-accent-yellow/50 transition-all duration-300"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Subtle glow behind card */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-yellow opacity-0 blur-[50px] group-hover:opacity-10 transition-opacity duration-500"></div>

            <div className="flex justify-between items-start mb-1">
              <h3 className="text-white text-xl font-semibold group-hover:text-accent-yellow transition-colors">{project.title}</h3>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-yellow transition-colors z-20">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="text-xs text-accent-orange mb-4 font-medium">{project.category}</p>

            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="space-y-3 bg-[#1a1a1a] p-4 rounded-xl border border-glass-border/50">
              <div>
                <h4 className="text-gray-300 text-xs font-medium mb-1">Key Features / Achievements</h4>
                <p className="text-xs text-gray-500">
                  {project.achievements}
                </p>
              </div>
              <div>
                <h4 className="text-gray-300 text-xs font-medium mb-1">Technologies</h4>
                <p className="text-xs text-gray-500 font-mono">
                  {project.tech}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default DetailsView;

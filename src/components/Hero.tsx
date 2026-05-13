import { Mail, Phone, MapPin, Link } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row justify-between items-center w-full mb-16 relative z-10 pt-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 text-left z-20"
      >
        <h2 className="text-accent-yellow font-medium text-xl mb-4 tracking-wide">Aspiring AI/ML Engineer</h2>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4 tracking-tight">
          Akshay Reddy
        </h1>
        <p className="text-gray-300 max-w-xl mb-8 leading-relaxed">
          Building AI-powered solutions that solve real-world problems. Passionate about Artificial Intelligence, Machine Learning, Computer Vision, and Generative AI.
        </p>
        
        <div id="links" className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400 max-w-lg scroll-mt-24">
          <a href="mailto:akshaychalla0923@gmail.com" className="flex items-center gap-3 hover:text-accent-yellow transition-colors cursor-pointer">
            <Mail className="w-4 h-4 text-accent-yellow" />
            <span>akshaychalla0923@gmail.com</span>
          </a>
          <a href="https://github.com/Akshayreddy2004" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent-yellow transition-colors cursor-pointer">
            <Link className="w-4 h-4 text-accent-yellow" />
            <span>github.com/Akshayreddy2004</span>
          </a>
          <a href="tel:+918125369337" className="flex items-center gap-3 hover:text-accent-yellow transition-colors cursor-pointer">
            <Phone className="w-4 h-4 text-accent-yellow" />
            <span>+91 8125369337</span>
          </a>
          <a href="https://www.linkedin.com/in/akshayreddy9/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent-yellow transition-colors cursor-pointer">
            <Link className="w-4 h-4 text-accent-yellow" />
            <span>linkedin.com/in/akshayreddy9</span>
          </a>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-accent-yellow" />
            <span>Nellore, AP, India</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotateY: 30, rotateX: 10 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="flex-1 flex justify-end mt-12 md:mt-0 relative"
        style={{ perspective: "1200px" }}
      >
        <motion.div 
          whileHover={{ 
            scale: 1.08, 
            rotateY: -12, 
            rotateX: 8,
            z: 50
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-64 h-80 md:w-96 md:h-[500px] relative rounded-2xl overflow-hidden z-10 shadow-[0_30px_60px_rgba(255,204,0,0.25)] border border-glass-border"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Overlay to give the black and white image a warm glowing tint to match the design */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/40 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
          
          <img 
            src="/images/Hero.jpeg" 
            alt="Akshay Reddy" 
            className="w-full h-full object-cover object-center filter contrast-125 brightness-90"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

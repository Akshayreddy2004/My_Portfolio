
import { User, FileText, Briefcase, Zap, Link } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-glass backdrop-blur-xl border border-glass-border rounded-full p-2 shadow-2xl">
        <a href="#home" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105">
          <User className="w-4 h-4" />
          Home
        </a>
        <a href="#summary" className="flex items-center gap-2 text-gray-400 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
          <FileText className="w-4 h-4" />
          Summary
        </a>
        <a href="#experience" className="flex items-center gap-2 text-gray-400 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
          <Briefcase className="w-4 h-4" />
          Experience
        </a>
        <a href="#skills" className="flex items-center gap-2 text-gray-400 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
          <Zap className="w-4 h-4" />
          Skills
        </a>
        <a href="#links" className="flex items-center gap-2 text-gray-400 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
          <Link className="w-4 h-4" />
          Links
        </a>
      </div>
    </nav>
  );
};

export default Navigation;

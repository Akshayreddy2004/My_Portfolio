

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full mb-12">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        <span className="text-sm font-medium text-gray-300">Open to work</span>
      </div>
      <a 
        href="/Akshay_Reddy_Resume.pdf" 
        download
        className="bg-accent-yellow text-black font-semibold py-2 px-6 rounded-full text-sm hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(255,204,0,0.4)] inline-block"
      >
        Download CV
      </a>
    </header>
  );
};

export default Header;

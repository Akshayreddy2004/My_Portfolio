
import Header from './components/Header';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import DetailsView from './components/DetailsView';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <div className="min-h-screen bg-matte-black text-white overflow-x-clip relative font-sans selection:bg-accent-yellow selection:text-black pb-20">
      {/* Background glowing orbs */}
      <div className="ambient-glow w-[800px] h-[800px] -top-[200px] -right-[200px]"></div>
      <div className="ambient-glow w-[600px] h-[600px] top-[40%] -left-[200px] opacity-20"></div>

      {/* Main glass panel container */}
      <main className="max-w-6xl mx-auto mt-8 md:mt-16 p-8 md:p-12 glass-panel rounded-3xl relative z-10">
        <Header />
        <Hero />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-glass-border to-transparent my-12"></div>
        <DetailsView />
      </main>

        <Navigation />
      </div>
    </>
  );
}

export default App;


import { useNavigate } from "react-router-dom";


export default function TechnicalButton() {
  const navigate = useNavigate();
  return (
    <div className="min-h-auto flex items-center justify-center p-4">
      <style>{`
        @keyframes code-scroll {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-100px); opacity: 0; }
        }
        
        @keyframes binary-fall {
          0% { transform: translateY(-20px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(120px); opacity: 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .code-line {
          animation: code-scroll 6s linear infinite;
        }
        
        .binary {
          animation: binary-fall 5s linear infinite;
        }
        
        .tech-icon {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .gear {
          animation: rotate-slow 20s linear infinite;
        }
      `}</style>
      
      <div className="w-full max-w-7xl bg-linear-to-r from-[#00AEFF] via-[#0E90CF] to-[#08618d] rounded-3xl p-5 text-center shadow-2xl relative overflow-hidden">
        
        {/* Code Brackets */}
        <div className="absolute top-8 left-8 text-white/20 text-6xl font-mono tech-icon">&lt;/&gt;</div>
        <div className="absolute bottom-12 right-12 text-white/20 text-5xl font-mono tech-icon" style={{animationDelay: '1.5s'}}>{ }</div>
        
        {/* Binary Code Streams */}
        <div className="absolute top-0 left-[15%] text-white/30 font-mono text-xs binary" style={{animationDelay: '0s'}}>
          1010<br/>0110<br/>1100
        </div>
        <div className="absolute top-0 left-[45%] text-white/25 font-mono text-xs binary" style={{animationDelay: '2s'}}>
          1101<br/>0011<br/>1001
        </div>
        <div className="absolute top-0 right-[20%] text-white/30 font-mono text-xs binary" style={{animationDelay: '4s'}}>
          0101<br/>1110<br/>0100
        </div>
        
        {/* Code Symbols Floating */}
        <div className="code-line absolute left-10 text-white/30 font-mono text-sm" style={{bottom: '20%', animationDelay: '1s'}}>
          function()
        </div>
        <div className="code-line absolute right-16 text-white/25 font-mono text-sm" style={{bottom: '30%', animationDelay: '3s'}}>
          const x =
        </div>
        <div className="code-line absolute left-[25%] text-white/70 font-mono text-sm" style={{bottom: '15%', animationDelay: '5s'}}>
          return
        </div>
        
        {/* Tech Icons - Gear Symbols */}
        <div className="absolute top-16 right-24 text-white/15 text-4xl gear">⚙</div>
        <div className="absolute bottom-20 left-20 text-white/20 text-3xl gear" style={{animationDuration: '25s', animationDirection: 'reverse'}}>⚙</div>
        
        {/* Command Line Prompts */}
        <div className="absolute top-1/4 left-12 text-white/25 font-mono text-sm tech-icon" style={{animationDelay: '0.5s'}}>$_</div>
        <div className="absolute bottom-1/3 right-16 text-white/20 font-mono text-sm tech-icon" style={{animationDelay: '2s'}}>&gt;_</div>
        
        {/* Circuit Board Pattern */}
        <div className="absolute top-12 right-1/4 w-20 h-20 opacity-10">
          <svg viewBox="0 0 100 100" className="text-white">
            <circle cx="20" cy="20" r="3" fill="currentColor"/>
            <circle cx="80" cy="20" r="3" fill="currentColor"/>
            <circle cx="50" cy="50" r="3" fill="currentColor"/>
            <circle cx="20" cy="80" r="3" fill="currentColor"/>
            <circle cx="80" cy="80" r="3" fill="currentColor"/>
            <line x1="20" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="1"/>
            <line x1="20" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="1"/>
            <line x1="80" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="1"/>
            <line x1="50" y1="50" x2="20" y2="80" stroke="currentColor" strokeWidth="1"/>
            <line x1="50" y1="50" x2="80" y2="80" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-4" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-white mb-6">
            Technical Skill Development
          </h1>
          
          <p className="text-[18px] text-white/90 mb-8 max-w-3xl mx-auto">
            Transforming classroom knowledge into career-ready expertise through guided, hands-on learning.
          </p>
          
          <button
           onClick={() => {window.scrollTo(0, 0); navigate("/tech")}}
         className="bg-white text-[#0E90CF] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center gap-2">
            Technical Training
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HeaderSection() {
  return (
    <section className="relative bg-linear-to-r from-[#034E72] to-[#00AEFF] text-center py-16 px-4 text-white overflow-hidden">
      {/* Floating Shapes */}
      <div className="absolute w-16 h-16 bg-[#00AEFF] opacity-20 rounded-full animate-moveY-fast top-3/4 left-60"></div>
      <div className="absolute w-16 h-16 bg-white opacity-20 rounded-full animate-moveY-medium top-10 right-60"></div>
      <div className="absolute w-10 h-10 bg-white opacity-20 rounded-full animate-moveY-slow top-10 left-10"></div>
      <div className="absolute w-12 h-12 bg-yellow-400 opacity-50 rounded-full animate-moveY-extraFast top-20 right-20"></div>
      <div className="absolute w-10 h-10 bg-yellow-400 opacity-25 rotate-10 animate-moveY-fast top-1/2 left-1/4"></div>
      <div className="absolute w-14 h-14 bg-green-400 opacity-20 rotate-12 animate-moveY-medium top-3/4 right-1/3"></div>

      {/* Text Content */}
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-medium relative z-10">
        Placement cell
      </h1>
      <p className="mt-2 text-[14px] sm:text-[18px] max-w-3xl font-normal mx-auto relative z-10">
        We guide students toward rewarding careers through expert mentoring,
        interview training, and strong industry connections that open doors to
        top opportunities.
      </p>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes moveY {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-70px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-moveY-extraFast {
          animation: moveY 5s ease-in-out infinite;
        }
        .animate-moveY-fast {
          animation: moveY 6s ease-in-out infinite;
        }
        .animate-moveY-medium {
          animation: moveY 8s ease-in-out infinite;
        }
        .animate-moveY-slow {
          animation: moveY 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

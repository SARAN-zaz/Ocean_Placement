import { useEffect, useState } from "react";
import images from "../../assets/Images";

export default function Methodology() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Enrollment",
      description: "Sign up and choose your desired course track.",
      image: images.Enrollment,
      alt: "Enrollment",
    },
    {
      id: 2,
      title: "Learn & Practice",
      description: "Master skills through hands-on projects and mentorship.",
      image: images.learn,
      alt: "Learning",
    },
    {
      id: 3,
      title: "Build Portfolio",
      description: "Create impressive projects to showcase your expertise.",
      image: images.Portfolio,
      alt: "Portfolio",
    },
    {
      id: 4,
      title: "Get Hired",
      description: "Land your dream job with our placement support.",
      image: images.Hired,
      alt: "Hired",
    },
  ];

  // Auto cycle every 2.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="mt-10 mb-10 w-[90%] max-w-[1200px] mx-auto    ">
      {/* Heading */}
      <div className="text-center">
        <p className="sm:text-xl font-semibold bg-linear-to-r from-[#0E90CF] via-[#0E90CF] to-[#217098] bg-clip-text text-transparent">
          Our Methodology
        </p>
        <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[24px] font-semibold mt-1">
          Your Journey to Success
        </h1>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
          A streamlined path from <span className="text-[#00AEFE]">learning to earning</span>
        </p>
      </div>

      {/* Steps */}
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-0 mt-16">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;

          return (
            <div key={step.id} className="flex items-center">
              {/* Step Card */}
              <div className="flex flex-col items-center text-center w-[220px] sm:w-[250px]">
                <div className="relative">
                  {/* CIRCLE ONLY SCALES when active */}
                  <div
                    className={`
                      rounded-full w-28 h-28 flex items-center justify-center
                      transition-all duration-500
                      ${isActive ? "scale-110 bg-gradient-to-r from-indigo-500 to-cyan-600 shadow-lg" : "bg-[#E6F4FF]"}
                    `}
                  >
                    <img
                      src={step.image}
                      alt={step.alt}
                      className={`h-14 transition-all duration-500 ${isActive ? "brightness-0 invert" : ""}`}
                    />
                  </div>

                  {/* Step Badge - now animates in sync with the circle */}
                  <div
                    className={`
                      absolute -top-5 -right-3 text-[14px] sm:text-[16px] font-semibold w-12 h-12 rounded-full flex items-center justify-center shadow-md
                      transition-all duration-500
                      ${isActive ? "scale-110 bg-gradient-to-r from-cyan-300 to-blue-600 text-white" : "bg-[#00AEFF] text-white"}
                    `}
                    aria-hidden
                  >
                    {step.id}
                  </div>
                </div>

                <h2 className="mt-4 text-[18px] font-semibold text-gray-900">{step.title}</h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mt-2">{step.description}</p>
              </div>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center mb-20">
                  <img src={images.Arrow} alt="Arrow" className="w-15" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

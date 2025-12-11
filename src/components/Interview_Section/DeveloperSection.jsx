import { useState, useEffect } from "react";
import images from "../../assets/Images";
import { useNavigate } from "react-router-dom";

const DeveloperSection = () => {
const navigate = useNavigate();
const stats = [
  { 
    img: images.Book, 
    label: "Questions", 
    value: "500+", 
    gradient: "from-[#3F2B96] to-[#A8C0FF]" // purple → soft blue
  },
  { 
    img: images.students, 
    label: "Students", 
    value: "50K+", 
    gradient: "from-[#1D976C] to-[#93F9B9]" // emerald → mint
  },
  { 
    img: images.technology, 
    label: "Technologies", 
    value: "10+", 
    gradient: "from-[#3A1C71] to-[#FFAF7B]" // violet → peach
  },
  { 
    img: images.success, 
    label: "Success Rate", 
    value: "95%", 
    gradient: "from-[#216EA0] to-[#20C6B6]" // teal → aqua
  },
];



  // ACTIVE INDEX STATE
  const [activeIndex, setActiveIndex] = useState(0);

  // AUTO SWITCH LOGIC
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-12 max-w-[1200px] w-[90%] mx-auto">

      <div className="md:w-1/2 max-w-[600px]">
        <h1 className="text-[30px] font-semibold mb-4 w-full text-4xl bg-linear-to-r from-[#00AEFF] via-[#0070A4] to-[#006899] bg-clip-text text-transparent">
          Elevate Your Technical Skills
        </h1>

        <p className="mb-6 text-[#5C5A5A] text-[16px] leading-8">
          Our comprehensive technical training programs combine hands-on
          projects, expert mentorship, and real-world scenarios to prepare you
          for success in the tech industry. From foundational programming to
          advanced frameworks, we’ve got you covered.
        </p>

        <button
           onClick={() => {window.scrollTo(0, 0); navigate("/Developer")}}
          className="
            bg-linear-to-r from-[#00AEFF] via-[#0070A4] to-[#006899]
            text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2 
            shadow-md mt-13 transition-all duration-300 
            hover:scale-[1.05] hover:shadow-[0_10px_25px_rgba(0,174,255,0.4)]
            active:scale-[0.97] cursor-pointer
          "
        >
          <img
            src={images.developer}
            alt=""
            className="w-5 h-5 transition-transform duration-300 group-hover:scale-125 hover:rotate-6"
          />
          Project Innovation Hub
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8 w-full md:w-1/2 max-w-[500px]">
        {stats.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className={`
                flex flex-col justify-center items-start p-5 gap-3 rounded-2xl shadow-md aspect-[1.5/1]
                bg-linear-to-r ${item.gradient} text-white transition-all duration-500
                ${isActive ? "ring-[1.5px] ring-[#00A8FF]/70 scale-[1.05]" : "ring-0 scale-[1] opacity-90"}
              `}
            >
              <div
                className={`
                  w-12 h-12 flex justify-center items-center rounded-xl bg-white transition-all duration-500 shadow-sm
                  ${isActive ? "scale-110 brightness-110" : "scale-100"}
                `}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className={`w-[26px] h-[26px] transition-transform duration-500 ${isActive ? "scale-125" : ""}`}
                />
              </div>

              <p className="text-sm tracking-wide">{item.label}</p>
              <h1 className="text-2xl font-bold">{item.value}</h1>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default DeveloperSection;

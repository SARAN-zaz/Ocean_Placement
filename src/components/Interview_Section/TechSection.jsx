import { useState } from "react";
import images from "../../assets/Images";

const TechSection = () => {

  const techs = [
    { name: "Angular", bg: "linear-gradient(to right, #e52d27, #b31217)", icon: images.angular },
    { name: "Bootstrap", bg: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)", icon: images.bootstrap },
    { name: "C", bg: "linear-gradient(to right, #654ea3, #eaafc8)", icon: images.c },
    { name: "C++", bg: "linear-gradient(to right, #F7971E, #FFD200)", icon: images.cpp },
    { name: "CSS", bg: "linear-gradient(to right, #4facfe, #00f2fe)", icon: images.css },
    { name: "Data Analytics", bg: "linear-gradient(to right, #42275a, #734b6d)", icon: images.analytics },
    { name: "Django", bg: "linear-gradient(to right, #0f9b0f, #000000)", icon: images.django },
    { name: "Flutter", bg: "linear-gradient(to right, #1FA2FF, #12D8FA, #A6FFCB)", icon: images.flutter },
    { name: "HTML", bg: "linear-gradient(to right, #f12711, #f5af19)", icon: images.html },
    { name: "Java", bg: "linear-gradient(to right, #FF512F, #DD2476)", icon: images.java },
    { name: "JavaScript", bg: "linear-gradient(to right, #FFE259, #FFA751)", icon: images.js },
    { name: "MongoDB", bg: "linear-gradient(to right, #0F2027, #203A43, #2C5364)", icon: images.mongodb },
    { name: "MySQL", bg: "linear-gradient(to right, #2b5876, #4e4376)", icon: images.mysql },
    { name: "Nodejs", bg: "linear-gradient(to right, #16A085, #F4D03F)", icon: images.node },
    { name: "Python", bg: "linear-gradient(to right, #1CB5E0, #000851)", icon: images.python },
    { name: "Reactjs", bg: "linear-gradient(to right, #396afc, #2948ff)", icon: images.react },
    { name: "Software Testing", bg: "linear-gradient(to right, #8E2DE2, #4A00E0)", icon: images.testing },
    { name: "SpringBoot", bg: "linear-gradient(to right, #11998e, #38ef7d)", icon: images.spring },
    { name: "UI/UX", bg: "linear-gradient(to right, #FF0099, #493240)", icon: images.uiux },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredTechs = techs.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="max-w-[1200px] w-[90%] mx-auto">
        <div className="relative inline-block w-full sm:w-[600px]">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-400 pl-5 pr-10 w-full rounded-2xl h-[50px] focus:outline-none"
          />
          <img
            src={images.search}
            alt="search"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
          />
        </div>

        <h1 className="mt-10 text-xl font-semibold text-[#00AEFF]">
          Interview Domains
        </h1>
      </div>

      <div className="max-w-[1200px] w-[90%] mx-auto mt-10 overflow-x-auto pb-3">
        <div className="flex gap-6 sm:gap-8 pb-8 pr-4" style={{ width: "max-content" }}>
          {filteredTechs.length > 0 ? (
            filteredTechs.map((item, i) => (
              <div
                key={i}
                className="
                  group h-[138px] w-[216px] rounded-xl shrink-0 bg-white 
                  flex flex-col justify-center items-start pl-7 
                  transition-all duration-300 cursor-pointer
                  shadow-[0px_4px_15px_rgba(0,0,0,0.15)]
                "
              >
                <div
                  className="
                    w-[45px] h-[35px] rounded-md flex justify-center items-center 
                    transition-all duration-300 
                    group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]
                  "
                  style={{ background: item.bg }}
                >
                  <img src={item.icon} alt={item.name} className="w-6 h-6" />
                </div>

                <p className="mt-2 text-sm font-semibold text-[#00AEFF]">{item.name}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm pl-4">No results found...</p>
          )}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          height: 10px;
        }
        div::-webkit-scrollbar-thumb {
          background-color: #00aeff;
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background-color: #0092d3;
        }
        div::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default TechSection;

import { useState } from "react";
import images from "../../assets/Images";

const TechSection = () => {

  const techs = [
  { name: "Java", bg: "linear-gradient(to right, #f44336, #e91e63)", icon: images.java },
  { name: "Python", bg: "linear-gradient(to right, #ffd449, #4b8bbe)", icon: images.python },
  { name: "C", bg: "linear-gradient(to right, #283593, #3949ab)", icon: images.c },
  { name: "C++", bg: "linear-gradient(to right, #00599C, #3269ae)", icon: images.cpp },
  { name: "JavaScript", bg: "linear-gradient(to right, #f7df1e, #fbbc04)", icon: images.js },
  { name: "Nodejs", bg: "linear-gradient(to right, #3c873a, #68a063)", icon: images.node },
  { name: "Mysql", bg: "linear-gradient(to right, #00758f, #0096c7)", icon: images.mysql },

  { name: "Mongo db", bg: "linear-gradient(to right, #13aa52, #116149)", icon: images.mongodb },
  { name: "React js", bg: "linear-gradient(to right, #00d8ff, #61dafb)", icon: images.react },
  { name: "Angular", bg: "linear-gradient(to right, #dd1b16, #c82312)", icon: images.angular },
  { name: "Flutter", bg: "linear-gradient(to right, #02569B, #039BE5)", icon: images.flutter },
  { name: "UI/UX", bg: "linear-gradient(to right, #ff0099, #493240)", icon: images.ux },
  { name: "Django", bg: "linear-gradient(to right, #092E20, #0b3b2a)", icon: images.django },
  { name: "HTML", bg: "linear-gradient(to right, #E44D26, #F16529)", icon: images.html },

  { name: "CSS", bg: "linear-gradient(to right, #264de4, #2965f1)", icon: images.css },
  { name: "Software Testing", bg: "linear-gradient(to right, #7b4397, #dc2430)", icon: images.testing },
  { name: "Bootstrap", bg: "linear-gradient(to right, #563d7c, #7952b3)", icon: images.bootstrap },
  { name: "SpringBoot", bg: "linear-gradient(to right, #6db33f, #3a7d2e)", icon: images.spring },
  { name: "Data Analytics", bg: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", icon: images.analytics },
];

// const techs = [
//   // ---------- FRONTEND ----------
//   { name: "HTML", bg: "linear-gradient(to right, #E44D26, #F16529)", icon: images.html },
//   { name: "CSS", bg: "linear-gradient(to right, #264de4, #2965f1)", icon: images.css },
//   { name: "Bootstrap", bg: "linear-gradient(to right, #563d7c, #7952b3)", icon: images.bootstrap },
//   { name: "JavaScript", bg: "linear-gradient(to right, #f7df1e, #fbbc04)", icon: images.js },
//   { name: "Angular", bg: "linear-gradient(to right, #dd1b16, #c82312)", icon: images.angular },
//   { name: "Reactjs", bg: "linear-gradient(to right, #00d8ff, #61dafb)", icon: images.react },

//   // ---------- BACKEND ----------
//   { name: "C", bg: "linear-gradient(to right, #283593, #3949ab)", icon: images.c },
//   { name: "C++", bg: "linear-gradient(to right, #00599C, #3269ae)", icon: images.cpp },
//   { name: "Java", bg: "linear-gradient(to right, #f44336, #e91e63)", icon: images.java },
//   { name: "Python", bg: "linear-gradient(to right, #ffd449, #4b8bbe)", icon: images.python },
//   { name: "Nodejs", bg: "linear-gradient(to right, #3c873a, #68a063)", icon: images.node },
//   { name: "SpringBoot", bg: "linear-gradient(to right, #6db33f, #3a7d2e)", icon: images.spring },
//   { name: "Django", bg: "linear-gradient(to right, #092E20, #0b3b2a)", icon: images.django },

//   // ---------- DATABASE ----------
//   { name: "MySQL", bg: "linear-gradient(to right, #00758f, #0096c7)", icon: images.mysql },
//   { name: "MongoDB", bg: "linear-gradient(to right, #13aa52, #116149)", icon: images.mongodb },

//   // ---------- MOBILE / CROSS-PLATFORM ----------
//   { name: "Flutter", bg: "linear-gradient(to right, #02569B, #039BE5)", icon: images.flutter },

//   // ---------- DATA & ANALYTICS ----------
//   { name: "Data Analytics", bg: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", icon: images.analytics },

//   // ---------- TESTING ----------
//   { name: "Software Testing", bg: "linear-gradient(to right, #7b4397, #dc2430)", icon: images.testing },

//   // ---------- UI / UX ----------
//   { name: "UI/UX", bg: "linear-gradient(to right, #ff0099, #493240)", icon: images.ux },
// ];


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
        <div className="flex gap-7 sm:gap-9 pb-8 pr-4" style={{ width: "max-content" }}>
          {filteredTechs.length > 0 ? (
            filteredTechs.map((item, i) => (
              <div
                key={i}
                className="
                  group h-[190px] w-70 rounded-xl shrink-0 bg-white shadow-[0px_6px_18px_rgba(0,0,0,0.18)]
                  flex flex-col justify-center items-center gap-3
                  transition-all duration-300 cursor-pointer hover:scale-[1.06]
                "
              >
                <div
                  className="
                    w-[60px] h-[60px] rounded-lg flex justify-center items-center 
                    transition-all duration-300 text-white font-semibold
                    group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.9)]
                  "
                  style={{ background: item.bg }}
                >
                  <img src={item.icon} alt={item.name} className="w-8 h-8" />
                </div>
                <p className="text-[15px] font-semibold text-[#00AEFF]">{item.name}</p>
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

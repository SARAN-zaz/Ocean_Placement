import images from "../../assets/Images";

export const aboutData = [
  {
    id: 1,
    img: "Learning",
    bg: "bg-linear-to-br from-purple-500 to-pink-500",
    title: "Industry-focused curriculum",
    desc: "Our courses are designed in collaboration with industry experts to ensure you learn the most relevant and in-demand skills.",
    highlight: false,
  },
  {
    id: 2,
    img: "practical",
    bg: "bg-linear-to-br from-orange-500 to-yellow-500",
    title: "Practical Learning Approach",
    desc: "We emphasize hands-on experience through real-world projects and case studies, helping students apply theoretical knowledge effectively in practical scenarios.",
    highlight: false,
  },
  {
    id: 3,
    img: "placement",
    bg: "bg-linear-to-br from-emerald-500 to-green-500",
    title: "100% Placement Assistance",
    desc: "We provide complete support through resume building, interview preparation, and offering personalized career counseling to ensure every student secures the right job opportunity.",
    highlight: false,
  },
  {
    id: 4,
    img: "trust",
    bg: "bg-linear-to-tr from-blue-500 to-cyan-500",
    title: "Trusted by 10,000+ students",
    desc: "Our students are working in TCS, IBM, Accenture, HCL, CTS, Infosys, Capgemini, and many more...",
    highlight: true,
  },
];

export default function AboutSection() {
  return (
    <section className="bg-white pb-[55px]">
      <section className="flex flex-col w-[80%] mx-auto max-w-[1200px]">
        
        {aboutData.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-10 ml-0 lg:ml-10 leading-relaxed 
              ${item.highlight ? `${item.bg} rounded-2xl shadow-lg p-6 sm:p-8 md:p-6 w-full max-w-5xl group` : ""}`}
          >

            {/* Image / Icon Section */}
            <div
              className={`${item.bg} ${
                item.highlight ? "bg-transparent" : ""
              } rounded-2xl shadow-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-4 
                 hover:scale-110 transition-transform duration-300`}
            >
              <img
                src={images[item.img]}
                alt={item.title}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="text-center sm:text-left">
              <h1
                className={`text-[18px] sm:text-[20px] font-semibold ${
                  item.highlight ? "text-white" : "text-black"
                }`}
              >
                {item.title}
              </h1>

              <p
                className={`text-[14px] sm:text-[16px] mt-2 leading-relaxed max-w-[800px] ${
                  item.highlight ? "text-white" : "text-[#5C5454]"
                }`}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}

      </section>
    </section>
  );
}

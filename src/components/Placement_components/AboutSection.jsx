import images from "../../assets/Images";

export default function AboutSection() {
  return (
    <section className=" bg-white pb-[55px]">
      <section className="flex flex-col  w-[80%] mx-auto max-w-[1200px]">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-10 ml-0 lg:ml-10 leading-relaxed">
          {/* Icon Section */}
          <div
            className="bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-4 
                  hover:scale-110 transition-transform duration-300"
          >
            <img
              src={images.Learning}
              alt="industry icon"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex-col text-center sm:text-left">
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              Industry-focused curriculum
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#5C5454] mt-2 leading-relaxed wrap-break-word max-w-[800px]">
              Our courses are designed in collaboration with industry experts to
              ensure you learn the most relevant and in-demand skills.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-10 ml-0 lg:ml-10 leading-relaxed">
          {/* Icon Section */}
          <div
            className="bg-linear-to-br from-orange-500 to-yellow-500 rounded-2xl shadow-lg 
                  w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-4
                  hover:scale-110 transition-transform duration-300"
          >
            <img
              src={images.practical}
              alt="industry icon"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex-col text-center sm:text-left">
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              Practical Learning Approach
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#5C5454] mt-2 leading-relaxed wrap-break-word max-w-[800px]">
              We emphasize hands-on experience through real-world projects and
              case studies, helping students apply theoretical knowledge
              effectively in practical scenarios.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-10 ml-0 lg:ml-10 leading-relaxed">
          {/* Icon Section */}
          <div
            className="bg-linear-to-br from-emerald-500 to-green-500 rounded-2xl shadow-lg
               w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-4
               hover:scale-110 transition-transform duration-300"
          >
            <img
              src={images.placement}
              alt="industry icon"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex-col text-center sm:text-left">
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              100% Placement Assistance
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#5C5454] mt-2 leading-relaxed wrap-break-word max-w-[800px]">
              We provide complete support through resume building, interview
              preparation, and offering personalized career counseling to ensure
              every student secures the right job opportunity.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-10 bg-linear-to-tr from-blue-500 to-cyan-500  rounded-2xl shadow-lg p-6 sm:p-8 md:p-6 w-full max-w-5xl leading-relaxed ml-0 lg:ml-10 group">
          {/* Image Section */}
          <div
            className="justify-center sm:justify-start w-16 sm:w-20 md:w-24 
               transition-transform duration-300 group-hover:scale-110"
          >
            <img
              src={images.trust}
              alt="Trust icon"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="text-center sm:text-left">
            <h1 className="text-[18px] sm:text-[20px] font-semibold transition-colors duration-300 text-white">
              Trusted by 10,000+ students
            </h1>
            <p className="text-[14px] sm:text-[16px] text-white mt-2">
              Our students are working in TCS, IBM, Accenture, HCL, CTS,
              Infosys, Capgemini, and many more...
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

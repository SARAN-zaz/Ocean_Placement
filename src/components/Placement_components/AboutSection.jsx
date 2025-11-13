import { images } from "../../assets/images";

export default function AboutSection() {
  return (
    <section className=" bg-[#F6F9FA] pb-[55px]">
      <section className="flex flex-col  w-[80%] mx-auto max-w-[1200px]">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-10 ml-0 lg:ml-10  leading-relaxed ">
          {/* Icon Section */}
          <div className="bg-[#D9F1FF] rounded-2xl shadow-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-4">
            <img
              src={images.Learning}
              alt="industry icon"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className=" flex-col text-center sm:text-left">
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              Industry-focused curriculum
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#5C5454] mt-2 leading-relaxed wrap-break-word max-w-[800px]">
              Our courses are designed in collaboration with industry experts to
              ensure you learn the most relevant and in-demand skills.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-10 ml-0 lg:ml-10 leading-relaxed  ">
          {/* Icon Section */}
          <div className="bg-[#D9F1FF] rounded-2xl shadow-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-4">
            <img
              src={images.practical}
              alt="industry icon"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className=" flex-col text-center sm:text-left">
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

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-10 ml-0 lg:ml-10  leading-relaxed ">
          {/* Icon Section */}
          <div className="bg-[#D9F1FF] rounded-2xl shadow-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-4">
            <img
              src={images.placement}
              alt="industry icon"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className=" flex-col text-center sm:text-left">
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              100% Placement Assistance
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#5C5454] mt-2 leading-relaxed wrap-break-word max-w-[800px]">
              We provide complete support through resume building, interview
              preparation, and offering personalized career counseling to ensure every
              student secures the right job opportunity.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-10 bg-[#D9F1FF] rounded-2xl shadow-lg p-6 sm:p-8 md:p-6 w-full max-w-5xl leading-relaxed ml-0 lg:ml-10 ">
          {/* Image Section */}
          <div className=" justify-center sm:justify-start w-16 sm:w-20 md:w-24">
            <img
              src={images.trust}
              alt="Trust icon"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="text-center sm:text-left">
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              Trusted by 10,000+ students
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#5C5454] mt-2">
              Our students are working in TCS, IBM, Accenture, HCL, CTS,
              Infosys, Capgemini, and many more...
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

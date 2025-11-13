import { FaArrowRightLong } from "react-icons/fa6";
import { images } from "../../assets/images";

export default function TechnicalButton() {
  return (
    <section className="bg-[#F0F8FF] py-[30px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 bg-[#D9F1FF] rounded-2xl shadow-lg w-[80%] max-w-5xl mx-auto p-5 leading-relaxed">
        
        {/* ✅ Smaller & Centered Image Container */}
        <div className="flex items-center justify-center bg-gradient-to-r from-[#00AEFF] via-[#0E90CF] to-[#08618d] rounded-2xl shadow-lg w-[90px] sm:w-[100px] md:w-[110px] h-[90px] sm:h-[100px] md:h-[110px]">
          <img
            src={images.dev}
            alt="Development Icon"
            className="w-10 sm:w-11 md:w-12 object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold">
            Technical Skill Development
          </h1>
          <p className="mt-3 sm:mt-5 text-[14px] sm:text-[16px] text-[#5C5454] leading-relaxed">
            Transforming classroom knowledge into career-ready expertise through
            guided, hands-on learning.
          </p>
        </div>

        {/* Button Section */}
        <div className="mt-5 lg:mt-0">
          <button className="flex items-center justify-center gap-2 rounded-xl shadow-lg w-full sm:w-60 md:w-[270px] h-[45px] sm:h-[50px] px-6 bg-gradient-to-r from-[#00AEFF] via-[#0E90CF] to-[#08618d] text-white font-semibold text-sm sm:text-base">
            Technical Training <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
}

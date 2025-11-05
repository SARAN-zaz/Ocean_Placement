import { FaArrowRightLong } from "react-icons/fa6";
import { images } from "../../assets/images";

export default function FeaturedCard() {
  return (
    <section className="bg-[#F0F8FF] p-20 font-['Poppins']">
      <div className="flex justify-center text-center px-4 sm:px-8 md:px-16 lg:px-32 py-6 font-['Poppins']">
        <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-semibold leading-snug">
          Make Waves in Your Career with{" "}
          <span className="text-[#00AEFF]">Ocean Academy</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-0 justify-items-center mt-10 sm:mt-16 lg:mt-20 px-6 sm:px-10 md:px-16 font-['Poppins']">
        {/* Card 1 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-60 md:w-[260px] h-[220px] sm:h-60 md:h-[260px] p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-4">
            <img
              src={images.training_project}
              alt="Training Project"
              className="w-10 sm:w-12 md:w-14 object-contain"
            />
          </div>
          <h2 className="text-gray-700 font-semibold text-base sm:text-lg text-center">
            Training With Project
          </h2>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-60 md:w-[260px] h-[220px] sm:h-60 md:h-[260px] p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-4">
            <img
              src={images.trainer}
              alt="Expert Trainers"
              className="w-10 sm:w-12 md:w-14 object-contain"
            />
          </div>
          <h2 className="text-gray-700 font-semibold text-base sm:text-lg text-center">
            Expert Trainers
          </h2>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-60 md:w-[260px] h-[220px] sm:h-60 md:h-[260px] p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-4">
            <img
              src={images.flexible_class}
              alt="Flexible Class Timing"
              className="w-10 sm:w-12 md:w-14 object-contain"
            />
          </div>
          <h2 className="text-gray-700 font-semibold text-base sm:text-lg text-center">
            Flexible Class Timing
          </h2>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-60 md:w-[260px] h-[220px] sm:h-60 md:h-[260px] p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-4">
            <img
              src={images.certification}
              alt="Certification Partner"
              className="w-10 sm:w-12 md:w-14 object-contain"
            />
          </div>
          <h2 className="text-gray-700 font-semibold text-base sm:text-lg text-center">
            Certification Partner
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-0 justify-items-center mt-10 sm:mt-16 lg:mt-20 px-6 sm:px-10 md:px-16 font-['Poppins']">
        {/* Card 5 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-60 md:w-[260px] h-[220px] sm:h-60 md:h-[260px] p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-4">
            <img
              src={images.weekly_assesment}
              alt="Weekly Assessment"
              className="w-10 sm:w-12 md:w-14 object-contain"
            />
          </div>
          <h2 className="text-gray-700 font-semibold text-base sm:text-lg text-center">
            Weekly Assessment
          </h2>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-60 md:w-[260px] h-[220px]sm:h-60 md:h-[260px] p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-4">
            <img
              src={images.cost_effective}
              alt="Cost Effective Learning"
              className="w-10 sm:w-12 md:w-14 object-contain"
            />
          </div>
          <h2 className="text-gray-700 font-semibold text-base sm:text-lg text-center">
            Cost Effective Learning
          </h2>
        </div>

        {/* Card 7 */}
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-60 md:w-[260px] h-[220px] sm:h-60 md:h-[260px] p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
          <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-4">
            <img
              src={images.resume}
              alt="Resume Building"
              className="w-10 sm:w-12 md:w-14 object-contain"
            />
          </div>
          <h2 className="text-gray-700 font-semibold text-base sm:text-lg text-center">
            Resume Building
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-10 mt-10 sm:mt-16 lg:mt-20 bg-[#D9F1FF] rounded-2xl shadow-lg w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10 leading-relaxed font-['Poppins']">
        {/* Left Icon Box */}
        <div className="flex flex-col items-center justify-center bg-linear-to-t from-[#0E90CF] to-[#a7e2ff] rounded-2xl shadow-lg w-[100px] sm:w-[120px] md:w-[130px] h-[100px] sm:h-[110px] md:h-[120px] p-4 sm:p-6">
          <img
            src={images.dev}
            alt="Development Icon"
            className="w-10 sm:w-12 md:w-14 object-contain"
          />
        </div>

        {/* Middle Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold">
            Technical Skill Development
          </h1>
          <p className="mt-3 sm:mt-5 text-[14px] sm:text-[16px] text-[#5C5454] leading-relaxed">
            Transforming classroom knowledge into career-ready expertise through
            guided, hands-on learning.
          </p> 
        </div>

        {/* Right Button */}
        <div className="mt-5 lg:mt-0">
          <button className="flex items-center justify-center gap-2 rounded-xl shadow-lg w-full sm:w-60 md:w-[270px] h-[45px] sm:h-[50px] px-6 bg-linear-to-r from-[#a7e2ff] to-[#0E90CF] text-white font-semibold text-sm sm:text-base">
            Technical Training <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  );
}

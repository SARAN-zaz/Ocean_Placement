import images from "../../assets/Images";


export default function FeaturedCard() {
  return (
    <section className="bg-[#F0F8FF] ">
      <section className=" max-w-[1200px] mx-auto w-[80%] pb-10">
        <div className="flex justify-center text-center pt-[50px] ">
          <h1 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold">
            Make Waves in Your Career with{" "}
            <span className="text-[#00AEFF]">Ocean Academy</span>
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-15 justify-items-center mt-10 sm:mt-9 lg:mt-[30px] px-6 sm:px-10 md:px-16">
          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-55 md:w-[220px] h-[220px] sm:h-55 md:h-[220px]  sm:p-6 hover:scale-105 transition-transform duration-300">
            <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-3">
              <img
                src={images.training_project}
                alt="Training Project"
                className="w-10 sm:w-10 md:w-10 object-contain"
              />
            </div>
            <h2 className="text-[18px] text-[#000000] font-medium mt-2 text-center">
              Training With Project
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-55 md:w-[220px] h-[220px] sm:h-55 md:h-[220px] p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
            <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-3">
              <img
                src={images.trainer}
                alt="Expert Trainers"
                className="w-10 sm:w-10 md:w-10 object-contain"
              />
            </div>
            <h2 className="text-[18px] text-[#000000] font-medium mt-3 text-center">
              Expert <br /> Trainers
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-55 md:w-[220px] h-[220px] sm:h-55 md:h-[220px] p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
            <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-3">
              <img
                src={images.flexible_class}
                alt="Flexible Class Timing"
                className="w-10 sm:w-10 md:w-10 object-contain"
              />
            </div>
            <h2 className="text-[18px] text-[#000000] font-medium mt-2 text-center">
              Flexible Class Timing
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-55 md:w-[220px] h-[220px] sm:h-55 md:h-[220px] p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
            <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-3">
              <img
                src={images.certification}
                alt="Certification Partner"
                className="w-10 sm:w-10 md:w-10 object-contain"
              />
            </div>
            <h2 className="text-[18px] text-[#000000] font-medium mt-2 text-center">
              Certification Partner
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-15 justify-items-center mt-10 sm:mt-9 lg:mt-[30px] px-6 sm:px-10 md:px-16 ">
          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-55 md:w-[220px] h-[220px] sm:h-55 md:h-[220px]p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
            <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-3">
              <img
                src={images.weekly_assesment}
                alt="Weekly Assessment"
                className="w-10 sm:w-10 md:w-10 object-contain"
              />
            </div>
            <h2 className="text-[18px] text-[#000000] font-medium mt-2 text-center">
              Weekly Assessment
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-55 md:w-[220px] h-[220px] sm:h-55 md:h-[220px] p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
            <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-3">
              <img
                src={images.cost_effective}
                alt="Cost Effective Learning"
                className="w-10 sm:w-10 md:w-10 object-contain"
              />
            </div>
            <h2 className="text-[18px] text-[#000000] font-medium mt-2 text-center">
              Cost Effective Learning
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] sm:w-55 md:w-[220px] h-[220px] sm:h-55 md:h-[220px] p-4 sm:p-6 hover:scale-105 transition-transform duration-300">
            <div className="bg-[#D9F1FF] p-4 sm:p-6 rounded-full flex items-center justify-center mb-3">
              <img
                src={images.resume}
                alt="Resume Building"
                className="w-10 sm:w-10 md:w-10 object-contain"
              />
            </div>
            <h2 className="text-[18px] text-[#000000] font-medium mb- text-center">
              Resume <br /> Building
            </h2>
          </div>
        </div>
      </section>
    </section>
  );
}

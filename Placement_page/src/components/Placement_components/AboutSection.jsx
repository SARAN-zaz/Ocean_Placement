import { images } from "../../assets/images";

export default function AboutSection() {
  return (
    <section className="flex flex-col justify-center font-['Poppins']  bg-[#F6F9FA]">
      <div className=" m-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-6 md:px-16 lg:px-40 py-10 gap-10 bg-[#F6F9FA] font-['Poppins']">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-[16px] md:text-[18px] font-semibold text-[#00AEFF]">
              About ocean
            </p>
            <h1 className="text-[24px] md:text-[30px] font-semibold mt-2">
              Empowering Futures with{" "}
              <span className="text-[#00AEFF]">Innovative Education</span>
            </h1>
            <p className="text-[14px] md:text-[16px] leading-relaxed text-[#5C5454] mt-6">
              Our training takes place in batches at our Puducherry-based
              institute, and our phenomenal training methods offer a solid
              foundation of programming edge. We provide an excellent
              infrastructure for trainees, and our training methods provide a
              solid foundation of programming expertise. For job seekers and
              professionals looking to enhance their skills, batches of flexible
              training times are available.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={images.GettingStarted}
              alt="Home image"
              className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] object-contain"
            />
          </div>
        </div>




      
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-10 px-6 sm:px-10 md:px-20 lg:px-25 leading-relaxed font-['Poppins'] ">
          {/* Icon Section */}
          <div className="bg-[#D9F1FF] rounded-2xl shadow-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-4">
            <img
              src={images.industry}
              alt="industry icon"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              Industry-focused curriculum
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#5C5454] mt-2 leading-relaxed">
              Our courses are designed in collaboration with industry experts to
              ensure you learn the most relevant and in-demand skills.
            </p>
          </div>
        </div>






        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-10 px-6 sm:px-10 md:px-20 lg:px-25 leading-relaxed font-['Poppins'] ">
          {/* Icon Section */}
          <div className="bg-[#D9F1FF] rounded-2xl shadow-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-4">
            <img
              src={images.practical}
              alt="industry icon"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              Industry-focused curriculum
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#5C5454] mt-2 leading-relaxed">
              Our courses are designed in collaboration with industry experts to
              ensure you learn the most relevant and in-demand skills.
            </p>
          </div>
        </div>





        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-10 px-6 sm:px-10 md:px-20 lg:px-25 leading-relaxed font-['Poppins'] ">
          {/* Icon Section */}
          <div className="bg-[#D9F1FF] rounded-2xl shadow-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center p-4">
            <img
              src={images.placement}
              alt="industry icon"
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col text-center sm:text-left">
            <h1 className="text-[18px] sm:text-[20px] font-semibold">
              Industry-focused curriculum
            </h1>
            <p className="text-[14px] sm:text-[16px] text-[#5C5454] mt-2 leading-relaxed">
              Our courses are designed in collaboration with industry experts to
              ensure you learn the most relevant and in-demand skills.
            </p>
          </div>
        </div>
       





        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-10 mt-10 bg-[#D9F1FF] rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 w-full max-w-5xl  leading-relaxed font-['Poppins'] mx-auto">
          {/* Image Section */}
          <div className="flex justify-center sm:justify-start w-16 sm:w-20 md:w-24">
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



      </div>
    </section>
  );
}

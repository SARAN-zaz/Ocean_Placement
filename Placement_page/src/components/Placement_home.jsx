import image from "../assets/Getting Started.png";
import { images } from "../assets/images";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Placement_home() {
  return (
    <>
      <div className="flex justify-center font-['Poppins'] h-80 bg-linear-to-r from-[#00AEFF] divide-[#0070A4] to-[#006899]">
        <h2 className="text-4xl mt-30  text-white font-semibold">
          Placement cell
        </h2>
      </div>
      <section className="flex flex-col justify-center font-['Poppins']  bg-[#F6F9FA]">
        <div className=" m-10">
          <div className="flex">
            <div className="mt-10 px-40 w-[50%]">
              <p className="text-[18px] font-semibold text-[#00AEFF]">
                About ocean
              </p>
              <h1 className="text-[30px] font-semibold">
                Empowering Futures with{" "}
                <span className="text-[#00AEFF]">Innovative Education</span>
              </h1>
              <p className=" text-[16px] leading-relaxed text-[#5C5454] mt-10 ">
                Our training takes place in batches at our Puducherry-based
                institute, and our phenomenal training methods offer a solid
                foundation of programming edge. We provide an excellent
                infrastructure for trainees, and our training methods provide a
                solid foundation of programming expertise. For job seekers and
                professionals looking to enhance their skills, batches of
                flexible training times are available.
              </p>
            </div>
            <div className="w-[50%] justify-items-center">
              <img
                src={image}
                alt="Home image"
                className="w-[420px] h-[420px]"
              />
            </div>
          </div>

          <div className=" px-25 ml-20 flex gap-10 mt-10 leading-relaxed">
            <div className="bg-[#D9F1FF] rounded-2xl shadow-lg w-16 h-16 p-5  ">
              <img src={images.industry} alt="industry icon" className="" />
            </div>
            <div className="flex flex-col">
              <h1 className=" text-[20px] font-semibold items-center">
                Industry-focused curriculum
              </h1>
              <p className="text-[16px] text-[#5C5454]">
                our courses are designed in collaboration with industry experts
                to ensure you learn the most relevant and in- <br />
                demand skills.
              </p>
            </div>
          </div>

          <div className=" px-25 ml-20 flex gap-10 mt-10 leading-relaxed">
            <div className="bg-[#D9F1FF] rounded-2xl shadow-lg  w-16 h-16 p-5  ">
              <img src={images.practical} alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className=" text-[20px] font-semibold items-center">
                Practical Learning Approach
              </h1>
              <p className="text-[16px] text-[#5C5454]">
                our courses are designed in collaboration with industry experts
                to ensure you learn the most relevant and in- <br />
                demand skills.
              </p>
            </div>
          </div>

          <div className=" px-25 ml-20 flex gap-10 mt-10 leading-relaxed ">
            <div className="bg-[#D9F1FF] rounded-2xl shadow-lg w-16 h-16 p-5">
              <img src={images.placement} alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className=" text-[20px] font-semibold items-center">
                100% Placement Assistance
              </h1>
              <p className="text-[16px] text-[#5C5454]">
                our courses are designed in collaboration with industry experts
                to ensure you learn the most relevant and in- <br />
                demand skills.
              </p>
            </div>
          </div>

          <div className="  ml-42 gap-10 mt-10 bg-[#D9F1FF] rounded-2xl shadow-lg w-5xl p-6  items-center flex leading-relaxed">
            <div className="flex flex-col">
              <img src={images.trust} alt="" />
            </div>
            <div>
              <h1 className="text-[20px] font-semibold items-center">
                Trusted by 10000+ students
              </h1>
              <p>
                Our students are working in TCS,IBM, Accenture, HCL, CTS,
                Infosys, Capgemini and many more...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F8FF] p-20 font-['Poppins']">
        <div className="flex justify-center  ">
          <h1 className="text-[24px] font-semibold">
            Make Waves in Your Career with
            <span className="text-[#00AEFF]"> Ocean Academy</span>
          </h1>
        </div>

        <div className="flex gap-10 justify-center mt-20">
          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[250px] h-[250px] p-6">
            <div className="bg-[#D9F1FF] p-6 rounded-full flex items-center justify-center mb-4">
              <img src={images.training_project} alt="" />
            </div>
            <h2 className="text-gray-700 font-semibold text-lg">
              Training With Project
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[250px] h-[250px] p-6">
            <div className="bg-[#D9F1FF] p-6 rounded-full flex items-center justify-center mb-4">
              <img src={images.trainer} alt="" />
            </div>
            <h2 className="text-gray-700 font-semibold text-lg">
              Expert Trainers
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[250px] h-[250px] p-6">
            <div className="bg-[#D9F1FF] p-6 rounded-full flex items-center justify-center mb-4">
              <img src={images.flexible_class} alt="" />
            </div>
            <h2 className="text-gray-700 font-semibold text-lg">
              Flexible Class Timing
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[250px] h-[250px] p-6">
            <div className="bg-[#D9F1FF] p-6 rounded-full flex items-center justify-center mb-4">
              <img src={images.certification} alt="" />
            </div>
            <h2 className="text-gray-700 font-semibold text-lg">
              Certification Partner
            </h2>
          </div>
        </div>

        <div className="flex gap-10 justify-center mt-20">
          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[250px] h-[250px] p-6">
            <div className="bg-[#D9F1FF] p-6 rounded-full flex items-center justify-center mb-4">
              <img src={images.weekly_assesment} alt="" />
            </div>
            <h2 className="text-gray-700 font-semibold text-lg">
              Weekly Assessment
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[250px] h-[250px] p-6">
            <div className="bg-[#D9F1FF] p-6 rounded-full flex items-center justify-center mb-4">
              <img src={images.cost_effective} alt="" />
            </div>
            <h2 className="text-gray-700 font-semibold text-lg">
              Cost Effective Learning
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[250px] h-[250px] p-6">
            <div className="bg-[#D9F1FF] p-6 rounded-full flex items-center justify-center mb-4">
              <img src={images.resume} alt="" />
            </div>
            <h2 className="text-gray-700 font-semibold text-lg">
              Resume Building
            </h2>
          </div>
        </div>

        <div className=" ml-66 gap-10 mt-25 bg-[#D9F1FF] rounded-2xl shadow-lg w-7xl h-44 p-6  items-center flex leading-relaxed ">
          <div className="flex flex-col items-center justify-center bg-linear-to-t from-[#0E90CF] to-[#a7e2ff] rounded-2xl shadow-lg  w-[130px] h-[120px] p-6">
            <img src={images.dev} alt="" />
          </div>
          <div>
            <h1 className="text-[20px] font-semibold items-center">
              Technical Skill Development
            </h1>
            <p className="mt-5 text-[#5C5454]">
              Transforming classroom knowledge into career-ready expertise
              through guided, <br />
              hands-on learning.
            </p>
          </div>
          <div className="ml-auto">
            <button className="flex items-center justify-center gap-2 rounded-xl shadow-lg w-[270px] h-[50px] px-6 bg-linear-to-r from-[#a7e2ff] to-[#0E90CF] text-white font-semibold">
              Technical Training <FaArrowRightLong />
            </button>
          </div>
        </div>
      </section>

      <section className="font-['Poppins'] p-10 flex flex-col items-center justify-center gap-10 bg-[#F6F9FA]">
        <div className="text-center">
          <h1 className="text-[24px] text-[#0E90CF] font-semibold">
            Placed Students
          </h1>
        </div>

        <div className="bg-[#D9F1FF] rounded-2xl shadow-lg w-lg p-6 items-center flex leading-relaxed justify-center">
          <h1 className="text-[20px] font-semibold text-center">
            Successful Non-IT to IT Career Switch <br />
            <span className="text-[#00AEFF]">3000 +</span>
          </h1>
        </div>

        <div className="bg-[#D9F1FF] rounded-2xl shadow-lg w-lg p-6 items-center flex leading-relaxed justify-center">
          <h1 className="text-[20px] font-semibold text-center">
            Successful Non-IT to IT Career Switch <br />
            <span className="text-[#00AEFF]">3000 +</span>
          </h1>
        </div>
      </section>
    </>
  );
}

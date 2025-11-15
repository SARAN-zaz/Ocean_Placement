import images from "../../assets/Images";



export default function Methodology() {
  const steps = [
    {
      id: 1,
      title: "Enrollment",
      description: "Sign up and choose your desired course track.",
      image: images.Enrollment,
      alt: "Enrollment",
    },
    {
      id: 2,
      title: "Learn & Practice",
      description:
        "Master skills through hands-on projects and mentorship.",
      image: images.learn,
      alt: "Learning",
    },
    {
      id: 3,
      title: "Build Portfolio",
      description:
        "Create impressive projects to showcase your expertise.",
      image: images.Portfolio,
      alt: "Portfolio",
    },
    {
      id: 4,
      title: "Get Hired",
      description:
        "Land your dream job with our placement support.",
      image: images.Hired,
      alt: "Hired",
    },
  ];

  return (
    <section className="mt-10 mb-10 w-[90%] max-w-[1200px] mx-auto ">
      {/* Heading Section */}
      <div className="text-center">
        <p className="sm:text-xl font-semibold bg-linear-to-r from-[#0E90CF] via-[#0E90CF] to-[#217098] bg-clip-text text-transparent">Our Methodology</p>
        <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[24px] font-semibold mt-1">
          Your Journey to Success
        </h1>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
          A streamlined path from{" "}
          <span className="text-[#00AEFE]">learning to earning</span>
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-wrap justify-center items-center gap-10  md:gap-0 mt-16">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            {/* Step Card */}
            <div className="flex flex-col items-center text-center w-[220px] sm:w-[250px]">
              <div className="relative">
                <div className="bg-[#E6F4FF] rounded-full w-28 h-28 flex items-center justify-center">
                  <img src={step.image} alt={step.alt} className="h-14" />
                </div>
                <div className="absolute -top-5 -right-3 bg-[#00AEFF] text-white text-[14px] sm:text-[16px] font-semibold w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                  {step.id}
                </div>
              </div>

              <h2 className="mt-4 text-[18px] font-semibold text-gray-900">
                {step.title}
              </h2>
              <p className="text-gray-500 text-[14px] leading-relaxed mt-2">
                {step.description}
              </p>
            </div>

            {/* Arrow (Hide after last step) */}
            {index !== steps.length - 1 && (
              <div className="hidden lg:flex items-center justify-center mb-20 ">
                <img src={images.Arrow} alt="Arrow" className="w-15 " />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

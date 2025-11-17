import images from "../../assets/Images";

const DeveloperSection = () => {
  const stats = [
    { img: images.Book, label: "Questions", value: "500+" },
    { img: images.students, label: "Students", value: "50K+" },
    { img: images.technology, label: "Technologies", value: "10+" },
    { img: images.success, label: "Success Rate", value: "95%" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 py-12 max-w-[1200px] w-[90%] mx-auto">

      <div className="md:w-1/2 max-w-[600px]">
        <h1 className=" text-[30px] font-semibold mb-4 w-full text-4xl  bg-linear-to-r from-[#00AEFF] via-[#0070A4] to-[#006899] bg-clip-text text-transparent">
          Elevate Your Technical Skills
        </h1>

        <p className="mb-6 text-[#5C5A5A] text-[16px] leading-8 ">
          Our comprehensive technical training programs combine hands-on
          projects, expert mentorship, and real-world scenarios to prepare you
          for success in the tech industry. From foundational programming to
          advanced frameworks, we’ve got you covered.
        </p>

      <button
  className="
    bg-linear-to-r from-[#00AEFF] via-[#0070A4] to-[#006899]
    text-white font-semibold px-5 py-3 rounded-lg flex items-center gap-2 
    shadow-md mt-13 transition-all duration-300 
    hover:scale-[1.05] hover:shadow-[0_10px_25px_rgba(0,174,255,0.4)]
    active:scale-[0.97] cursor-pointer
  "
>
  <img
    src={images.developer}
    alt=""
    className="w-5 h-5 transition-transform duration-300 group-hover:scale-125 hover:rotate-6"
  />
  Project Innovation Hub
</button>

      </div>



<div className="grid grid-cols-2 gap-8 w-full md:w-1/2 max-w-[500px]">
  {stats.map((item, index) => (
    <div
      key={index}
      className="
        group bg-[#D9E8FF] flex flex-col justify-center items-start p-5 gap-3
        rounded-2xl shadow-sm aspect-[1.5/1] transition-all duration-300
        ring-0 ring-[#00A8FF]/0 hover:ring-[3px] hover:ring-[#00A8FF]/70
      "
    >
      {/* Icon Wrapper */}
      <div
        className="
          w-12 h-12 flex justify-center items-center rounded-xl bg-white
          shadow-sm ring-0 ring-[#00A8FF]/0 transition-all duration-300 
          group-hover:ring-2 group-hover:ring-[#00A8FF]/70 group-hover:scale-110
        "
      >
        <img
          src={item.img}
          alt={item.label}
          className="w-[26px] h-[26px] transition-transform duration-300 group-hover:scale-125"
        />
      </div>

      <p className="text-gray-700 text-sm tracking-wide">{item.label}</p>
      <h1 className="text-2xl font-bold text-[#000000]">{item.value}</h1>
    </div>
  ))}
</div>





    </div>
  );
};

export default DeveloperSection;

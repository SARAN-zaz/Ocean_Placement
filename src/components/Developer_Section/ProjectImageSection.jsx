import images from "../../assets/Images";

const ProjectImageSection = () => {
  const projects = [
    { src: images.ProjectOne, title: "Task Management System" },
    { src: images.ProjectTwo, title: "Appointment Scheduling App" },
    { src: images.ProjectThree, title: "Restaurant Booking Website" },
    { src: images.ProjectFour, title: "Student Information System (SIS)" },
    { src: images.ProjectFive, title: "E-commerce Website" },
    { src: images.ProjectSix, title: "Real Estate Listing Website" },
    { src: images.ProjectSeven, title: "Portfolio Website" },
    { src: images.ProjectEight, title: "Job Portal Platform" },
    { src: images.ProjectNine, title: "Online Learning Dashboard" },
    { src: images.ProjectTen, title: "Fitness Tracking App" },
  ];

  return (
    <section className="py-16">
      <div
        className="
          max-w-[1600px] w-[95%] mx-auto p-8 rounded-2xl 
          shadow-[0_10px_30px_rgba(0,0,0,0.15)]
          bg-white
        "
      >
        <div
          style={{ height: "700px", overflowY: "auto", overflowX: "visible", padding: "10px" }}
        >
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
              gap-x-10 gap-y-16
            "
            style={{ overflow: "visible" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  group text-center bg-white rounded-xl cursor-pointer 
                  transition-all duration-300 p-4
                  border border-transparent
                  shadow-[0_5px_15px_rgba(0,0,0,0.10)]
                  hover:shadow-[0_12px_25px_rgba(0,0,0,0.20)]
                  hover:border-[#00AEFF]
                  hover:scale-[1.015]
                "
                style={{ overflow: "visible" }}
              >
                <div className="w-full h-[260px] overflow-visible rounded-lg">
                  <img
                    src={project.src}
                    alt={project.title}
                    className="
                      w-full h-full object-contain  
                      transition-transform duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                <h1 className="mt-5 text-[20px] font-semibold text-[#00AEFF]">
                  {project.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          width: 10px;
        }
        div::-webkit-scrollbar-thumb {
          background-color: #00aeff;
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background-color: #0092d3;
        }
        div::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default ProjectImageSection;

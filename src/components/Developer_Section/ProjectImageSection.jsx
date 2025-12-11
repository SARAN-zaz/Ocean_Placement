import { useNavigate } from "react-router-dom";
import { ProjectData } from "../../data/ProjectData";

const ProjectImageSection = () => {
  const navigate = useNavigate();

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
          style={{
            height: "700px",
            overflowY: "auto",
            overflowX: "visible",
            padding: "10px",
          }}
        >
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
              gap-x-10 gap-y-16
            "
          >
            {Object.entries(ProjectData).map(([key, project]) => (
              <div
                key={project.id}
                onClick={() => navigate(`/project/${key}`)}
                className="group text-center bg-white rounded-xl cursor-pointer ..."
              >
                <div className="w-full h-[260px] overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.about.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h1 className="mt-5 text-[20px] font-semibold text-[#00AEFF]">
                  {project.about.title}
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

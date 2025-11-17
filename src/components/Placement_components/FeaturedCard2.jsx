import images from "../../assets/Images";
import { featuredData } from "./fetureddata2";

export default function FeaturedCard2() {
  const cardColors = ["#fee2e2", "#cffafe", "#e2e8f0",];
  return (
    <section className="relative min-h-fit bg-gradient-to-tr to-pink-50  via-purple-50  from-blue-50 overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10">
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-pulse"></div>
        
        
      </div>

      {/* CONTENT */}
      <section className="max-w-[1200px] mx-auto w-[80%] pt-3 pb-10 relative z-10">
        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt px-6">
          {featuredData.map((item,index) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[200px] h-[210px] p-6 hover:scale-105 transition-transform duration-300"
            >
              <div
                className="p-6 rounded-full flex items-center justify-center mb-3"
                style={{
                  backgroundColor: cardColors[index % cardColors.length],
                }}
              >
                <img
                  src={images[item.img]}
                  alt={item.title}
                  className="w-10 object-contain"
                />
              </div>

              <h2 className="text-[18px] text-[#000000] font-medium text-center">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

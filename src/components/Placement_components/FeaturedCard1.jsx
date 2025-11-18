import images from "../../assets/Images";
import { featuredData } from "./featureData1";

export default function FeaturedCard1() {
  const cardColors = ["#f3e8ff", "#d1fae5", "#dbeafe", "#ffedd5"];

  return (
    <section className="relative min-h-fit bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 overflow-hidden ">
      {/* Mesh Gradient Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-pulse"></div>
      </div>

      {/* MAIN CONTENT */}
      <section className="max-w-[1200px] mx-auto w-[80%] pb-10 relative z-10">
        <div className="flex justify-center text-center pt-[50px]">
          <h1 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold">
            Make Waves in Your Career with{" "}
            <span className="bg-linear-to-r from-[#0E90CF] via-[#0E90CF] to-[#217098] bg-clip-text text-transparent">
              Ocean Academy
            </span>
          </h1>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-10 px-6">
          {featuredData.map((item, index) => (
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

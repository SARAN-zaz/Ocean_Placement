
import images from "../../assets/Images";
import { featuredData } from "./featureData1";

export default function FeaturedCard1() {
  return (
    <section className="bg-[#F0F8FF]">
      <section className="max-w-[1200px] mx-auto w-[80%] pb-10">
        
        <div className="flex justify-center text-center pt-[50px]">
          <h1 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold">
            Make Waves in Your Career with{" "}
            <span className="bg-linear-to-r from-[#0E90CF] via-[#0E90CF] to-[#217098] bg-clip-text text-transparent">
              Ocean Academy
            </span>
          </h1>
        </div>

        {/* MAPPING CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mt-10 px-6">
          {featuredData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg w-[220px] h-[220px] p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-[#D9F1FF] p-6 rounded-full flex items-center justify-center mb-3">
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

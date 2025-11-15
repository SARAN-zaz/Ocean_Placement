
import images from "../../assets/Images";
import { featuredData } from "./fetureddata2";

export default function FeaturedCard2() {
  return (
    <section className="bg-[#F0F8FF]">
      <section className="max-w-[1200px] mx-auto w-[80%] pb-10">

        {/* MAPPING CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt px-6">
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

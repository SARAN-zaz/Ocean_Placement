// import images from "../../assets/Images";


export default function Placementstats() {
  return (
    <section className=" bg-white">
      <section className=" max-w-[1200px] mx-auto w-[80%]">
        <div className="py-10">
          <h1 className="bg-linear-to-r from-[#0E90CF] via-[#0E90CF] to-[#217098] bg-clip-text text-transparent text-[30px] font-semibold text-center">
            Placed Students
          </h1>

          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-5">
            <div className="bg-[#D9F1FF] rounded-2xl shadow-lg w-full sm:w-[300px] md:w-[400px] lg:w-[450px] p-6  border-l-12 border-[#0E90CF]">
              <h1 className="text-[20px] sm:text-[22px] md:text-[20px] font-semibold leading-relaxed">
                Successful Non-IT to IT Career Switch <br />
                <span className="text-[#00AEFF] text-[24px] md:text-[26px] font-bold">
                  3000 +
                </span>
              </h1>
            </div>

            {/* Card 2 */}
            <div className="bg-[#D9F1FF] rounded-2xl shadow-lg w-full sm:w-[300px] md:w-[400px] lg:w-[450px] p-6  border-l-12 border-[#0E90CF]">
              <h1 className="text-[20px] sm:text-[22px] md:text-[20px] font-semibold leading-relaxed">
                Students Placed in Top IT Companies <br />
                <span className="text-[#00AEFF] text-[24px] md:text-[26px] font-bold">
                  1500 +
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

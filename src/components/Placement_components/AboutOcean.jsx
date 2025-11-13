import { images } from "../../assets/images";

export default function AboutOcean() {
  return (
    <section className="flex flex-col justify-center  bg-[#F6F9FA] pt-[50px] p-4 ">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 bg-[#F6F9FA]  w[80%] mx-auto max-w-[1200px]">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className=" sm:text-xl font-semibold text-[#00aeff] ">
            About ocean
          </p>
          <h1 className="text-[24px] md:text-[35px] font-semibold">
            Empowering Futures with{" "}
            <span className="text-[#00AEFF]">Innovative Education</span>
          </h1>
          <p className="text-[#5c5a5a] text-sm sm:text-base leading-relaxed mt-10  ml-0 lg:ml-10">
            As a Training and placement cell, We enhance student careers through
            various strategic initiatives aimed at improving employability and
            facilitating successful transitions into the professional world.
            Through guiding and supporting students in their journey from
            academia to industry. We understand the importance of bridging the
            gap between education and employment, and our mission is to
            facilitate this transition seamlessly for our students. <br /> <br /> You can
            expect from our Training & Placement Cell is coding, communication
            skills, problem-solving, leadership, teamwork, and industry-specific
            knowledge. Get in touch with us to explore how we can collaborate
            and create opportunities for growth and success together!
            Encouraging lifelong learning is essential in today's rapidly
            evolving job market.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={images.GettingStarted}
            alt="Home image"
            className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[550px] lg:h-[500px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

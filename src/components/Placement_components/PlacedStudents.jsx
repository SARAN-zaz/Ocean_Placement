import { images } from "../../assets/images";

export default function PlacedStudents() {
  const studentList = [
    {
      name: "Hemanth",
      role: "MERN Stack",
      company: "NOVAC Technologies Solution",
      img: images.hemanth,
    },
    {
      name: "Aswin G",
      role: "Flutter, UI/UX Designing",
      company: "Enterprise Minds",
      img: images.Aswin,
    },
    {
      name: "Kowsalya L",
      role: "Intensive Internship Program",
      company: "Cognizant Careers",
      img: images.Kowsalya,
    },
    {
      name: "Thamizharasan",
      role: "Java Fullstack",
      company: "Inspirisys Solutions Limited",
      img: images.thamizharasan,
    },
    {
      name: "BHAVANI R",
      role: "Java Full Stack",
      company: "Kumaran System",
      img: images.Bhavani,
    },
    {
      name: "GOPINATH S",
      role: "Meanstack Development",
      company: "Kyyba",
      img: images.Gopinath,
    },
    {
      name: "Subramanian Porselvan",
      role: "MEAN Stack",
      company: "Cloudologix",
      img: images.porselvan,
    },
    {
      name: "Sathish V",
      role: "Python Fullstack",
      company: "Tentacle Technology",
      img: images.Sathish,
    },
    {
      name: "Madhan D",
      role: "UI/UX Designing",
      company: "Schopiq Automation",
      img: images.Madhan,
    },
    {
      name: "SHIEK SHAMS NUSARAT N",
      role: "Java Full Stack",
      company: "Kumaran System",
      img: images.Shiek,
    },
    {
      name: "Iyyanar M",
      role: "Python Fullstack",
      company: "Kosoft IT Solutions Pvt.ltd",
      img: images.Iyyanar,
    },
    {
      name: "ARTHI H",
      role: "Mernstack Development",
      company: "CloudBees Tech",
      img: images.Arthi,
    },
    {
      name: "Wasim Aslam",
      role: "Python Fullstack",
      company: "Tentacle Technology",
      img: images.Profile,
    },
    {
      name: "Ashwin G",
      role: "Python Full Stack",
      company: "Nimbus Systems Private Limited",
      img: images.Profile,
    },
    {
      name: "Imran B",
      role: "Flutter, Figma, MERN Stack",
      company: "SAFATECH",
      img: images.Profile,
    },
    {
      name: "Kavinila J",
      role: "Java, MERN Stack",
      company: "Hexaware Technologies",
      img: images.Profile,
    },
    {
      name: "Ajay Kumar D",
      role: "Java Full Stack",
      company: "Societe Generale",
      img: images.Profile,
    },
    {
      name: "Pushpaja G",
      role: "Python Full Stack",
      company: "Societe Generale global solutions",
      img: images.Profile,
    },
  ];

  const firstRow = studentList.slice(0, 6);
  const secondRow = studentList.slice(6, 12);
  const thirdRow = studentList.slice(12, 18);

  return (
    <section className="bg-[#F0F8FF] py-10">
      <div className="flex flex-col items-center justify-center gap-10 max-w-[1300px] mx-auto w-[80%]">
        <MovingRow data={firstRow} reverse={false} />
        <MovingRow data={secondRow} reverse={true} />
        <MovingRow data={thirdRow} reverse={false} />
      </div>

  
      <style jsx global>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .scroll-left {
          animation: scrollLeft 40s linear infinite;
          will-change: transform;
        }

        .scroll-right {
          animation: scrollRight 40s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}


function MovingRow({ data, reverse }) {
  const cards = [...data, ...data]; 

  return (
    <div className="w-full overflow-hidden">
      <div
        className={`flex gap-6 whitespace-nowrap ${
          reverse ? "scroll-right" : "scroll-left"
        }`}
      >
        {cards.map((student, i) => (
          <StudentCard key={i} student={student} />
        ))}
      </div>
    </div>
  );
}


function StudentCard({ student }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl shadow-md p-4 min-w-[280px] sm:min-w-[320px] hover:scale-105 transition-transform duration-300">
      <img
        src={student.img}
        alt={student.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-gray-800 text-[16px]">
          {student.name}
        </h3>
        <p className="text-gray-600 text-[14px] font-bold">{student.role}</p>
        <p className="text-gray-400 text-[13px] font-semibold wrap-break-word">
          {student.company}
        </p>
      </div>
    </div>
  );
}

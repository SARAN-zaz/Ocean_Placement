import images from "../../assets/Images";

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
      img: images.Wasim,
    },
    {
      name: "Ashwin G",
      role: "Python Full Stack",
      company: "Nimbus Systems Private Limited",
      img: images.Ashwin,
    },
    {
      name: "Imran B",
      role: "Flutter, Figma, MERN Stack",
      company: "SAFATECH",
      img: images.Imran,
    },
    {
      name: "Kavinila J",
      role: "Java, MERN Stack",
      company: "Hexaware Technologies",
      img: images.Kavinila,
    },
    {
      name: "Ajay Kumar D",
      role: "Java Full Stack",
      company: "Societe Generale",
      img: images.Ajay,
    },
    {
      name: "Pushpaja G",
      role: "Python Full Stack",
      company: "Societe Generale global solutions",
      img: images.Pushpaja,
    },

    {
      name: "Loubna",
      role: "Python Full Stack",
      company: "Hexaware",
      img: images.Loubna,
    },
    {
      name: "Mathew Alexander",
      role: "Python Full Stack",
      company: "VCODEWONDERS",
      img: images.Mathew,
    },
    {
      name: "Priyatharshini A S",
      role: "Python Full Stack",
      company: "Trinite Digital",
      img: images.Priyatharshini,
    },

  ];

  // Split into five rows (6 cards per row)
  const firstRow = studentList.slice(0, 6);
  const secondRow = studentList.slice(6, 12);
  const thirdRow = studentList.slice(12, 18);
  const fourthRow = studentList.slice(18, 24);
  const fifthRow = studentList.slice(24, 30);

  return (
    <section className="bg-[#F0F8FF] py-10 ">
      <div className="flex flex-col items-center justify-center gap-10 max-w-[1300px] mx-auto w-[80%]">
        <MovingRow data={firstRow} reverse={false} />
        <MovingRow data={secondRow} reverse={true} />
        <MovingRow data={thirdRow} reverse={false} />
        <MovingRow data={fourthRow} reverse={true} />
        <MovingRow data={fifthRow} reverse={false} />
      </div>

      <style jsx global>{`
        /* animate half the width (because we duplicate the content),
           so the end of the first copy flows perfectly into the start of the second. */
        @keyframes scrollLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .moving-row {
          width: 100%;
          overflow: hidden;
        }

        .moving-row > .inner {
          display: flex;
          gap: 1.5rem; /* matches gap-6 */
          align-items: center;
          /* do not wrap - keep as a single inline strip */
          white-space: nowrap;
          /* prevent text/image reflow */
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        /* The anim class will be applied to the inner strip. Use CSS var --duration for speed. */
        .anim-left {
          animation: scrollLeft var(--duration, 40s) linear infinite;
        }

        .anim-right {
          animation: scrollRight var(--duration, 40s) linear infinite;
        }

        /* Pause on hover to inspect cards */
        .moving-row:hover > .inner {
          animation-play-state: paused;
        }

        /* Reduce motion preference respect */
        @media (prefers-reduced-motion: reduce) {
          .anim-left,
          .anim-right {
            animation: none !important;
            transform: none !important;
          }
        }

        /* Student card tweaks: prevent shrinking/calc differences */
        .student-card {
          flex: 0 0 auto; /* very important: don't let card widths change */
          min-width: 280px;
          /* match your existing styles (Tailwind used in JSX too) */
        }
      `}</style>
    </section>
  );
}

/* MovingRow component: calculates a duration based on number of items so speed feels consistent */
function MovingRow({ data, reverse }) {
  if (!data || data.length === 0) return null;

  // Base speed (seconds) per card — tweak this to taste.
  const secondsPerCard = 6; // lower = faster, higher = slower
  const duration = Math.max(18, data.length * secondsPerCard); // ensure a sensible minimum

  // Duplicate once and animate -50% to create a seamless loop
  const cards = [...data, ...data];

  return (
    <div className="moving-row">
      <div
        className={`inner ${reverse ? "anim-right" : "anim-left"}`}
        style={{ ["--duration"]: `${duration}s` }}
      >
        {cards.map((student, i) => (
          <StudentCard key={`${student.name}-${i}`} student={student} />
        ))}
      </div>
    </div>
  );
}

function StudentCard({ student }) {
  return (
    <div className="student-card flex items-center gap-4 bg-white rounded-2xl shadow-md p-4 hover:scale-105 transition-transform duration-300 ">
      <img
        src={student.img}
        alt={student.name}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-gray-800 text-[16px]">
          {student.name}
        </h3>
        <p className="text-gray-600 text-[14px] font-bold">{student.role}</p>
        <p className="text-gray-500 text-[13px] font-semibold break-words">
          {student.company}
        </p>
      </div>
    </div>
  );
}

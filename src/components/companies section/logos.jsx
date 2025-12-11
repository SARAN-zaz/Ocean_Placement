import images from "../companies section/photos/images";

export const companyLogos = [
  { id: 1, image: images.CAPGEMINI },
  { id: 2, image: images.COGNIZANT },
  { id: 3, image: images.ESALES },
  { id: 4, image: images.FORD },
  { id: 5, image: images.HCL },
  { id: 6, image: images.HEXAWARE },
  { id: 7, image: images.INFOSYS },
  { id: 8, image: images.LENOVO },
  { id: 9, image: images.SOCIETE },
  { id: 10, image: images.TCS },
  { id: 11, image: images.VIRTUSA },
  { id: 12, image: images.CLOUDOLOGIX },
  { id: 13, image: images.VECTOR },
  { id: 14, image: images.INSPIRISYS },
  { id: 15, image: images.NOVAC },
  { id: 16, image: images.KOSOFT },
  { id: 17, image: images.TENTACLE },
  { id: 18, image: images.KYYBA },
  { id: 19, image: images.CLOUDLOGIC },
  { id: 20, image: images.SAFA },
  { id: 21, image: images.ROADMAP },
  { id: 22, image: images.DELOITTE },
  { id: 23, image: images.UNISYS },
];

// Utility: split into N roughly-equal chunks (preserves order)
function chunkArray(arr, n) {
  const out = Array.from({ length: n }, () => []);
  arr.forEach((item, i) => {
    out[i % n].push(item);
  });
  return out;
}

// Split into 3 unique groups (no overlap)
const [row1Items, row2Items, row3Items] = chunkArray(companyLogos, 3);

// Duplicate each row's own subset for seamless scrolling (no repeats across rows)
const row1 = [...row1Items, ...row1Items];
const row2 = [...row2Items, ...row2Items];
const row3 = [...row3Items, ...row3Items];

export default function Logos() {
  return (
    <section className="py-10">
      <h2 className="bg-linear-to-r from-[#034E72] to-[#00AEFF] py-6 px-10 text-white text-2xl">
        Companies Logo:
      </h2>

      <div className="text-center max-w-3xl mx-auto mt-6">
        <h3 className="bg-gradient-to-r from-primary via-[#0E90CF] to-[#08618d] bg-clip-text text-transparent sm:text-title text-[22px] font-medium">
          Our students works at
        </h3>

        <p className="text-[#5C5454] text-[14px] sm:text-[16px] mt-2 px-3">
          We not only enlighten students with our knowledge but also help
          develop their careers. Our students have grabbed placement in various
          firms and MNCs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 mt-10">
        {/* ROW 1 */}
        <div className="overflow-hidden">
          <div
            className="flex items-center gap-3"
            style={{
              animation: "scrollLeft var(--duration, 40s) linear infinite",
            }}
          >
            {row1.map((item, i) => (
              <div
                key={`r1-${i}-${item.id}`}
                className="flex items-center justify-center bg-white p-2 mx-2"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-16 w-30 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 (reverse direction for visual interest) */}
        <div className="overflow-hidden">
          <div
            className="flex items-center gap-3"
            style={{
              animation:
                "scrollLeftReverse var(--duration, 50s) linear infinite",
            }}
          >
            {row2.map((item, i) => (
              <div
                key={`r2-${i}-${item.id}`}
                className="flex items-center justify-center bg-white p-2 mx-2"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-16 w-30 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3 */}
        <div className="overflow-hidden">
          <div
            className="flex items-center gap-3"
            style={{
              animation: "scrollLeft var(--duration, 45s) linear infinite",
            }}
          >
            {row3.map((item, i) => (
              <div
                key={`r3-${i}-${item.id}`}
                className="flex items-center justify-center bg-white p-2 mx-2 "
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-16 w-30 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS: move to global stylesheet if desired */}
      <style jsx global>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollLeftReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .max-w-7xl .flex {
          min-width: max-content;
        }

        
        }
      `}</style>
    </section>
  );
}

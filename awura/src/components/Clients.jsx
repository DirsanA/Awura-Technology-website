import c1 from "../assets/clients/c1.png";
import c2 from "../assets/clients/c2.png";
import c3 from "../assets/clients/c3.png";
import c4 from "../assets/clients/c4.png";
import c5 from "../assets/clients/c5.png";
import c6 from "../assets/clients/c6.png";
import c7 from "../assets/clients/c7.png";
import c8 from "../assets/clients/c8.png";
import c9 from "../assets/clients/c9.png";
import c10 from "../assets/clients/c10.png";
import c11 from "../assets/clients/c11.png";
import c12 from "../assets/clients/c12.png";

const Clients = () => {
  const clientLogos = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12];

  return (
    <div className="relative py-12 overflow-hidden">
      <h2 className="my-8 text-white text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Clients
      </h2>
      <div className="flex justify-center items-center">
        <p className="mt-0 lg:mt-4 px-4 lg:px-0 max-w-3xl text-neutral-400 text-base sm:text-lg text-center leading-relaxed tracking-wide">
          We are proud to serve a wide range of clients across multiple
          industries. Our customer base includes leading enterprises, dynamic
          small businesses, and innovative start-ups. We are committed to
          delivering tailored solutions that exceed the expectations of every
          client we work with.
        </p>
      </div>

      <div className="relative mx-[6%] mt-8 w-[88%] overflow-hidden">
        <div className="flex gap-4 animate-scroll">
          {clientLogos.map((logo, i) => (
            <img
              key={i}
              className="bg-slate-100 p-4 rounded-full w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 object-contain"
              src={logo}
              alt={`Client Logo ${i + 1}`}
            />
          ))}
        </div>
        {/* Gradient overlays */}
        <div className="top-0 left-0 absolute bg-gradient-to-r from-slate-900 via-black/50 to-transparent w-[6%] h-full pointer-events-none"></div>
        <div className="top-0 right-0 absolute bg-gradient-to-l from-slate-900 via-black/50 to-transparent w-[6%] h-full pointer-events-none"></div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Clients;

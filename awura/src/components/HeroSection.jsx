import { motion } from "framer-motion";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/videoss.mp4";
import awuraHero from "../assets/awuraHero.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-4 lg:mt-[-30px] px-6 lg:px-16 pt-0">
      {/* Hero Section */}
      <div className="items-center gap-4 grid grid-cols-1 lg:grid-cols-2 w-full">
        <h1 className="mt-4 lg:mt-0 font-extrabold text-4xl lg:text-6xl lg:text-left text-center leading-tight">
          Every problem is an{" "}
          <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-red-800 text-transparent">
            opportunity
          </span>{" "}
          for a <span className="typing-effect">solution</span>
        </h1>
        {/* Hero Image with animation */}
        <motion.img
          className="hidden lg:block mx-auto w-[80%] max-w-md lg:max-w-lg"
          src={awuraHero}
          alt="Hero"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      <p className="mt-3 lg:mt-[-100] px-4 lg:px-0 max-w-3xl text-neutral-300 text-base sm:text-lg text-center leading-relaxed tracking-wide">
        Awura is a tech company that is focused on finding tech solutions based
        on innovation and creativity, striving to drive positive change in
        various industries through cutting-edge technologies.
      </p>

      {/* Blinking Down Arrow Button */}
      <div className="flex justify-center my-7">
        <a
          href="#"
          className="relative bg-gradient-to-r from-orange-500 to-orange-800 mx-3 px-4 py-3 rounded-md"
        >
          <span className="text-white text-xl"></span>
          <div className="absolute inset-0 flex justify-center items-center">
            <svg
              className="mt-2 w-6 h-6 text-white animate-bounce"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </a>
      </div>

      {/* Video Intro Section - Videos in One Row (50% each on larger screens) */}
      <div className="flex justify-center mt-10">
        <motion.video
          autoPlay
          loop
          muted
          className="shadow-orange-400 shadow-sm mx-2 my-4 border border-orange-700 rounded-lg w-1/2"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        <motion.video
          autoPlay
          loop
          muted
          className="shadow-orange-400 shadow-sm mx-2 my-4 border border-orange-700 rounded-lg w-1/2"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </div>
  );
};

export default HeroSection;

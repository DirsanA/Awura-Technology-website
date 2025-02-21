import { features } from "../constants";

const Service = () => {
  return (
    <div className="relative mt-20 border-neutral-800 border-b min-h-[800px]">
      <div className="text-center">
        <span className="bg-transparent from-orange-500 to-red-600 shadow-md px-4 py-2 rounded-full h-8 font-bold text-orange-500 text-sm uppercase hover:scale-105 transition-all duration-200 transform">
          &#8595;
        </span>

        <h2 className="mt-10 lg:mt-20 text-3xl sm:text-5xl lg:text-6xl tracking-wide">
          Services We{" "}
          <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-800 text-transparent">
            Provide
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex justify-center items-center bg-neutral-900 mx-6 p-2 rounded-full w-10 h-10 text-orange-700">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="mb-20 p-2 text-md text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

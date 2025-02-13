import { products } from "../constants/index"; // Adjust path accordingly

const Products = () => {
  return (
    <div className="mt-40">
      <h2 className="my-8 text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Our Software Products
      </h2>
      <h3 className="hidden lg:flex justify-center mb-5 text-3xl text-center">
        Selected Success Stories
        <span className="ml-2 text-orange-500">From Our Project Portfolio</span>
      </h3>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-neutral-800 shadow-lg hover:shadow-2xl p-6 rounded-xl h-[500px] overflow-hidden text-center hover:scale-105 transition-transform transform"
          >
            {/* Image Wrapper */}
            <div className="flex justify-center items-center rounded-lg w-full h-56 overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="max-w-full max-h-full object-contain hover:scale-110 transition-transform transform"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col flex-grow justify-between">
              <h3 className="mt-4 font-bold text-white text-2xl">
                {product.title}
              </h3>
              <p className="mt-2 text-neutral-400">{product.desc}</p>
              <a
                href={product.href}
                className="inline-block bg-orange-600 hover:bg-orange-700 mt-4 px-5 py-2 rounded-lg text-white transition cursor-pointer"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

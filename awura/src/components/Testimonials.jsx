import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="my-10 lg:my-20 text-3xl sm:text-5xl lg:text-6xl text-center">
        What People are Saying
      </h2>
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col bg-neutral-900 p-6 border border-neutral-800 rounded-md font-thin text-md"
          >
            <p className="flex-grow">{testimonial.text}</p>
            <div className="flex items-start mt-8">
              <img
                className="mr-4 border border-neutral-300 rounded-full w-12 h-12"
                src={testimonial.image}
                alt=""
              />
              <div>
                <h6>{testimonial.user}</h6>
                <span className="font-normal text-neutral-600 text-sm italic">
                  {testimonial.company}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

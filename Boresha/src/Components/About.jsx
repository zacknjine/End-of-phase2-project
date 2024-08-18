import React from 'react';

const About = () => {
  return (
    <div className="relative bg-main-pattern bg-cover">
      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="bg-[#edeceb] sm:min-h-[600px] sm:grid sm:place-items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-5 p-6 sm:p-16">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif text-[#083c0b]">
                ABOUT US
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#083c0b]">
                At Boresha French Beans, we're passionate about helping farmers streamline their operations and make data-driven decisions.
              </p>
            </div>
            <div className="flex justify-center sm:justify-end">
              <img
                src="/src/Components/Images/side.jpg"
                alt="About Us"
                className="w-full h-auto max-w-xs sm:max-w-md lg:max-w-lg rounded drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
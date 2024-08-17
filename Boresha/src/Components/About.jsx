import React from 'react';

const About = () => {
  return (
    <div className= "relative bg-main-pattern bg-cover">
      <div className= "container max-w-full mx-auto px-4">
        <div className= "bg-[#edeceb] sm:min-h-[600px] sm:grid sm:place-items-center py-10">
          <div className= "grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className= "space-y-5 sm:p-16 pb-6">
              <h1 data-aos="fade-up" className= "text-5xl sm:text-7xl font-bold font-serif text-[#083c0b]">
                ABOUT US
              </h1>
              <p data-aos="fade-up" className= "text-2xl text-[#083c0b]">
                At Boresha French Beans, we're passionate about helping farmers streamline their operations and make data-driven decisions.
              </p>
            </div>
            <div className= "flex justify-center sm:justify-end">
              <div data-aos="slide-right" data-aos-duration="1500">
                <img
                  src="/src/Components/Images/side.jpg"
                  alt="About Us"
                  className= "sm:scale-125 sm:translate-x-11 max-h-[500px] rounded drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

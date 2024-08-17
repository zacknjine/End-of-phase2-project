import React from 'react';

const MoreInfo = () => {
  return (
    <div className="relative bg-main-pattern bg-cover">
      <div className="container mx-auto">
        <div className="bg-[#edeceb] text-[#1b3838] sm:min-h-[600px] sm:grid sm:place-items-center py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
            <div data-aos="slide-right" data-aos-duration="1500">
              <img
                src="/Images/farm.jpg"
                alt="Farm"
                className="sm:scale-125 sm:-translate-x-11 max-h-[700px]"
              />
            </div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1 data-aos="fade-up" className="text-5xl sm:text-7xl font-bold font-serif">
                What do we do?
              </h1>
              <p data-aos="fade-up" className="text-3xl">
                At Boresha French Beans, we help small and large-scale farmers to achieve accountability through accurate farm records.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;

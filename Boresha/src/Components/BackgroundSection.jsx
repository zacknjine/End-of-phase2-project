import React from 'react';

const BackgroundSection = () => {
  return (
    <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/Images/background.jpg)' }}>
      <header className="text-white flex items-center justify-center h-full px-4 text-center">
        <div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">Transparency is here!</h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-4">
            Unlocking better and scalable solutions to French beans farm records keeping. <br />
            Support farmers to grow better futures through regenerative agriculture.
          </p>
        </div>
      </header>
    </div>
  );
};

export default BackgroundSection;
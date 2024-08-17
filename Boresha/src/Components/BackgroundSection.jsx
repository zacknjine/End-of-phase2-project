import React from 'react';


const BackgroundSection = () => {
  return (
    <div
      className="w-full h-screen pt-10 rounded bg-cover bg-center"
      style={{ backgroundImage: 'url(/Images/background.jpg)' }}
    >
      <header className="text-white flex items-center justify-center h-full">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="text-8xl font-sans font-bold">Transparency is here!</h1>
          <p className="text-3xl font-sans font-semibold pt-4">
            Unlocking better and scalable solutions to French beans farm records keeping.
            <br />
            Support farmers to grow better futures through regenerative agriculture.
          </p>
        </div>
      </header>
    </div>
  );
};

export default BackgroundSection;

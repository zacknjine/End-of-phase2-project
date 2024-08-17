import React from 'react';

const Cards = () => {
  return (
    <div className= "bg-[#1b3838] text-white py-3 px-3">
      <div className= "container">
        <div className= "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {/* First Column (Our Story) */}
          <div className= "bg-dark/50 flex items-center justify-center">
            <div className= "text-center p-4 bg-dark h-full flex flex-col justify-center">
              <h1 className= "text-2xl font-bold">Our Story</h1>
              <p className= "mt-2">
                Boresha French Beans was founded by Zack, a farmer with a passion for technology and innovation. 
                After struggling to find a suitable solution for managing his own farm's records, Zack decided to 
                create his own platform. With the help of a team of experienced developers and industry experts, 
                we've created a platform that is designed specifically for farmers, by farmers.
              </p>
            </div>
          </div>
          
          {/* Second Column (Our Values) */}
          <div className= "h-full">
            <div className= "text-center p-4 bg-dark h-full flex flex-col justify-center">
              <h1 className= "text-2xl font-bold">Our Values</h1>
              <p className= "mt-2">
                At Boresha French Beans, we're committed to the following values:
                <br />Simplicity: We believe that farm management software should be easy to use, 
                even for those who aren't tech-savvy.
                <br />Accuracy: We're committed to providing accurate and reliable data to help farmers 
                make informed decisions.
              </p>
            </div>
          </div>
          
        
          <div className="h-full">
            <div className="text-center p-4 bg-dark h-full flex flex-col justify-center">
              <h1 className="text-2xl font-bold">Our Mission</h1>
              <p className="mt-2">
                Our mission is to make it easy for farmers like you to track and manage your farm's activities, 
                from planting and harvesting to sales and marketing. We believe that by leveraging technology, 
                we can help farmers reduce costs, increase efficiency, and improve their overall profitability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

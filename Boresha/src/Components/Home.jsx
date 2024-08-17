import React from 'react';
import image from './Images/image.jpg';
import side from './Images/side.jpg';
import farm from './Images/farm.jpg';
import farming from './Images/farming.jpeg';
import Cards from './Cards';
import About from './About'

const HomePage = () => {
  return (
    <div className= "bg-cover bg-center min-h-screen flex flex-col" style={{ backgroundImage: `url(${image})` }}>
      {/* Main Welcome Section */}
      <div className= "flex-grow flex items-center justify-center">
        <h1 className= "text-white text-5xl font-bold bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
          Welcome to Boresha French Beans
        </h1>
      </div>

      {/* Card Section */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg h-auto hover:shadow-xl transform transition hover:scale-105">
            <img src={side} alt="High Quality Beans" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold mb-4">High Quality Records</h2>
            <p>Our websites try to meet the best quality of our records for the sake of accountability of our dear farmers.</p>
          </div>

        
          <div className= "bg-white bg-opacity-80 p-6 rounded-lg shadow-lg h-auto hover:shadow-xl transform transition hover:scale-105">
            <img src={farm} alt="Sustainable Farming" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Convenient record keeping</h2>
            <p>We offer easy an easy to use website even for farmers who are not tech-savvy.</p>
          </div>

        
          <div className= "bg-white bg-opacity-80 p-6 rounded-lg shadow-lg h-auto hover:shadow-xl transform transition hover:scale-105">
            <img src={farming} alt="Fair Trade Practices" className="w-full h-40 object-cover rounded-md mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Community Support</h2>
            <p>We support local farmers and ensure regenerative agriculture by preventing losses due to lack of good record-keeping.</p>
          </div>
        </div>
      </div>

    
      <Cards />
      

      
      <footer className= "bg-black bg-opacity-50 text-white py-4">
        <div className= "container mx-auto text-center">
          <p>&copy; 2024 Boresha French Beans. All rights reserved.</p>
          <p>Contact us at info@boreshafrenchbeans.com</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
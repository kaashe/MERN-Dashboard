import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <img src="https://img.freepik.com/free-vector/app-development-concept-with-programming-languages_23-2148688949.jpg?t=st=1717152701~exp=1717156301~hmac=58cf91e073441bd01c1d6f799889cccd81f1185c209d62f56234d2e3893e3c33&w=740" alt=" Service 1" className="w-64 h-64 rounded-lg mb-4 md:mb-0 " />
          <div className="flex flex-col justify-center md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <ul className="list-disc space-y-2">
              <li className="text-gray-700">E-Commerce web plateforms</li>
              <li className="text-gray-700">Health records and CMS</li>
              <li className="text-gray-700">Shopify</li>
            </ul>
            <p className="text-gray-700 mt-4">
              We are dedicated to providing exceptional services to meet your needs.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 mt-12">
          <div className="flex flex-col justify-center md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="list-disc space-y-2">
              <li className="text-gray-700">Experienced and Skilled Team</li>
              <li className="text-gray-700">High-Quality Workmanship</li>
              <li className="text-gray-700">Competitive Rates</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Let us help you achieve your goals. Contact us today!
            </p>
          </div>
          <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1717156685~exp=1717160285~hmac=0ad0cd6abfe2346262fde3820192c3d9b41c052085ea990c248f607898ce9c14&w=1380" alt=" Service 1" className="w-64 h-64 rounded-lg mb-4 md:mb-0 " />
        </div>

        <a href="/contact" className="inline-block bg-blue-600 text-white text-lg font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 mt-8">
          Get in Touch
        </a>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; Copyright 2024</p>
      </footer>
    </div>
  );
};

export default Home;

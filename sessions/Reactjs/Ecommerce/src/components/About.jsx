import React from 'react';

const About = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-[70vh] bg-white px-2 mt-[50px]">
        <div className="bg-blue-50 rounded-xl shadow-lg p-8 w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">About Us</h1>
          <p className="text-gray-700 text-lg mb-4 text-center">
            Welcome to <span className="font-bold text-blue-600">Ecomm</span>! We are dedicated to providing you with the best online shopping experience.
          </p>
          <p className="text-gray-600 mb-4">
            Our platform offers a wide range of products, from electronics and fashion to home essentials and more. We believe in quality, affordability, and customer satisfaction.
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold text-blue-600">Why shop with us?</span>
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Vast selection of top-quality products</li>
            <li>Secure and easy payment options</li>
            <li>Fast and reliable delivery</li>
            <li>24/7 customer support</li>
            <li>Easy returns and refunds</li>
          </ul>
          <p className="text-gray-600">
            Thank you for choosing <span className="font-bold text-blue-600">Ecomm</span>. We look forward to serving you!
          </p>
        </div>
      </div>
      <footer className="bg-blue-100 text-gray-700 py-6 mt-8">
        <div className="max-w-2xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-2 md:mb-0 text-center md:text-left">
            <span className="font-bold text-blue-600 text-lg">Ecomm</span> &copy; {new Date().getFullYear()}<br />
            Your trusted online shopping partner.
          </div>
          <div className="text-center md:text-right text-sm">
            <div>Email: support@ecomm.com</div>
            <div>Phone: +1 234 567 8901</div>
            <div>123 Ecomm Street, Shop City, Country</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;

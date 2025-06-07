import React from 'react';

const Contact = () => {
  return (
   <>
    <div className="flex items-center justify-center min-h-[70vh] mt-[50px] bg-white">
      <div className="bg-blue-50 rounded-xl shadow-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Contact Us</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Your Message"
            className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[100px]"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold py-2 rounded hover:from-blue-700 hover:to-blue-500 transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>Email: support@ecomm.com</p>
          <p>Phone: +1 234 567 8901</p>
          <p>123 Ecomm Street, Shop City, Country</p>
        </div>
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

export default Contact;

import React from 'react';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();


 const handleClick = () => {

    navigate('/Presentation');

 };
 return (
    <div className="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold text-center text-gray-900">Welcome to HomeSphere</h1>
          <p className="text-center mt-6 text-gray-600">Simplifiez Votre Vie Domestique</p>
          <button onClick={handleClick} className="mt-8 px-4 py-2 text-gray-900 bg-gradient-to-r from-cyan-400 to-light-blue-500 rounded-md">Learn More</button>
        </div>
      </div>
    </div>
 );
};

export default HomePage;
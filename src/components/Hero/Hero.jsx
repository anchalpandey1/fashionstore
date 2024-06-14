import React from 'react';
import h1 from '../../assets/hero/h1.png';
import h2 from '../../assets/hero/h2.png';
import h3 from '../../assets/hero/h3.png';
import h4 from '../../assets/hero/h4.png';

const Hero = () => {
  return (
    <div className="relative h-screen  justify-center bg-[#D8E6F8] rounded-br-[50%]">
        <div className="flex flex-wrap justify-center p-10 gap-20">
        <div className="flex flex-col items-center cursor-pointer">
          <div
            className="w-40 h-40 bg-cover bg-center rounded-full"
            style={{ backgroundImage: `url(${h1})` }}
          ></div>
          <p className="mt-2 text-center font-bold text-3xl text-[#767070]">Fashion</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div
            className="w-40 h-40 bg-cover bg-center rounded-full"
            style={{ backgroundImage: `url(${h2})` }}
          ></div>
          <p className="mt-2 text-center font-bold text-3xl text-[#767070]">Electronics</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div
            className="w-40 h-40 bg-cover bg-center rounded-full "
            style={{ backgroundImage: `url(${h3})` }}
          ></div>
          <p className="mt-2 text-center font-bold text-3xl text-[#767070]">Home & Furniture</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <div
            className="w-40 h-40 bg-cover bg-center rounded-full cursor-pointer"
            style={{ backgroundImage: `url(${h4})` }}
          ></div>
          <p className="mt-2 text-center font-bold text-3xl text-[#767070]">Beauty</p>
        </div>
      </div>
      <div className=" text-center mt-20">
        <p className="text-center font-bold text-2xl text-[#767070]">Shop from the comfort of your fingertips, where every click brings joy to your doorstep</p>
      </div>
    </div>
  );
};

export default Hero;

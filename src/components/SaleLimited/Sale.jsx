import React from 'react';
import s1 from '../../assets/sale/s1.png';
import s2 from '../../assets/sale/s2.png';

const Sale = () => {
  return (
    <div className="h-1/2 flex items-center justify-center bg-gradient-to-r from-[#74EBD5] to-[#ACB6E5] p-2">
      <div className="flex items-center justify-between flex-1">
        <img className="w-80 h-100  object-contain ml-20" src={s1} alt="Left Image" />
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-black ">   Sale is now live<br></br>
          Limited Period Offer</h2>
         
        </div>
        <img className="w-80 h-100  object-contain mr-20" src={s2} alt="Right Image" />
      </div>
    </div>
  );
};

export default Sale;

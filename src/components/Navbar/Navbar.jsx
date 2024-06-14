import React, { useState } from 'react';
import img1 from '../../assets/logo.png';
import img2 from '../../assets/profile.png';
import img3 from '../../assets/bag.png';
import img4 from '../../assets/heart.png';
import { Link, useNavigate } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';



const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleBagClick = () => {
        navigate('/bag');
    };
    const handleWishlistClick = () => {
        navigate('/wishlist');
    };
    return (
        <>
            <div className='hidden font-SulphurPoint px-10 lg:flex justify-between items-center text-white bg-[#D8E6F8]'>
                <Link to='/'>
                    <img className='w-[200px] h-[90px]' src={img1} alt="Logo" />
                </Link>
                <div className='flex items-center justify-center flex-1'>
                    <SearchBox />
                </div>
                <div className='text-[20px] font-[400] flex gap-6 items-center'>
               
                    <div className='p-5 flex gap-6 justify-between relative'>
                   
                  {/* dropdownbox code */}
                    {isDropdownOpen && (
                            <div className='absolute top-12 right-0 w-86 bg-white rounded-md shadow-lg z-50'>
                                <ul>                                  
                                <li 
                                        className='px-4 py-2 text-black font-bold text-2xl cursor-pointer' 
                                      
                                    >
                                       Welcome                                       
                                    </li>
                                    <p className='px-4 text-black  whitespace-nowrap'>
                                        To access account and manage orders
                                    </p>
                                    <li className='ml-4 w-34 mt-2  border text-[#A21D3C] font-bold border-black cursor-pointer text-center'>
                                    LOGIN / SIGNUP
                                    </li>
                                    <hr className='border-t border-gray-300 my-2' />
                                    <li 
                                        className='px-4 py-1 font-bold text-black cursor-pointer'                                       
                                    >
                                      Orders
                                    </li>
                                    <li 
                                        className='px-4 py-1 font-bold  text-black cursor-pointer'                                       
                                    >
                                       Wishlist
                                    </li>
                                    <li 
                                        className='px-4 py-1 font-bold  text-black cursor-pointer'                                         
                                    >
                                      Help Center
                                    </li>
                                    <li 
                                        className='px-4 py-1 font-bold  text-black cursor-pointer'                                         
                                    >
                                     Chatbot
                                    </li>
                                    <li 
                                        className='px-4 py-1 font-bold  text-black cursor-pointer'                                         
                                    >
                                      Save Address
                                    </li>
                                    <li 
                                        className='px-4 py-1 font-bold  text-black cursor-pointer'                                        
                                    >
                                      Edit Profile
                                    </li>
                                    <li 
                                        className='px-4 py-1 font-bold  text-black cursor-pointer'                                        
                                    >
                                      Contact us
                                    </li>
                                  
                                </ul>
                            </div>
                        )}

                        <img 
                            className='w-[30px] h-[30px] cursor-pointer' 
                            src={img2} 
                            alt="Icon 1" 
                            // here dropdownbox code used
                            onClick={toggleDropdown}               
                        />
                       
                        <img 
                            onClick={handleBagClick} 
                            className='w-[30px] h-[30px] cursor-pointer' 
                            src={img3} 
                            alt="Icon 2" 
                        />
                     
                       
               
                        <img 
                            onClick={handleWishlistClick} 
                            className='w-[30px] h-[30px] cursor-pointer' 
                            src={img4} 
                            alt="Icon 3" 
                        />
                    </div>
                  
                </div>
            </div>
        </>
    );
};

export default Navbar;

import React from 'react'
import Logo from '../assets/logo.png'
import { useState } from 'react'
import {FiX, FiMenu} from 'react-icons/fi'



const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar =() => setIsOpen(false);

  return (
    <div className='flex items-center justify-between'>
        <div className="flex flex-shrink-0 items-center">
          <img src={Logo} className='mx-2 md:w-35 w-24' alt="logo" />
        </div>
        <div  className='md:flex space-x-4 text-xl hidden list-none'>
          <li><a href="">Home</a></li>
          <li><a href="" className='text-brandDark'>About Us</a></li>
          <li><a href="" className='text-brandDark'>Flavor</a></li>
          <li><a href="" className='text-brandDark'>Contact</a></li>
        </div>

        <div className='md:hidden cursor-pointer z-50' onClick={toggleNavbar}> 
          {isOpen ? <FiX className='text-brandBg' size={28}/> :<FiMenu size={28}/>}
        </div>
       <div className= {`md:hidden fixed sm:w-1/2 top-0 p-8 right-0 h-full w-3/4 bg-white transition-all ease-in-out transform duration-500 ${isOpen ? 'translate-x-0 opacity-100 ': 'translate-x-full opacity-0 '}`}>
       <ul className=' space-y-6 text-lg flex flex-col '>

          <li><a href="" onClick={closeNavbar} className='text-brandBg'>Home</a></li>
          <li><a href="" onClick={closeNavbar} className='text-brandBg'>About Us</a></li>
          <li><a href="" onClick={closeNavbar} className='text-brandBg'>Flavor</a></li>
          <li><a href="" onClick={closeNavbar} className='text-brandBg'>Contact</a></li>
          </ul>
       </div>

    </div>
  )
}

export default Navbar
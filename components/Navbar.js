import {Link} from 'react-scroll'
import Image from 'next/image'
import { useState } from 'react';
import logo from '../public/logo.svg'
import 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faClose, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Navbar(props) {
  const [toggle, setToggle] = useState(false);

  return (
         <nav className='w-screen flex justify-between items-center gap-2 p-5 text-light-pink overflow-hidden bg-gradient-to-r from-myPink to-pink-600 sticky top-0 z-50'>
            {/* medium to lg screen  */}
            <Link to="hero" spy={true} smooth={true} offset={-125} duration={500} className="cursor-pointer">
              <Image src={logo} width={125} height={100} alt="logo" />
            </Link>
            {/* primary nav */}
            <div className='hidden md:flex justify-between items-center space-x-4 text-xl pl-4'>
              <span><FontAwesomeIcon icon={faHeart} /></span><Link activeClass='active' to="hero" spy={true} smooth={true} offset={-150} duration={500} className='flex hover:animate-pulse cursor-pointer'>HOME</Link>
              <span><FontAwesomeIcon icon={faHeart} /></span><Link activeClass='active' to="menu" spy={true} smooth={true} offset={-125} duration={500} className='flex hover:animate-pulse cursor-pointer'>MENU</Link>
              <span><FontAwesomeIcon icon={faHeart} /></span><Link activeClass='active' to="products" spy={true} smooth={true} offset={-125} duration={500} className='flex hover:animate-pulse cursor-pointer'>PRODUCTS</Link>
              <span><FontAwesomeIcon icon={faHeart} /></span><Link activeClass='active' to="contact" spy={true} smooth={true} offset={-125} duration={500} className='flex hover:animate-pulse cursor-pointer'>CONTACT</Link>
            </div>
            {/* secondary nav */}
            <div className='flex items-center text-xl ml-auto relative'>
              <button>
                <FontAwesomeIcon icon={faCartShopping} className='light-pink p-2 text-2xl' />
                <div className='w-5 h-5 rounded-full bg-white absolute -top-[5px] -right-[5px] text-myPink flex justify-center items-center text-xs drop-shadow-xl'>
                  {props.cartCount}
                </div>
              </button>
            </div>
            {/* mobile menu button */}
            <div className=''>
              <button className='visible md:hidden p-3 ' onClick={() => {setToggle(!toggle)}}>
                <FontAwesomeIcon icon={faBars} size="xl" />
              </button>
            </div>
            {/* mobile menu */}
            <div className={`fixed h-full top-0 right-0 bg-myPink z-[1000] flex flex-col transition-all ease-in-out duration-700 p-8 ${toggle ? "translate-x-0 " : "translate-x-full"}`}>
              <FontAwesomeIcon icon={faClose} className='text-light-pink mr-auto cursor-pointer' size="2xl" onClick={() => {setToggle(!toggle)}} />
              <div className='flex items-center'>
                <span><FontAwesomeIcon icon={faHeart} className='text-2xl' /></span><Link to="hero" spy={true} smooth={true} offset={-150} duration={500} className='flex py-2 px-4 text-2xl text-light-pink hover:animate-pulse cursor-pointer'>HOME</Link>
              </div>
              <div className='flex items-center'>
                <span><FontAwesomeIcon icon={faHeart} className='text-2xl' /></span><Link to="menu" spy={true} smooth={true} offset={-125} duration={500} className='flex py-2 px-4 text-2xl text-light-pink hover:animate-pulse cursor-pointer'>MENU</Link>
              </div>
              <div className='flex items-center'>
                <span><FontAwesomeIcon icon={faHeart} className='text-2xl' /></span><Link to="products" spy={true} smooth={true} offset={-125} duration={500} className='flex py-2 px-4 text-2xl text-light-pink hover:animate-pulse cursor-pointer'>PRODUCTS</Link>
              </div>
              <div className='flex items-center'>
                <span><FontAwesomeIcon icon={faHeart} className='text-2xl' /></span><Link to="contact" spy={true} smooth={true} offset={-125} duration={500} className='flex py-2 px-4 text-2xl text-light-pink hover:animate-pulse cursor-pointer'>CONTACT</Link>
              </div>
            </div>
         </nav>
  );
}






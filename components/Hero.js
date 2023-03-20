import Image from 'next/image'
import {Link} from 'react-scroll'
import heroImg from '../public/heroIMG.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
    return (
        <div id="hero" className='w-screen h-screen flex flex-col bg-gradient-to-r from-myPink to-pink-600 relative shrink-0 overflow-hidden'>
            <div className='h-screen relative overflow-hidden drop-shadow-xl'>
                <div className='absolute -bottom-24 -right-72 w-[80em] md:w-[85em] lg:w-[95em] md:-right-72 lg:-right-72'>
                    <Image src={heroImg} width={1920} height={1080} className='relative' />
                </div>
                <div className='absolute w-full top-12 left-8 text-light-pink font-ultra flex flex-col gap-4'>
                    <h2 className='text-5xl md:text-6xl lg:text-8xl'>FOR THE<br/>L<FontAwesomeIcon icon={faHeart} />VE OF<br/> PIZZA</h2>
                    <Link to="menu" spy={true} smooth={true} offset={-125} duration={500} className= 'flex justify-center items-center bg-light-pink text-myPink font-sans rounded-full px-8 py-3 text-xl w-52 hover:shadow-myShadow cursor-pointer transition ease-in-out duration-300 delay-150'>
                            Order Online
                            <FontAwesomeIcon icon={faPizzaSlice} className='pl-2' />
                    </Link>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1678087349">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}
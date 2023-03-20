import Image from "next/image"
import {Link} from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faYoutube, faTiktok, faCcPaypal, faCcApplePay, faCcDinersClub, faCcMastercard, faCcVisa, faCcDiscover, faCcAmex, faGooglePay } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <footer className='flex flex-col space-y-4 justify-center items-center w-full relative h-72 bg-gradient-to-r from-myPink to-pink-600 p-5'>
            <div class="custom-shape-divider-top-1678091487">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className='flex items-center space-x-8'>
                    <button>
                        <FontAwesomeIcon icon={faInstagram} size="xl" className='text-light-pink' />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faFacebook} size="xl" className='text-light-pink' />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faTwitter} size="xl" className='text-light-pink' />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faYoutube} size="xl" className='text-light-pink' />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faTiktok} size="xl" className='text-light-pink' />
                    </button>
            </div>
            <div className='flex justify-between space-x-6 text-lg text-light-pink'>
              <Link activeClass='active' to="hero" spy={true} smooth={true} offset={-150} duration={500} className='flex hover:animate-pulse cursor-pointer'>HOME</Link>
              <Link activeClass='active' to="menu" spy={true} smooth={true} offset={-125} duration={500} className='flex hover:animate-pulse cursor-pointer'>MENU</Link>
              <Link activeClass='active' to="products" spy={true} smooth={true} offset={-125} duration={500} className='flex hover:animate-pulse cursor-pointer'>PRODUCTS</Link>
              <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-125} duration={500} className='flex hover:animate-pulse cursor-pointer'>CONTACT</Link>
            </div>
            <div className='flex space-x-4'>
                <FontAwesomeIcon icon={faCcPaypal} size="xl" className='text-light-pink' />
                <FontAwesomeIcon icon={faCcApplePay} size="xl" className='text-light-pink' />
                <FontAwesomeIcon icon={faCcDinersClub} size="xl" className='text-light-pink' />
                <FontAwesomeIcon icon={faCcMastercard} size="xl" className='text-light-pink' />
                <FontAwesomeIcon icon={faCcVisa} size="xl" className='text-light-pink' />
                <FontAwesomeIcon icon={faCcAmex} size="xl" className='text-light-pink' />
                <FontAwesomeIcon icon={faCcDiscover} size="xl" className='text-light-pink' />
                <FontAwesomeIcon icon={faGooglePay} size="xl" className='text-light-pink' />
            </div>
            <p className='text-[10px] text-light-pink'>Copyright &copy; 2023 Valentine&apos;s Pizzeria, all rights reserved.</p>
        </footer>
    )
}
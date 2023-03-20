import Image from "next/image"
import { Parallax } from "react-parallax"
import Carousel from "./Carousel"
import Footer from "./Footer"                                  
import valentine from '../public/valentine.svg'
import spicy from '../public/spicy.svg'
import top100 from '../public/top100.svg'
import mug from '../public/mug.png'
import sauce from '../public/sauce.svg'
import phone from '../public/phone-case.png'
import hat from '../public/hat.svg'

export default function Main(props) {
    return (
        <>
            <main className='w-screen h-auto bg-light-pink'>

                {/* menu section */}
                <section id="menu" className='m-auto w-3/4 py-12'>
                    <div className='flex justify-between items-center border-b-2 border-myPink py-4'>
                        <h1 className="text-6xl text-myPink font-bold">MENU</h1>
                        <div className="flex space-x-6">
                            <div className='flex items-center'>
                                <Image src={valentine} width={50} height={50} alt="mascot" />
                                <p className='text-center'>joey's<br/>favorite</p>
                            </div>
                            <div className='flex items-center'>
                                <Image src={spicy} width={50} height={50} alt="spicy" />
                                <p className='text-center'>spicy</p>
                            </div>
                        </div>
                    </div>
                    <Carousel data={props.data} handleClick={props.handleClick} cartCount={props.cartCount} />
                </section>

                {/* parallax banner */}
                <Parallax bgImage="/parallaxV2.png" bgImageSize="cover" strength={500} bgClassName="object-cover">
                    <div className='py-12 flex justify-center items-center drop-shadow-2xl'>
                        <Image src={top100} width={150} height={150} alt="top 100 banner" />
                    </div>
                </Parallax>

                {/* product section */}
                <section id="products" className='m-auto w-3/4 h-auto py-14'>
                    <h1 className='text-6xl text-myPink font-bold py-4'>PRODUCTS</h1>
                    <div className='flex flex-col h-auto md:grid md:grid-cols-2 md:grid-rows-2  border-2 border-myPink'>
                            <div className='bg-myPink lg:myPink flex justify-center items-center relative group'>
                                <Image src={mug} width={500} className='drop-shadow-2xl' alt="mug with logo" />
                                <button className='transition-all duration-200 bg-gradient-to-tl from-rose-700 via-myRed to-pink-600 bg-size-200 bg-pos-0 hover:bg-pos-100 h-12 text-light-pink font-bold absolute px-8 invisible group-hover:visible bottom-14 rounded-full' onClick={props.handleClick}>
                                    ADD TO CART - $10
                                </button>
                            </div>
                            <div className='bg-light-pink flex justify-center items-center relative group'>
                                <Image src={sauce} width={250} className='drop-shadow-2xl' alt="valentine's secret tomato sauce" />
                                <button className='transition-all duration-200 bg-gradient-to-tl from-rose-700 via-myRed to-pink-600 bg-size-200 bg-pos-0 hover:bg-pos-100 h-12 text-light-pink font-bold absolute px-8 invisible group-hover:visible bottom-14 rounded-full' onClick={props.handleClick}>
                                    ADD TO CART - $6
                                </button>
                            </div>
                            <div className='bg-myPink md:bg-light-pink flex justify-center items-center relative group'>
                                <Image src={hat} width={250} className='drop-shadow-2xl' alt="hat with logo" />
                                <button className='transition-all duration-200 bg-gradient-to-tl from-rose-700 via-myRed to-pink-600 bg-size-200 bg-pos-0 hover:bg-pos-100 h-12 text-light-pink font-bold absolute px-8 invisible group-hover:visible bottom-14 rounded-full' onClick={props.handleClick}>
                                    ADD TO CART - $15
                                </button>
                            </div>
                            <div className='bg-light-pink md:bg-myPink lg:bg-myPink flex justify-center items-center relative group'>
                                <Image src={phone} width={500} className='drop-shadow-2xl' alt="phone case with logo" />
                                <button className='transition-all duration-200 bg-gradient-to-tl from-rose-700 via-myRed to-pink-600 bg-size-200 bg-pos-0 hover:bg-pos-100 h-12 text-light-pink font-bold absolute px-8 invisible group-hover:visible bottom-14 rounded-full' onClick={props.handleClick}>
                                    ADD TO CART - $14
                                </button>
                            </div>
                    </div>
                </section>

                {/* contact section */}
                <section id="contact" className='w-3/4 h-auto m-auto relative py-12'>
                    <h1 className='text-6xl text-myPink font-bold py-4'>CONTACT</h1>
                    <div className='w-full h-full my-4 bg-myPink rounded-2xl p-8'>
                        <form className='flex flex-col justify-center space-y-6 lg:w-10/12 lg:mx-auto'>
                            <div className='sm:space-y-6 md:flex md:space-y-0 md:items-center md:justify-between md:gap-5'>
                                <div className='flex flex-col md:w-1/2'>
                                    <label className='font-bold text-light-pink text-xl mb-2'>Name:</label>
                                    <input className='text-myPink rounded-xl h-12 px-5'></input>
                                </div>
                                <div className='flex flex-col md:w-1/2'>
                                    <label className='font-bold text-light-pink text-xl mb-2'>Email:</label>
                                    <input className='text-myPink rounded-xl h-12 px-5'></input>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <label className='font-bold text-light-pink text-xl mb-2'>Message:</label>
                                <textarea className='text-myPink rounded-xl h-20 p-5'></textarea>
                            </div>
                            <button className='transition-all duration-500 bg-gradient-to-tl from-rose-700 via-myRed to-pink-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-light-pink font-bold w-48 rounded-3xl py-3 px-2 mt-8'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
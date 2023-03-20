import Image from "next/image";
import { Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import joey from '../public/valentine.svg'
import spicy from '../public/spicy.svg'

import { Pagination, Navigation } from "swiper";

export default function Carousel(props) {
    return (
        <>
            <Swiper
                    slidesPerView={1}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    style={{
                        "--swiper-navigation-color": "#FF69B4",
                    }}
                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 20
                        },
                        1600: {
                          slidesPerView: 3,
                          spaceBetween: 20
                        }
                    }}
                >
                {props.data.map((item) => (
                    <SwiperSlide>
                        <div key={item.id} className='flex flex-col shrink-0 py-10 text-center justify-between items-center flex-nowrap'>
                            <Image key={item.id} width={300} height={300} src={item.img} alt="alt" />
                            <div className='py-8'>
                                <p className='flex justify-center items-center text-myRed font-bold'>{item.name} - ${item.price}
                                <span className='pl-2'>
                                    {item.favorite ? <img src="/valentine.svg" width="30px" /> : ""}
                                    {item.spicy ? <img src="/spicy.svg" width="30px" /> : ""}
                                </span>
                                </p>
                                <p className='italic text-red-500'>{item.ingredients}</p>
                            </div>
                            <button className='transition-all duration-500 bg-gradient-to-tl from-rose-700 via-myRed to-pink-600 bg-size-200 bg-pos-0 hover:bg-pos-100 h-12 text-light-pink font-bold px-24 rounded-full' onClick={props.handleClick}>
                                ADD TO CART
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
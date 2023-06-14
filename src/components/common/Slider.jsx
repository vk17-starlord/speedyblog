// Import Swiper React components
import { Swiper } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";



export const Slider = ({children}) => {
  return (
    <Swiper
    modules={[Navigation]}
      className='w-full cursor-pointer '
      spaceBetween={0}
      slidesPerView={2}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
   
   {children}
 
    </Swiper>
  );
};
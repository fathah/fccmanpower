"use client";
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Clients = () => {
   

    const CLIENTS = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png",];
    return (
        <div className='bg-white py-14'>
        <h1 className='text-center text-2xl font-bold text-primary mb-8'>TRUSTED BY</h1>

<Swiper
        spaceBetween={30}
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
         {
                    CLIENTS.map((item, index) => {
                        return (<SwiperSlide><img src={`/images/clients/${item}`} key={index} className="h-20" alt="" /></SwiperSlide>
                            
                        );
                    })
                }


  
      </Swiper>


        </div>
    );
}

export default Clients;
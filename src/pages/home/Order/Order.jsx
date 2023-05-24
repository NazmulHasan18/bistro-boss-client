import { Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Order = () => {
   return (
      <div className="max-w-screen-xl mx-auto">
         <SectionTitle title="Order Online" subTitle="From 11:00am to 10:00pm"></SectionTitle>
         <div className="mb-28">
            <Swiper
               slidesPerView={1}
               centeredSlides={false}
               slidesPerGroupSkip={1}
               grabCursor={true}
               keyboard={{
                  enabled: true,
               }}
               breakpoints={{
                  769: {
                     slidesPerView: 4,
                     slidesPerGroup: 4,
                  },
               }}
               navigation={true}
               pagination={{
                  clickable: true,
               }}
               modules={[Keyboard, Navigation, Pagination]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <img src={slide1} />
                  <h3 className="text-center text-3xl text-white -mt-16 mr-9">Salad</h3>
               </SwiperSlide>
               <SwiperSlide>
                  <img src={slide2} />
                  <h3 className="text-center text-3xl text-white -mt-16 mr-9">Pizza</h3>
               </SwiperSlide>
               <SwiperSlide>
                  <img src={slide3} />
                  <h3 className="text-center text-3xl text-white -mt-16 mr-9">Soups</h3>
               </SwiperSlide>
               <SwiperSlide>
                  <img src={slide4} />
                  <h3 className="text-center text-3xl text-white -mt-16 mr-9">Desserts</h3>
               </SwiperSlide>
               <SwiperSlide>
                  <img src={slide5} />
                  <h3 className="text-center text-3xl text-white -mt-16 mr-9">Salad</h3>
               </SwiperSlide>
               <SwiperSlide>
                  <img src={slide3} />
                  <h3 className="text-center text-3xl text-white -mt-16 mr-9">Soups</h3>
               </SwiperSlide>
               <SwiperSlide>
                  <img src={slide1} />
                  <h3 className="text-center text-3xl text-white -mt-16 mr-9">Salad</h3>
               </SwiperSlide>
               <SwiperSlide>
                  <img src={slide2} />
                  <h3 className="text-center text-3xl text-white -mt-16 mr-9">Pizza</h3>
               </SwiperSlide>
            </Swiper>
         </div>
      </div>
   );
};

export default Order;

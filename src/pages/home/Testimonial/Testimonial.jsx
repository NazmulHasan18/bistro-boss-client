import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import ReviewSlide from "./ReviewSlide";

const Testimonial = () => {
   const [testimonials, setTestimonials] = useState([]);
   useEffect(() => {
      fetch("reviews.json")
         .then((res) => res.json())
         .then((data) => setTestimonials(data));
   }, []);
   return (
      <div className="my-24">
         <SectionTitle title="Testimonials" subTitle="What Our Client Say"></SectionTitle>
         <div>
            <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwipers">
               {testimonials.map((review) => (
                  <SwiperSlide key={review._id}>
                     <ReviewSlide review={review}></ReviewSlide>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default Testimonial;

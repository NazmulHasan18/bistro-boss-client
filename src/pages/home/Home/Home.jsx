import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";
import Recommend from "../Recommend/Recommend";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Home</title>
         </Helmet>
         <Banner></Banner>
         <div className="max-w-[1320px] mx-auto">
            <Order></Order>
            <ChefService></ChefService>
            <Menu></Menu>
            <CallUs></CallUs>
            <Recommend></Recommend>
         </div>
         <Featured></Featured>
         <div className="max-w-[1320px] mx-auto">
            <Testimonial></Testimonial>
         </div>
      </div>
   );
};

export default Home;

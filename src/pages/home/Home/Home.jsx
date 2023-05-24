import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import ChefService from "../ChefService/ChefService";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";
import Recommend from "../Recommend/Recommend";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <div className="max-w-screen-xl mx-auto">
            <Order></Order>
            <ChefService></ChefService>
            <Menu></Menu>
            <CallUs></CallUs>
            <Recommend></Recommend>
         </div>
      </div>
   );
};

export default Home;

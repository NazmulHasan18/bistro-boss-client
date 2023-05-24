import Banner from "../Banner/Banner";
import ChefService from "../ChefService/ChefService";
import Order from "../Order/Order";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Order></Order>
         <ChefService></ChefService>
      </div>
   );
};

export default Home;

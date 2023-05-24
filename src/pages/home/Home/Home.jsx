import Banner from "../Banner/Banner";
import ChefService from "../ChefService/ChefService";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Order></Order>
         <ChefService></ChefService>
         <Menu></Menu>
      </div>
   );
};

export default Home;

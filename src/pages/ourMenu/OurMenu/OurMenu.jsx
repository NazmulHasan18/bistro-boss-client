import { Helmet } from "react-helmet-async";
import PageCover from "../../shared/PageCover/PageCover";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import SectionCover from "../../shared/SectionCover/SectionCover";
import coverImg from "../../../assets/menu/banner3.jpg";
import MenuDisplay from "./MenuDisplay/MenuDisplay";
import dessertSectionImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaSectionImg from "../../../assets/menu/pizza-bg.jpg";
import saladSectionImg from "../../../assets/menu/salad-bg.jpg";
import soupSectionImg from "../../../assets/menu/soup-bg.jpg";

const OurMenu = () => {
   const offered = useMenu("offered");
   const dessert = useMenu("dessert");
   const pizza = useMenu("pizza");
   const salad = useMenu("salad");
   const soup = useMenu("soup");

   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Our Menu</title>
         </Helmet>
         <PageCover title="Our Menu" img={coverImg} subTitle="Would You like to Try A Dish"></PageCover>
         <SectionTitle title="today's offer" subTitle="Don't Miss"></SectionTitle>
         <MenuDisplay items={offered}></MenuDisplay>
         <SectionCover
            img={dessertSectionImg}
            subTitle={
               "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            title={"Dessert"}
         ></SectionCover>
         <MenuDisplay items={dessert}></MenuDisplay>
         <SectionCover
            img={pizzaSectionImg}
            subTitle={
               "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            title={"Pizza"}
         ></SectionCover>
         <MenuDisplay items={pizza}></MenuDisplay>
         <SectionCover
            img={saladSectionImg}
            subTitle={
               "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            title={"Salad"}
         ></SectionCover>
         <MenuDisplay items={salad}></MenuDisplay>
         <SectionCover
            img={soupSectionImg}
            subTitle={
               "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            }
            title={"Soup"}
         ></SectionCover>
         <MenuDisplay items={soup}></MenuDisplay>
      </div>
   );
};

export default OurMenu;

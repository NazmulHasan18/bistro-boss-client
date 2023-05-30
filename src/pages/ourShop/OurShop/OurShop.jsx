import { useEffect, useState } from "react";
import pageCoverImg from "../../../assets/shop/banner2.jpg";
import PageCover from "../../shared/PageCover/PageCover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TabDataLoad from "../TabDataLoad/TabDataLoad";
import { useParams } from "react-router-dom";

const OurShop = () => {
   const { category } = useParams();
   const [loading, setLoading] = useState(true);

   const [categories, setCategories] = useState([]);
   useEffect(() => {
      fetch("http://localhost:3000/category")
         .then((res) => res.json())
         .then((data) => {
            setCategories(data);
            setLoading(false);
         });
   }, []);

   let defaultIndex = categories.indexOf(category);

   if (defaultIndex === -1) {
      defaultIndex = 0;
   }

   if (loading) {
      return <p>Loading....</p>;
   }
   return (
      <div>
         <PageCover
            img={pageCoverImg}
            title={"our shop"}
            subTitle={"Would You Like To Try A Dish?"}
         ></PageCover>
         <div className="max-w-[1320px] mx-auto my-16">
            <Tabs defaultIndex={defaultIndex} onSelect={(index) => console.log(index)}>
               <TabList className="text-center text-xl mb-10">
                  {categories.map((category, index) => (
                     <Tab key={index}>{category}</Tab>
                  ))}
               </TabList>
               {categories.map((category, index) => (
                  <TabPanel key={index}>
                     <TabDataLoad category={category}></TabDataLoad>
                  </TabPanel>
               ))}
            </Tabs>
         </div>
      </div>
   );
};

export default OurShop;

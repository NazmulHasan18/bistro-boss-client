import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import CustomCard from "../../shared/CustomCard/CustomCard";

const Recommend = () => {
   const [recommends, setRecommends] = useState([]);
   useEffect(() => {
      fetch("http://localhost:3000/menu/popular")
         .then((res) => res.json())
         .then((data) => setRecommends(data));
   }, []);

   return (
      <div className="my-20">
         <SectionTitle title="chef recommends" subTitle="Should Try"></SectionTitle>
         <div className="md:grid grid-cols-3">
            {recommends.map((item) => (
               <CustomCard key={item._id} item={item}></CustomCard>
            ))}
         </div>
      </div>
   );
};

export default Recommend;

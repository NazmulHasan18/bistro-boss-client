import useMenu from "../../../hooks/useMenu";
import CustomCard from "../../shared/CustomCard/CustomCard";

const TabDataLoad = ({ category }) => {
   const items = useMenu(category);

   return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {items.map((item) => (
            <CustomCard key={item._id} item={item}></CustomCard>
         ))}
      </div>
   );
};

export default TabDataLoad;

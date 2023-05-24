const MenuItem = ({ menu }) => {
   const { name, recipe, image, price } = menu;
   return (
      <div className="flex gap-5 mb-6">
         <img src={image} className="w-28 h-24 rounded-[200px] rounded-tl-none" alt={name} />
         <div>
            <h5 className="text-xl font-semibold">{name}</h5>
            <p className="text-gray-500">{recipe}</p>
         </div>
         <p className="text-yellow-700">${price}</p>
      </div>
   );
};

export default MenuItem;

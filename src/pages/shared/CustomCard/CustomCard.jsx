const CustomCard = ({ item }) => {
   const { name, image } = item;
   return (
      <div className="card card-compact w-[22rem] rounded-none bg-slate-100">
         <figure>
            <img src={image} alt="Shoes" />
         </figure>
         <div className="card-body items-center text-center w-5/6 mx-auto">
            <p className="card-title text-2xl">{name}</p>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
               <button className="cardButton">Add To Cart</button>
            </div>
         </div>
      </div>
   );
};

export default CustomCard;

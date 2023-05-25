import img from "../../../assets/home/featured.jpg";

const Featured = () => {
   return (
      <div style={{ backgroundImage: `url(${img})` }} className="bg-fixed my-24">
         <div className="bg-black bg-opacity-50 w-full py-28">
            <div className="text-center w-1/3 mx-auto my-12">
               <p className="text-yellow-600 italic">---Check It Out---</p>
               <h4 className="font-inter uppercase text-4xl border-y-4 border-white my-4 py-6 text-white">
                  From Our Menu
               </h4>
            </div>
            <div className="px-72 md:grid grid-cols-2 gap-6 items-center">
               <img src={img} alt="" />
               <div className="text-white">
                  <h3 className="text-xl">March 20, 2023</h3>
                  <h3 className="text-lg">WHERE CAN I GET SOME?</h3>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt
                     dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore
                     consequatur consequuntur omnis ullam maxime tenetur.
                  </p>
                  <button className="btn bg-transparent border-0 border-white text-xl bg-no-repeat border-b-4 mt-6">
                     Read More
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Featured;

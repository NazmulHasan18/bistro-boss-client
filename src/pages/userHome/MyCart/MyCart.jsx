import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useCarts from "../../../hooks/useCarts";

const MyCart = () => {
   const [carts] = useCarts();
   //    const price = carts.reduce((acc, cart) => acc + cart.price, 0);
   const price = carts.reduce((prev, cart) => prev + cart.price, 0);

   return (
      <div>
         <SectionTitle title="Wanna add more" subTitle="My Cart"></SectionTitle>
         <div className="max-w-[973px] mx-auto bg-white p-14">
            <div className="mb-4 flex justify-between">
               <h2 className="text-2xl font-bold">TOTAL ORDER : {carts.length}</h2>
               <h3 className="text-2xl font-bold">TOTAL PRICE : {price}</h3>
               <button className="btn btn-warning">Pay</button>
            </div>
            <div className="overflow-x-auto">
               <table className="table min-w-full">
                  {/* head */}
                  <thead className="bg-[#D1A054] text-xl text-center">
                     <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody className="text-center">
                     {carts.map((cart, index) => (
                        <tr key={cart._id}>
                           <td>{index + 1}</td>
                           <td>
                              <div className="flex items-center space-x-3">
                                 <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                       <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                 </div>
                                 <div className="flex-grow">
                                    <h2 className="font-inter font-semibold">{cart.name}</h2>
                                 </div>
                              </div>
                           </td>
                           <td>${cart.price}</td>

                           <td>
                              <button className="btn btn-ghost btn-xs">Delete</button>
                           </td>
                        </tr>
                     ))}
                     {/* <tr>
                        <th>
                           <label>
                              <input type="checkbox" className="checkbox" />
                           </label>
                        </th>
                        <td>
                           <div className="flex items-center space-x-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img
                                       src="/tailwind-css-component-profile-2@56w.png"
                                       alt="Avatar Tailwind CSS Component"
                                    />
                                 </div>
                              </div>
                              <div>
                                 <div className="font-bold">Hart Hagerty</div>
                                 <div className="text-sm opacity-50">United States</div>
                              </div>
                           </div>
                        </td>
                        <td>
                           Zemlak, Daniel and Leannon
                           <br />
                           <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                           <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                     </tr> */}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default MyCart;

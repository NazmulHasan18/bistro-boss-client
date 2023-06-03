import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const AllUsers = () => {
   const { data: users = [], refetch } = useQuery(["users"], async () => {
      const res = await fetch("http://localhost:3000/users");
      return res.json();
   });

   const handelAdmin = (user) => {
      fetch(`http://localhost:3000/user/admin/${user._id}`, {
         method: "PATCH",
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            refetch();
         });
   };

   return (
      <div className="overflow-x-auto">
         <table className="table w-full text-center my-16">
            <thead>
               <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
               </tr>
            </thead>
            <tbody>
               {users.map((user, index) => (
                  <tr key={index}>
                     <td>{index + 1}</td>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                     <td>
                        {user.role === "admin" ? (
                           "Admin"
                        ) : (
                           <>
                              <button
                                 className="btn btn-sm btn-info text-white text-xl"
                                 onClick={() => handelAdmin(user)}
                              >
                                 <FaUsers></FaUsers>
                              </button>
                           </>
                        )}{" "}
                     </td>
                     <td>
                        <button className="btn btn-sm btn-error text-white text-xl">
                           <FaTrashAlt></FaTrashAlt>
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default AllUsers;

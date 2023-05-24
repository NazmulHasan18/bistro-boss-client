import chefServiceImg from "../../../assets/home/chef-service.jpg";

const ChefService = () => {
   return (
      <div
         className="max-w-screen-xl mx-auto py-24 bg-fixed bg-no-repeat"
         style={{ backgroundImage: `url('${chefServiceImg}')` }}
      >
         <div className="bg-white w-4/5 mx-auto py-20 text-center">
            <h2 className="text-4xl">Bistro Boss</h2>
            <p className="w-2/3 mx-auto">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quod accusantium quaerat iusto
               quae dicta fugit ipsum, quisquam eligendi, nulla magni veniam placeat laborum ullam libero
               earum vel aperiam, tenetur rerum incidunt adipisci suscipit porro. Voluptas tempora omnis quasi
               consequuntur consequatur architecto voluptatibus ad velit aspernatur laboriosam voluptatem,
               necessitatibus asperiores!
            </p>
         </div>
      </div>
   );
};

export default ChefService;

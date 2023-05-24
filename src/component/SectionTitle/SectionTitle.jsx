const SectionTitle = ({ subTitle, title }) => {
   return (
      <div className="text-center w-1/3 mx-auto my-12">
         <p className="text-yellow-600 italic">---{subTitle}---</p>
         <h4 className="font-inter uppercase text-4xl border-y-4 my-4 py-6">{title}</h4>
      </div>
   );
};

export default SectionTitle;

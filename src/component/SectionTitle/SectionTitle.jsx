const SectionTitle = ({ subTitle, title }) => {
   return (
      <div>
         <p className="text-yellow-600">---{subTitle}---</p>
         <h4>{title}</h4>
      </div>
   );
};

export default SectionTitle;

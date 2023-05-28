import { Parallax } from "react-parallax";

const SectionCover = ({ img, title, subTitle }) => {
   return (
      <div>
         <Parallax bgImage={img} bgImageAlt="the cat" strength={400}>
            <div className="hero h-[700px]">
               <div className="hero-content text-center bg-black bg-opacity-50 py-28 text-neutral-content w-[1320px] mx-auto">
                  <div className="max-w-5xl">
                     <h1 className="mb-5 text-6xl uppercase font-semibold">{title}</h1>
                     <p className="mb-5">{subTitle}</p>
                  </div>
               </div>
            </div>
         </Parallax>
      </div>
   );
};

export default SectionCover;

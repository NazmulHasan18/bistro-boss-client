import { Parallax } from "react-parallax";

const PageCover = ({ img, title, subTitle }) => {
   return (
      <div>
         <Parallax bgImage={img} bgImageAlt="the cat" strength={400}>
            <div className="hero h-[800px]">
               <div className="hero-content text-center bg-black bg-opacity-50 py-28 text-neutral-content w-[1320px] mx-auto">
                  <div className="max-w-xl">
                     <h1 className="mb-5 text-8xl uppercase font-bold">{title}</h1>
                     <p className="mb-5 text-2xl font-cinzel">{subTitle}</p>
                  </div>
               </div>
            </div>
         </Parallax>
      </div>
   );
};

export default PageCover;

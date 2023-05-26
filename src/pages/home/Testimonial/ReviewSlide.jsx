import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewSlide = ({ review }) => {
   const { name, details, rating } = review;
   return (
      <div className="text-center w-5/6 mx-auto space-y-6">
         <p className="text-7xl flex justify-center">
            <FaQuoteLeft></FaQuoteLeft>
         </p>
         <Rating style={{ maxWidth: 200 }} value={rating} readOnly className="mx-auto" />
         <p>{details}</p>
         <h4 className="font-inter text-yellow-700 text-3xl">{name}</h4>
      </div>
   );
};

export default ReviewSlide;

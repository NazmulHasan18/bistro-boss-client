import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
   return (
      <footer>
         <div className="md:grid text-center grid-cols-2 gap-0 text-neutral-content">
            <div className="w-full py-24 bg-slate-700 h-full">
               <h3 className="uppercase font-inter text-3xl font-medium mb-5">Contact Us</h3>
               <p>123 ABS Street, Uni 21, Bangladesh</p>
               <p>+88 123456789</p>
               <p>
                  Mon - Fri: 08:00 - 22:00 <br /> Sat - Sun: 10:00 - 23:00
               </p>
            </div>
            <div className="w-full p-24 h-full bg-slate-800 space-y-6">
               <h3 className="uppercase font-inter text-3xl font-medium">Follow Us</h3>
               <p>Join us on Social Media</p>
               <div className="flex text-4xl gap-6 justify-center">
                  <a href="">
                     <FaFacebookF></FaFacebookF>
                  </a>
                  <a href="">
                     <FaInstagram></FaInstagram>
                  </a>
                  <a href="">
                     <FaTwitter></FaTwitter>
                  </a>
               </div>
            </div>
         </div>
         <div className="footer footer-center p-4 bg-black text-white">
            <div>
               <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;

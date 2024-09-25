import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import one from "../../assets/bella/1.jpg";
import two from "../../assets/bella/2.jpg";
import three from "../../assets/bella/33.png";

export const Hero = () => {
  return (
    <div className="mt-6 w-full flex flex-col lg:flex-row p-10 lg:p-0 justify-between items-center gap-12">
      
      <div className="lg:w-[35rem] max-w-screen lg:mt-30 pl-2">
        <h1 className="text-2xl lg:text-[3.5rem] text-[#4a4a4a] font-extrabold font-playfair leading-tight lg:leading-[4rem] pt-6  ">
          Experience the Power of Nature with Our Pure, Skin-Loving Cosmetics.
        </h1>

        <p className="mt-4 lg:font-semibold lg:text-lg ">
          Simple, natural, and effective.
        </p>
        <Link to="/">
          <button className="rounded-md p-4 mt-12 w-full text-black hover:bg-clayBrown text-xl transition-colors duration-200 hover:text-white ">
            Explore
          </button>
        </Link>
      </div>

      
      <div className="relative flex lg:w-[40%] justify-center items-center gap-6 pt-4 ">
        
        <motion.img
          src={one}
          alt="Image 1"
          initial={{ opacity: 0, x: 100, rotate: 6 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.5 }}
          className="w-44 h-64 lg:w-[300px] lg:h-[400px] object-cover shadow-lg transform rotate-[-8deg] rounded-md"
        />

        
        <motion.img
          src={two}
          alt="Image 2"
          initial={{ opacity: 0, x: -100, rotate: -6 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.5 }}
          className="w-44 h-64 lg:w-[300px] lg:h-[400px] object-cover shadow-lg transform rotate-[8deg] rounded-md"
        />

        
        <motion.img
          src={three}
          alt="Image 3"
          className="absolute lg:w-[200px] w-[150px] h-auto lg:ml-[10%] lg:mt-[-2%] mt-[-30%] shadow-lg z-10"
          initial={{ opacity: 0, y: 100, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.8 }}
        />
      </div>
    </div>
  );
};

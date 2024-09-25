import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [products, setProducts] = useState([]);

  // Default product data
  const defaultProducts = [
    { name: "Face Cream", imageUrl: "https://via.placeholder.com/150", price: 20 },
    { name: "Hair Oil", imageUrl: "https://via.placeholder.com/150", price: 15 },
    { name: "Lip Balm", imageUrl: "https://via.placeholder.com/150", price: 5 },
    { name: "Moisturizer", imageUrl: "https://via.placeholder.com/150", price: 25 },
    { name: "Sunscreen", imageUrl: "https://via.placeholder.com/150", price: 30 },
    { name: "Face Mask", imageUrl: "https://via.placeholder.com/150", price: 10 },
    { name: "Body Lotion", imageUrl: "https://via.placeholder.com/150", price: 12 },
    { name: "Perfume", imageUrl: "https://via.placeholder.com/150", price: 50 },
    { name: "Makeup Remover", imageUrl: "https://via.placeholder.com/150", price: 8 },
    { name: "Face Wash", imageUrl: "https://via.placeholder.com/150", price: 10 },
  ];

  // Fetch products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://your-backend-api.com/products");
        setProducts(response.data.length > 0 ? response.data : defaultProducts);
      } catch (err) {
        console.error(err);
        setProducts(defaultProducts);
      }
    };

    fetchProducts();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(results);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 bg-sandyBeige shadow-md transition duration-300 ease-in-out ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-500">
        <i
          className="fa-solid fa-bars text-gray-800 text-2xl cursor-pointer md:hidden"
          onClick={() => setIsSidebarOpen(true)}
        ></i>
        <Link to="/" className="text-3xl font-extrabold text-gray-800 tracking-wide">
          Demam Product
        </Link>
        <div className="flex items-center gap-4 text-gray-800 text-xl">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
          <Link to="/detail" className="text-gray-800">
            <i className="fa fa-user text-xl"></i>
          </Link>
          <i className="fa fa-shopping-bag text-xl text-gray-800 cursor-pointer" onClick={() => console.log("Cart clicked")}></i>
        </div>
      </div>

      {searchTerm && filteredResults.length > 0 && (
        <div className="absolute w-full bg-white shadow-lg rounded-md mt-2 z-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {filteredResults.map((result, index) => (
            <div key={index} className="flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
              <img
                src={result.imageUrl}
                alt={result.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{result.name}</h3>
                <p className="text-gray-600">${result.price}</p>
                <button
                  onClick={() => handleAddToCart(result)}
                  className="mt-2 p-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={`hidden md:flex justify-center items-center bg-sandyBeige py-3 text-lg font-semibold text-gray-800`}>
        <motion.div
          className="flex gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span onClick={() => scrollToSection("hero")} className="cursor-pointer hover:underline transition duration-300">Home</span>
          <span onClick={() => scrollToSection("featured")} className="cursor-pointer hover:underline transition duration-300">Featured</span>
          <span onClick={() => scrollToSection("categories")} className="cursor-pointer hover:underline transition duration-300">Our Products</span>
          <span onClick={() => scrollToSection("about")} className="cursor-pointer hover:underline transition duration-300">About Us</span>
          <span onClick={() => scrollToSection("footer")} className="cursor-pointer hover:underline transition duration-300">Contact Us</span>
        </motion.div>
      </div>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-sandyBeige z-50 flex flex-col items-center justify-center text-2xl p-4"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <motion.i
              className="fa-regular fa-circle-xmark absolute top-6 right-6 text-3xl text-gray-800 cursor-pointer"
              whileHover={{ scale: 1.2, color: "#dc2626" }}
              onClick={() => setIsSidebarOpen(false)}
            ></motion.i>
            {["Face Products", "Hair Products", "All Products", "Accessories", "About Us", "Contact Us"].map(
              (section, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="mb-6 cursor-pointer text-gray-800 hover:underline transition-all duration-300"
                  onClick={() => scrollToSection(section.toLowerCase().replace(" ", ""))}
                >
                  {section}
                </motion.span>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// src/components/SearchPage.js
import { useState, useEffect } from "react";
import axios from "axios"; // Ensure axios is installed: npm install axios

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Default products data
  const defaultProducts = [
    { name: "Face Cream", imageUrl: "/images/face-cream.jpg", price: 15 },
    { name: "Hair Oil", imageUrl: "/images/hair-oil.jpg", price: 12 },
    { name: "Lip Balm", imageUrl: "/images/lip-balm.jpg", price: 5 },
    { name: "Moisturizer", imageUrl: "/images/moisturizer.jpg", price: 20 },
    { name: "Sunscreen", imageUrl: "/images/sunscreen.jpg", price: 18 },
    { name: "Face Mask", imageUrl: "/images/face-mask.jpg", price: 10 },
    { name: "Body Lotion", imageUrl: "/images/body-lotion.jpg", price: 22 },
    { name: "Perfume", imageUrl: "/images/perfume.jpg", price: 50 },
    { name: "Makeup Remover", imageUrl: "/images/makeup-remover.jpg", price: 8 },
    { name: "Face Wash", imageUrl: "/images/face-wash.jpg", price: 6 },
  ];

  // Fetch products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://your-backend-api.com/products");
        setProducts(response.data); // Adjust based on the structure of your response
      } catch (err) {
        setError("Failed to fetch products, using default data.");
        console.error(err);
        // If there's an error, use the default products
        setProducts(defaultProducts);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search for Products</h1>
      <form onSubmit={handleSearchSubmit} className="relative mb-6">
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

      {/* Search Results */}
      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredResults.map((result, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={result.imageUrl}
                alt={result.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{result.name}</h3>
                <p className="text-gray-600">${result.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

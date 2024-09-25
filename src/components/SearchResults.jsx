// src/components/SearchResults.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Sample product data
const products = [
  "Face Cream",
  "Hair Oil",
  "Lip Balm",
  "Moisturizer",
  "Sunscreen",
  "Face Mask",
  "Body Lotion",
  "Perfume",
  "Makeup Remover",
  "Face Wash"
];

export const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (query) {
      const results = products.filter(product =>
        product.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
    }
  }, [query]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results for: "{query}"</h2>
      {filteredResults.length > 0 ? (
        <ul>
          {filteredResults.map((product, index) => (
            <li key={index} className="border-b py-2">
              {product}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

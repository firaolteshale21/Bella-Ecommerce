import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons';
import FooterImage from "../../assets/bella/file.png"; 
import Footer from "../../assets/bella/cleanser.png"; 
import './About.css'; 

export const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fa] text-[#333] font-playfair">
      
      <h1 className="text-4xl md:text-6xl font-bold text-center mt-4 animate-fadeIn">
        About Us
      </h1>

      
      <div className="flex-grow flex flex-col md:flex-row justify-center items-center px-4 md:px-20 mt-6">
        
        <div className="p-4 md:p-12 w-full md:w-[55%] flex flex-col gap-6">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Welcome to Demam
          </h2>
          <div className="text-lg md:text-xl leading-relaxed">
            The word <strong>Demam</strong> translates to a beautiful person, both inside and out, radiating beautiful energy. Our products are more than just skincare; they embody the power of togetherness and beautiful connections between people. With each application, you’re not just pampering yourself, but nourishing the bonds that make life beautiful.
          </div>
        </div>

        
        <div className="relative w-full md:w-[45%] flex justify-center">
          <img
            src={FooterImage}
            alt="Demam Natural Beauty"
            className="h-auto max-h-[400px] w-auto object-cover md:ml-10 animate-fadeIn"
          />
        </div>
      </div>

      
      <div className="px-4 md:px-20 mt-8">
        <h3 className="text-2xl md:text-4xl font-bold">About Demam</h3>
        <div className="flex flex-col gap-4 mt-4">
          <div className="text-lg md:text-xl leading-relaxed">
            Demam is a small, female-owned business focusing on natural beauty products, such as qasil and turmeric face cleansers and masks. Inspired by the age-old beauty remedies of East African women, we draw from traditional practices to nurture and rejuvenate skin, keeping it radiant and healthy.
          </div>
          <div className="text-lg md:text-xl leading-relaxed">
            Our products are locally sourced from Harar, Ethiopia, and are 100% organic. We aim to protect against skin issues caused by oil imbalance, sun damage, and bacteria using non-chemical treatments. Our products are inclusive for everyone, accommodating every skin type.
          </div>
        </div>
      </div>

      
      <div className="px-4 md:px-20 mt-8">
        <h3 className="text-2xl md:text-4xl font-bold">Our Values</h3>
        <div className="text-lg md:text-xl leading-relaxed mt-4">
          We believe in the beauty of nature and the power of connection. Our values are rooted in sustainability, community support, and integrity. We aim to uplift the lives of women and contribute positively to our environment.
        </div>
      </div>

      
      <div className="px-4 md:px-20 mt-8">
        <h3 className="text-2xl md:text-4xl font-bold">Quality</h3>
        <div className="text-lg md:text-xl leading-relaxed mt-4">
          At Demam, quality is paramount. Our products are meticulously crafted from the finest natural ingredients to ensure effectiveness and safety. We adhere to strict quality control measures to guarantee that each product meets our high standards.
        </div>
      </div>

      
      <div className="px-4 md:px-20 mt-8">
        <h3 className="text-2xl md:text-4xl font-bold">Our Mission</h3>
        <div className="text-lg md:text-xl leading-relaxed mt-4">
          Our mission is to empower individuals to embrace their natural beauty while promoting sustainable practices. We are dedicated to creating products that are good for both the skin and the planet, fostering a community that values wellness and connection.
        </div>
      </div>

      
      <div className="bg-[#3e2b22] text-left py-10 mt-8 flex flex-col md:flex-row items-center justify-center px-4">
        <div className="flex flex-col items-center mb-4">
          <img src={Footer} alt="Contact Visual" className="h-20 md:h-48 mb-5 max-w-full mr-0" />
          
      
          <div className="text-[#b1a9a8] text-left text-center">
            <p className="text-lg">Phone: +251966372310</p>
            <p className="text-lg">Email: info.demamproducts@gmail.com</p>
            <p className="text-lg">Address:Mexico Creativ Hub St, Addis Ababa, Ethiopia</p>
            <p className="text-lg">Business Hours: Mon - Fri, 9 AM - 5 PM</p>
          </div>

        
          <div className="flex flex-col items-start mt-4 md:mt-0 pt-3">
            <p className="text-lg mb-4 text-[#b1a9a8]">Follow Us</p>
            <div className="flex justify-center space-x-6">
              <a href="https://www.instagram.com/_demam_" className="text-[#b1a9a8] hover:text-white" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.facebook.com" className="text-[#b1a9a8] hover:text-white" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.tiktok.com/@_demam_" className="text-[#b1a9a8] hover:text-white" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </a>
              <a href="https://t.me/demam_products" className="text-[#b1a9a8] hover:text-white" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTelegram} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <footer className="text-[#b1a9a8] text-center py-4">
        <p className="text-lg">© 2024 Demam Natural Products. All rights reserved.</p>
      </footer>
    </div>
  );
};

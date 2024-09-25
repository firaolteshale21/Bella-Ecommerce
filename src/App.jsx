import { MainRoutes } from "./routes/MainRoutes";
import { UtilProvider, AuthProvider, AuthContext } from "./context";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { About } from "./pages/Home/About";
import { AboutUs } from "./pages/Home/AboutUS.jsx";
import { ProductCard } from "./pages/Home/ProductCard";
import ContactUs from "./pages/Home/ContactUs/ContactUs.jsx"
import {Auth} from "./pages/Auth/Auth.jsx"

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <UtilProvider>
          <Routes>
            {/* <Route path="/auth" element={<Auth />} /> */}
            <Route path="*" element={<MainRoutes />} />
            <Route path='/About' element={<About />}/>
            <Route path='/AboutUs' element={<AboutUs />}/>
            <Route path="/Auth" element={<Auth/>}/>
            <Route path="/ContactUs" element={<ContactUs/>}/>
            <Route path='/ProductCard' element={<ProductCard />}/>
          </Routes>
        </UtilProvider>
      </AuthProvider>
    </Router>
  );
}

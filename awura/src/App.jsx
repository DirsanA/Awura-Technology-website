import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Clients from "./components/Clients";
import Vacancy from "./components/Vacancy";
import "./index.css";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

const AnimatedRoutes = ({
  homeRef,
  servicesRef,
  productsRef,
  testimonialsRef,
}) => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div ref={homeRef}>
                <HeroSection />
              </div>
              <div ref={servicesRef}>
                <Service />
              </div>
              <Workflow />
              <div ref={productsRef}>
                <Products />
              </div>
              <div ref={testimonialsRef}>
                <Testimonials />
              </div>
              <Clients />
            </motion.div>
          }
        />
        <Route
          path="/vacancy"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Vacancy />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  // Refs for each section
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const productsRef = useRef(null);
  const testimonialsRef = useRef(null);

  return (
    <Router>
      <Navbar
        homeRef={homeRef}
        servicesRef={servicesRef}
        productsRef={productsRef}
        testimonialsRef={testimonialsRef}
      />
      <div className="mx-auto pt-11 max-w-7xl">
        <AnimatedRoutes
          homeRef={homeRef}
          servicesRef={servicesRef}
          productsRef={productsRef}
          testimonialsRef={testimonialsRef}
        />
      </div>
      <Footer />
    </Router>
  );
};

export default App;

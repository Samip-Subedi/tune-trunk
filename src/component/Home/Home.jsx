import React, { useEffect } from "react";
import "./Home.css";
import Carousel from "react-material-ui-carousel";
import { getProduct } from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Products/ProductCard";
import Header from "./Header";
import MetaData from "../../more/MetaData";
import Footer from "../../more/Footer";
import BottomTab from "../../more/BottomTab";
import { ToastContainer } from "react-toastify";

// Simple CSS spinner that doesn't require MUI
const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner"></div>
    <p>Loading products...</p>
  </div>
);

const Home = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  // Limit to only 4 featured products
  const featuredProducts = products && products.slice(0, 4);

  return (
    <>
      <MetaData title="Tune Trunk - Nepal's Most Trustable Intrument Provider" />
      <Header />
      
      {loading ? (
        <Spinner />
      ) : (
        <>
          {/* Hero Carousel */}
          <section className="hero-section">
            <Carousel 
              className="hero-carousel"
              indicators={true}
              navButtonsAlwaysVisible={true}
            >
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dt9l5u08d/image/upload/v1751905973/Free_Music_Guitar_Banner_Background_Images_Guitar_Music_Background_Banner_Photo_Background_PNG_and_Vectors_paejnw.jpg"
                  alt="Offer banner"
                  className="carousel-image"
                />
                {/* <div className="carousel-content">
                  <h2>Premium Sunglasses</h2>
                  <p>Protect your eyes in style</p>
                  <a href="#featured-products">
                    <button className="shop-now-btn">Shop Sunglasses</button>
                  </a>
                </div> */}
              </div>
              
              <div className="carousel-item">
                <img
                  src="https://res.cloudinary.com/dt9l5u08d/image/upload/v1751907108/Music_Festival_Cartoon_Grey_Poster_Background_Banner_Music_Festival_Dj_Rock_Background_Image_And_Wallpaper_for_Free_Download_fsi7us.jpg"
                  alt="Banner"
                  className="carousel-image"
                />
                {/* <div className="carousel-content">
                  <h2>Stylish Eyewear</h2>
                  <p>Find your perfect frame</p>
                  <a href="#featured-products">
                    <button className="shop-now-btn">Explore Collection</button>
                  </a>
                </div> */}
              </div>
            </Carousel>
          </section>

          {/* Featured Products - Limited to 4 */}
          <section id="featured-products" className="featured-section">
            <div className="section-header">
              <h2>Featured Products</h2>
              <p>Discover our Most popular choices</p>
            </div>
            
            <div className="products-grid limited">
              {featuredProducts && featuredProducts.length > 0 ? (
                featuredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                <div className="no-products">
                  <p>No products found. Please check back later.</p>
                </div>
              )}
            </div>
          </section>
          
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Home;
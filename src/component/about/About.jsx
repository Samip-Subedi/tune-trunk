import React from "react";
import { useSelector } from "react-redux";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/MetaData";
import "./About.css";
import Footer from "../../more/Footer";

const About = () => {
  const { loading } = useSelector((state) => state.profile);

  const brown = "#5a3e2b";

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="About - Tune Trunk Guitar Shop" />
          <Header />
          <div style={{ width: "90%", margin: "0 auto" }}>
            <div className="about__page" style={{ color: brown }}>
              {/* Introduction Section */}
              <div className="row flex">
                <div className="col__2">
                  <img
                    src="https://res.cloudinary.com/dt9l5u08d/image/upload/v1751732809/A_music_shop_guitar_gbellg.jpg"
                    alt="Guitar Shop Display"
                    style={{ borderRadius: "5px", width: "100%" }}
                  />
                </div>
                <div className="col__2">
                  <div className="meta" style={{ color: brown }}>
                    <span style={{ fontSize: "40px", fontWeight: "700", lineHeight: "1.2" }}>
                      Welcome to Tune Trunk
                    </span>
                    <p>
                      At Tune Trunk, guitars are more than instruments — they’re stories, emotions, and identity. We offer a carefully curated selection of guitars, amps, pedals, and accessories to fit every level, from beginner strummers to pro performers.
                    </p>
                    <p>
                      Whether you're chasing bluesy bends or high-octane shredding, Tune Trunk brings you the tools to create your sound and define your stage.
                    </p>
                  </div>
                </div>
              </div>

              {/* Growing Story Section */}
              <div className="row flex" style={{ marginTop: "40px" }}>
                <div className="col__2">
                  <div className="meta" style={{ color: brown }}>
                    <span style={{ fontSize: "40px", fontWeight: "700", lineHeight: "1.2" }}>
                      Our Growing Story
                    </span>
                    <p>
                      Since 2024, Tune Trunk has become a go-to destination for guitar lovers across Nepal. We started as a small online store with a few classic models, and quickly expanded due to overwhelming demand from passionate musicians.
                    </p>
                    <p>
                      By late 2024, we opened our first physical store in Kathmandu — a vibrant space where gear meets community. Today, we ship to every corner of Nepal, and our collection features over 1000 guitars and accessories.
                    </p>
                    <p>
                      Our mission is simple: empower music creation by making high-quality guitars accessible, affordable, and unforgettable.
                    </p>
                  </div>
                </div>
                <div className="col__2">
                  <img
                    src="https://res.cloudinary.com/dt9l5u08d/image/upload/v1751732586/warren_rhodes___daisy_jones_and_the_six_is3ywu.jpg"
                    alt="Guitar Wall"
                    style={{ borderRadius: "10px", width: "100%" }}
                  />
                </div>
              </div>

              {/* What Makes Us Unique Section */}
              <div className="second" style={{ marginTop: "50px" }}>
                <div className="heading" style={{ color: brown }}>
                  <h2>What Makes Us Unique?</h2>
                </div>
                <div className="row flex">
                  <div className="col__3">
                    <div
                      style={{
                        padding: "10px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px",
                        color: brown,
                      }}
                    >
                      <div className="flex align__items__center justify__content__center image">
                        <img
                          src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg"
                          alt="Guitar Value"
                        />
                      </div>
                      <span>Accessible for All</span>
                      <p>
                        Whether you’re on a tight budget or looking for premium craftsmanship, we stock guitars for all walks of music life.
                      </p>
                    </div>
                  </div>
                  <div className="col__3">
                    <div
                      style={{
                        padding: "10px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px",
                        color: brown,
                      }}
                    >
                      <div className="flex align__items__center justify__content__center image">
                        <img
                          src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg"
                          alt="Guitar Quality"
                        />
                      </div>
                      <span>Crafted with Passion</span>
                      <p >
                        Every guitar is inspected for build, tone, and playability. We believe in quality that inspires confidence and creativity.
                      </p>
                    </div>
                  </div>
                  <div className="col__3">
                    <div
                      style={{
                        padding: "15px",
                        border: "1px solid rgb(0 0 0 / 14%)",
                        minHeight: "230px",
                        color: brown,
                      }}
                    >
                      <div className="flex align__items__center justify__content__center image">
                        <img
                          src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg"
                          alt="Delivery"
                        />
                      </div>
                      <span>Fast & Secure Delivery</span>
                      <p>
                        We ensure guitars are well-packed and delivered safely to your door — wherever you are, ready to plug and play.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Testimonials */}
              <div className="testimonials" style={{ marginTop: "50px", color: brown }}>
                <div className="heading">
                  <h2>What Our Musicians Say</h2>
                </div>
                <div className="testimonial-box">
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Customer 1" />
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>
                    "I bought my first electric guitar from Tune Trunk — the setup was perfect, and the tone was rich. It’s now my go-to store!"
                  </p>
                  <span>- Nirajan D.</span>
                </div>
                <div className="testimonial-box">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Customer 2" />
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>
                    "Amazing service! The team helped me pick the perfect acoustic for my level. I’ve improved faster just because I love playing it!"
                  </p>
                  <span>- ashish T.</span>
                </div>
                <div className="testimonial-box">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Customer 3"
                  />
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <p>
                    "Fast shipping, well-packed gear, and great prices. I’ve already ordered my second pedalboard. Highly recommended!"
                  </p>
                  <span>- Smriti R. A</span>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default About;



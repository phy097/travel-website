import React, { useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
  const getStarted = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <main className="main" id="main">
        <section
          className="section hero"
          style={{ backgroundImage: "url(../media/bg-image.png)" }}
        >
          <h1 className="hero__title">
            Explore the World <br />
            just one Click
          </h1>

          <button onClick={getStarted} className="button button-hero">
            Get Started
          </button>
        </section>

        <section className="section tour container">
          <h3 className="section-title">Popular Tour</h3>

          <div className="tour__container">
            <div className="tour__card">
              <img src="./media/img-1.jpg" alt="" className="tour__card-img" />
              <div className="tour__data">
                <h5 className="tour__data-title">Opera House</h5>
                <span className="tour__data-subtitle">Sidney</span>
              </div>
              <Link to="/tour-package/asd" className="tour__link"></Link>
            </div>
            <div className="tour__card">
              <img src="./media/img-2.jpg" alt="" className="tour__card-img" />
              <div className="tour__data">
                <h5 className="tour__data-title">Eiffel Tower</h5>
                <span className="tour__data-subtitle">Paris</span>
              </div>
              <Link to="/tour-package/asd" className="tour__link"></Link>
            </div>
            <div className="tour__card">
              <img src="./media/img-3.jpg" alt="" className="tour__card-img" />
              <div className="tour__data">
                <h5 className="tour__data-title">Colosseum</h5>
                <span className="tour__data-subtitle">Rome</span>
              </div>
              <Link to="/tour-package/asd" className="tour__link"></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

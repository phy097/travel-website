import React, {useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header/>
      <main className="main" id="main">
      <section
        className="section about-hero"
        style={{backgroundImage: "url(./media/bg-about.jpg)"}}
        id="hero"
      >
        <h1 className="hero__title">About Us</h1>
      </section>

      <section className="section about container">
        <div className="about__container">
          <img className="about__img" src="./media/about-image.jpg" alt="" />

          <div className="about__data">
            <h3 className="about__data-title">2008</h3>
            <p className="about__data-description">
              Consulting represents success at realizing the company is going in
              the wrong direction. The only time the company fails is when it is
              not possibleto do a turnaround anymore. We help companies pivot
              into more profitable directions where they can expand and grow. It
              is inevitable that companieswill end up making a few mistakes; we
              help them correct these mistakes.
            </p>
            <p className="about__data-description">
              Consulting represents success at realizing the company is going in
              the wrong direction. The only time the company fails is when it is
              not possible to do a turnaround anymore. We help companies
            </p>
          </div>
        </div>
      </section>
    </main>

      <Footer/>
    </>
  );
}

export default About;

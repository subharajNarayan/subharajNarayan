import React from 'react';
import About from '../about/About';
import Contact from '../contact/Contact';
import Header from '../header/Header';
import Sidebar from '../sidebar/RightSidebar';
import Technology from '../technology/Technology';
import { Link } from 'react-router-dom';
import Experiences from '../experiences/Experiences';

const Home = () => {

  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<any>();
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <>
      <div className='yellow'>
        <div className='react-tabs'>
          <Header />

          <Sidebar />

          <div className='tab-panel_list'>
            <div className='color-block d-none d-lg-block'></div>
            <div id='home' className={`home react-tabs__tab-panel--selected fadein-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}>
              {/* <div className='home react-tabs__tab-panel--selected' > */}
              <div className='container-fluid main-container container-home p-0 g-0 aos-init aos-animate'>
                <div className='row home-details-container d-flex align-item-center'>
                  <div className='col-lg-3 bg position-absolute d-none d-lg-block'>
                  </div>
                  <div className='col-lg-8 col-12 offset-lg-4 home-details text-lg-start'>
                    <div className='home-details-uppertext'>
                      <h2 className="text-uppercase poppins-font">
                        Hello I'm  <br />
                        <span>
                          Subharaj Narayan Chaudhary
                        </span>
                      </h2>
                      <div className='home-details-language pb-3'>
                        <h4>I am a <span>Frontend React</span> Developer</h4>
                      </div>
                      <div className='home-details-text'>
                        <p>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences,
                          I am passionate about building excellent software that improves the lives of those around me.</p>
                      </div>
                      <div className='home-details-resume'>
                        <Link to="contact-content">
                        <button className='btn btn-primary'>Get In Touch</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='about-section' id='about-content' style={{minHeight: "590px"}}>
              <About />
            </div>
            <div className='technology-section' id='technology-content'>
              <Technology />
            </div>
            <div className='experience-section' id='experience-content'>
              <Experiences />
            </div>
            <div className='contact-section' id='contact-content'>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
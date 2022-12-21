import React from 'react'

type Props = {}

const Experiences = (props: Props) => {

  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<any>();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div className="experience react-tabs__tab-panel--selected" id='experience-content'>
      <div className='container-fluid main-container container-experience g-0 aos-init aos-animate'>
        <div className={`experience-details-heading fade-in-section ${isVisible ? 'is-visible' : ''}`}
          ref={domRef}>
          <h1>My <strong>Experiences</strong></h1>
        </div>
        <div className={`row experience-details-container d-flex align-item-center fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}>
          <div className="col-lg-3 col-12 experience-details text-lg-start">
            Smart Tech
          </div>

          <div className='col-lg-9 col-12 '>
              Solutions
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experiences;
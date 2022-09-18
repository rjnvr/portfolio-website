import React from 'react';


const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class="bx bx-briefcase about__icon"></i>
            <h3 className="about__title"></h3>
            <span className="about__subtitle"></span>
        
              <h3 className="services__modal-title">Screener @Schlegel Villages ⎯ May 2020 - Present</h3>
              <p className="services__modal-description">COVID Screener/Rapid Tester @Schlegel Villages</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Handling various difficult customer interactions achieving  satisfaction on both sides by being able to uncover and solve the client’s needs</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Interacted with a database on a daily basis to keep client’s screening and testing information/visitation history</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Engaged with clients and coworkers daily for screening with excellent interpersonal and communication skills</p>
                </li>
            </ul>
          
        </div>
{/*
        <div className="about__box">
            <i class="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Work Experience</h3>
            <span className="about__subtitle">Screener @Schlegel Villages LTC 2+ Years</span>
        </div>

        <div className="about__box">
            <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Projects here?</h3>
            <span className="about__subtitle">maybe</span>
        </div>
  */}
    </div>
  )
}

export default Info
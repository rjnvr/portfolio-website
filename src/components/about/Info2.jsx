import React from 'react';


const Info2 = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class="bx bx-briefcase-alt about__icon"></i>
            <h3 className="services__modal-title">Screener & Data Entry @ Schlegel Villages</h3>
              <p className="services__modal-description">May 2020 - April 2023</p>
              <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Implemented an automated data entry program, resulting in 85% reduction in downtime previously dedicated
to manual data entry</p>
                </li>
          <br></br>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Handling various difficult customer interactions achieving satisfaction on both sides by being able to uncover and solve the client’s needs</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Interacted with a database on a daily basis to keep client’s screening and testing information/visitation history and
provided continuous user-experience improvement suggestions to developers</p>
                </li>
            </ul>
        </div>
        <div className="about__box">
            <i class="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Certfications</h3>
            <span className="about__subtitle">Google Data Analytics Professional Certification</span>
        </div>
    </div>
  )
}

export default Info2
import React from 'react';


const Info2 = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bxs-home-heart bx-flip-horizontal bx-tada about__icon' ></i>
            <h3 className="services__modal-title">Screener & Data Entry @ Schlegel Villages</h3>
              <p className="services__modal-description">May 2020 - April 2023</p>
              <li className="services__modal-service">
              <i class='bx bxs-check-square' ></i>
                  <p className="services__modal-info">Implemented an automated data entry program, resulting in 85% reduction in downtime previously dedicated
to manual data entry</p>
                </li>
          <br></br>
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                <i class='bx bxs-check-square' ></i>
                  <p className="services__modal-info">Handling various difficult customer interactions achieving satisfaction on both sides by being able to uncover and solve the client’s needs</p>
                </li>
                <li className="services__modal-service">
                <i class='bx bxs-check-square' ></i>
                  <p className="services__modal-info">Interacted with a database on a daily basis to keep client’s screening and testing information/visitation history and
provided continuous user-experience improvement suggestions to developers</p>
                </li>
            </ul>
        </div>
        <div className="about__box">
          <i class='bx bxs-certification bx-tada about__icon' ></i>
          <h3 className="services__modal-title">Certifications</h3>
          <h3 className="about__title">
            <a href="https://coursera.org/share/0e2a9076501332e8fa429151dc78b3b8" target="_blank" rel="noopener noreferrer">
                Google Data Analytics Professional Certificate
            </a>
          </h3>
            <i class='bx bxl-google' ></i>
            <p className="services__modal-description">Jul 2023 - Dec 2023</p>
              <li className="services__modal-service">
              <i class='bx bxs-check-square' ></i>
                  <p className="services__modal-info">Improved critical and analytical thinking using tools such as R, Tableau, and relational databases</p>
                </li>
                <li className="services__modal-service">
              <i class='bx bxs-check-square' ></i>
                  <p className="services__modal-info">Demonstrated hands-on experience with data cleaning, data visualization, project management, interpreting and
communicating analytical findings</p>
                </li>
        </div>
    </div>
  )
}

export default Info2
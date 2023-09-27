import React from 'react';


const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class="bx bx-briefcase about__icon"></i>
            <h3 className="about__title"></h3>
            <span className="about__subtitle"></span>
            <h3 className="services__modal-title">Jr. Technical Analyst @ Ministry of Transportation Ontario (MTO)</h3>
              <p className="services__modal-description">Data Quality & Reporting Team<br></br> Sept 2023 - Dec 2023</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Creating a Full-Stack Application designed to simplify the Business Analysis process by converting plain text into
SQL queries & automating data visualizations with a goal of boosting user base by 200%, resulting in
the replacement of IBM Cognos Analytics</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Created the Query Generator & Metadata structure for the Text-To-SQL application using SQL stored
procedures, scalar-value & table-value functions</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Performed ETL operations such as Data Profiling, Transformation (Mapping & Expression writing) using
Informatica Developer with the Data Quality & Reporting team for Vehicle and Financial data</p>
                </li>
            </ul>              
          
        </div>
        {/*}
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
        */}
    </div>
  )
}

export default Info
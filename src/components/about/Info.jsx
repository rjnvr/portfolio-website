import React from 'react';


const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
          <i class='bx bxs-briefcase about__icon' ></i>
            <h3 className="about__title"></h3>
            <span className="about__subtitle"></span>
            <h3 className="services__modal-title">Jr. Technical Analyst @ Ministry of Transportation Ontario (MTO)</h3>
              <p className="services__modal-description">Data Quality & Reporting Team<br></br> Sept 2023 - Dec 2023</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i class='bx bxs-check-square' ></i>
                  <p className="services__modal-info">Creating a Full-Stack Application designed to simplify the Business Analysis process by converting plain text into
SQL queries & automating data visualizations with a goal of boosting user base by 200%, resulting in
the replacement of IBM Cognos Analytics</p>
                </li>

                <li className="services__modal-service">
                  <i class='bx bxs-check-square' ></i>
                  <p className="services__modal-info">Created the Query Generator & Metadata structure for the Text-To-SQL application using SQL stored
procedures, scalar-value & table-value functions</p>
                </li>
                <li className="services__modal-service">
                  <i class='bx bxs-check-square' ></i>
                  <p className="services__modal-info">Performed ETL operations such as Data Profiling, Transformation (Mapping & Expression writing) using
Informatica Developer with the Data Quality & Reporting team for Vehicle and Financial data</p>
                </li>
            </ul>              
          
        </div>
    </div>
  )
}

export default Info
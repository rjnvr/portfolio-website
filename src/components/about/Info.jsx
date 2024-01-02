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
                  <p className="services__modal-info">Developed a Chat Application in Python for business analysis, featuring automated data retrieval (CSVs) and
visualizations, targeting a 150% increase in user base</p>
                </li>

                <li className="services__modal-service">
                  <i class='bx bxs-check-square' ></i>
                  <p className="services__modal-info">Implemented Azure OpenAI’s API for NLP to automate the conversion of text to SQL queries & text to
visualization code, connected to PostgreSQL server to fetch data</p>
                </li>
                <li className="services__modal-service">
                  <i class='bx bxs-check-square' ></i>
                  <p className="services__modal-info">Presented the application to shareholders and management, securing API key & budget for the team</p>
                </li>
                <li className="services__modal-service">
                  <i class='bx bxs-check-square' ></i>
                  <p className="services__modal-info">Engineered AI system prompts & optimized API costs by allowing user to enable/disable chat history</p>
                </li>
                <li className="services__modal-service">
                  <i class='bx bxs-check-square' ></i>
                  <p className="services__modal-info">Developed comprehensive knowledge transfer documents and project recommendations to facilitate a smooth
transition for the team and push the project to production</p>
                </li>
            </ul>              
          
        </div>
    </div>
  )
}

export default Info
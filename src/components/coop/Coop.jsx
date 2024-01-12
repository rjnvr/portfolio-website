import React from 'react';
import { useState } from 'react';
import './coop.css';
import AbiEmployeesVideo from "../../assets/ABI_Employees_test.mp4"


const Coop = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }


  return (
    <section className="services section" id="coop">
      <h2 className="section__title">Co-op Reflections</h2>
          <span className="section__subtitle">My Co-op work term reflections</span>
      <div className="services__container container grid">

      <div className="services__content">
          <div>
          <i class='bx bx-bus services__icon'></i>
            <h3 className="services__title">Ministry of Transportation (MTO)</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(6)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
          <div className={toggleState === 6 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Role: Junior Technical Analyst</h3>
              <p className='services__modal-medium'>Employer:</p>
              <p className='services__modal-description'>The Ontario Ministry of Transportation (MTO) excels in integrating computing science into public services, utilizing big data and machine learning to optimize Ontario's transportation systems. Their work, characterized by innovative data ETL processes and a commitment to diversity, brings together a wide range of professionals to address the needs of a diverse Ontarian population. This approach not only impacts thousands daily but also sets a standard in technology use for public welfare and inclusive service delivery.</p>
              <p className='services__modal-medium'>Goals:</p>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">Enhance technological literacy by mastering SQL and SQL Server.</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">Develop technological literacy in Python and application development.</p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon">
                </i>
                <p className="services__modal-info">Improve oral communication and presentation skills for career advancement.</p>
              </li>
              
              <p className='services__modal-medium'>How I Developed My Skills:</p>
              <p className='services__modal-description'>My skill development on the job was enhanced through a combination of researching various technologies and actively engaging with my team. I absorbed valuable knowledge by interacting and learning from my colleagues, and their suggestions for application improvements were particularly instrumental. Additionally, I gained practical understanding of new technologies directly from team members, further enriching my professional growth and technical capabilities.</p>

              <p className='services__modal-medium'>Skills Learned:</p>
              <p className='services__modal-description'>I aimed to learn SQL, SQL Server, and Python, along with developing applications and enhancing communication skills. These skills are foundational in computing and will be highly beneficial in future roles, offering versatility and effectiveness in various technical and managerial positions.</p>
              <p className='services__modal-medium'>Technologies Used:</p>
              <p className="services__modal-description">I chose SQL, SQL Server, and Python because they are essential for data handling and application development, which were key aspects of my role at the Ministry of Transportation</p>
              <p className='services__modal-medium'>Completed Goals:</p>
              <p className="services__modal-description">I successfully enhanced SQL, Python, web development skills, by developing a functional web chatbot application, and significantly improved oral communication and presentation skills.</p>
              <p className='services__modal-medium'>Chatbot Project:</p>
              <div className="about__video-container">
                <video className="about__video" controls>
                <source src={AbiEmployeesVideo} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
              </div>
              <ul className="services__modal-services grid">
              <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Developed a Chat Application in Python for business analysis, featuring automated data retrieval (CSVs) and visualizations, targeting a 150% increase in user base</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Implemented Azure OpenAI’s API for NLP to automate the conversion of text to SQL queries & text to visualization code, connected to PostgreSQL server to fetch data</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Engineered AI system prompts & optimized API costs by allowing user to enable/disable chat history</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Created knowledge transfer documents and project recommendations to facilitate a smooth transition for the team
and push the project to production</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Presented the application to shareholders and management, securing API key & budget for the team</p>
                </li>
              </ul>
              <p className='services__modal-medium'>Conclusion:</p>
              <p className="services__modal-description"> As I conclude my co-op term at the Ontario Ministry of Transportation (MTO), I am grateful for the invaluable experience and the achievements in mastering key technologies like SQL, Python, and web development. My success in these areas, especially in the chatbot project, was greatly enhanced by the support and guidance from my supervisor Dmitriy, manager Melody, and the entire team.
                A special thanks to Dmitriy for his insights and advocacy, and to Melody for her leadership and support, which were crucial in my professional development. The collaborative and innovative environment fostered by my colleagues significantly enriched my skill set and contributed to my achievements.
                I move forward in my career with not only enhanced technical skills but also lessons in teamwork, diversity, and innovation, reflecting the culture at MTO. My heartfelt thanks to Dmitriy, Melody, and the team for their mentorship and support throughout this journey.</p>
            </div>
          </div>
        </div>
      </div>
  </section>

  )
}

export default Coop

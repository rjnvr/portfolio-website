import React, { useState } from 'react';
import './coop.css';

const Coop2 = () => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <article className="coop__card">
      <div>
        <i className="bx bx-cog coop__icon"></i>
        <h3 className="coop__title">Ministry of Transportation (MTO) - Co-op #2</h3>
        <p className="coop__meta">Automation Developer</p>
      </div>

      <button className="coop__button" onClick={(e) => { e.stopPropagation(); setToggleState(1); }}>
        View Report
        <i className="uil uil-arrow-right coop__button-icon"></i>
      </button>

      <div className={toggleState === 1 ? 'coop__modal active-modal' : 'coop__modal'} onClick={() => setToggleState(0)}>
        <div className="coop__modal-content" onClick={(e) => e.stopPropagation()}>
          <i onClick={() => setToggleState(0)} className="uil uil-times coop__modal-close"></i>
          <h3 className="coop__modal-title">Co-op #2 Report</h3>

          <div className="coop__report">
            <p className="coop__report-title">Employer</p>
            <p className="coop__report-text">The Ontario Ministry of Transportation (MTO) excels in integrating computing science into public services, utilizing big data and machine learning to optimize Ontario's transportation systems. Their work, characterized by innovative data ETL processes and a commitment to diversity, brings together a wide range of professionals to address the needs of a diverse Ontarian population. This approach not only impacts thousands daily but also sets a standard in technology use for public welfare and inclusive service delivery.</p>

            <p className="coop__report-title">Goals</p>
            <ul className="coop__report-list">
              <li>Improve Power Automate Skills and knowledge on how to leverage it to automate tasks that require Microsoft apps.</li>
              <li>Improve Sharepoint web management skills and data management and privacy.</li>
              <li>Communicate complex technological tasks in a manner that is easy for clients/users to understand and give solid time.</li>
            </ul>

            <p className="coop__report-title">How I Developed My Skills</p>
            <p className="coop__report-text">I enhanced my skills on the job by researching various technologies and actively engaging with my team. Learning from colleagues and applying their suggestions significantly contributed to my professional growth and technical capabilities, particularly through gaining practical insights into new technologies.</p>

            <p className="coop__report-title">Skills Learned</p>
            <p className="coop__report-text">I aimed to learn Power Automate, SharePoint, and some React, along with developing applications and enhancing communication skills. These skills are foundational in computing and will be highly beneficial in future roles, offering versatility and effectiveness in various technical and managerial positions.</p>

            <p className="coop__report-title">Technologies Used</p>
            <p className="coop__report-text">I chose Power Automate, and SharePoint because they are essential for data handling and automation development, which were key aspects of my role at the Ministry of Transportation.</p>

            <p className="coop__report-title">Completed Goals</p>
            <p className="coop__report-text">I successfully enhanced Power Automate, and SharePoint skills, by developing functional automation work flows and SharePoint sites, and significantly improved oral communication skills.</p>

            <p className="coop__report-title">Conclusion</p>
            <p className="coop__report-text">As I conclude my co-op term at the Ontario Ministry of Transportation (MTO), I am grateful for the invaluable experience and the achievements in mastering key technologies like Power Automate and SharePoint. My success in these areas, especially in the Power Automate, was greatly enhanced by the support and guidance from my supervisor(s); Lionel, Cole and Jean, Chen, as well as my manager Kevin, Wang, and the team. A special thanks to Jean and Lionel for their insights and advocacy, and to Kevin for his leadership and support, which were crucial in my professional development. The collaborative and innovative environment fostered by my colleagues significantly enriched my skill set and contributed to my achievements. I move forward in my career with not only enhanced technical skills but also lessons in teamwork, diversity, and innovation, reflecting the culture at MTO.</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Coop2;

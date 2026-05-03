import React, { useState } from 'react';
import './coop.css';

const Coop4 = () => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <article className="coop__card">
      <div>
        <i className="bx bx-building-house coop__icon"></i>
        <h3 className="coop__title">MPBSDP - Co-op #4</h3>
        <p className="coop__meta">Automation Developer / Solutions Engineer Co-op (Consulting Focus)</p>
      </div>

      <button className="coop__button" onClick={() => setToggleState(1)}>
        View Report
        <i className="uil uil-arrow-right coop__button-icon"></i>
      </button>

      <div className={toggleState === 1 ? 'coop__modal active-modal' : 'coop__modal'} onClick={() => setToggleState(0)}>
        <div className="coop__modal-content" onClick={(e) => e.stopPropagation()}>
          <i onClick={() => setToggleState(0)} className="uil uil-times coop__modal-close"></i>
          <h3 className="coop__modal-title">Co-op #4 Report</h3>

          <div className="coop__report">
            <p className="coop__report-title">Role</p>
            <p className="coop__report-text">Automation Developer / Solutions Engineer Co-op</p>

            <p className="coop__report-title">Employer</p>
            <p className="coop__report-text">The Ministry of Public and Business Service Delivery and Procurement is a ministry of the Government of Ontario. It is responsible for ServiceOntario, which, among other responsibilities, issues driver's licenses, health cards, birth certificates and other provincial documents to Ontario residents.</p>

            <p className="coop__report-title">Goals</p>
            <ul className="coop__report-list">
              <li>Develop the ability to create and implement customized digital solutions for clients using Microsoft Power Apps to improve business processes and address client needs.</li>
              <li>Enhance technology literacy by developing automated workflows using Microsoft Power Automate and integrating with SharePoint and other connected services to streamline processes and meet client needs.</li>
              <li>Strengthen professional communication and teamwork skills by collaborating with colleagues, clients, and supervisors to gather requirements, provide updates, and deliver effective technology solutions.</li>
            </ul>

            <p className="coop__report-title">How I Developed My Skills</p>
            <p className="coop__report-text">I developed my skills by taking a hands-on approach to client projects, focusing on building custom Power Apps and designing automated workflows with Power Automate. By working directly with SharePoint lists and other Microsoft 365 tools, I was able to create solutions that addressed real client needs. I researched best practices, collaborated with colleagues and stakeholders, and refined my work based on feedback. In addition, I improved my professional skills by managing multiple priorities, documenting solutions clearly, and communicating progress effectively during team meetings. This consulting style of engagement helped me improve requirement gathering and client communication.</p>

            <p className="coop__report-title">Skills Learned</p>
            <p className="coop__report-text">Throughout my placement, I gained practical experience with Power Apps, Power Automate, and SharePoint. I learned to design functional apps tailored to client requirements, automate workflows that streamlined processes, and ensure smooth integration across systems. Beyond technical skills, I strengthened my time management, problem-solving, consulting communication, and stakeholder collaboration abilities, skills that will support me in both technical and collaborative roles in the future.</p>

            <p className="coop__report-title">Technologies Used</p>
            <p className="coop__report-text">I worked extensively with Microsoft Power Apps, Power Automate, and SharePoint as part of my daily responsibilities. These tools were essential for building responsive apps, automating tasks, and managing client data. I also relied on Microsoft Teams, Planner, and Outlook to stay organized, manage tasks, and collaborate effectively with colleagues and clients.</p>

            <p className="coop__report-title">Completed Goals</p>
            <p className="coop__report-text">I successfully developed multiple Power Apps that supported client needs and improved workflows. I designed and deployed several Power Automate workflows that reduced manual processes and improved efficiency. I also strengthened my teamwork and communication skills by collaborating with clients, documenting my work, and providing clear updates. These accomplishments reflect the progress I made toward all three of my learning goals: building client-focused apps, increasing technology literacy through automation, and enhancing professional communication.</p>

            <p className="coop__report-title">Conclusion</p>
            <p className="coop__report-text">As I wrap up my co-op term at the Ministry of Public and Business Service Delivery and Procurement, I'm proud of the progress I've made in both technical and professional areas. From creating Power Apps to streamlining processes with automated workflows and developing stronger teamwork skills, this experience has been an invaluable part of my growth. I'm especially thankful for the guidance and support of my supervisors and colleagues, whose insights and feedback helped me build practical skills and confidence that I will carry into future roles.</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Coop4;

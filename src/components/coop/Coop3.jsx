import React, { useState } from 'react';
import './coop.css';

const Coop3 = () => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <article className="coop__card">
      <div>
        <i className="bx bx-briefcase-alt-2 coop__icon"></i>
        <h3 className="coop__title">MPBSDP - Co-op #3</h3>
        <p className="coop__meta">Automation Developer / Solutions Engineer (Consulting Focus)</p>
      </div>

      <button className="coop__button" onClick={(e) => { e.stopPropagation(); setToggleState(1); }}>
        View Report
        <i className="uil uil-arrow-right coop__button-icon"></i>
      </button>

      <div className={toggleState === 1 ? 'coop__modal active-modal' : 'coop__modal'} onClick={() => setToggleState(0)}>
        <div className="coop__modal-content" onClick={(e) => e.stopPropagation()}>
          <i onClick={() => setToggleState(0)} className="uil uil-times coop__modal-close"></i>
          <h3 className="coop__modal-title">Co-op #3 Report</h3>

          <div className="coop__report">
            <p className="coop__report-title">Employer</p>
            <p className="coop__report-text">The Ministry of Public and Business Service Delivery and Procurement is a ministry of the Government of Ontario. It is responsible for ServiceOntario, which, among other responsibilities, issues driver's licenses, health cards, birth certificates and other provincial documents to Ontario residents.</p>

            <p className="coop__report-title">Goals</p>
            <ul className="coop__report-list">
              <li>Develop custom SharePoint web parts using React and/or Angular.js to enhance client-specific applications and improve customization.</li>
              <li>Automate client requests using advanced Power Automate flows and assist in migrating Power Apps and flows between different environments to improve efficiency and scalability.</li>
              <li>Improve time management skills by prioritizing urgent tasks effectively to enhance productivity and meet deadlines efficiently.</li>
            </ul>

            <p className="coop__report-title">How I Developed My Skills</p>
            <p className="coop__report-text">I developed my skills by taking a hands-on consulting approach to real-world client problems, from designing and deploying custom SharePoint web parts using SPFx and React to building advanced Power Automate workflows. By researching best practices, running requirement discussions with stakeholders, and actively applying feedback from my team, I was able to deepen my technical expertise while delivering meaningful client-facing solutions. I also adopted structured time management techniques with task tracking tools (Azure DevBoards), which helped me stay on top of high-priority tasks and adapt to changing project demands.</p>

            <p className="coop__report-title">Skills Learned</p>
            <p className="coop__report-text">Throughout my placement, I gained valuable experience with SharePoint Framework (SPFx), React, Power Automate, and Power Apps. I learned to develop reusable, scalable components for SharePoint, automate business processes based on client needs, and manage app migrations between environments. I also significantly improved my consulting communication, time management, prioritization, and stakeholder alignment skills, key strengths that will support me in both technical and collaborative roles going forward.</p>

            <p className="coop__report-title">Technologies Used</p>
            <p className="coop__report-text">I worked extensively with SharePoint, Power Automate, Power Apps, and React as part of my daily responsibilities. These tools were essential for developing modern web parts, creating automated workflows, and managing cross-environment deployments. Task management platforms like Microsoft Planner and Outlook were also key in helping me stay organized and productive while supporting consulting deliverables.</p>

            <p className="coop__report-title">Completed Goals</p>
            <p className="coop__report-text">I successfully developed and deployed a custom SharePoint web part tailored to client requirements and received positive feedback for its usability and integration. I built and maintained several Power Automate workflows that significantly reduced manual processes, and I helped migrate flows and apps between environments smoothly. Additionally, I improved my personal organization by consistently meeting deadlines, effectively managing priorities, and adapting to last-minute client changes with greater ease.</p>

            <p className="coop__report-title">Conclusion</p>
            <p className="coop__report-text">As I wrap up my co-op term at the Ministry of Public and Business Service Delivery and Procurement, I'm proud of the progress I've made in both technical and professional areas. From building dynamic SharePoint components to streamlining client workflows and improving my personal productivity, this experience has been an invaluable part of my growth. I'm especially thankful for the guidance and encouragement of my supervisors, Lionel Cole, Jean Chen, and for the leadership and support of my manager Phil Silva. Their insights, along with the collaborative and innovative environment at MPBSDP, helped me develop practical consulting and technical skills that I will carry into future roles.</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Coop3;

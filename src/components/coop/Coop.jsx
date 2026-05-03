import React from 'react';
import './coop.css';
import Coop1 from './Coop1';
import Coop2 from './Coop2';
import Coop3 from './Coop3';
import Coop4 from './Coop4';

const Coop = () => {
  return (
    <section className="coop section" id="coop">
      <h2 className="section__title">Co-op Experience</h2>
      <span className="section__subtitle">Detailed co-op reports</span>
      <div className="coop__container container grid">
        <Coop4 />
        <Coop3 />
        <Coop2 />
        <Coop1 />
      </div>
    </section>
  );
};

export default Coop;

import React from 'react';
import './skills.css';
import Frontend from './Frontend';
import Backend from './Backend';
import Other from './Other';

const Skills = () => {
  return (
    <section className="skills" id="skills">
        <h2 className="section__title">Technical Skills</h2>
        <span className="section__subtitle">My Technical Skills</span>


        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Other />
        </div>
    </section>
  )
}

export default Skills
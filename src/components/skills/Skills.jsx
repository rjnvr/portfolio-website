import React from 'react';
import './skills.css';

const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', icon: 'bxl-python' },
      { name: 'C/C++', icon: 'bxl-c-plus-plus' },
      { name: 'JavaScript', icon: 'bxl-javascript' },
      { name: 'TypeScript', icon: 'bxl-typescript' },
      { name: 'Java', icon: 'bxl-java' },
      { name: 'SQL', icon: 'bx-data' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'React.js', icon: 'bxl-react' },
      { name: 'Node.js', icon: 'bxl-nodejs' },
      { name: 'Streamlit', icon: 'bx-line-chart' },
      { name: 'Pandas', icon: 'bx-table' },
      { name: 'NumPy', icon: 'bx-calculator' },
      { name: 'PyTorch', icon: 'bx-brain' },
      { name: 'Scikit-Learn', icon: 'bx-network-chart' },
      { name: 'Axios', icon: 'bx-transfer-alt' }
    ]
  },
  {
    title: 'AI / ML',
    items: [
      { name: 'RAG', icon: 'bx-search-alt' },
      { name: 'LLM Orchestration', icon: 'bx-network-chart' },
      { name: 'Prompt Engineering', icon: 'bx-message-square-dots' },
      { name: 'Agentic Workflows', icon: 'bx-bot' }
    ]
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'Git', icon: 'bxl-git' },
      { name: 'AWS S3', icon: 'bxl-aws' },
      { name: 'Azure OpenAI', icon: 'bx-bot' },
      { name: 'Anthropic API', icon: 'bx-code-curly' },
      { name: 'PostgreSQL', icon: 'bx-data' },
      { name: 'Azure DevOps', icon: 'bxl-microsoft' }
    ]
  }
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Technical Skills</h2>
      <span className="section__subtitle">From my 2026 resume</span>

      <div className="skills__container container grid">
        {skillGroups.map((group) => (
          <article className="skills__content" key={group.title}>
            <h3 className="skills__title">{group.title}</h3>
            <ul className="skills__list">
              {group.items.map((item) => (
                <li className="skills__item" key={item.name}>
                  <i className={`bx ${item.icon} skills__logo`} aria-hidden="true"></i>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;

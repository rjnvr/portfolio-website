import React, { useMemo, useState } from 'react';
import './services.css';
import weather1 from '../../assets/weather1.png';
import stockbot1 from '../../assets/stock2.gif';
import molecule1 from '../../assets/molecule1.gif';
import poke1 from '../../assets/poke1.png';
import options1 from '../../assets/options1.gif';
import futures1 from '../../assets/futures1.gif';
import changeflowBriefQuotas from '../../assets/changeflow_brief_quotas.png';
import changeflowTeamCoverage from '../../assets/changeflow_team_coverage.png';
import changeflowTaskBoard from '../../assets/changeflow_task_board.png';
import changeflowRelatedOrders from '../../assets/changeflow_related_orders.png';
import changeflowProjectAnalyticsBrief from '../../assets/changeflow_project_analytics_brief.png';
import changeflowProjectDetail from '../../assets/changeflow_project_detail.png';
import changeflowDocumentVault from '../../assets/changeflow_document_vault.png';
import changeflowBudgetCommand from '../../assets/changeflow_budget_command.png';
import changeflowPortfolioOverview from '../../assets/changeflow_portfolio_overview.png';
import changeflowChangeOrdersPipeline from '../../assets/changeflow_change_orders_pipeline.png';
import changeflowOperationsCenter from '../../assets/changeflow_operations_center.png';
import agentevalDashboardSummary from '../../assets/agenteval_dashboard_summary.png';
import agentevalFailedCase from '../../assets/agenteval_failed_case.png';
import compilerTmRuntime from '../../assets/compiler_tm_runtime.png';
import compilerGrammarRules from '../../assets/compiler_grammar_rules.png';
import compilerTerminals from '../../assets/compiler_terminals.png';
import ciDropoutRate from '../../assets/ci_dropout_rate.png';
import ciHiddenLayers from '../../assets/ci_hidden_layers.png';
import ciHiddenUnits from '../../assets/ci_hidden_units.png';
import ciErrorEpochs30 from '../../assets/ci_error_epochs_30.png';
import ciBaselineEpochs from '../../assets/ci_baseline_epochs.png';
import ciCifarSamples from '../../assets/ci_cifar_samples.png';
import ciCnnResults from '../../assets/ci_cnn_results.png';

const projects = [
  {
    title: 'ChangeFlow Platform',
    category: 'Featured',
    icon: 'bx-git-branch',
    image: changeflowPortfolioOverview,
    images: [
      changeflowPortfolioOverview,
      changeflowProjectDetail,
      changeflowOperationsCenter,
      changeflowChangeOrdersPipeline,
      changeflowBudgetCommand,
      changeflowTaskBoard,
      changeflowTeamCoverage,
      changeflowBriefQuotas,
      changeflowProjectAnalyticsBrief,
      changeflowRelatedOrders,
      changeflowDocumentVault
    ],
    captions: [
      'Portfolio overview for tracking project health, budget utilization, and compliance.',
      'Project detail view with agent tasks, risk flags, and health scoring.',
      'Operations center showing live sync status and commercial metrics.',
      'Change order pipeline for reviewing pending approvals and disputed items.',
      'Budget command view for contract exposure and pending review value.',
      'Task board for moving agent-generated follow-up into execution.',
      'Team coverage view for project staffing and access visibility.',
      'Brief quota controls for managing Claude-powered project brief limits.',
      'Project analytics brief generated from current project activity.',
      'Related change orders attached to a project workspace.',
      'Document vault for adding and reprocessing project records.'
    ],
    stack: 'React.js, TypeScript, Node.js, Claude API, AWS S3',
    year: '2026',
    source: 'https://github.com/rjnvr/changeflow-platform',
    summary: 'A platform concept for mapping business change requests into trackable workflows, approvals, and implementation handoffs.',
    points: [
      'Designed around client intake, prioritization, delivery stages, and operational visibility.',
      'Built to communicate complex workflow status clearly for both technical teams and stakeholders.',
      'Created project, budget, task, team, document, and AI brief workflows for construction operations.'
    ]
  },
  {
    title: 'AgentEval Harness',
    category: 'Featured',
    icon: 'bx-test-tube',
    image: agentevalDashboardSummary,
    images: [
      agentevalDashboardSummary,
      agentevalFailedCase
    ],
    captions: [
      'Evaluation dashboard showing pass rate, failed cases, latency, and cost.',
      'Expanded failed-case view for debugging expected facts and agent output.'
    ],
    stack: 'Python, evaluation harnesses, LLM agents, automation',
    year: '2026',
    source: 'https://github.com/rjnvr/agenteval-harness',
    summary: 'A structured evaluation harness for testing agent behavior, comparing runs, and surfacing failed cases for review.',
    points: [
      'Focused on repeatable evaluation, case-level inspection, and practical agent reliability workflows.',
      'Designed for debugging outputs across deterministic mock runs and live model-backed evaluation.',
      'Includes dashboard-level metrics and failed-case inspection for document-agent evaluation.'
    ]
  },
  {
    title: 'Compilers Project',
    category: 'Systems',
    icon: 'bx-code-alt',
    image: compilerTmRuntime,
    images: [
      compilerTmRuntime,
      compilerGrammarRules,
      compilerTerminals
    ],
    captions: [
      'Generated TM code running through an out-of-bounds test case.',
      'Parser grammar rules with precedence and recovery handling.',
      'Scanner terminals and nonterminals for the C-minus language.'
    ],
    stack: 'C/C++, Parsing, Automata, Compiler Design',
    year: '2026',
    summary: 'Compiler coursework project covering scanner, parser, semantic checks, and structured errors.',
    points: [
      'Implemented lexical analysis to tokenize source programs into grammar-ready streams.',
      'Built parser logic for language grammar rules and expression precedence handling.',
      'Added semantic checks for undeclared symbols, type mismatches, and invalid statements.',
      'Designed structured compiler error messages to improve debugging speed.',
      'Tested edge cases using curated programs for valid and invalid parse paths.',
      'Documented architecture decisions for scanner, parser, and validation phases.'
    ]
  },
  {
    title: 'Computational Intelligence Projects',
    category: 'AI / ML',
    icon: 'bx-brain',
    image: ciDropoutRate,
    images: [
      ciDropoutRate,
      ciHiddenLayers,
      ciHiddenUnits,
      ciErrorEpochs30,
      ciBaselineEpochs,
      ciCifarSamples,
      ciCnnResults
    ],
    captions: [
      'Dropout-rate sweep used to compare validation error.',
      'Hidden-layer experiment showing sigmoid MLP sensitivity.',
      'Hidden-unit tuning across validation error results.',
      'Training and validation error over 30 epochs.',
      'Baseline sigmoid MLP error trend across epochs.',
      'CIFAR-10 sample batch used for model inspection.',
      'CNN experiment logs comparing error and F1 results.'
    ],
    stack: 'Python, PyTorch, Scikit-learn, Jupyter Notebook',
    year: '2026',
    summary: 'Modeling work across neural networks, validation workflows, and CIFAR-10 image classification.',
    points: [
      'Built and trained MLP and CNN models for CIFAR-10 image classification.',
      'Created data preprocessing pipelines with normalization and batch loading.',
      'Ran hyperparameter tuning across learning rate, batch size, and optimizer settings.',
      'Used k-fold validation and holdout testing to measure generalization quality.',
      'Compared model performance with confusion matrices and class-level accuracy.',
      'Improved final training stability through iterative architecture and regularization updates.'
    ]
  },
  {
    title: 'Automated Investment Portfolio',
    category: 'Finance',
    icon: 'bx-chart',
    image: futures1,
    stack: 'Python, Pandas, NumPy, C#, NinjaScript',
    year: '2023',
    summary: 'Portfolio of automated futures strategies with performance analysis and correlation controls.',
    points: [
      'Created a portfolio of 5 automated futures trading strategies with low correlation returning approximately 10% monthly.',
      'Ran Monte-Carlo, walk-forward, and correlation analysis with slippage and commissions.'
    ]
  },
  {
    title: 'Option Pricer',
    category: 'Finance',
    icon: 'bx-candles',
    image: options1,
    stack: 'Python, NumPy, SciPy, Streamlit',
    year: '2023',
    demo: 'https://option-pricer.streamlit.app',
    source: 'https://github.com/rjnvr/option-pricer',
    summary: 'Streamlit app for Black-Scholes option pricing and financial variable modeling.',
    points: [
      'Implemented Black-Scholes pricing with NumPy and SciPy.',
      'Modeled key variables to produce reliable pricing output.'
    ]
  },
  {
    title: 'Molecule Visualizer Database',
    category: 'Full Stack',
    icon: 'bxs-file-js',
    image: molecule1,
    stack: 'Python, C, SQLite, JavaScript, jQuery, AJAX, HTML/CSS',
    year: '2023',
    summary: 'Full-stack molecule parsing and visualization app backed by SQL storage.',
    points: [
      'Built a full-stack app to parse .cif files and render molecule SVGs.',
      'Integrated SQL storage and AJAX interactions for smooth UX.'
    ]
  },
  {
    title: 'Trading Bot',
    category: 'Finance',
    icon: 'bx-line-chart',
    image: stockbot1,
    stack: 'Python, Pandas, NumPy',
    year: '2022',
    source: 'https://github.com/rjnvr/ibkr-trading-bot',
    summary: 'IBKR TWS API trading bot with live bar collection and signal-generation pipelines.',
    points: [
      'Built an IBKR TWS API bot with threading for live bar collection.',
      'Used Pandas/NumPy pipelines for signal generation.',
      'Improved profit factor through iterative strategy logic.'
    ]
  },
  {
    title: 'Weather App',
    category: 'Frontend',
    icon: 'bx-cloud',
    image: weather1,
    stack: 'JavaScript, React.js, Tailwind CSS',
    year: '2022',
    demo: 'https://main--illustrious-concha-c7aaea.netlify.app',
    source: 'https://github.com/rjnvr/weather-app',
    summary: 'React weather interface with geolocation and live API data.',
    points: [
      'Fetched weather data using OpenWeatherMap API and React hooks.',
      'Added geolocation and user-friendly status feedback.'
    ]
  },
  {
    title: 'Pokedex App',
    category: 'Frontend',
    icon: 'bx-book-open',
    image: poke1,
    stack: 'React.js, JavaScript, HTML/CSS',
    year: '2022',
    demo: 'https://main--leafy-begonia-62c854.netlify.app',
    source: 'https://github.com/rjnvr/pokemon-app',
    summary: 'Searchable React Pokedex powered by live PokeAPI data.',
    points: [
      'Built a searchable Pokedex with React state management.',
      'Used Axios to fetch and render live Pokemon data from PokeAPI.'
    ]
  }
];

const filters = ['All', 'Featured', 'AI / ML', 'Finance', 'Full Stack', 'Frontend', 'Systems'];

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const activeImages = activeProject.images || [activeProject.image];
  const activeCaptions = activeProject.captions || [activeProject.summary];
  const activeCaption = activeCaptions[activeImageIndex] || activeProject.title;

  const selectProject = (project) => {
    setActiveProject(project);
    setActiveImageIndex(0);
  };

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) => (
      currentIndex === 0 ? activeImages.length - 1 : currentIndex - 1
    ));
  };

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) => (
      currentIndex === activeImages.length - 1 ? 0 : currentIndex + 1
    ));
  };

  return (
    <section className="services section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Interactive project index</span>

      <div className="services__container container">
        <div className="services__filters" aria-label="Project filters">
          {filters.map((filter) => (
            <button
              className={activeFilter === filter ? 'services__filter active-filter' : 'services__filter'}
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="services__showcase">
          <article className="services__feature">
            <div className="services__feature-copy">
              <span className="services__eyebrow">{activeProject.category} / {activeProject.year}</span>
              <h3 className="services__feature-title">{activeProject.title}</h3>
              <p className="services__feature-description">{activeProject.summary}</p>
              <p className="services__modal-description">{activeProject.stack}</p>
              <div className="services__links">
                {activeProject.demo && <a href={activeProject.demo} target="_blank" rel="noreferrer">Live Demo</a>}
                {activeProject.source && <a href={activeProject.source} target="_blank" rel="noreferrer">Source Code</a>}
                {activeProject.status && <span>{activeProject.status}</span>}
              </div>
            </div>

            <div className="services__feature-media">
              {activeImages.length > 1 && (
                <button
                  className="services__carousel-button services__carousel-button--prev"
                  onClick={showPreviousImage}
                  type="button"
                  aria-label="Show previous project screenshot"
                >
                  <i className="uil uil-angle-left-b"></i>
                </button>
              )}

              <img src={activeImages[activeImageIndex]} alt={`${activeProject.title} preview ${activeImageIndex + 1}`} />

              {activeImages.length > 1 && (
                <>
                  <button
                    className="services__carousel-button services__carousel-button--next"
                    onClick={showNextImage}
                    type="button"
                    aria-label="Show next project screenshot"
                  >
                    <i className="uil uil-angle-right-b"></i>
                  </button>
                  <span className="services__carousel-count">
                    {activeImageIndex + 1} / {activeImages.length}
                  </span>
                </>
              )}
              <p className="services__carousel-caption">{activeCaption}</p>
            </div>
          </article>

          <div className="services__rail" role="list" aria-label="Project list">
            {visibleProjects.map((project) => (
              <button
                className={activeProject.title === project.title ? 'services__content active-project' : 'services__content'}
                key={project.title}
                onClick={() => selectProject(project)}
                type="button"
              >
                <span className="services__year">{project.year}</span>
                <i className={`bx ${project.icon} services__icon`}></i>
                <span className="services__title">{project.title}</span>
                <span className="services__stack">{project.stack}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="services__details">
          <h3 className="services__details-title">Build Notes</h3>
          <ul className="services__modal-services grid">
            {activeProject.points.map((point) => (
              <li className="services__modal-service" key={point}>
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;

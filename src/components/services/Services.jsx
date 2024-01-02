import React from 'react';
import { useState } from 'react';
import './services.css';
import weather1 from "../../assets/weather1.png"
import stockbot1 from "../../assets/stock2.gif"
import molecule1 from "../../assets/molecule1.gif"
import poke1 from "../../assets/poke1.png"
import options1 from "../../assets/options1.gif"
import futures1 from "../../assets/futures1.gif"

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }


  return (
    <section className="services section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
          <span className="section__subtitle">My Technical Projects</span>
      <div className="services__container container grid">

      <div className="services__content">
          <div>
          <i class='bx bx-chart services__icon'></i>
            <h3 className="services__title">Automated Investment Portfolio</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(6)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
          <div className={toggleState === 6 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Automated Investment Portfolio</h3>
              <div className='image-div'>
              <img src={futures1} className="image" alt="screenshot of project"></img>
              </div>
              <p className="services__modal-description">Python, Pandas, NumPy, C#, NinjaScript (2023)</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Created a portfolio of 5 automated futures trading strategies with low correlation returning ≈ 10% monthly</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Conducted Monte-Carlo, walk-forward & correlation analyses, including slippage & commissions in the back-testing
for each strategy</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      <div className="services__content">
          <div>
          <i class='bx bx-candles services__icon' ></i>
            <h3 className="services__title">Option Pricer</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(5)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
          <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title"><a href="https://option-pricer.streamlit.app">Option Pricer</a></h3>
              <div className='image-div'>
              <img src={options1} className="image" alt="screenshot of project"></img>
              </div>
              <p className="services__modal-description">Python, NumPy, SciPy, Streamlit (2023)</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Implemented the Black-Scholes model to accurately determine option prices using NumPy and SciPy (norm)</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Incorporated key variables such as underlying asset price, strike price, time to expiration, volatility, and risk-free
interest rate, resulting in highly accurate and reliable pricing predictions</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-github services__modal-icon">
                  </i>
                  <p className="services__modal-info"><a href="https://github.com/rjnvr/option-pricer">Source Code</a></p>
                </li>
                
              </ul>
            </div>
          </div>
        </div>



      <div className="services__content">
          <div>
          <i class='bx bxs-file-js services__icon'></i>
            <h3 className="services__title">Molecule Visualizer Database</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Molecule Visualizer Database</h3>
              <div className='image-div'>
              <img src={molecule1} className="image" alt="screenshot of project"></img>
              </div>
              <p className="services__modal-description">Python, C, SQLite, JavaScript, jQuery, AJAX, HTML/CSS (2023)</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Created a full-stack app that lets users upload .cif files, parsing them into SVG format for display. Integrated SQL
database for storing and retrieving molecule data</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Leveraged Python web server hosting, coupled with jQuery and AJAX, to ensure smooth functionality and
interactive components within the application</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-chart-line services__icon"></i>
            <h3 className="services__title">Trading<br/>Bot</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>
          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Trading Bot</h3>
              <div className='image-div'>
              <img src={stockbot1} className="image" alt="screenshot of project"></img>
              </div>
              <p className="services__modal-description">Python, Pandas, NumPy (2022)</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Created a trading bot with Interactive Brokers' TWS API, implemented threading so bot can run simultaneously with bar data collection</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Developed with Pandas/Numpy for managing and manipulating inbound bar data in arrays</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Developed additional technical bot logic which led to an increase in profit factor (back-tested with Tradingview's Pine Script)</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-github services__modal-icon">
                  </i>
                  <p className="services__modal-info"><a href="https://github.com/rjnvr/ibkr-trading-bot">Source Code</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-cloud services__icon"></i>
            <h3 className="services__title">Weather<br />App</h3>
            
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Weather App</h3>
              <div className='image-div'>
              <img src={weather1} className="image" alt="screenshot of project"></img>
              </div>
              <p className="services__modal-description">JavaScript, React.js, Tailwind CSS (2022)</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Used OpenWeatherMap's API alongside React hooks (useState and useEffect) to fetch weather info and reactive user input</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Improved the app by implementing Geolocation API to get user's current location and React-Toastify to update user on current operations</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-github services__modal-icon">
                  </i>
                  <p className="services__modal-info"><a href="https://github.com/rjnvr/weather-app">Source Code</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-book-open services__icon"></i>
            <h3 className="services__title">Pokédex<br />App</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(4)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Pokédex App</h3>
              <div className='image-div'>
              <img src={poke1} className="image" alt="screenshot of project"></img>
              </div>
              <p className="services__modal-description">A pokemon search app made using React.js Javascript HTML/CSS with Poke API</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Built an app that displays information about the Pokemon searched. Used react hooks (useState) to store the name of Pokemon entered and the information of each Pokemon searched
</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon">
                  </i>
                  <p className="services__modal-info">Used Axios to fetch data from Poke API about the Pokemon which is then stored using a react hook and displayed onto the screen
</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-github services__modal-icon">
                  </i>
                  <p className="services__modal-info"><a href="https://github.com/rjnvr/pokemon-app">Source Code</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Services
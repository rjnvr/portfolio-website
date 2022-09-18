import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Arjun</h1>

            <ul className='footer__list'>
                <li>
                    <a href='#about' className='footer__link'>About</a>
                </li>

                <li>
                    <a href='#skills' className='footer__link'>Technical Skills</a>
                </li>

                <li>
                    <a href='#portfolio' className='footer__link'>Projects</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://github.com/rjnvr" className="home__social-icon" target="_blank">
        <i class="uil uil-github"></i>
      </a>
      
      <a href="https://www.linkedin.com/in/arjunvir-sidhu-7394b11a3/" className="home__social-icon" target="_blank">
        <i class="uil uil-linkedin"></i>
      </a>
            </div>

            <span className='footer__copy'></span>
        </div>
    </footer>
  )
}

export default Footer
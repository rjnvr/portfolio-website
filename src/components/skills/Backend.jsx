import React from 'react'
import { Icon } from '@iconify/react';

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Libraries/Frameworks:</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxl-react newicons' ></i>

                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <Icon icon="logos:pandas-icon" />

                    <div>
                        <h3 className="skills__name">Pandas/Numpy</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-tailwind-css newicons' ></i>

                    <div>
                        <h3 className="skills__name">Tailwind CSS</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxl-bootstrap newicons' ></i>

                    <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-nodejs newicons'></i>

                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-jquery newicons' ></i>

                    <div>
                        <h3 className="skills__name">jQuery</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <Icon icon="logos:streamlit" />

                    <div>
                        <h3 className="skills__name">Streamlit</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                    

            </div>
        </div>
    </div>
  )
}

export default Backend
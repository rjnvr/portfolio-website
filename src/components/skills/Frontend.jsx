import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Languages:</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bxl-c-plus-plus newicons'></i>

                    <div>
                        <h3 className="skills__name">C/C++</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-python newicons' ></i>

                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

                    <div className="skills__data">
                    <i class='bx bxl-javascript newicons' ></i>

                    <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxl-java newicons' ></i>

                    <div>
                        <h3 className="skills__name">Java</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>
                    <div className="skills__data">
                    <i class='bx bx-data newicons' ></i>

                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>
                    <div className="skills__data">
                    <i class='bx bxs-color newicons'></i>

                    <div>
                        <h3 className="skills__name">C#</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>

            </div>
        </div>
    </div>
  );
};

export default Frontend
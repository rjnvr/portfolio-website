import React from 'react'

const Other = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Other:</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i class='bx bx-badge-check newicons'></i>

                <div>
                    <h3 className="skills__name">APIs</h3>
                    <span className="skills__level"></span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-github newicons'></i>
                <div>
                    <h3 className="skills__name">Github</h3>
                    <span className="skills__level"></span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-terminal newicons'></i>
                <div>
                    <h3 className="skills__name">Linux</h3>
                    <span className="skills__level"></span>
                </div>
                </div>

        </div>

        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bxs-clinic newicons' ></i>

                <div>
                    <h3 className="skills__name">Informatica Developer</h3>
                    <span className="skills__level"></span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-dev-to newicons' ></i>

                    <div>
                        <h3 className="skills__name">Azure DevOps</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>
                
                    <i class='bx bxs-data newicons' ></i>

                    <div>
                        <h3 className="skills__name">SQL Server Management</h3>
                        <span className="skills__level"></span>
                    </div>
                
        </div>
    </div>
</div>
  )
}

export default Other
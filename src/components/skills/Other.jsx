import React from 'react'
import { Icon } from '@iconify/react';

const Other = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Other:</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <Icon icon="material-symbols:api" />

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
            <Icon icon="devicon:azure" />

                <div>
                    <h3 className="skills__name">Azure AI Studio</h3>
                    <span className="skills__level"></span>
                </div>
                </div>

                <div className="skills__data">
                <Icon icon="devicon:azuredevops" />

                    <div>
                        <h3 className="skills__name">Azure DevOps</h3>
                        <span className="skills__level"></span>
                    </div>
                    </div>
                
                    <Icon icon="vscode-icons:file-type-sql" />

                    <div>
                        <h3 className="skills__name">SQL Server Management Studio</h3>
                        <span className="skills__level"></span>
                    </div>
                
        </div>
    </div>
</div>
  )
}

export default Other
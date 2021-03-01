import * as React from "react";
import "./styles.scss";

// import manage from './icons';

// const grow = require("../../assets/grow.png")

const repoIconMap: { [key: string]: string } = {
    'grow': 'grow',
    'themis': 'manage'
}

const RepoIcon: React.FC<{ repoName: string }> = ({ repoName }) => {
    const iconName = repoIconMap[repoName]

    return (
        <div>
            {
                (iconName)
                    ? <img src={`https://raw.githubusercontent.com/rylancole/github-link-library/master/src/assets/icons/${iconName}.png`} alt={repoName} className="repo-icon" />
                    : <i className={`fa fa-github fa-lg`} aria-hidden="true"></i>
            }
        </div>
    )

};

export default RepoIcon;
import * as React from "react";
import "./styles.scss";

// import manage from './icons';

// const grow = require("../../assets/grow.png")

const RepoIcon: React.FC<{ repoName: string }> = ({ repoName }) => {
    // let iconName = "fa-github"

    // if (repoName == "themis") { iconName = "fa-suitcase" }

    // if (repoName == "grow") { iconName = "fa-line-chart" }

    // return <i className={`fa ${iconName} fa-lg`} aria-hidden="true"></i>

    return <p>{repoName}</p>
};

export default RepoIcon;
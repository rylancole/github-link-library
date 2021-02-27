import * as React from "react";

import "./styles.scss";

const RepoIcon: React.FC<{ repoName: string }> = ({ repoName }) => {
    let iconName = "fa-github"

    if (repoName == "themis") { iconName = "fa-suitcase" }

    if (repoName == "grow") { iconName = "fa-line-chart" }

    return <i className={`fa ${iconName} fa-lg`} aria-hidden="true"></i>
};

export default RepoIcon;
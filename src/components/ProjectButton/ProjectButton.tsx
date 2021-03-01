import * as React from "react";
import { Tabs } from "webextension-polyfill-ts";

import { openWebPage } from "../../utils";

import "./styles.scss";

const PROJECT_URL = "https://github.com/orgs/clio/projects/45"

const ProjectButton: React.FC = () => {
    return (
        <button
            id="project-button"
            className="project-button"
            onClick={(): Promise<Tabs.Tab> => {
                return openWebPage(PROJECT_URL);
            }}
        >
            <i className="fa fa-tasks fa-lg" aria-hidden="true"></i>
        </button>
    );
};

export default ProjectButton;

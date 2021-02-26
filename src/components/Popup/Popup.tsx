import * as React from "react";

import { Headline, ListWrapper, Toolbar, SettingsButton } from "..";
import { getPRs } from "../../api";

import "./styles.scss";

const Popup: React.FC = () => {
  const [prNodes, setPrNodes] = React.useState([]);
  const [thIssueNodes, setThIssueNodes] = React.useState([]);
  const [grIssueNodes, setGrIssueNodes] = React.useState([]);

  React.useEffect(() => {
    getPRs().then((res) => {
      if (res.status == "ok" && res.data) {
        setPrNodes(res.data.viewer.pullRequests.nodes);
        setThIssueNodes(res.data.themis.issues.nodes);
        setGrIssueNodes(res.data.grow.issues.nodes);
      }
    });
  }, []);

  return (
    <div className="popup">
      <Toolbar id="popup-toolbar">
        <SettingsButton />
      </Toolbar>
      <Headline id="pr-headline">Open PRs</Headline>
      <ListWrapper id="pull-request-list" nodes={prNodes} />
      <Headline id="pr-headline">Issues</Headline>
      <ListWrapper id="themis-issue-list" nodes={thIssueNodes} />
      <ListWrapper id="grow-issue-list" nodes={grIssueNodes} />
    </div>
  );
};

export default Popup;

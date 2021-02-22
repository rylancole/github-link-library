import * as React from "react";

import { ListWrapper, Toolbar, SettingsButton } from "..";
import { GET_PRS } from "../../api";
import { useQuery } from '@apollo/client';

import "./styles.scss";

const Popup: React.FC = () => {
  // const [prNodes, setPrNodes] = React.useState([]);
  // const [thIssueNodes, setThIssueNodes] = React.useState([]);
  // const [grIssueNodes, setGrIssueNodes] = React.useState([]);

  // React.useEffect(() => {
  //   getPRs().then((res) => {
  //     if (res.status == "ok" && res.data) {
  //       setPrNodes(res.data.viewer.pullRequests.nodes);
  //       setThIssueNodes(res.data.themis.issues.nodes);
  //       setGrIssueNodes(res.data.grow.issues.nodes);
  //     }
  //   });
  // }, []);

  const { loading, error, data } = useQuery(GET_PRS);

  if (loading) return (<div className="popup">'Loading...'</div>);
  if (error) return <div className="popup">Error! ${error.message}</div>;

  return (
    <div className="popup">
      <Toolbar id="popup-toolbar">
        <SettingsButton />
      </Toolbar>
      Open PRs
      {/* <ListWrapper id="pull-request-list" nodes={data.viewer.pullRequests.nodes} /> */}
      {/* Themis Issues
      <ListWrapper id="pull-request-list" nodes={thIssueNodes} />
      Grow Issues
      <ListWrapper id="pull-request-list" nodes={grIssueNodes} /> */}
    </div>
  );
};

export default Popup;

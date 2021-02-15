import * as React from "react";

import { ListWrapper, Toolbar, SettingsButton } from "..";
import { getPRs } from "../../api";

import "./styles.scss";

const Popup: React.FC = () => {
  const [prNodes, setPrNodes] = React.useState([]);

  React.useEffect(() => {
    getPRs().then((res) => {
      if (res.status == "ok" && res.data) {
        setPrNodes(res.data.viewer.pullRequests.nodes);
      }
    });
  }, []);

  return (
    <div className="popup">
      <Toolbar id="popup-toolbar">
        <SettingsButton />
      </Toolbar>
      <ListWrapper id="pull-request-list" nodes={prNodes} />
    </div>
  );
};

export default Popup;

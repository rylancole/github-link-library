import * as React from "react";

import { ListWrapper, PopupWrapper, Toolbar } from "..";
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
    <PopupWrapper>
      <Toolbar id="toolbar" />
      <ListWrapper id="pull-request-list" nodes={prNodes} />
    </PopupWrapper>
  );
};

export default Popup;

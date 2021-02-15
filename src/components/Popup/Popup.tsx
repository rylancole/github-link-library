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
      <Toolbar />
      <ListWrapper nodes={prNodes} />
    </PopupWrapper>
  );
};

export default Popup;

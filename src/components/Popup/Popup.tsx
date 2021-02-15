import * as React from "react";

import { PopupWrapper, Toolbar } from "..";
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
      <div>
        {prNodes.map((node: { url: string; number: string; title: string }) => (
          <div key={node.number}>
            <a href={node.url}>{node.title}</a>
          </div>
        ))}
      </div>
    </PopupWrapper>
  );
};

export default Popup;

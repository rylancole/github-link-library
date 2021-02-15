import * as React from "react";
import { getPRs } from "../../api";
import "./styles.scss";

const Options: React.FC = () => {
  const [prNodes, setPrNodes] = React.useState([]);

  React.useEffect(() => {
    getPRs().then((res) => {
      if (res.status == "ok" && res.data) {
        setPrNodes(res.data.viewer.pullRequests.nodes);
      }
    });
  }, []);

  return (
    <div>
      {prNodes.map((node: { url: string; number: string; title: string }) => (
        <div key={node.number}>
          <a href={node.url}>{node.title}</a>
        </div>
      ))}
    </div>
  );
};

export default Options;

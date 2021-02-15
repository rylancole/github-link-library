import * as React from "react";

import "./styles.scss";

interface Node {
  number: string;
  title: string;
  url: string;
}

const ListWrapper: React.FC<{ nodes: Node[] }> = ({ nodes }) => {
  return (
    <div>
      {nodes?.map((node: { url: string; number: string; title: string }) => (
        <div key={node.number}>
          <a href={node.url}>{node.title}</a>
        </div>
      ))}
    </div>
  );
};

export default ListWrapper;

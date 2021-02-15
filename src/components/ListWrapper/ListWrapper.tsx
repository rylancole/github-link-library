import * as React from "react";
import { ListLinkButton } from "..";
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
        <ListLinkButton key={node.number} url={node.url} title={node.title} />
      ))}
    </div>
  );
};

export default ListWrapper;

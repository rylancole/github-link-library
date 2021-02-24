import * as React from "react";
import { ListLinkButton } from "..";
import "./styles.scss";

interface Node {
  number: string;
  title: string;
  url: string;
  reviews?: {
    totalCount: number;
  };
}

const ListWrapper: React.FC<{ nodes: Node[]; id: string }> = ({
  nodes,
  id,
}) => {
  return (
    <div id={id} className="list-wrapper">
      {nodes?.map((node: Node) => (
        <ListLinkButton
          key={node.number}
          url={node.url}
          title={node.title}
          numApprovals={node.reviews?.totalCount}
        />
      ))}
    </div>
  );
};

export default ListWrapper;

import * as React from "react";
import { ListLinkButton } from "..";
import "./styles.scss";

interface Node {
  number: string;
  title: string;
  url: string;
  repository: {
    name: string;
  };
  reviews?: {
    totalCount: number;
  };
  commits?: any;
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
          commitNode={node.commits?.nodes[0]}
          repoName={node.repository.name}
        />
      ))}
    </div>
  );
};

export default ListWrapper;

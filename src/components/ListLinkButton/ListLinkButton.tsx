import * as React from "react";
import { Tabs } from "webextension-polyfill-ts";
import { openWebPage } from "../../utils";
import { ApprovalIcons, RepoIcon, StatusIcon } from '..'
import "./styles.scss";

const MAX_TITLE_LENGTH = 30

const chopTitle = (title: string) => {
  return (title.length > MAX_TITLE_LENGTH) ? title.substring(0, MAX_TITLE_LENGTH - 3) + "..." : title;
}

const ListLinkButton: React.FC<{
  key: string;
  title: string;
  url: string;
  repoName: string,
  numApprovals?: number;
  commitNode?: any;
}> = ({ url, title, repoName, numApprovals, commitNode }) => {

  return (
    <button
      className="list-link-button"
      onClick={(): Promise<Tabs.Tab> => {
        return openWebPage(url);
      }}
    >
      <div className="left">
        <RepoIcon repoName={repoName} />
        <strong className="list-link-button-text">{chopTitle(title)}</strong>
      </div>
      <div className="right">
        <ApprovalIcons count={numApprovals} />
        {(commitNode) && <StatusIcon state={commitNode.commit.status.state} />}
      </div>
    </button>
  );
};

export default ListLinkButton;

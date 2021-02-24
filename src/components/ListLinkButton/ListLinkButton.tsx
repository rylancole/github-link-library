import * as React from "react";
import { Tabs } from "webextension-polyfill-ts";
import { openWebPage } from "../../utils";
import "./styles.scss";

const ListLinkButton: React.FC<{
  key: string;
  title: string;
  url: string;
  numApprovals?: number;
}> = ({ key, url, title, numApprovals }) => {
  return (
    <button
      key={key}
      className="list-link-button"
      onClick={(): Promise<Tabs.Tab> => {
        return openWebPage(url);
      }}
    >
      <div className="left">
        <i className="fa fa-github fa-lg" aria-hidden="true"></i>
        <p className="list-link-button-text">{title}</p>
      </div>
      <div className="right">
        <p>{numApprovals}</p>
      </div>
    </button>
  );
};

export default ListLinkButton;

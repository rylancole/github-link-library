import * as React from "react";
import { Tabs } from "webextension-polyfill-ts";
import { openWebPage } from "../../utils";
import "./styles.scss";

const ListLinkButton: React.FC<{
  key: string;
  title: string;
  url: string;
}> = ({ key, url, title }) => {
  return (
    <button
      key={key}
      className="list-link-button"
      onClick={(): Promise<Tabs.Tab> => {
        return openWebPage(url);
      }}
    >
      <i className="fa fa-github fa-lg" aria-hidden="true"></i>
      <p className="list-link-button-text">{title}</p>
    </button>
  );
};

export default ListLinkButton;

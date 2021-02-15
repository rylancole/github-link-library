import * as React from "react";
import { openWebPage } from "../../utils";
import "./styles.scss";

const ListLinkButton: React.FC<{
  key: string;
  title: string;
  url: string;
}> = ({ key, url, title }) => {
  return (
    <div className="list-link-button" key={key}>
      <button onClick={() => openWebPage(url)}>
        <p className="list-link-button-title">{title}</p>
      </button>
    </div>
  );
};

export default ListLinkButton;

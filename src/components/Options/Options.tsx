import * as React from "react";
import { Toolbar } from "..";
import "./styles.scss";

const Options: React.FC = () => {
  return (
    <div className="options">
      <Toolbar id="options-toolbar" />
      <div className="options-panel">
        Currently there are no settings avaliable.
      </div>
    </div>
  );
};

export default Options;

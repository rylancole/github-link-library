import * as React from "react";

import { SettingsButton } from "..";

import "./styles.scss";

const Toolbar: React.FC = () => {
  return (
    <div id="toolbar" className="toolbar">
      <SettingsButton />
    </div>
  );
};

export default Toolbar;

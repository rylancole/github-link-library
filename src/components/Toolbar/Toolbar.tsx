import * as React from "react";

import { SettingsButton } from "..";

import "./styles.scss";

const Toolbar: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div id={id} className="toolbar">
      <SettingsButton />
    </div>
  );
};

export default Toolbar;

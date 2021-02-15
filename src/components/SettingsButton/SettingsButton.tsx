import * as React from "react";
import { Tabs } from "webextension-polyfill-ts";

import { openWebPage } from "../../utils";

import "./styles.scss";

const SettingsButton: React.FC = () => {
  return (
    <button
      id="settings-button"
      className="settings-button"
      onClick={(): Promise<Tabs.Tab> => {
        return openWebPage("options.html");
      }}
    >
      <i className="fa fa-cog fa-lg" aria-hidden="true"></i>
    </button>
  );
};

export default SettingsButton;

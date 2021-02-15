import * as React from "react";
import { browser, Tabs } from "webextension-polyfill-ts";

import "./styles.scss";

function openWebPage(url: string): Promise<Tabs.Tab> {
  return browser.tabs.create({ url });
}

const SettingsButton: React.FC = () => {
  return (
    <button
      id="settings-button"
      className="settings-button"
      onClick={(): Promise<Tabs.Tab> => {
        return openWebPage("options.html");
      }}
    >
      <i className="fa fa-cog fa-lg"></i>
    </button>
  );
};

export default SettingsButton;

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
      type="button"
      onClick={(): Promise<Tabs.Tab> => {
        return openWebPage("options.html");
      }}
    >
      Options Page
    </button>
  );
};

export default SettingsButton;

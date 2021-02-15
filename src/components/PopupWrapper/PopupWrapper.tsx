import * as React from "react";

import "./styles.scss";

const PopupWrapper: React.FC = ({ children }) => {
  return (
    <div id="popup-" className="popup-wrapper">
      {children}
    </div>
  );
};

export default PopupWrapper;

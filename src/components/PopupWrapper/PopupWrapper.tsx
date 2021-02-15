import * as React from "react";

import "./styles.scss";

const PopupWrapper: React.FC = ({ children }) => {
  return (
    <section id="popup-wrapper" className="popup-wrapper">
      {children}
    </section>
  );
};

export default PopupWrapper;

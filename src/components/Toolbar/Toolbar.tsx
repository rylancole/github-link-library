import * as React from "react";

import "./styles.scss";

const Toolbar: React.FC<{ id: string }> = ({ id, children }) => {
  return (
    <div id={id} className="toolbar">
      {children}
    </div>
  );
};

export default Toolbar;

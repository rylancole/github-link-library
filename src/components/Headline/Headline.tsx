import * as React from "react";

import "./styles.scss";

const Headline: React.FC<{ id: string }> = ({ id, children }) => {
    return (
        <h3 id={id} className="headline">
            {children}
        </h3>
    );
};

export default Headline;
import * as React from "react";

import "./styles.scss";

const StatusIcon: React.FC<{ state: string }> = ({ state }) => {
    return (
        <div className={state}>
            <i className="fa fa-circle" />
        </div>
    );
};

export default StatusIcon;
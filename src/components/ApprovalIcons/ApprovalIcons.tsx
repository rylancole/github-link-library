import * as React from "react";

import "./styles.scss";

const iconName = "fa fa-check-square"

const ApprovalIcons: React.FC<{ count?: number }> = ({ count }) => {
    return (
        <div className="approvals">
            {(count && count > 0) ? <i className={iconName} /> : null}
            {(count && count > 1) ? <i className={iconName} /> : null}
        </div>
    );
};

export default ApprovalIcons;
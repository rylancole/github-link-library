import * as React from "react";

import "./styles.scss";

const CopyButton: React.FC<{ url: string }> = ({ url }) => {
    const onClick = () => {
        navigator.clipboard.writeText(url)
    }
    return (
        <button className="copy-button" onClick={onClick}>
            <i className="fa fa-clone fa-md" aria-hidden="true"></i>
        </button>
    );
};

export default CopyButton;
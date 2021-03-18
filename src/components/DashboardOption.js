import React from "react";

export default function DashboardOption(props) {
    const { isActive, text, value, onClick } = props;
    return (
        <div className={`nav-link ${isActive ? "active" : ""}`} onClick={(e) => { onClick(e, value); }} >
            {text}
        </div>
    );
}

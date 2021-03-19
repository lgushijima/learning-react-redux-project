import React from "react";

export default function DashboardOption(props) {
    const { isActive, text, value, onClick, count } = props;
    return (
        <div className={`nav-link bg-transition ${isActive ? "active" : ""}`} onClick={(e) => { onClick(e, value); }} >
            {text} ({count})
        </div>
    );
}

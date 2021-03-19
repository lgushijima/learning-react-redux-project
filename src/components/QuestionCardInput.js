import React from "react";

export default function QuestionCardInput (props) {
    const {id, value, text, onSelected} = props;
    return (
        <div>
            <input type="radio" value={value} name={`rad-${id}`} id={`rad-${value}-${id}`} onClick={(e) => { onSelected(value); }}/>
            <label htmlFor={`rad-${value}-${id}`}>{text}</label>
        </div>
    );
}

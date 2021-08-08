import React from 'react'
import Label from './Label'

export default function TextBox({ inputFormClass, inputType, inputPlaceholder,
    inputValue, inputOnChange, inputIsRequired, inputName, inputError, inputErrorClass, inputErrorMessage }) {
    return (
        <React.Fragment>
            <div className={inputFormClass || "form-line"}>
                <input
                    id={inputName}
                    className={inputType === "checkbox" ? "filled-in chk-col-pink" : "form-control"}
                    type={inputType}
                    placeholder={inputPlaceholder}
                    value={inputValue} name={inputName}
                    required={inputIsRequired}
                    onChange={inputOnChange} />
                {inputType === "checkbox" ?
                    <Label labelName={inputName} labelClass={inputErrorClass} labelValue={inputErrorMessage} />
                    : null}
            </div>
            {inputError ?
                <Label labelName={inputName} labelClass={inputErrorClass} labelValue={inputErrorMessage} />
                : null}
        </React.Fragment>
    )
}

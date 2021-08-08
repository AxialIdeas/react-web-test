import React from 'react'

export default function Label({labelName, labelClass, labelValue}) {
    return (
        <label id={`${labelName}-label`} className={labelClass} htmlFor={labelName}>{labelValue}</label>
    )
}

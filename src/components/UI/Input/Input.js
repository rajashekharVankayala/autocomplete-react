import React, { Fragment } from 'react'
import './Input.css'

export default function Input(props) {
    
    let { elementConfig : {type = "text"} } = props
    if (props.touched && !props.valid) {
        errorMessage = props.errorMessage || `Enter the valid ${type}`
    }

    return (
        <Fragment>
            <input
                onChange={props.onChange}
                onFocus={props.onChange}
                onBlur={props.onBlur}
                className={props.className}
                {...props.elementConfig}
                value={props.value}
                maxLength={props.maxLength || 200}
            />
            <div className="error-message">{ errorMessage }</div>
        </Fragment>
    )
}
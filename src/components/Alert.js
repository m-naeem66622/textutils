import React from 'react'

function Alert(props) {
    return (
        <>
            {props.alert && <div style={{ top: "56px", zIndex: "1000", borderRadius: 0 }} className={`alert fixed-top alert-${props.alert.type} d-flex align-items-center`} role="alert">
                <div>
                    <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}: </strong> {props.alert.msg}
                </div>
            </div>}
        </>
    )
}

export default Alert

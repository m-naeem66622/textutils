import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <>
            <div className={`card text-center text-${props.theme.text} border-${props.theme.text} bg-${props.theme.bg} mb-3 h-100`}>
                <h3 className="card-header border-transparent bg-transparent" style={{ borderBottom: "none" }}>{props.data.header}</h3>
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.desc}</p>
                </div>
                <div className="card-footer border-transparent bg-transparent" style={{ borderTop: "none" }}>
                    <Link to="#" className="btn btn-primary">{props.data.btnText}</Link>
                </div>
            </div>
        </>
    )
}

export default Card

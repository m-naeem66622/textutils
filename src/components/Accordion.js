import React from 'react'

function Accordion(props) {
    return (
        <>
            <div className={`accordion-item`}>
                <h2 className="accordion-header" id={`heading${props.data.id}`}>
                    <button className={`accordion-button ${props.theme.bg}-theme ${props.data.expand ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.data.id}`} aria-expanded={props.data.expand} aria-controls={`collapse${props.data.id}`}>
                        {props.data.header}
                    </button>
                </h2>
                <div id={`collapse${props.data.id}`} className={`accordion-collapse collapse ${props.data.expand ? "show" : ""} ${props.theme.bg}-theme`} aria-labelledby={`heading${props.data.id}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        {props.data.body}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion

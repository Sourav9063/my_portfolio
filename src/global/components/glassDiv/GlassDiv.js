import React from 'react'
import style from './GlassDiv.module.css'
import "../../css/global.css"

export default React.forwardRef(function GlassDiv(props) {
    let classes = `${style.glass}`
    if (props.className) {
        classes += ` ${props.className}`
    }
    return (
        <div className={classes} >{props.children}</div>
    )
}
)
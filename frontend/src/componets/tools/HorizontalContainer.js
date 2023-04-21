import React from 'react'
import "./HorizontalContainer.css"

export const HorizontalContainer = ( props ) => {
  return (
    <div className="horizontalcontainer">
        { props.children }
    </div>
  )
}
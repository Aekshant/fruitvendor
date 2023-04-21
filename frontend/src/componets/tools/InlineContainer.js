import React from 'react'
import "./InlineContainer.css"

export const InlineContainer = ( props ) => {
  return (
    <div className="inclineContainer" {...props}>
        { props.children }
    </div>
  )
}

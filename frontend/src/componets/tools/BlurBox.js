import React from 'react'

const BlurBox = ( props ) => {
  return (
    <div style={{ overflow:"hidden", display: ( props.transparent ? "flex" : "none" ), justifyContent: "center", zIndex : 1, position : "relative", marginTop : "auto" }}>
            <div style={props.style}>
                {props.children}
            </div>
      </div>
  )
}

export default BlurBox
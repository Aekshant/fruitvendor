import React from 'react'
import "./InputBox.css"

export const InputBox = ( props ) => {
  return (
    <div className="input-group" {...props}>
        <input type="search" className="form-control rounded me-1" placeholder="Search" aria-label="Search" aria-describedby="search-addon" style={{ width:"18rem" }}/>
        <button type="button" className="btn btn-outline-dark">Search</button>
    </div>
  )
}

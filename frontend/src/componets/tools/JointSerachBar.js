import React from 'react'
import { InlineContainer } from "./InlineContainer"
import SelectBox from "./SelectBox" 
import { InputBoxIcon } from "./InputBoxIcon"

const JointSerachBar = () => {
  return (
    <InlineContainer>
        <SelectBox name="search" options={[ { value: "a1", name: "A1", key: "1"  } ]}/>
        <div style={{ backgroundColor:"white", color:"grey", paddingTop:".5%", fontSize: "1.1rem" }}>|</div>
        <InputBoxIcon />
    </InlineContainer>
  )
}

export default JointSerachBar

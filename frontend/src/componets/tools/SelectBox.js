import React, { useState } from 'react'
import "./SelectBox.css"
import Select from 'react-select';
import { InlineContainer } from "../tools/InlineContainer"

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const SelectBox = ( props ) => {
  const [selectedOption, setSelectedOption] = useState({ value: 'maharashtra', label: 'Maharashtra' });
  const clickHandle = ( Selected ) => {
    console.log( Selected.value );
  }
  const SelectBoxStyle = {
    control : ( base ) => ( {
      ...base,
      border: 0,
      boxShadow: 'none'
    }),
    options : ( base ) => ({
      ...base
    })
  }
  return (
    <div style={{ }}>
      <InlineContainer style={{ flexWrap: "unset", backgroundColor: "white", padding : ".5rem", borderRadius: ".8rem 0 0 .8rem" }}>
          <img src='./gps.png' alt='gps' width="26rem" height="1%" style={{ marginTop: "2.4%" }}/>
          <Select styles={ {
            control : ( base ) => ( {
              ...base,
              border: 0,
              boxShadow: 'none'
            })
          } }
            defaultValue={selectedOption}
            onChange={clickHandle}
            options={options}
          />
      </InlineContainer>
    </div>
  )
}

export default SelectBox
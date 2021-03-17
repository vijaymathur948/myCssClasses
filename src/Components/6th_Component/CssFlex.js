import React from "react"
import style from "./style.css"

const BasicCss = props => {
  return (
    <div className='cssflex'>
      <h2>CSS Template using Flexbox</h2>
      <p>
        In this example, we have created a header, three equal columns and a
        footer. On smaller screens, the columns will stack on top of each other.
      </p>
      <p>Resize the browser window to see the responsive effect.</p>
      <div className='header'>
        <h2>Header</h2>
      </div>
      <div className='row'>
        <div className='column side' style={{ backgroundColor: "#aaa" }}>
          Column
        </div>
        <div className='column middle' style={{ backgroundColor: "#bbb" }}>
          Column
        </div>
        <div className='column side' style={{ backgroundColor: "#ccc" }}>
          Column
        </div>
      </div>
      <div className='footer'>
        <p>Footer</p>
      </div>
    </div>
  )
}
export default BasicCss

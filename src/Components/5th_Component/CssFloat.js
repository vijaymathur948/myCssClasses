import React from "react"
import style from "./style.css"

function importAll(r) {
  return r.keys().map(r)
}
// const images = importAll(
//   require.context("./Samples", true, /\.(png|jpe?g|svg)$/)
// )

const BasicCss = props => {
  return (
    <div className='cssfloat'>
      <h2>CSS Template using Float</h2>
      <p>
        In this example, we have created a header, three equal columns and a
        footer. On smaller screens, the columns will stack on top of each other.
      </p>
      <p>Resize the browser window to see the responsive effect.</p>
      <div className='header'>
        <h2>Header</h2>
      </div>
      <div className='row'>
        <div className='column' style={{ backgroundColor: "#aaa" }}>
          Column
        </div>
        <div className='column' style={{ backgroundColor: "#bbb" }}>
          Column
        </div>
        <div className='column' style={{ backgroundColor: "#ccc" }}>
          Column
        </div>
        <div className='column' style={{ backgroundColor: "#ccc" }}>
          Column
        </div>
        <div className='column' style={{ backgroundColor: "#ccc" }}>
          Column
        </div>
        <div className='column' style={{ backgroundColor: "#ccc" }}>
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

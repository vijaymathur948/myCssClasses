import React from "react"
import "./CssTemplate.css"

const Template = props => {
  return (
    <div className='cssTemplate'>
      <div className='topnav'>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
        <a href='#'>Link</a>
      </div>
      <div className='content'>
        <h2>Css Template</h2>
        <p>A topnav, content and a footer</p>
      </div>
      <div className='footer'>
        <p>Footer</p>
      </div>
    </div>
  )
}
export default Template

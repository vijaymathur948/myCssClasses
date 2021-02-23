import React from "react"
import "./HorizontalTabs.css"

const Tabs = props => {
  return (
    <div>
      <div className='tabs'>
        <div className='tab'>Tab 1</div>
        <div className='tab'>Tab 2</div>
        <div className='tab'>Tab 3</div>

        <div className='tab'>Tab 4</div>
        <div className='tab'>Tab 5</div>
        <div className='tab'>Tab 6</div>
      </div>
      <div className='tabs'>
        <div className='tab'>Tab 1</div>
        <div className='tab'>Tab 2</div>
        <div className='tab'>Tab 3</div>

        <div className='tab'>Tab 4</div>
        <div className='tab'>Tab 5</div>
      </div>
      <div className='tabs'>
        <div className='tab'>Tab 1</div>
        <div className='tab'>Tab 2</div>
        <div className='tab'>Tab 3</div>

        <div className='tab'>Tab 4</div>
      </div>
    </div>
  )
}
export default Tabs

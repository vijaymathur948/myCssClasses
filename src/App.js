import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { connect, useSelector, useDispatch, useStore } from "react-redux"
import { startAction } from "./actions/startAction"
import { stopAction } from "./actions/stopAction"
import { rotateAction } from "./actions/rotateAction"
import Components from "./Components/index"
import { Tabs, Tab, Form } from "react-bootstrap"
import all from "./Components"

const mapStateToProps = state => {
  return { ...state }
}
const mapDispatchToProps = dispatch => {
  return {
    stopAction: () => dispatch(stopAction),
    startAction: () => dispatch(startAction),
    rotateAction: payload => dispatch(rotateAction(payload)),
  }
}

function App(props) {
  const [element, setElement] = useState("")
  const calculate = no => {
    if (no >= 11 && no <= 20) return String(no) + "th"
    if (no % 10 === 1) return String(no) + "st"
    if (no % 10 === 2) return String(no) + "nd"
    if (no % 10 === 3) return String(no) + "rd"
    return String(no) + "th"
  }
  console.log()
  return (
    <div className='App'>
      <Tabs defaultActiveKey={0} id='all_components'>
        {Object.keys(Components).map((element, index_1) => {
          // return (
          //   <div key={index_1}>
          //     <h1>This is {calculate(index_1)} Component </h1>
          //     {Components[element]()}
          //   </div>
          // )

          return (
            <Tab
              eventKey={index_1}
              title={calculate(index_1 + 1) + " Component"}
              key={index_1}
            >
              <div className='mt-1'>{Components[element]()}</div>
            </Tab>
          )
        })}
      </Tabs>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

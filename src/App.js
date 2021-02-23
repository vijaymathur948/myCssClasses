import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { connect, useSelector, useDispatch, useStore } from "react-redux"
import { startAction } from "./actions/startAction"
import { stopAction } from "./actions/stopAction"
import { rotateAction } from "./actions/rotateAction"
import NewComponent from "./Components/NewComponent"
import Tabs from "./Components/HorizontalTabs"

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
  return (
    <div className='App'>
      <NewComponent />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

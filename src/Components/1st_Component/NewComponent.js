import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { startAction } from "../../actions/startAction"
import { stopAction } from "../../actions/stopAction"
import { rotateAction } from "../../actions/rotateAction"

import { Row, Col, Form } from "react-bootstrap"
import "./NewComponent.css"

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

const NewComponent = props => {
  const extract = (length, groupingvalue) => {
    if (length < 1 || groupingvalue < 1) return []

    let arr = Array.from({ length: length }).fill(2)
    let resultArray = []
    var counter = 0
    // total 20 size 3

    for (let i = 0; i + groupingvalue <= arr.length; i = i + groupingvalue) {
      resultArray.push(arr.slice(i, i + groupingvalue))

      // counter++
      // if (counter % 2 === 0) groupingvalue--
      // else groupingvalue++
    }

    return resultArray
  }
  const [size, setSize] = useState(5)
  const [total, setTotal] = useState(20)
  const [arr, setArr] = useState(extract(total, size))
  useEffect(() => {
    if (total > 0 && total <= 1000 && size > 0 && size <= 1000) {
      setArr(extract(total, size))
    }
  }, [total, size])
  useEffect(() => {
    setInterval(() => {
      var dateTimeObj = new Date()
      document.getElementById("date").innerHTML =
        "Date: ".bold().fontsize("20") +
        dateTimeObj.getDate() +
        "-" +
        dateTimeObj.getMonth() +
        "-" +
        dateTimeObj.getFullYear() +
        "    Time: ".bold().fontsize("20") +
        dateTimeObj.getHours() +
        " hours " +
        dateTimeObj.getMinutes() +
        " minutes " +
        dateTimeObj.getSeconds() +
        " seconds "

      document.onmousemove = e => {
        document.getElementById(
          "mouse"
        ).innerHTML = `Mouse Co-ordinates [${e.clientX},${e.clientY}]`
      }
    }, 1000)
  }, [])

  return (
    <div className='newComponent' style={{ backgroundColor: size }}>
      <div className='header'>
        <h2 id='date' />
        <h2 id='mouse' />

        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Enter Total Size</Form.Label>
              <Form.Control
                type='number'
                min='1'
                max='1000'
                value={total}
                onChange={e => {
                  setTotal(Number(e.target.value))
                }}
                placeholder='Enter Total Size'
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter Row Size</Form.Label>
              <Form.Control
                type='number'
                min='1'
                max='1000'
                placeholder='Enter Total Size'
                value={size}
                onChange={e => {
                  setSize(Number(e.target.value))
                }}
              />
            </Form.Group>
          </Form>
        </Row>
      </div>
      <hr />
      {arr.map((obj_1, index_1) => {
        return (
          <div className='rows' key={index_1}>
            {obj_1.map((obj_2, index_2) => {
              return (
                <div className='columns' key={index_2}>
                  [{index_1 + 1},{index_2 + 1}]
                </div>
              )
            })}
          </div>
        )
      })}

      <hr />
      <div className='footer'>
        <p>Footer</p>
      </div>
      <hr />
    </div>
  )
}
export default NewComponent

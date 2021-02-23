import { initialState } from "../initialState/initialState"
import rotateReducer from "../reducer/rotateReducer"
import { createStore, combineReducers, applyMiddleware } from "redux"

const configureStore = () => {
  return createStore(rotateReducer, initialState)
}
export default configureStore

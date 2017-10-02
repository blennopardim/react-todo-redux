import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'
import Field from './field'
import fieldReducer from './fieldReducer'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Ok' />
    </Provider>
    ,
document.getElementById('app'))
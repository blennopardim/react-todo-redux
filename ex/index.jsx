import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'
import Field from './field'

ReactDOM.render(
    <div>
        <ClassComponent label='Contador' initialValue={10} />
        <Field initialValue='Ok' />
    </div>
    ,
document.getElementById('app'))
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoAction'

const TodoList = props => {
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo =>(
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone': ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='fa-check' hide={todo.done} onClick={() => props.markAsDone(todo)} />
                    <IconButton style='warning' icon='fa-undo' hide={!todo.done} onClick={() => props.markAsPending(todo)} />
                    <IconButton style='danger' icon='fa-trash-o' hide={!todo.done} onClick={() => props.remove(todo)} />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ markAsDone, markAsPending, remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
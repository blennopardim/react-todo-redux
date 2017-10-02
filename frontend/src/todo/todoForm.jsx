import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, clear, changeDescription,  search } from './todoAction'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const { add, clear, search, description } = this.props
        if (e.key == 'Enter') {
            e.shiftKey ? search() : add(description) 
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const { add, search, description } = this.props
        return (
            <div role='form' className='todoForm row'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' type="text"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler.bind(this)}
                        placeholder='Adicione uma tarefa' value={this.props.description} />
                </Grid>
                
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='fa-plus' 
                        onClick={() => add(description)}></IconButton>
                    <IconButton style='info' icon='fa-search' 
                        onClick={() => search()}></IconButton>
                    <IconButton style='default' icon='fa-close' 
                        onClick={this.props.clear}></IconButton>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, clear, changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
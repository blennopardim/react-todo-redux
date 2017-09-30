import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) => {
        if (e.key == 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd() 
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }
    return (
        <div role='form' className='todoForm row'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control' type="text"
                onChange={props.handleChange}
                onKeyUp={keyHandler}
                placeholder='Adicione uma tarefa' value={props.description} />
        </Grid>
        
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='fa-plus' 
                onClick={props.handleAdd}></IconButton>
            <IconButton style='info' icon='fa-search' 
                onClick={props.handleSearch}></IconButton>
            <IconButton style='default' icon='fa-close' 
                onClick={props.handleClear}></IconButton>
        </Grid>
    </div>
    )
}
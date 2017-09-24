import React from 'react'

class Field extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
    }

    handerChange(event) {
        this.setState({value: event.target.value})
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label><br/>
                <input type="text" value={this.state.value} onChange={this.handerChange.bind(this)} />
            </div>
        )
    }
}

export default Field
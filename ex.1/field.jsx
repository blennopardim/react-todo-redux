import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldAction'

class Field extends React.Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label><br/>
                <input type="text" onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        value: state.field.value
    }
)

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background : '#f4f4f4',
            padding: '6px',
            borderBottom:  '1px #ccc dotted',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none' 
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>

                <div className="checkbox">
                    <label>
                        <input type="checkbox" 
                            onChange={this.props.markComplete.bind(this, id)} />
                        {' '}
                        { title }
                    
                    </label>
                    <button 
                        onClick={this.props.deleteTodo.bind(this, id)} 
                        style={btnStyle} >X</button>
                </div>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,    
}

const btnStyle = { 
        background: '#ff0000',
        color: "#fff",
        border: 'none',
        padding: '2px 7px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right',
        fontSize: '0.8em',
        fontWeight: '700',
}

export default TodoItem

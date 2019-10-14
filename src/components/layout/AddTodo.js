import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }

    render() {
        return (
            <form 
                style={{display:"flex"}}
                onSubmit={this.onSubmit}
            >
                <div className="input-group mb-3">
                    <input 
                        type="text" 
                        name="title" 
                        className="form-control"
                        placeholder="Add Todo ..."
                        style={{flex:'10'}}
                        value={this.state.title}
                        onChange={this.onChange}
                    />

                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" 
                                type="submit"
                                value="submit"
                                className="btn"
                                style={{flex:'1'}}                                
                                >Add
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,  
}

export default AddTodo

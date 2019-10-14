import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/layout/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
import uuid from 'uuid';

import './App.css';


export class App extends Component {

  state = {
    todos: []
  };

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
          .then( res => this.setState ({ todos: res.data } ));
  }
  // state ={
  //   todos: [
  //     {
  //       id: uuid.v4(),
  //       title : 'Take out the trash.',
  //       completed: false
  //     },
  //     {
  //       id: uuid.v4(),
  //       title : 'Dinner with wife.',
  //       completed: false
  //     },
  //     {
  //       id: uuid.v4(),
  //       title : 'Meeting with boss.',
  //       completed: false
  //     }            
  //   ]
  // }

  // Toggle Complete
  markComplete = (id) => {
    // console.log(id);
        this.setState( {
            todos: this.state.todos.map(todo => {
              if( todo.id === id ){
                todo.completed = !todo.completed;
              }
              return todo;
            })
        });
  };

  // Delete To do
  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then((res) => this.setState({ 
              todos: [...this.state.todos.filter(todo => todo.id !== id ) ]
            })
          );    
  }

  // Add To do
  addTodo = (title) => {

    // const newTodo ={
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    // this.setState({todos:[...this.state.todos, newTodo]})
    if(title){
      axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed : false
          })
          .then((res) => {
            res.data.id = uuid.v4();
            this.setState({ todos: [...this.state.todos, res.data] });
          });
    }else{
      alert('Please enter a valid value!');
    }

  };

  render() {

    return (
      <Router>
        <div className="App">
        <Header />
          <div className='container'>            
            <Route exact path="/" render={ props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos 
                    todos={this.state.todos} 
                    markComplete={this.markComplete} 
                    deleteTodo={this.deleteTodo} 
                />

              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App


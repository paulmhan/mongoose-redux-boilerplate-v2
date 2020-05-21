import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Header, Form, Segment, Message, List, Pagination, Button } from 'semantic-ui-react';

import { compose } from 'redux';
import axios from 'axios';

import { getUserTodos } from '../../actions/todos';
import { ADD_TODO_ERROR } from "../../actions/types";

class UserTodoList extends Component {

  onSubmit = async (formValues, dispatch) => {
    try {
      await axios.post("/api/user/todos", formValues, { headers: { "authorization": localStorage.getItem("token")}} );
      this.props.getUserTodos();
    } catch (e) {
      dispatch({ type: ADD_TODO_ERROR, payload:e})
    }

  }

  componentDidMount() {
    this.props.getUserTodos();
  }

  renderAddTodo = ({ input, meta }) => {
    return (
      <>
        <Form.Input
          {...input}
          error={ meta.touched && meta.error }
          fluid
          autoComplete='off'
          placeholder='Add a todo'
        />
      </>
    )
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <>
        <Header as='h2' color='teal' textAlign='center' content='Welcome to do the todo app'/>
        <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
          <Segment stacked>
            <Field
              name='text'
              component={this.renderAddTodo}
            />
            <Button 
            type="submit"
            fluid
            color="teal"
            content="Add a Todo"
            />
          </Segment>
        </Form>
      </>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     todos: state.todos.userTodos,
//     clientError: state.todos.getUserTodosClientError,
//     serverError: state.todos.getUserTodosServerError
//   };
// }


function mapStateToProps({ todos: { userTodos, getUserTodosServerError, getUserTodosClientError}}) {
  return {
    todos: userTodos,
    clientError: getUserTodosClientError,
    serverError: getUserTodosServerError
  };
}

// const composedComponent = connect(mapStateToProps, { getUserTodos })(UserTodoList);


// 1 way
// export default reduxForm({ form: 'addTodo' })(connect(mapStateToProps, { getUserTodos })(UserTodoList));

// 2nd way
// const composedComponent = connect(mapStateToProps, { getUserTodos })(UserTodoList);
// export default reduxForm({ form: 'addTodo'})(composedComponent);


export default compose(
  reduxForm({ form: 'addTodo' }),
  connect(mapStateToProps, { getUserTodos })
)(UserTodoList);


import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';
import axios from 'axios';

class SignUp extends Component {

  renderEmail = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        error={ meta.touched && meta.error }
        fluid
        icon='user'
        iconPosition='left'
        autoComplete='off'
        placeholder='Email Address'
      />
    );
  }


  renderPassword = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        error={  meta.touched && meta.error }
        fluid
        type='password'
        icon='lock'
        placeholder='password'
        autoComplete='off'
        iconPosition='left'
      />
    );
  }

  render() {
    console.log("Inside of signup render", this.props);
    return (
      <Form size='large'>
        <Segment stacked>
          <Field
            name='email'
            iscool='mannyiscool'
            component={ this.renderEmail }
            validate={
              [
                required({ msg: 'Email is required' }),
                email({ msg: 'You must provide a valid email address' })
              ]
            }
          />
          <Field
            name='password'
            component={this.renderPassword}
            validate={
              [
                required({ msg: 'You must provide a password' }),
                length({ min: 6, msg: 'Your password must be at least 6 characters long' })
              ]
            }
          />
        </Segment>
      </Form>
    );
  }
}


const asyncValidate = async formValues => {
  try {
    const { data } = await axios.get(`/api/user/emails?email=${formValues.email}`);
    // const foundEmail = data.some(user => user.email === formValues.email);
    console.log(data);
    if (data) {
      throw new Error();
    }
  } catch (e) {
    throw { email: 'Email already exists, please sign up with a different email' };
  }
}

export default reduxForm({ form: 'signup', asyncValidate, asyncChangeFields: [ 'email' ] })(SignUp);

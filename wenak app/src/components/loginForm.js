//screen 1
import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Flag, Dropdown } from 'semantic-ui-react';
// import Logo2 from '../assets/logo2.png';
​
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
​
  handleSubmit(event) {    
    event.preventDefault();
    // console.log("mobile ",this.state.mobile, 'pw', this.state.password)
    //Requests go here
  }
​
  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='yellow' textAlign='center'>
            {/* <Image src={Logo2} /> Log-in to your account */}
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input name="mobile" 
              fluid 
              icon='phone' 
              iconPosition='left' 
              placeholder='+970' 
              // type='number'
              value={this.state.mobile} onChange={this.handleChange} 
              />
​
              <Form.Input
                name="password"
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                value={this.state.password} onChange={this.handleChange}
              />
    
              <Button color='yellow' fluid size='large' type='submit' >
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
} 
​
export default LoginForm

​





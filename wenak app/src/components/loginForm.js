//screen 1
import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Flag, Dropdown } from 'semantic-ui-react'
import Logo2 from '../assets/logo2.png'

// const countryOptions = [
//   { key: 'ps', value: 'ps', flag: 'ps', text: 'Palestine' },
//   { key: 'jo', value: 'jo', flag: 'jo', text: 'Jordan' },
  
// ]


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
  // loginFun() {
  //   // event.preventDefault();
  //   var data = {
  //     email: $("#mobile").val(),
  //     password: $("#password").val()
  //   };
    // var that = this;
    // $.ajax({
    //   url: "/login",
    //   type: "POST",
    //   data: data,
    //   datatype: "json",
    //   success: function(res) {
    //     localStorage.setItem("usertoken", res);
    //     const decoded = jwt_decode(res);
    //     that.setState({
    //       email: decoded.password
    //     });
    //   }
    // });
  // }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {    
    event.preventDefault();
    // console.log("mobile ",this.state.mobile, 'pw', this.state.password)
    //Requests go here
  }

  render() {
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='yellow' textAlign='center'>
            <Image src={Logo2} /> Log-in to your account
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

export default LoginForm

// import React, { Component } from 'react'
// import { Button, Checkbox, Form } from 'semantic-ui-react'

// export default class SignIn extends Component {
//     render() {
//         return (
//             <Form>
//             <Form.Field>
//               <label>First Name</label>
//               <input placeholder='First Name' />
//             </Form.Field>
//             <Form.Field>
//               <label>Last Name</label>
//               <input placeholder='Last Name' />
//             </Form.Field>
//             <Form.Field>
//               <Checkbox label='I agree to the Terms and Conditions' />
//             </Form.Field>
//             <Button type='submit'>Submit</Button>
//           </Form>
//         )
//     }
// }


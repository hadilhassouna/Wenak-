import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Flag, Dropdown } from 'semantic-ui-react'
// import Logo2 from '.../public/logo2.png'

// const countryOptions = [
//   { key: 'ps', value: 'ps', flag: 'ps', text: 'Palestine' },
//   { key: 'jo', value: 'jo', flag: 'jo', text: 'Jordan' },
  
// ]


const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='yellow' textAlign='center'>
        {/* <Image src={Logo2} /> Log-in to your account */}
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='phone' iconPosition='left' placeholder='+970' />
          {/* <Dropdown
            placeholder='Select Country'
            fluid
            search
            selection
            options={countryOptions}
          /> */}
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='yellow' fluid size='large'>
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


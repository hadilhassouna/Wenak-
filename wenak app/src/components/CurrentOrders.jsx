//Screen 5


import React, { Component } from 'react'
import { Form, Button, Rating, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, } from 'semantic-ui-react'
import Logo from '../assets/logo.png'
import './components.css'



const style = {
    h1: {
        marginTop: '3em',
    },
    h2: {
        margin: '4em 0em 2em',
    },
    h3: {
        marginTop: '2em',
        padding: '2em 0em',
    },
    last: {
        marginBottom: '300px',
    },
}

class CurrentOrders extends React.Component {

    state = {}
    handleRate = (e, { rating, maxRating }) =>
        this.setState({ rating, maxRating })

    render() {
        return (

            <div className="surrentOrder">


                <Header as='h3' content='Your Orders' style={style.h3} textAlign='center' />

                {/* <Button animated>
                    <Button.Content visible>
                        <Icon name='arrow left' />
                    </Button.Content>
                    <Button.Content hidden> Back </Button.Content>
                </Button>

                <Button.Group>
                    <Button>Current Orders</Button>
                    <Button>History</Button>
                </Button.Group>

                <Button color='yellow' size='large'>
                    Cancel
                </Button> */}
                
                <Image src={Logo} size='small' textAlign='center'/>

                <Container fluid>
                    <Header as='h2'>OrderID:</Header>
                    <Header as='h2'>Location:</Header>
                    <Header as='h2'>Status:</Header>
                    <Header as='h2'>Date:</Header>
                    <Header as='h2'>Price:</Header>
                    <Header as='h2'>Rating:</Header>
                    <Rating maxRating={5} onRate={this.handleRate} />
                    {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <Form size='small'>
              <Segment stacked>
              <Header as='h2'>Order Status:</Header>
              <Header as='h2'>Preparing</Header>
              <Header as='h2'>On The Way</Header>
              <Header as='h2'>Completed Order</Header>
              </Segment>
            </Form>
            
            </div>
        )
    }
}

export default CurrentOrders











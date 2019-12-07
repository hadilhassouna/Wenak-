//Screen 5


import React, { Component } from 'react'
import { Form, Button, Rating, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, } from 'semantic-ui-react'
import Logo from '../assets/logo.png'
import $ from 'jquery';


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
    constructor(props){
        super(props)
    this.state = {
        orderData: {}
      };
      this.retreivData = this.retreivData.bind(this);
    }
    retreivData() {
      var that = this;
      $.ajax({
        type: "GET",
        url: "/api/driver/order_d",
        success: function(collection) {
          console.log(collection);
          that.setState({
            orderData: collection[0]
          });
        },
        error: function(request, status, error) {
          console.log(error);
        }
      });
    }
    componentDidMount() {
      this.retreivData();
    }
    // state = {}
    handleRate = (e, { rating, maxRating }) =>
        this.setState({ rating, maxRating })

    render() {
        return (

            <div>


                <Header as='h3' content='Your Orders' style={style.h3} textAlign='left' />

                <Button animated>
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
                </Button>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Image src={Logo} size='small'/>

                <Container fluid>
          <Header as="h2">OrderID: {this.state.orderData.user} </Header>
          <Header as="h2">
            Location:{this.state.orderData.location_start_lat}
          </Header>
          <Header as="h2">Status:{this.state.orderData.state}</Header>
          <Header as="h2">Date:{this.state.orderData.date}</Header>
          <Header as="h2">
            order_notes:{this.state.orderData.order_notes}
          </Header>
          <Header as="h2">
            reciver_name:{this.state.orderData.reciver_name}
          </Header>
          <Header as="h2">Price:{this.state.orderData.user}</Header>
          <Header as="h2">Rating:{this.state.orderData.rate}</Header>
          <Rating maxRating={5} onRate={this.handleRate} />
          <Image src={Logo} size="small" />
        </Container>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <Form size='large'>
              <Segment stacked>
              <Header as='h2'>Order Status:</Header>
              <Header as='h2'>Preparing</Header>
              <Header as='h2'>On The Way</Header>
              <Header as='h2'>Completed Order</Header>
              </Segment>
            </Form>
            <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default CurrentOrders











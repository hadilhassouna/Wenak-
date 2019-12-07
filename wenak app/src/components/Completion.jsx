//Screen 3
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react'
import { Button, Input, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, } from 'semantic-ui-react'
import $ from 'jquery';
import { Link } from "react-router-dom";

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

class Completion extends React.Component {
  constructor(props){
    super(props)
    this.state={
      item: "",
      location_start_lng: "14.7555",
      location_start_lat: "-45.544",
      location_end_lng: "11.5855",
      location_end_lat: "-13.352",
      recieverName: "",
      recieverPhone: "",
      additionalInfo: "",
      state: "pending"
    }
    //bind methods here
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
//methods
handleChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;
  this.setState({
    [name]: value
  })
};

handleSubmit(event) {
  event.preventDefault();
  console.log(this.state);
  //  console.log("mobile ",this.state.mobile, 'pw', this.state.password)
  //Requests go here  event.preventDefault();
  console.log("hi I'm inside submit order");
  var data = {
    // userName: $("#name").val(),
    // email: $("#email").val(),
    location_start_lng: this.state.location_start_lng,
    location_start_lat: this.state.location_start_lat,
    location_end_lng: this.state.location_end_lng,
    location_end_lat: this.state.location_end_lat,
    order_details: this.state.item,
    reciver_name: this.state.recieverName,
    reciver_name: this.state.recieverName,
    recieverPhone: this.state.recieverName,
    order_notes: this.state.additionalInfo,
    state: this.state.state
  };
  console.log(data);
  $.ajax({
    url: "/api/customer/send_order",
    type: "POST",
    data: data,
    datatype: "json",
    success: function(err) {
      alert("User exists you can log in");
    }
  });
}


  render() {
    return (
      <div>

          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <hr></hr>

        <Header as='h3' content='Complete Your Order Please' style={style.h3} textAlign='left' />

        <Button animated>
          <Button.Content visible>
            <Icon name='arrow left' />
          </Button.Content>
          <Button.Content hidden> Back </Button.Content>
        </Button>
        <Grid>
          <Grid.Column computer={3} mobile={6} tablet={9}>
            <Header as='h3' content="Enter Your Order/Item:" style={style.h3} textAlign='left' />
            <Input name = "item" onChange={this.handleChange} value= {this.state.item} placeholder="Order/Item"/> 
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as='h3' content="Reciever's Name" style={style.h3} textAlign='left' />
            <Input name = "recieverName" onChange={this.handleChange} value= {this.state.recieverName} placeholder="reciever's name"/> 
          </Grid.Column>
          <Grid.Column computer={9} mobile={6} tablet={3}>
            <Header as='h3' content="Reciever's Phone:" style={style.h3} textAlign='left' />
            <Input name = "recieverPhone" onChange={this.handleChange} value= {this.state.recieverPhone} placeholder="reciever's phone number"/> 




            <Map google={this.props.google}
              initialCenter={{
                lat: 31.9478,
                lng: 35.2296
              }}
              zoom={7}
              onClick={this.onMapClicked}>

              <Marker onClick={this.onMarkerClick}
                name={'Current location'}
                position={{ lat: 31.9478, lng: 35.2296 }}
              />


              <InfoWindow onClose={this.onInfoWindowClose}>

              </InfoWindow>
            </Map>

          </Grid.Column>
          <Grid.Column computer={9} mobile={6} tablet={3}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Header as='h3' content="Add More Details (Optional):" style={style.h3} textAlign='left' />
            <Input name = "additionalInfo" onChange={this.handleChange} value= {this.state.additionalInfo} placeholder="enter any additional info (optional)"/> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to={'/CurrentOrders'}>
            <Button color='yellow' size='large'>
            Send Your Order
            </Button>  
            </Link>
            
          </Grid.Column>
        </Grid>



      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBwVhZGkweHHX618TDXpOsGMWWSJ2VA7Ug")
})(Completion)










// handleRate = (e, { rating, maxRating }) =>
//   this.setState({ rating, maxRating })


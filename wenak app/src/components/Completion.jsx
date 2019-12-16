//Screen 3
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table
} from "semantic-ui-react";
import { InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Trial from "./Trial";
import  "../../src/App.css";
import $ from 'jquery';
const style = {
    marginTop: '2em',
    padding: '2em 0em',
}
  // last: {
  //   marginBottom: '300px',
  // },



class Completion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.onSignUp = this.onSignUp.bind(this);
    this.handleSend =this.handleSend.bind(this);
  }
  handleSend() {
    // event.preventDefault();
    console.log("I'm inside send function");
    var data = {
      reciverName: $("#reciverName").val(),
      Items: $("#Items").val(),
      reciverPhone : $("#reciverPhone").val(),
      details: $("#details").val(),
      location_start_lng: "50.6",
      location_start_lat:"906",
      location_end_lng: "8888",
      location_end_lat:"89",
      order_notes:"nothing",
      rate: 0,
      state:"pending",
      date: Date.now(),
      price:5
    };
    console.log(data);
    $.ajax({
      type: "POST",
      url: "/api/customer/send_order",
      headers: {
        "x-access-token": localStorage.getItem("usertoken")},
      data: data,
      datatype: "json",
      success: function() {
        // window.open("http://localhost:3000", "_self");
        // alert("YOU ARE LOGED IN");
        console.log("success send order")
      }, error:
      function() {
        console.log("errrrroooorrrr ");}
    })
  }
    

  render() {
    return (
      <div >
  
        <Grid >
        <div className="inputDetails">
        <Header
          as="h3"
          content="Details"
          style={style.h3}
          textAlign="left"
        />

          <Grid.Column computer={3} mobile={6} tablet={9}>
            <Header className="header1"
              as="h3"
              content="Enter Your Order/Item:"
              textAlign="left"
            />
            <input  id="Items" type="text" placeholder="Enter Your Order/Item"></input>
            <Header className="header1"
              as="h3"
              content="Reciever's Name:"
              style={style.h3}
              textAlign="left" 
            />
            <input   id="reciverName"   type="text" placeholder="Reciever's Name">{this.state.reciver_name}</input>
         
            <Header className="header1" 
              as="h3"
              content="Reciever's Phone:"
              style={style.h3}
              textAlign="left"
            />
            <input  id="reciverPhone" type="text" placeholder="Reciever's Phone">{this.state.recieverPhone}</input>
            <Header className="header1"
              as="h3"
              content="Assign The Reciever's Location"
              style={style.h3}
              textAlign="left"
            />
          
          
            <div className="trial">
              <Trial
                google={this.props.google}
                center={{ lat: 31.9478, lng: 35.2296 }}
                height='450px'
                width="900px"
                zoom={7}
              />
            </div>
          </Grid.Column>
          </div>
          <Grid.Column computer={9} mobile={6} tablet={3}>
          
            <Header
              as="h3"
              content="Add More Details (Optional):"
              style={style.h3}
              textAlign="left"
            />
            <input  id="details"
              type="text"
              placeholder="Add More Details (Optional)"
            >{this.state.order_notes}</input>
          </Grid.Column>

          <div className="butSend">

     
<Button  onClick={this.handleSend.bind(this)} className="butSend" color='yellow' size='large'>
            Send Your Order
          </Button> 
          </div>
        </Grid>
      </div>
    );
  }
}

export default Completion;

// handleRate = (e, { rating, maxRating }) =>
//   this.setState({ rating, maxRating })

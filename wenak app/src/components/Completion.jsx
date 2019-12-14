//Screen 3
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from "react";
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
import $ from "jquery";

const style = {
  h1: {
    marginTop: "3em"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  last: {
    marginBottom: "300px"
  }
};

class Completion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    // this.onSignUp = this.onSignUp.bind(this);
  }

  handleSend() {
    console.log("I'm inside send function");
    var data = {
      email: $("#reciverName").val(),
      details: $("#Items").val(),
      details: $("reciverPhone").val(),
      details: $("#details").val(),
      details: $("#details").val()
    };
    console.log(data);
    $.ajax({
      type: "POST",
      url: "/send",
      data: "hi from send order ajax",
      datatype: "json"
      // success: function() {
      //   window.open("http://localhost:3000", "_self");
      //   alert("YOU ARE LOGED IN");
      // }
    }).catch(alert(" send Order ajax faild"));
  }
  render() {
    return (
      <div>
        <br></br>
        <Header
          as="h3"
          content="Complete Your Order Please"
          style={style.h3}
          textAlign="left"
        />

        <Button animated>
          <Button.Content visible>
            <Icon name="arrow left" />
          </Button.Content>
          <Button.Content hidden> Back </Button.Content>
        </Button>
        <Grid>
          <Grid.Column computer={3} mobile={6} tablet={9}>
            <Header
              as="h3"
              content="Enter Your Order/Item:"
              style={style.h3}
              textAlign="left"
            />
            <input
              id="Items"
              type="text"
              placeholder="Enter Your Order/Item"
            ></input>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header
              as="h3"
              content="Reciever's Name:"
              style={style.h3}
              textAlign="left"
            />
            <input
              id="reciverName"
              type="text"
              placeholder="Reciever's Name"
            ></input>
          </Grid.Column>
          <Grid.Column computer={9} mobile={6} tablet={3}>
            <Header
              as="h3"
              content="Reciever's Phone:"
              style={style.h3}
              textAlign="left"
            />
            <input
              id="reciverPhone"
              type="text"
              placeholder="Reciever's Phone"
            ></input>
            <Header
              as="h3"
              content="Assign The Reciever's Location"
              style={style.h3}
              textAlign="left"
            />

            {/* <Map google={this.props.google}

          center={{
            lat: 31.9478,
            lng: 35.2296
          }}
          zoom={14}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'}
            position={{ lat: 31.9478, lng: 35.2296 }}
          />


          <InfoWindow onClose={this.onInfoWindowClose}>

          </InfoWindow>
        </Map> */}

            <div style={{ margin: "50px" }}>
              <Trial
                google={this.props.google}
                center={{ lat: 31.9478, lng: 35.2296 }}
                height="500px"
                zoom={7}
              />
            </div>
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
            <Header
              as="h3"
              content="Add More Details (Optional):"
              style={style.h3}
              textAlign="left"
            />
            <input
              id="details"
              type="text"
              placeholder="Add More Details (Optional)"
            ></input>
          </Grid.Column>

          {/* <Button color='yellow' size='large'>
            Send Your Order
          </Button> */}
        </Grid>
      </div>
    );
  }
}

export default Completion;

// handleRate = (e, { rating, maxRating }) =>
//   this.setState({ rating, maxRating })

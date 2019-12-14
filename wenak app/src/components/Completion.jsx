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
import  "../../src/App.css"
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
            <input   type="text" placeholder="Enter Your Order/Item"></input>
            <Header className="header1"
              as="h3"
              content="Reciever's Name:"
              style={style.h3}
              textAlign="left"
            />
            <input   type="text" placeholder="Reciever's Name"></input>
         
            <Header className="header1" 
              as="h3"
              content="Reciever's Phone:"
              style={style.h3}
              textAlign="left"
            />
            <input  type="text" placeholder="Reciever's Phone"></input>
            <Header className="header1"
              as="h3"
              content="Assign The Reciever's Location"
              style={style.h3}
              textAlign="left"
            />
          
          
            <div style={{ margin: "50px" }}>
              <Trial
                google={this.props.google}
                center={{ lat: 31.9478, lng: 35.2296 }}
                height="500px"
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
            <input
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

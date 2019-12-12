//Screen 2

import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Logo2 from "../assets/logo2.png";
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


class Home extends React.Component {
  render() {
    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="bottom"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <Header as="h2" size="medium" color="grey" textAlign="center">
              Assign your Pickup point
            </Header>
            <Image src={Logo2} size="small" />

            <Form size="large">
              <Segment stacked>
                <Link to={"/Completion"}>
                  <Button color="yellow" size="large">
                    After assigning The Pickup Point Press Here To Continue
                  </Button>
                </Link>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>


        <Map
          google={this.props.google}
          initialCenter={{
            lat: 31.9478,
            lng: 35.2296
          }}
          zoom={7}

          onClick={this.onMapClicked}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={"Current location"}
            position={{ lat: 31.9478, lng: 35.2296 }}
          />

          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
        
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBwVhZGkweHHX618TDXpOsGMWWSJ2VA7Ug"
})(Home);

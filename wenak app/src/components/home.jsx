import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


class home extends React.Component {
  render() {
    return (
      <div>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='bottom'>
          <Grid.Column style={{ maxWidth: 450 }}>

            <Header as='h2' size='medium' color='grey' textAlign='center'>
              Assign your pickUp point
      </Header>

            <Form size='large'>
              <Segment stacked>

                <Button color='yellow' size='large'>
                  Press Here To Continue
          </Button>

              </Segment>
            </Form>

          </Grid.Column>
        </Grid>

        <Map google={this.props.google}
          
          center={{
            lat: 31.9478,
            lng: 35.2296
          }}
          zoom={14}>

          <Marker onClick={this.onMarkerClick}
            name={'Current location'}
            position={{lat: 31.9478, lng: 35.2296}}
            />
   

          <InfoWindow onClose={this.onInfoWindowClose}>

          </InfoWindow>
        </Map>
        )
        
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyBwVhZGkweHHX618TDXpOsGMWWSJ2VA7Ug")
})(home)

// ReactDOM.render(<home />, document.getElementById("root"));



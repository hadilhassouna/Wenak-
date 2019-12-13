//Screen 2


import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Logo2 from '../assets/logo2.png'
import Trial from "./Trial"

class home extends React.Component {
  render() {
    return (
      <div>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='bottom'>
          <Grid.Column style={{ maxWidth: 450 }}>
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
            <hr></hr>
            <Header as='h2' size='medium' color='grey' textAlign='center'>
              Assign your Pickup point
            </Header>
            <Image src={Logo2} size='small'/>
            <div style={{ margin: '100px' }}>
				
			</div>
            
            <Form size='large'>
              <Segment stacked>
                
                <Button color='yellow' size='large'>
                  After assigning The Pickup Point Press Here To Continue
                </Button>

              </Segment>
            </Form>

          </Grid.Column>
        </Grid>

          
  
         
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


        <div style={{margin: '50px'}}>
          <Trial
        google={this.props.google}
        center={{lat: 31.9478, lng: 35.2296}}
        height='500px'
        zoom={7}
      />
      </div>

      
      </div>
    )
  }
}

export default home
 





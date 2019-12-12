//Screen 3
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react'
import { Button, Input, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, } from 'semantic-ui-react'

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
      item:"",
      recieverName:"",
      recieverPhone:"",
      additionalInfo:""
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
    console.log(this.state)
    //  console.log("mobile ",this.state.mobile, 'pw', this.state.password)
    //Requests go here
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
            <Button onClick={this.handleSubmit} color='yellow' size='large'>
            Send Your Order
          </Button>
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


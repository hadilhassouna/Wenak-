//Screen 4


import React, { Component } from 'react'
import { Button, Rating, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, } from 'semantic-ui-react'
import Logo from '../assets/logo.png'



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

class Orders extends React.Component {

    state = {}
handleRate = (e, { rating, maxRating }) =>
  this.setState({ rating, maxRating })

    render() {
        return (

            <div>
           
                <hr></hr>
                <Header as='h3' content='Your Orders' style={style.h3} textAlign='center' />

                <br></br>
                
                <br></br>
                <Image src={Logo} size='small' textAlign='center'/>
                <Container fluid className='surrentOrder'>
                    <Header as='h2'>OrderID:</Header>
                    <Header as='h2'>Location:</Header>
                    <Header as='h2'>Status:</Header>
                    <Header as='h2'>Date:</Header>
                    <Header as='h2'>Price:</Header>
                    <Header as='h2'>Rating:</Header>
                    <Rating maxRating={5} onRate={this.handleRate} />
                    <Image src={Logo} size='small'/>
                </Container>
                <br></br>
                
                <br></br>
                <Container fluid className='surrentOrder'>
                    <Header as='h2'>OrderID:</Header>
                    <Header as='h2'>Location:</Header>
                    <Header as='h2'>Status:</Header>
                    <Header as='h2'>Date:</Header>
                    <Header as='h2'>Price:</Header>
                    <Header as='h2'>Rating:</Header>
                    <Rating maxRating={5} onRate={this.handleRate} />
                    <Image src={Logo} size='small'/>
                </Container>
                <br></br>
               
                <br></br>
                <Container fluid className='surrentOrder'>
                    <Header as='h2'>OrderID:</Header>
                    <Header as='h2'>Location:</Header>
                    <Header as='h2'>Status:</Header>
                    <Header as='h2'>Date:</Header>
                    <Header as='h2'>Price:</Header>
                    <Header as='h2'>Rating:</Header>
                    <Rating maxRating={5} onRate={this.handleRate} />
                </Container>
                <br></br>
                
                <hr></hr>

            </div>
        )
    }
}

export default Orders




            






import React, { Component } from 'react'
import { Form, Button, Rating, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, } from 'semantic-ui-react'
import ProfilePicture from '../assets/ProfilePicture.png'



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

class Profile extends React.Component {

    state = {}
    handleRate = (e, { rating, maxRating }) =>
        this.setState({ rating, maxRating })

    render() {
        return (

            <div>
                <Header as='h3' content='Profile' style={style.h3} textAlign='left' />
                <Image src={ProfilePicture} size='medium' circular/>
                 

                <Button animated>
                    <Button.Content visible>
                        <Icon name='arrow left' />
                    </Button.Content>
                    <Button.Content hidden> Back </Button.Content>
                </Button>



                <Button icon labelPosition='right'>
                    Change Profile Picture
                <Icon name='camera' />
                </Button>

                <Header as='h2'>Wallet</Header>
              <Header as='h2'>Points</Header>
              <Header as='h2'>Credit</Header>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <Header as='h3' content='Name is written here' style={style.h3} textAlign='left' />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Phone Number"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Password"></input>
                <br></br>

                
                <Button color='yellow' size='large'>
                    Update  
                </Button>

              
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

export default Profile











//Screen 4
// import React, { Component } from 'react'
import {  Rating, Container, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, } from 'semantic-ui-react'
import Logo from '../assets/logo.png'
import $ from 'jquery';
// import React from "react";
import React, {Component ,Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SimpleRating from "./rating";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import PersonIcon from "@material-ui/icons/Person";
// import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import ScheduleIcon from "@material-ui/icons/Schedule";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "auto",
    textAlign: "left"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "60%",
    maxHeight: "60%"
  },
  button1: {
    "& > *": {
      margin: theme.spacing(1),
      //   paddingTop: "10px",
      //   textAlign: "right"
      float: "right",
      marginRight: "35px"
    }
  },
  rate: {
    maxWidth: "auto",
    maxHeight: "auto"
  },
  accept: {
    color: "#FFFFFF",
    backgroundColor: "#4caf50",
    width: "130px",
    height: " 40px"
  },
  reject: {
    color: "#FFFFFF",
    backgroundColor: "#e53935"
  },
  details: {
    padding: "10px",
    marginTop: "15px"
  },
  icons: {
    color: "#bdbdbd"
  },
  orderDetails: {
    //   padding:"",
    marginBottom: "5px"
  }
}));

const classes = useStyles();
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
    constructor(props){
        super(props)
    this.state = {
        orderData: []
      };
 
      this.retreivData = this.retreivData.bind(this);
    }
      
handleRate = (e, { rating, maxRating }) =>
  this.setState({ rating, maxRating })
 

  retreivData() {
    var that = this;
    $.ajax({
      type: "GET",
      url: "/api/customer/get_previous",
      headers: {
        'x-access-token': localStorage.getItem("usertoken")
      },
      success: function(collection) {
        console.log(collection);
        that.setState({
          orderData: collection
        });
      },
      error: function(request, status, error) {
        console.log(error);
      }
    });
  }

  componentDidMount() {
    this.retreivData();
  }

    render() {
        return (
                // console.log(data.orders.item.state);
                <div className={classes.root}> 
                  <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <ButtonBase className={classes.image}>
                          <img
                            className={classes.img}
                            alt="complex"
                            src="https://image.flaticon.com/icons/svg/713/713342.svg"
                          />
                        </ButtonBase>
                      </Grid>
                      <Grid className={classes.details} item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <div className={classes.orderDetails}>
                              <Typography gutterBottom variant="subtitle1">
                                <PersonIcon className={classes.icons} /> OrderID: {this.state.orderData.user} 
                              </Typography>
                            </div>
                            <div className={classes.orderDetails}>
                              <Typography variant="body2" gutterBottom>
                                <LocationOnIcon className={classes.icons} /> Location: {this.state.orderData.location_start_lat}
                              </Typography>
                            </div>
                            <div className={classes.orderDetails}>
                              <Typography variant="body2">
                                <ScheduleIcon className={classes.icons} /> Time: {this.state.orderData.date}
                              </Typography>
                            </div>
                            <div className={classes.orderDetails}>
                              <Typography variant="body2">
                                <BeenhereIcon className={classes.icons} /> state: {this.state.orderData.state}
                              </Typography>
                            </div>
                            <div className={classes.orderDetails}>
                              <Typography variant="body2">
                                {/* <DirectionsBikeIcon /> */}
                              </Typography>
                            </div>
                          </Grid>
                          {/* <Grid item>
                            <Typography variant="body2" style={{ cursor: "pointer" }}>
                              Remove
                            </Typography>
                          </Grid> */}
                        </Grid>
                      </Grid>
                      {/* <div style={{ marginBottom: "10px" }}>
                        <SimpleRating /> */}
            
                      <div
                        style={{ float: "right", marginRight: "31px", fontSize: "39px" }}
                      >
                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            style={{
                              paddingTop: "20px",
                              marginRight: "26px",
                              fontSize: "25px"
                            }}
                          >
                            $ {this.state.orderData.order_notes}
                            {/* price */}
                          </Typography>
                        </Grid>
                        {/* </div> */}
            
                        <div className={classes.button1}>
                          <Button
                            className={classes.accept}
                            variant="contained"
                            color="#4caf50"
                          >
                            Accept
                          </Button>
                          {/* <Button
                        className={classes.reject}
                        variant="contained"
                        color="#e53935"
                      >
                        Reject
                      </Button> */}
                        </div>
                      </div>
                    </Grid>
                  </Paper>
                </div>
              );





















//----------------------------- Amaaaal 
    //         <div>
    //             <Header as='h1' content='Your Orders' style={style.h3} textAlign='center' />
    //             <Image src={Logo} size='small' textAlign='center'/>
    //             <Container fluid className='surrentOrder'>
    //                 <Header as='h3'>OrderID:{this.state.orderData.user}</Header>
    //                 <Header as='h3'>Location:{this.state.orderData.location_start_lat}</Header>
    //                 <Header as='h3'>Status:{this.state.orderData.state}</Header>
    //                 <Header as='h3'>Date:{this.state.orderData.date}</Header>
    //                 <Header as='h3'>Price:{this.state.orderData.order_notes}</Header>
    //                 <Header as='h3'>Rating:{this.state.orderData.rate}</Header>
    //                 <Rating maxRating={5} onRate={this.handleRate} />
    //             </Container>
    //             <br></br>
    //         </div>
    //     )
    // }
}
}
export default Orders




            






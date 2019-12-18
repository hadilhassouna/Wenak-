
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export class OrderDetails extends Component {
    continue = e => {
      const { values } = this.props;
    console.log("my values in order   :", values)
        e.preventDefault();
        this.props.nextStep();
    }
    previous = e => {
      e.preventDefault();
      this.props.prevStep();
  }
    render() {
        const { values, handleChange } = this.props;
        return (
            <div> 
          
            <div className="signUp">
            <MuiThemeProvider >
                <React.Fragment>
                    {/* <AppBar title="Enter User Details"/> */}
                    <TextField 
                        hintText="Enter Your Item"
                        floatingLabelText="Item"
                        onChange={handleChange('item')}
                        defaultValue={values.item}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter The Reciever Name"
                        floatingLabelText="Reciever name"
                        onChange={handleChange('recieverName')}
                        defaultValue={values.recieverName}
                    />
                    <br/>
                    <TextField 
                        hintText="Enter The Reciever Phone"
                        floatingLabelText="Reciever Phone"
                        onChange={handleChange('recieverPhone')}
                        defaultValue={values.recieverPhone}
                    />
                    <br/>
                    <br/>
                    <TextField 
                        hintText="Additional Notes"
                        floatingLabelText="Notes"
                        onChange={handleChange('note')}
                        defaultValue={values.note}
                    />
                    <br/>
                    {/* <div className="signUp">
                     <RadioGroup className="radio" aria-label="position" name="position" defaultValue={values.userType} onChange={handleChange('userType')} row>                    
                        <FormControlLabel
                            value="Driver"
                            control={<Radio color="primary" />}
                            label="Driver"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="Customer"
                            control={<Radio color="primary" />}
                            label="Customer"
                            labelPlacement="start"
                        />
                    </RadioGroup>   
                    </div>
                    
                    <br/> */}
                 
                     <RaisedButton 
                        label="Previous"
                        primary={true}
                        style={styles.button}
                        onClick={this.previous}
                    />
                       <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
            </div>
            </div>

        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default OrderDetails























// import React, { Component } from 'react';
// import Dialog from '@material-ui/core/Dialog';
// import AppBar from '@material-ui/core/AppBar';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import TextField from '@material-ui/core/TextField';
// import {
//   Button,
//   Container,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   Item,
//   Label,
//   Menu,
//   Segment,
//   Step,
//   Table 
// } from "semantic-ui-react";

// const style = {
//   marginTop: '2em',
//   padding: '2em 0em',
// }

// export class OrderDetails extends Component {
//   continue = e => {
//     e.preventDefault();
//     this.props.nextStep();
//   };

//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };

//   render() {
//     const { values, handleChange } = this.props;
//     return (
//       <div >
//         <Grid >
//         <div className="inputDetails">
//         <Header
//           as="h3"
//           content="Details"
//           style={style.h3}
//           textAlign="left"
//         />

//           <Grid.Column computer={3} mobile={6} tablet={9}>
//             <Header className="header1"
//               as="h3"
//               content="Enter Your Order/Item:"
//               textAlign="left"
              
//             />
//             <input  name="item" id="Items" type="text" placeholder="Enter Your Order/Item"></input>
//             <Header className="header1"
//               as="h3"
//               content="Reciever's Name:"
//               style={style.h3}
//               textAlign="left" 
//             />
//             <input name="recieverName" id="reciverName"   type="text" placeholder="Reciever's Name"></input>
         
//             <Header className="header1" 
//               as="h3"
//               content="Reciever's Phone:"
//               style={style.h3}
//               textAlign="left"
//             />
//             <input  name="recieverPhone" id="reciverPhone" type="text" placeholder="Reciever's Phone"></input>
//             {/* <Header className="header1"
//               as="h3"
//               content="Assign The Reciever's Location"
//               style={style.h3}
//               textAlign="left"
//             /> */}
          
//             {/* <div className="trial">
//               <Trial
//                 google={this.props.google}
//                 center={{ lat: 31.9478, lng: 35.2296 }}
//                 height='450px'
//                 width="900px"
//                 zoom={7}
//               />
//             </div> */}
//           </Grid.Column>
//           </div>
//           <Grid.Column computer={9} mobile={6} tablet={3}>
          
//             <Header
//               as="h3"
//               content="Add More Details (Optional):"
//               style={style.h3}
//               textAlign="left"
//             />
//             <input  name='note' id="details"
//               type="text"
//               placeholder="Add More Details (Optional)"
//             ></input>
//           </Grid.Column>

//           <div className="butSend">

     
// {/* <Button  onClick={this.handleSend.bind(this)} className="butSend" color='yellow' size='large'>
//             Send Your Order
//           </Button>  */}
//           <Button
//               color="primary"
//               variant="contained"
//               onClick={this.continue}
//             >Continue</Button>
//                 <Button
//               color="secondary"
//               variant="contained"
//               onClick={this.back}
//             >Back</Button>
//           </div>
//         </Grid>
//       </div>          
//     );
//   }
// }

// export default OrderDetails;

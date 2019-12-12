//screen 1

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        // Process form //
            let mobilenum= this.props.values.mobile;
            let password =this.props.values.password;
            let type =this.props.values.userType;
            console.log("hi I'm from e function");
            console.log(mobilenum);
            console.log(type);

            $.ajax({
              type: "POST",
              url: "/api/auth/register",
            //   data: "data",
              data:{
                mobilenum:mobilenum,
                password:password,
                type:type
              }, 
              datatype: "json",
              success:function(){
                  console.log(this.data)
                  console.log("sucess login the user");
                  alert("Hello " + mobilenum);
               // localStorage.setItem('usertoken', res.data.token)
              },
              error: function(request, status, error) {
                    console.log("error in register");
                    alert("Error in register")
                  }
              });
            
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { mobile, password, userType } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    {/* <AppBar title="Confirm User Data"/> */}
                    <List>
                        <ListItem 
                            primaryText="Mobile Number"
                            secondaryText={ mobile }
                        />
                        <ListItem 
                            primaryText="Password"
                            secondaryText={ password }
                        />
                        <ListItem 
                            primaryText="User Type"
                            secondaryText={ userType }
                        />
                        
                    </List>
                    <br/>
                    <RaisedButton 
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
            
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails

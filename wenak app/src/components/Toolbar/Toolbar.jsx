import React from 'react';

// import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.jsx';
import './Toolbar.css';

import { Link } from "react-router-dom";
import LoginForm from '../loginForm';
import UserForm from '../signUpForm/UserForm';




class Toolbar extends React.Component {
 
    render() {
        return(
            <header className="toolbar">
                    <nav className="toolbar__navigation">
                        <div>
                            {/* <DrawerToggleButton /> */}
                        </div>
                        <div className="toolbar__logo"><a href="/">Weenak!</a></div>
                        <div className="spacer" />
                        <div className="toolbar_navigation-items">
                            <ul>
                                <Link to={'/Home'}>
                                 <li>Home</li>   
                                </Link>

                                <Link to={"/CurrentOrders"}>
                                <li>Current Order</li>
                                </Link>
                                

                                <Link to={"/Orders"}>
                                  <li>Previous Orders</li>  
                                </Link>
                                
                                <Link to={'/LoginForm'}>
                                <li>Log In!</li>    
                                </Link>
                                <Link to={'/UserForm'}>
                                <li>Sign Up</li>    
                                </Link>
                                



                            </ul>
                        </div>

                    </nav>
                </header>
        );
    }
}

export default Toolbar;

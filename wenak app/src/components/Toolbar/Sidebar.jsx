import React from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './Toolbar.css';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


class Sidebar extends React.Component {
    render() {
        return(
            <SideNav className="sideNav"
            onSelect={(selected) => {
                // Add your code here
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon src>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="Profile">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        Orders
                    </NavText>
                    <NavItem eventKey="charts/linechart">
                        <NavText>
                           current Order
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="charts/barchart">
                        <NavText>
                            Previous Orders
                        </NavText>
                    </NavItem>
                </NavItem>
                <NavItem eventKey="settings">
                    <NavIcon src>
                        <i className="fa fa-fw fa-settings" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        Settings
                    </NavText>
                </NavItem>
                <NavItem eventKey="contact">
                    <NavIcon src>
                        <i className="fa fa-fw fa-contact" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        Contact
                    </NavText>
                </NavItem>
                <NavItem eventKey="share">
                    <NavIcon src>
                        <i className="fa fa-fw fa-share" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        Share
                    </NavText>
                </NavItem>
                <NavItem eventKey="about">
                    <NavIcon src>
                        <i className="fa fa-fw fa-about" style={{ fontSize: '2em' }} />
                    </NavIcon>
                    <NavText>
                        About us
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        );
    }
}

export default Sidebar;
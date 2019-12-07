import React from 'react';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


class Sidebar extends React.Component {
    render() {
        return(
            <SideNav
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
            </SideNav.Nav>
        </SideNav>
        );
    }
}

export default Sidebar;

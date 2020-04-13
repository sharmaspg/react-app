import React, { Component } from 'react';
import styled from 'styled-components';   
import back from '../../images/back.png';
import NavItems from './NavItems';
import lamp from '../../images/lamp.png';
import ac from '../../images/ac.png';
import lock from '../../images/lock.png';
import tv from '../../images/tv.png';
import termostat from '../../images/thermostat.png';

const SidebarNav = styled.div`
width: ${props =>props.isCollapsed?"13vw":"30vw"};
height: 100vh;
max-width: 400px;
top:0;
left:0;
/* background-image: linear-gradient(-90deg, red, yellow);  */
background-image: linear-gradient(-180deg, #A377FD 0%,#7EA8F5 100%);
overflow: auto;
transition: width 0.5s;

@media (min-width:600px) {
    width: ${props =>props.isCollapsed?"13vw":"30vw"};
}
`;

const BackButton = styled.img`
    padding:10px;
    :hover {
        cursor:pointer;
    }
    transform:rotate(${props => props.isCollapsed?"180deg":"0deg"});

    transition: transform 0.5s;
`;

class NavigationBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            isCollapsed:false
        }
        this.collapseNav = this.collapseNav.bind(this);
    }

    collapseNav = () => {
        this.setState(state =>({
            isCollapsed:!state.isCollapsed
        }));
    }
    render()
    {
        return (
            <SidebarNav isCollapsed={this.state.isCollapsed}>
                <BackButton isCollapsed={this.state.isCollapsed} src={back} alt="Back png" onClick={this.collapseNav} />
                {!this.state.isCollapsed && 
                <div>
                    <NavItems img= {lamp} title="Bed lamp" subtext= "In bedroom"/> 
                    <NavItems img= {ac} title="Noria ac" subtext= "In bedroom"/>
                    <NavItems img= {lock} title="Door Lock" subtext= "in Home office"/>
                    <NavItems img= {tv} title="Lg TV" subtext= "In Living room"/>
                    <NavItems img= {termostat} title="Thermostat" subtext= "In bedroom"/>
                </div>
                }
            </SidebarNav>
        );
    }
}



export default NavigationBar;
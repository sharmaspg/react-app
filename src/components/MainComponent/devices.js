import React, { Component } from 'react';
import plus from '../../images/plus.png';
import "react-toggle/style.css";
import Toggle from "react-toggle";
import styled from 'styled-components';

const Header1 = styled.div`
    padding-top:20px;
    width: 85%;
    // border: 1px solid  black;
    // height: (100/4)vh;
    text-align: left;
    margin: auto;
    margin-top: 10px;

`
const Title = styled.h1`
//   color: palevioletred;
    font-size: 26px;
    letter-spacing:3px;
    text-transform: uppercase;
    padding: 0 10px;
    display: inline-block;
    font-weight:bold;
`;

const PlusBackground = styled.div`
    background-color: #C9FCDD;
    width: 30px;
    height:30px;
    display: inline-block;
    float:right;
`
const Img = styled.img`
    position: absolute;
    z-index:10;
`
const Title2 = styled.h3`
    font-size: 18px;
    letter-spacing:2px;
    text-transform: uppercase;
    padding: 0 10px;
    font-weight:bold;
    display: inline-block;
`
const ToggleRight = styled.div`
    // width: 30px;
    // height:30px;
    display: inline-block;
    float:right;
    `
class Devices extends Component{
    constructor(props){
        super(props);
        this.state = {isLightOn:false};

    }
    
    handleLightChange = () =>{
        this.setState(state =>({
            isLightOn: !state.isLightOn
        }));
    }
    render()
    {
        return (
            <div>
                <Header1>
                <Title>Devices</Title> 
                <PlusBackground>
                    <Img className="plusBackground" src={plus} alt="plus"></Img>
                </PlusBackground>
                </Header1>
                <Header1>
                    <Title2>Bed Lamp</Title2>
                    <ToggleRight>
                    <Toggle
                    className='custom-classname'
                    onChange={this.handleLightChange}
                    icons={{
                        checked: null,
                        unchecked: null,
                      }}></Toggle>
                    </ToggleRight>
                </Header1>
                
            </div>
        );
    }
}

export default Devices;
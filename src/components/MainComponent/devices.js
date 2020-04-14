import React, { Component } from 'react';
import plus from '../../images/plus.png';
import styled from 'styled-components';
import Switch from 'react-switch';

const Header1 = styled.div`
    padding-top:20px;
    width: 85%;
    text-align: left;
    margin: auto;
    margin-top: 10px;

`
const Title = styled.h1`
    font-size: 26px;
    letter-spacing:3px;
    text-transform: uppercase;
    // padding: 0 10px;
    display: inline-block;
    font-weight:bold;
`;

const PlusBackground = styled.div`
    background-color: #C9FCDD;
    width: 30px;
    height:30px;
    display: inline-block;
    float:right;
    :hover {
        transform:scale(1.3);
    }
    transition:transform 0.2s;
`
const Img = styled.img`
    position: absolute;
    z-index:10;
`
const Title2 = styled.h3`
    font-size: 18px;
    letter-spacing:2px;
    text-transform: uppercase;
    // padding: 0 10px;
    font-weight:bold;
    display: inline-block;
`
const ToggleRight = styled.div`
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
                    <Switch 
                    onChange={this.handleLightChange} 
                    checked={this.state.isLightOn} 
                    onColor="#000"
                    offColor="#000"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    handleDiameter={15}
                    width ={45}
                    height={25}
                    />
                    </ToggleRight>
                </Header1>
                
            </div>
        );
    }
}

export default Devices;
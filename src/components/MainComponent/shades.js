import React, { Component } from 'react';
import styled from 'styled-components';
import tick from '../../images/tick-wh.png';

const Wrapper = styled.div`
    padding:20px;
    width: 90%;
    text-align: left;
    margin: auto;
    transition: all 0.3s ease;
`
const HorizontalLine = styled.h2`
    width:100%;
    text-transform: uppercase;
    border-bottom: 2px solid #CFAAFF; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
`
const SpanText = styled.span`
    background-color: #ffffff;
    padding: 0 10px 0 5px; 
    font-size: 15px;
    font-weight: bold;
    color:#CFAAFF;
`

const ShadesWrapper = styled.div`
    display: grid;
    margin-top: 6%;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    grid-gap: 10px;
    grid-auto-rows: minmax(40px, auto);
    @media (min-width: 600px) {
        grid-template-columns: repeat(5, 1fr); 
    }
`

const shadeList = {
    red:"#FF4563",
    purple: "#8245E6",
    aqua: "#4AC0E0",
    blue: "#1089EB",
    pink: "#C791CD"
}

const Shade =styled.div`
    // grid-colum: 1;
    width:30px;
    height:30px;
    // margin: 10px;
    // padding: 10px;
    transition: transform 0.2s;
    background-color:${props => props.backgroundColor|| '#000000'};
    :hover {
        transform:scale(1.5);
        cursor:pointer;
    }
`

const TickImage = styled.img`
    position: absolute;
    z-index:10;
    padding: 3px;
`

function showTick(colorString,props) {
    if (props.selectedColor===colorString) 
    { return <TickImage src= {tick} />}
    return null;  
    
  };  
class Shades extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedColor:"#FF4563"
            };
        this.selectedColor = this.selectedColor.bind(this);
    }

    selectedColor = (e) =>{
        console.log(e.target);
       this.setState({
           selectedColor:e.target.id
       })
    }
    render(){
        return (
            <Wrapper>
                <HorizontalLine><SpanText>Shades</SpanText></HorizontalLine>
                <ShadesWrapper>
                    
                    <Shade id={shadeList.red} backgroundColor={shadeList.red} onClick={this.selectedColor}>
                    {showTick(shadeList.red,this.state)}
                        </Shade>

                    <Shade id={shadeList.purple} backgroundColor={shadeList.purple} onClick={this.selectedColor}>
                    {showTick(shadeList.purple,this.state)}
                    </Shade>

                    <Shade id={shadeList.aqua} backgroundColor={shadeList.aqua} onClick={this.selectedColor}>
                        {showTick(shadeList.aqua,this.state)}</Shade>

                    <Shade id={shadeList.blue} backgroundColor={shadeList.blue} onClick={this.selectedColor}>
                        {showTick(shadeList.blue,this.state)}</Shade>
                    
                    <Shade id={shadeList.pink} backgroundColor={shadeList.pink} onClick={this.selectedColor}>
                        {showTick(shadeList.pink,this.state)}</Shade>
                </ShadesWrapper>
            </Wrapper>);
    }
}

export default Shades;


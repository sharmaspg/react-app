import React, {Component} from 'react';
import styled from 'styled-components';
import morning from '../../images/morning-wh.png';
import tick from '../../images/tick.png';
import day from '../../images/day-dk.png';
import night from '../../images/night-dk.png';
import whiteTick from '../../images/tick-wh.png'

const Wrapper = styled.div`
    padding:20px;
    width: 90%;
    text-align: left;
    margin: auto;
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
    padding: 0 10px; 
    font-size: 15px;
    font-weight: bold;
    color:#CFAAFF;
`
const ModesWrapper = styled.div`
    display: grid;
    margin-top: 3%;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
`
const RowWrapper = styled.div`
    display:grid;
    grid-template-columns: 0.5fr 6fr 4fr 0.1fr;
    transition: transform .2s;
    :hover {
        background-image:linear-gradient(90deg, #A377FD 0%,#7EA8F5 100%);
        color:white; 
    }
`
const IconColumn = styled.div`
    // grid-column: 1/2;
    // border: 1px solid black;
    // background-color: #000;
    width:30px;
    height:30px;
`
const TextColumn = styled.h6`
    // grid-column: 2/6;
    font-size: 16px;
    padding:3px;
    // border: 1px solid black;
    text-transform: capitalize;
`

const PercentText = styled.h6`
    font-size: 16px;
    padding:3px;
    text-transform: capitalize;
    display:none;
    @media (min-width: 600px) {
        display:block;
    }
`
const ImagePosition = styled.img`
position: absolute;
z-index:10;
padding: 3px;
`
const backgroundStyle = {
    backgroundImage:"linear-gradient(90deg, #A377FD 0%,#7EA8F5 100%)",
    color:"#fff"

}



class Mode extends Component {
    constructor(props){
        super(props);
        this.state = {backgroundColor: "#fff"}
        this.ModeSelected = this.ModeSelected.bind(this);
    }

    ModeSelected(e){
        e.target.style.backgroundImage=
        "linear-gradient(90deg, #A377FD 0%,#7EA8F5 100%)";
        e.target.style.color="#fff";
    }

    render(){
        return (
            <Wrapper>
                <HorizontalLine><SpanText>Modes</SpanText></HorizontalLine>
                <ModesWrapper>
                    <RowWrapper  onClick={this.ModeSelected} style={backgroundStyle}>
                        <IconColumn><ImagePosition src = {morning} /></IconColumn>
                        <TextColumn>Morning</TextColumn>
                        <PercentText>50%</PercentText>
                        <IconColumn><ImagePosition src = {whiteTick} /></IconColumn>
                    </RowWrapper>
                    
                    <RowWrapper onClick={this.ModeSelected}>
                        <IconColumn><ImagePosition src = {day} /></IconColumn>
                        <TextColumn>day</TextColumn>
                        <PercentText>30%</PercentText>
                        <IconColumn><ImagePosition src = {tick} /></IconColumn>
                    </RowWrapper>
                    
                    <RowWrapper onClick={this.ModeSelected}>
                        <IconColumn><ImagePosition src = {night} /></IconColumn>
                        <TextColumn>Night</TextColumn>
                        <PercentText>0%</PercentText>
                        <IconColumn><ImagePosition src = {tick} /></IconColumn>                        
                    </RowWrapper>
                </ModesWrapper>


            </Wrapper>
        );
    }
}

export default Mode;

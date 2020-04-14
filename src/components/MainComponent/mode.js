import React, {Component} from 'react';
import styled from 'styled-components';
import morning from '../../images/morning-dk.png';
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
    padding: 0 10px 0px 5px ; 
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
    border-radius:5px;
    transition: transform .2s;
    :hover {
        cursor:pointer; 
    }
`
const IconColumn = styled.div`
    width:30px;
    height:30px;
`
const TextColumn = styled.h6`
    font-size: 16px;
    padding:3px;
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

const modes = ["morning","day","night"]


class Mode extends Component {
    constructor(props){
        super(props);
        this.state = {selectedMode: "morning"}
        this.ModeSelected = this.ModeSelected.bind(this);
        this.selectMode = this.selectMode.bind(this);
    }

    ModeSelected(e){
        this.setState({
            selectedMode:e.currentTarget.id
        });
    }

    selectMode(currentMode){
        if (currentMode === this.state.selectedMode){return backgroundStyle}
    }

    render(){
        return (
            <Wrapper>
                <HorizontalLine><SpanText>Modes</SpanText></HorizontalLine>
                <ModesWrapper>
                    <RowWrapper  id={modes[0]} onClick={this.ModeSelected} style={this.selectMode(modes[0])}>
                        <IconColumn><ImagePosition src = {morning} /></IconColumn>
                        <TextColumn>Morning</TextColumn>
                        <PercentText>50%</PercentText>
                        <IconColumn><ImagePosition src = {this.state.selectedMode===modes[0]?whiteTick:tick}/></IconColumn>
                    </RowWrapper>
                    
                    <RowWrapper id={modes[1]} 
                    onClick={this.ModeSelected} 
                    style={this.selectMode(modes[1])}>
                        <IconColumn><ImagePosition src = {day} /></IconColumn>
                        <TextColumn>day</TextColumn>
                        <PercentText>30%</PercentText>
                        <IconColumn><ImagePosition src = {this.state.selectedMode===modes[1]?whiteTick:tick} /></IconColumn>
                    </RowWrapper>
                    
                    <RowWrapper id={modes[2]} 
                    onClick={this.ModeSelected} style={this.selectMode(modes[2])}>
                        <IconColumn><ImagePosition src = {night} /></IconColumn>
                        <TextColumn>Night</TextColumn>
                        <PercentText>0%</PercentText>
                        <IconColumn><ImagePosition src = {this.state.selectedMode===modes[2]?whiteTick:tick} /></IconColumn>                        
                    </RowWrapper>
                </ModesWrapper>


            </Wrapper>
        );
    }
}

export default Mode;

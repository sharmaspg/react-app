import React, {Component} from 'react';
import styled from 'styled-components';
import Roundy from 'roundy';

const Wrapper = styled.div`
    padding:20px;
    padding-top:0px;
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

const BoundingDiv = styled.div`
    width: 200px;
    height:125px;
    // border: 1px solid black;
    position:absolute;
    margin-top:15px;
    overflow:hidden;

`

const DisplayValue = styled.p`
    font-size:16px;
    position:absolute;
    top:78px;
    left:85px;
    font-weight:bold;
`

class Intensity extends Component {
    constructor() {
        super();
        // this.onValChange = this.onValChange.bind(this);
        // this.changeStateValue = this.changeStateValue.bind(this);
    
        this.state = {
          value: 45
        };
      }
    render(){
        return (
            <Wrapper>
                <HorizontalLine>
                    <SpanText>Intensity</SpanText>
                </HorizontalLine>
                <BoundingDiv>
                <Roundy
                    arcSize={180}
                    value={this.state.value}
                    color="#8245E6"
                    strokeWidth={30}
                    handleSize={100}
                    thumbSize={3}
                    onChange={value => this.setState({value})}
                    overrideStyle={`background-color:#fff;`}
                />
                <DisplayValue>{this.state.value}</DisplayValue>
                </BoundingDiv>
                
            </Wrapper>
        );

    }
}

export default Intensity;
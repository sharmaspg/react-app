import React, {Component} from 'react';
import styled from 'styled-components';
import SemiCircleProgressBar from "react-progressbar-semicircle";

const Wrapper = styled.div`
    padding:20px;
    width: 90%;
    // border: 1px solid  black;
    // height: (100/4)vh;
    text-align: left;
    margin: auto;
    // margin-top: 10px;
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
    height:100px;
    // border: 1px solid black;
    position:absolute;

`

class Intensity extends Component {

    render(){
        return (
            <Wrapper>
                <HorizontalLine>
                    <SpanText>Intensity</SpanText>
                </HorizontalLine>
                <BoundingDiv>
                <SemiCircleProgressBar percentage={55}  stroke="#8245E6" showPercentValue/>
                </BoundingDiv>
            </Wrapper>
        );

    }
}

export default Intensity;
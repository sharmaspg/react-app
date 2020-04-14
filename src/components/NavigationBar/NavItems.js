import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    width: 80%;
    height: 140px;
    margin:auto;
    margin-top:0;
    transition:transform 0.2s;
    :hover {
        transform:scale(1.1);
        cursor:pointer; 
    }

    @media (min-width: 600px) {
        margin-top:10%;
        height:160px;
    }

`
const NavTextarea = styled.div`
    visibility:${props=>props.isSelected?"hidden":"visible"};
    width:82px;
    height:90px;
    left:6px;
    top:14px;
    max-width:230px;
    margin:auto;
    background-color:#fff;
    position:absolute;

    @media (min-width:600px) {
        left:21px;
        height:125px;
        width:85%;
    }
    @media(min-width:1200px){
        visibility:visible;
        height:140px;
        left:30px;
        width:88%;
    }
`

const NavTitle = styled.h3`
    font-size:9px;
    margin:auto;
    font-weight:bold;
    position:relative;
    top:83%;
    left:5px;
    letter-spacing: 1px;
    text-transform: uppercase;
    @media (min-width: 1200px) {
        top:40%;
        font-size:14px;
        left:${props=> props.isSelected?"30px":"93px"};
        letter-spacing: 2px;
        transition:left 0.2s;
    }
`

const NavSubtext = styled.h6`
    font-size:13px;
    margin:auto;
    position:relative;
    // font-weight: bold;
    text-transform:capitalize;
    display:none;
    top:45%;
    color:#9C9D9E;
    letter-spacing:1px;
    position:relative;
    @media (min-width: 1200px) {
        display:block;
        left:${props=> props.isSelected?"30px":"93px"};    
        transition:left 0.2s;
    }
`

const Image = styled.img`
    left: ${props=>props.isSelected?"32%":"0"};
    top: 0;
    position: absolute;
    width:80px;
    z-index: 10;
    transition: left 0.2s;
    @media (min-width:600px){
        width:110px;
        left: ${props=>props.isSelected?"45%":"0"};
    }

    @media (min-width:1200px) {
        left: ${props=>props.isSelected?"70%":"0"};
        width:120px;
    }
`


class NavItems extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            isSelected:false
        }
        this.selectedElement = this.selectedElement.bind(this);
    }

    selectedElement = (e) => {
        this.setState(state=>({
            isSelected:!state.isSelected
        }));
    }
    render() 
    {
        return (
        <Wrapper onClick={this.selectedElement}>
            <Image isSelected={this.state.isSelected} 
                src={this.props.img} alt={this.props.title} />
            <NavTextarea isSelected={this.state.isSelected}>
                <NavTitle isSelected={this.state.isSelected}>{this.props.title}</NavTitle>
                <NavSubtext isSelected={this.state.isSelected}>{this.props.subtext}</NavSubtext>
            </NavTextarea>
        </Wrapper>
    );
    }
}

export default NavItems;
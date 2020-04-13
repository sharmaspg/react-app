import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    width: 80%;
    height: 160px;
    margin:auto;
    margin-top:0;
    transition:transform 0.2s;
    :hover {
        transform:scale(1.1);
        cursor:pointer; 
    }
    @media (min-width: 600px) {
        margin-top:10%;
    }

`
const NavTextarea = styled.div`
    @media (max-width:780px) {
        visibility:${props=>props.isSelected?"hidden":"visible"};
    }
    @media (min-width:780px){
        top:25px;
        left:33px;
        height:123px;
    }    
    width:85%;
    height:100px;
    max-width:230px;
    margin:auto;
    background-color:#fff;
    position:absolute;
    top:7px;
    left:6px;
`
const NavTitle = styled.h3`
    font-size:9px;
    margin:auto;
    font-weight:bold;
    position:relative;
    top:80%;
    left:5px;
    letter-spacing: 1px;
    text-transform: uppercase;
    // display:inline-block;
    @media (min-width: 780px) {
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
    @media (min-width: 780px) {
        display:block;
        left:${props=> props.isSelected?"30px":"93px"};    
        transition:left 0.2s;
    }
`

const Image = styled.img`
    left: ${props=>props.isSelected?"70%":"0"};
    top: 0;
    position: absolute;
    width:85px;
    z-index: 10;
    transition: left 0.2s;
    @media (min-width:780px){
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
        // e.stopPropogation();
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
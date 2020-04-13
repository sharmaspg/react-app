// import React, { Component } from 'react';
// import styled from 'styled-components';
// import tick from '../../images/tick-wh.png';
// const Wrapper = styled.div`
//     padding:20px;
//     width: 90%;
//     // border: 1px solid  black;
//     // height: (100/4)vh;
//     text-align: left;
//     margin: auto;
//     // margin-top: 10px;
//     transition: all 0.3s ease;
// `
// const HorizontalLine = styled.h2`
//     width:100%;
//     text-transform: uppercase;
//     border-bottom: 2px solid #CFAAFF; 
//    line-height: 0.1em;
//    margin: 10px 0 20px; 
// `
// const SpanText = styled.span`
//     background-color: #ffffff;
//     padding: 0 10px; 
//     font-size: 15px;
//     font-weight: bold;
//     color:#CFAAFF;
// `

// const ShadesWrapper = styled.div`
//     display: grid;
//     margin-top: 6%;
//     grid-template-columns: repeat(3, 1fr);
//     justify-items: center;
//     grid-gap: 10px;
//     grid-auto-rows: minmax(40px, auto);
//     @media (min-width: 600px) {
//         grid-template-columns: repeat(5, 1fr); 
//     }
// `

// const shadeList = {
//     red:"#FF4563",
//     purple: "#8245E6",
//     aqua: "#4AC0E0",
//     blue: "#1089EB",
//     pink: "#C791CD"
// }

// const Shade =styled.div`
//     // grid-colum: 1;
//     width:30px;
//     height:30px;
//     // margin: 10px;
//     // padding: 10px;
//     positon:relative;
//     z-index:100;
//     transition: transform 0.2s;
//     background-color:${props => props.backgroundColor|| '#000000'};
//     :hover {
//         transform:scale(1.5);
//     }
// `

// const TickImage = styled.img`
//     position: absolute;
//     z-index:10;
//     padding: 3px;
// `

// // function showTick(props) {
// //     if (props.style.display === "none") 
// //     {    return null;  }
// //     return <TickImage src= {tick} />
// //   };  

// class Shades extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedColor:"#0000",
//             selectedElement:null
//             };
//         this.selectedColor = this.selectedColor.bind(this);
//         this.SelectedElement = this.SelectedElement.bind(this);
//     }

//     selectedColor = (e) =>{
//         // console.log(e.target.id);
//         this.setState({
//                     selectedColor:e.target.id,
//                     selectedElement:e.target
//                 });
//     }

//     SelectedElement(event,state) {
//         console.log(event.target.backgroundColor);
//     //     return true;
//     //     // if (event.target.id === state.selectedColor) {
//     //     //     return true;
//     //     // }else return false;

//     }
//     render(){
//         return (
//             <Wrapper>
//                 <HorizontalLine><SpanText>Shades</SpanText></HorizontalLine>
//                 <ShadesWrapper>
//                     <Shade id= {shadeList.red} backgroundColor={shadeList.red} onClick={this.selectedColor}>
//                     {
//                     <TickImage src= {tick} />}
//                         </Shade>
//                     <Shade id= {shadeList.purple} backgroundColor={shadeList.purple} onClick={this.selectedColor}>
//                     {this.SelectedElement(this,this.state) &&
//                     <TickImage src= {tick} />}
//                     </Shade>
//                     <Shade id= {shadeList.aqua} backgroundColor={shadeList.aqua} onClick={this.selectedColor}>
//                     {this.SelectedElement(this,this.state) &&
//                     <TickImage src= {tick} />}
//                     </Shade>
//                     <Shade id= {shadeList.blue} backgroundColor={shadeList.blue} onClick={this.selectedColor}>
//                     {this.SelectedElement(this,this.state) &&
//                     <TickImage src= {tick} />}
//                     </Shade>
//                     <Shade id= {shadeList.pink} backgroundColor={shadeList.pink} onClick={this.selectedColor}>
//                     {this.SelectedElement(this,this.state) &&
//                     <TickImage src= {tick} />}
//                     </Shade>
//                 </ShadesWrapper>
//             </Wrapper>);
//     }
// }

// export default Shades;

import React, { Component } from 'react';
import styled from 'styled-components';
import tick from '../../images/tick-wh.png';
const Wrapper = styled.div`
    padding:20px;
    width: 90%;
    // border: 1px solid  black;
    // height: (100/4)vh;
    text-align: left;
    margin: auto;
    // margin-top: 10px;
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
    padding: 0 10px; 
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
    }
`

const TickImage = styled.img`
    position: absolute;
    z-index:10;
    padding: 3px;
`

function showTick(colorString,props) {
    console.log(colorString);
    console.log(props.selectedColor);
    if (props.selectedColor===colorString) 
    { return <TickImage src= {tick} />}
    return null;  
    
  };  
class Shades extends Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedColor:"#AC6CFF"
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


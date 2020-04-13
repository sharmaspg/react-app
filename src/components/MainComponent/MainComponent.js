import React, { Component } from 'react';
import styled from 'styled-components';
import Devices from './devices';
import Shades from './shades';
import Mode from './mode';
import Intensity from './intensity';


const Wrapper = styled.div`
width: 100%;
height:100%;
overflow:hidden;
`

class MainComponent extends Component {
    render() {
        return (
            <Wrapper>
                <Devices />
                <Shades />
                <Mode />
                <Intensity />
            </Wrapper>
        );
    }
}

export default MainComponent;
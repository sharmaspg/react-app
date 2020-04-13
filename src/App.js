import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import MainComponent from './components/MainComponent/MainComponent';
import styled from 'styled-components';

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 6fr;
`
function App() {
    return ( 
        <Wrapper>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/> 
            <NavigationBar />
            <MainComponent />
        </Wrapper>
    );
}

export default App;
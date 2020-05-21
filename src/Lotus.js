import React, { Component } from 'react';
import {ReactComponent as LotusSVG } from './images/lotus.svg'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fade = keyframes`
0% {
opacity:0;
}
100%{
  opacity:1;
}
`;



const StyledLotus = styled(LotusSVG)`
//animation: ${rotate} infinite 2s linear;
height:100px;
width:100px;
display:block;
margin:auto;
position: absolute;
right: 47%;
top: 0%;
opacity: 0;
.st5{
    animation: ${fade} ease-in;
    animation-duration:1s;
    animation-delay:0s;
    animation-fill-mode:forwards;
}
.st3{
    animation: ${fade} ease-in;
    animation-duration:1s;
    animation-delay:3s;
    animation-fill-mode:forwards;
}
.st1{
    animation: ${fade} ease-in;
    animation-delay:6s;
    animation-duration:1s;
    animation-fill-mode:forwards;
}
.st4{
    animation: ${fade} ease-in;
    animation-delay:9s;
    animation-duration:1s;
    animation-fill-mode:forwards;
}
.st2{
    animation: ${fade} ease-in;
    animation-delay:12s;
    animation-duration:1s;
    animation-fill-mode:forwards;
}
`

class Lotus extends Component {
    render(){
    return(
        <StyledLotus/>
    );}
}

export default Lotus;
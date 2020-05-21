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
  opacity:.9;
}
`;


const StyledLotus = styled(LotusSVG)`
height:100px;
width:100px;
display:block;
margin:auto;
position: absolute;
right: 45.5%;
top: 0%;
opacity: 1;
z-index:-2;
.st0{
  animation: ${fade} ease-in;
  animation-duration:.25s;
  animation-delay:0s;
  animation-fill-mode:both;
}
.st5{
    animation-delay:2s;
}
.st3{
    animation-delay:2.25s;
    fill:#c3a5cf;
}
.st1{
    animation-delay:2.5s;
}
.st4{
    animation-delay:2.75s;
    fill:#c3a5cf;
}
.st2{
    animation-delay:3s;
}
.reverse{
  animation-direction:reverse;
}
`

class Lotus extends Component {
    render(){
    return(
        <StyledLotus/>
    );}
}

export default Lotus;
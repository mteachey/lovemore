import React from 'react';

const LoveMoreContext = React.createContext({
      selfcare:[],
      gratitude:[],
      goals:{},
      inspiration:[],
      quotes:[],
      addSelfCare:()=>{},
      addGratitude:()=>{},
      addEnergy:()=>{},
      addMood:()=>{},
      updateGoals:()=>{}
     
})

export default LoveMoreContext;
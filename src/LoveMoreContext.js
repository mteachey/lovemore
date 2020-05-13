import React from 'react';

const LoveMoreContext = React.createContext({
      selfcare:[],
      gratitude:[],
      goals:{},
      inspiration:[],
      quotes:[],
      addSelfCare:()=>{},
      addGratitude:()=>{},
      updateGoals:()=>{}
     
})

export default LoveMoreContext;
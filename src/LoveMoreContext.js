import React from 'react';

const LoveMoreContext = React.createContext({
      selfcare:[],
      gratitude:[],
      goals:{},
      inspiration:[],
      quotes:[],
      moods:[],
      addSelfCare:()=>{},
      addGratitude:()=>{},
      addMoods:()=>{},
      updateGoals:()=>{}
     
})

export default LoveMoreContext;
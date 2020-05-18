import React from 'react';

const LoveMoreContext = React.createContext({
      selfcares:[],
      gratitudes:[],
      gratitude_most_recent:[],
      goals:{},
      inspiration:[],
      quotes:[],
      moods:[],
      current_gratitude_results_page:1,
      current_selfcares_results_page:1,
      addSelfCare:()=>{},
      addGratitude:()=>{},
      addMoods:()=>{},
      updateGoals:()=>{},
      updateCurrentPage:()=>{},
      current_display:{},
      updateTypeSelected:()=>{},
      updateDateSelected:()=>{},
      updateDisabled:()=>{},
      updateRatingSelected:()=>{},
     
})

export default LoveMoreContext;
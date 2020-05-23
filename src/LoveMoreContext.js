import React from 'react';

const LoveMoreContext = React.createContext({
      selfcares:[{
        "gratitude_id":"1",
        "user_id":"1",
        "content":"A catch up phone call with Kelsie",
        "date_modified":"May 7th 2020",
        "type":"emotional",
        "rating":"5",           
    },{
      "gratitude_id":"1",
      "user_id":"1",
      "content":"A catch up phone call with Kelsie",
      "date_modified":"May 7th 2020",
      "type":"emotional",
      "rating":"5",           
      },{
        "gratitude_id":"1",
        "user_id":"1",
        "content":"A catch up phone call with Kelsie",
        "date_modified":"May 7th 2020",
        "type":"emotional",
        "rating":"5",           
      }],
      gratitudes:[ {
        "gratitude_id":"1",
        "user_id":"1",
        "content":"A catch up phone call with Kelsie",
        "date_modified":"May 7th 2020"           
     },{
      "gratitude_id":"1",
      "user_id":"1",
      "content":"A catch up phone call with Kelsie",
      "date_modified":"May 7th 2020"           
     },{
    "gratitude_id":"1",
    "user_id":"1",
    "content":"A catch up phone call with Kelsie",
    "date_modified":"May 7th 2020"           
    }],
      goals:{
        "emotional": "4",
        "spiritual":"7",
        "physical":"5",
        "intellectual":"7"
    },
      inspiration:[{
        "inspire_id":"1",
        "content":"Learn a new language with Duolingo - you can commit 10 minutes a day",
        "type":"intellectual",        
     }],
      quotes:[{
        "id":"1",
        "content":"The grass isn't greener on the other side of the fence, the grass is greener where you water it",
        "author": "anonymous",
     }],
      moods:[{
        "id":"1",
        "user_id":"1",
        "mood_level":"4",
        "energy_level":"5",
        "date_modified":"2020-05-14T19:10:27.090Z",   
    }],
      current_gratitude_results_page:1,
      current_selfcares_results_page:1,
      addSelfCare:()=>{},
      addGratitude:()=>{},
      addMoods:()=>{},
      updateGoals:()=>{},
      updateCurrentPage:()=>{},
      current_display:{
        gratitudes:{page:1, date_to:'all', date_from:''},
        selfcares :{page:1, date_to:'all', date_from:'', type:'all',rating:'all'},
        inspiration:{page:1, type:'all'}
      },
      updateTypeSelected:()=>{},
      updateDateSelected:()=>{},
      updateRatingSelected:()=>{},
      updateNumberofTotalResults:()=>{},
     
     
})

export default LoveMoreContext;
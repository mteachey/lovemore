export const CreateMoodEnergyData = (data) =>{
   
  let date = new Date();
    
  //let allSelfCares = this.context.selfcares;
  let currentMonth = date.toString().slice(4,8) ;
  let monthResults=[];
  
    monthResults = data.filter(day=>
        day.date_formatted.slice(0,4).includes(currentMonth)) 
  
   let monthMoodData =[]
   let monthEnergyData =[]
  
   for (let i=1; i < monthResults.length ; i++){
       let newMoodObj = {"x":i.toString(),"y":monthResults[i-1].mood_level};
       let newenergyObj = {"x":i.toString(),"y":monthResults[i-1].energy_level};
       monthMoodData.push(newMoodObj)
       monthEnergyData.push(newenergyObj)
   }
  
   let lineData = [
       {"id": "mood",
        "color": "hsl(56, 70%, 50%)",
        "data":monthMoodData
       },      
        { "id": "energy-level",
        "color": "hsl(126, 70%, 0%)",
        "data": monthEnergyData
       }]
 
    return(lineData)

}
/*
export default [
 
    {
      "id": "mood",
      "color": "hsl(56, 70%, 50%)",
      "data": [
        {
          "x": "1",
          "y": 5
        },
        {
          "x": "2",
          "y": 4
        },
        {
          "x": "3",
          "y": 4
        },
        {
          "x": "4",
          "y": 3
        },
        {
          "x": "5",
          "y": 1
        },
        {
          "x": "6",
          "y": 1
        },
        {
          "x": "7",
          "y": 2
        },
        {
          "x": "8",
          "y": 2
        },
        {
          "x": "9",
          "y": 3
        },
        {
          "x": "10",
          "y": 4
        },
        {
          "x": "11",
          "y": 3
        },
        {
          "x": "12",
          "y": 4
        },
        {
          "x": "13",
          "y": 5
        },
        {
          "x": "14",
          "y": 4
        },
        {
          "x": "15",
          "y": 4
        },
        {
          "x": "16",
          "y": 4
        }
      ]
    },
    {
      "id": "energy-level",
      "color": "hsl(126, 70%, 0%)",
      "data": [
          {
              "x": "1",
              "y": 4
            },
            {
              "x": "2",
              "y": 5
            },
            {
              "x": "3",
              "y": 3
            },
            {
              "x": "4",
              "y": 3
            },
            {
              "x": "5",
              "y": 1
            },
            {
              "x": "6",
              "y": 1
            },
            {
              "x": "7",
              "y": 2
            },
            {
              "x": "8",
              "y": 2
            },
            {
              "x": "9",
              "y": 3
            },
            {
              "x": "10",
              "y": 3
            },
            {
              "x": "11",
              "y": 3
            },
            {
              "x": "12",
              "y": 4
            },
            {
              "x": "13",
              "y": 4
            },
            {
              "x": "14",
              "y": 4
            },
            {
              "x": "15",
              "y": 5
            },
            {
              "x": "16",
              "y": 5
            }
          ]
    },
    
  ]*/
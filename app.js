const { response } = require('express');
const request=require('request')
const geocode=require('./utils/geocode.js')
const weather_info=require('./utils/weather_info.js')

const address=process.argv[2]

if(!address){
    console.log('Please provide a valid address!!')
}
else{
    geocode(address,(error,{latitude,longitude})=>{

        if(error){
            return console.log(error)
        }
        weather_info( latitude, longitude , (error , response)=>{
            if(error){
                return console.log(error);
            }
    
            console.log(`the forcast for ${response.body.location.name} is ${response.body.current.weather_descriptions[0]} it is currently ${response.body.current.temperature} out feels like ${response.body.current.feelslike}`)
        })
    }) 
}




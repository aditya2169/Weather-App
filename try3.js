const { error } = require('console');
const http=require('http');

const url_weather= 'http://api.weatherstack.com/current?access_key=b75930aff67957b60cf2ec149be087fd&query=40,-75'

const request = http.request(url_weather,(response)=>{

    let data=''

    response.on('data',(chunk)=>{
        data = data+chunk.toString()
    })

    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body);
    })

})

request.on('error',(error)=>{
    console.log(error)
})

request.end()
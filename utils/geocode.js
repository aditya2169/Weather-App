const request=require('request')

const geocode = (address,callback)=>{
    const url_geo='http://api.positionstack.com/v1/forward?access_key=a201102602ba3f65b045cea10d569a41&query='+address 
    request({url : url_geo , json:true} , (error,{body})=>{
        if(error){
            callback('Unable to connect to location services!!',undefined)
        }
        else if(body.data.length==0){
            callback('Unable to find location. Try another search!!',undefined)
        }
        else{
            callback(undefined,{
                latitude : body.data[0].latitude,
                longitude : body.data[0].longitude
            })
        }
    })
}

module.exports=geocode
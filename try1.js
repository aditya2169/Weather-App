const geocode=( address,callback)=>{
    setTimeout(()=>{
        const data={
            latitude:0,
            longitude:0,
        }
        callback(data);
    },2000)
}

geocode('jaipur',(data)=>{
    console.log(data);
})

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add_function=(x,y,callback)=>{
    setTimeout(()=>{
        callback(x+y)
    },2000)
}

add_function(1,2,(sum)=>{
    console.log(sum);
})
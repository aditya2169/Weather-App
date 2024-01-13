const name='Shah'
const age=21

const user={
    name,
    age,
    location:'Jaipur'
}

console.log(user)

const product ={
    label:'book',
    price:2000
}

// const {label:product_label,price}=product
// console.log(`label ${product_label}` + price);

const transaction = ( type,{ label, price} )=>{
    console.log(type , label , price);
}

transaction('order' , product)
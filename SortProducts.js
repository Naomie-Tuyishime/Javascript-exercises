
function sortProducts(){
    let products=[
        {name:"shoes",price:5000},
        {name:"shirt",price:100},
        {name:"socks",price:1000}
]
    return products.sort((a,b)=>a.price-b.price)


}
console.log(sortProducts())
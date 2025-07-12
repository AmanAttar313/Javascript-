// create an array of five  products and print them using foreach

const products =['television','phone','laptop','remote','fan']

product.forEach(function(v,i){
    console.log(`At index ${i} product is ${v}`);
});

const celcuis=[37.5,38,40,30,44];

const farenheit= celcuis.map(function(v){
    return (v*1.8) + 33.8;
})
for(let i=0;i<farenheit.length;i++){
    console.log(`At celcius ${celcuis[i]} fareeenite is ${farenheit[i]}`)
}

const product =['television','phone','laptop','remote','fan'];

const fil_Pro= product.filter(str => str.length > 4);
console.log(filterProduct);


interface Product{
    name:string,
    price:number
}

let products:Product[] = [{name: "mouse", price: 29.99},
                            {name: "headset", price: 49.50},
                            {name: "keyboard", price: 149.99}]

function calcAverageProductPrice(products:Product[]) : number{
    if (products.length === 0) {
        return 0   
    }
    else {
        //alternate route:
        // let sum = 0;
        // for(let i = 0; i < products.length; i++){
        //     sum += products[i].price}
        //     return sum/products.length;
        // }
    let sum = 0;
    products.forEach(element => {
        sum += element.price;
    });
    return sum / products.length
    }
}

export {calcAverageProductPrice, Product};
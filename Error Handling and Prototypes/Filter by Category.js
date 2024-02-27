function filterByCategory(product) {
    return function(category){
        return product.filter(function (product){
            return product.category === category;
        })
    }
}

var products = [
    {name : "shirt" , category : "Clothing"},
    {name : "Pants" , category : "Clothing"},
    {name : "Hat" , category : "Assecories"},
    {name : "Sunglasses" , category : "Assecories"},
];

var clothingproducts = filterByCategory(products)("Clothing");

console.log(clothingproducts);
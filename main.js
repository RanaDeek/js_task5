
async function getproducts(){
    const response = await axios.get("https://dummyjson.com/products");
    const data = await response.data;
    const products=data.products;
    const result = products.map(function(product){
        return `
        <h5>${product.title}</h5>
        <a href="details.html?id=${product.id}">details</a>
        `
    }).join('\n');
    document.querySelector(".products").innerHTML = result;

}
getproducts();

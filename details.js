async function getDetails() {
    const url = new URLSearchParams(window.location.search);
    let id = url.get("id");
    console.log(id);
    const response = await axios.get(`https://dummyjson.com/products?${id}`);
    const data = await response.data;
    const { title, description, price, discountPercentage, rating, stock, brand, category,thumbnail, images }=data.products[id-1];
    document.querySelector(".title").textContent = title;
    document.querySelector(".description").textContent = description;
    document.querySelector(".price").textContent = price;
    document.querySelector(".discountPercentage").textContent = discountPercentage;
    document.querySelector(".rating").textContent = rating;
    document.querySelector(".stock").textContent = stock;
    document.querySelector(".brand").textContent = brand;
    document.querySelector(".category").textContent = category;  
    document.querySelector("img").src = images[0]; 
    document.querySelector("a").href = thumbnail;
}
getDetails();

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => console.log(data))
.catch((error) => console.error("error", error))



const getApi = async () => {
  try{
    const response = await  fetch("https://dummyjson.com/products");
    const data = await response.json();
    displayProducts(data.products);
  } catch (error) {      // you handle your error in catch and you handle your fetch in try
    console.error("Error", error);
  }
};
// for every async there must be an Await, 'asyncronous functio'n is when you want a function to run first before the other, and function given "async" will run before any function given "await"
getApi();


// Render product card
function displayProducts(products) {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.className = "product";
    li.innerHTML =`
      
      <p class="stock-tab">${product.availabilityStatus}</p>
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3 class="title">${product.title}</h3>
      <p class="ship"> ${product.shippingInformation}</p>
      <p class="price">$${product.price}</p>
      <p class="describe">${product.description.slice(0, 60)}...</p>
      <p class="brand">Brand: ${product.brand}</p>
      <p class="comment">Comment: ${product.reviews[0].comment}</p>
      
      
    `;
    list.appendChild(li);
  })
}

// Automatically run on the page Load
window.addEventListener("DOMContentLoaded", getApi);
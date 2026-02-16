// Load category 
const loadCategory = async() =>{
    const url = "https://fakestoreapi.com/products/categories";
    const res = await fetch(url);
    const data = await res.json();
    displayCategory(data)
};

const displayCategory = (categories) => {
    const categoryBtnContainer = document.getElementById('category-btn-container');
    categories.forEach(category => {
        console.log(category);
        const button = document.createElement('button');
        button.classList = `btn rounded-3xl hover:bg-[#4F46E5] hover:text-white`
        button.innerText = category
        categoryBtnContainer.append(button)
    });
}
loadCategory()




//  Load Products 
const loadProducts = async() =>{
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url);
    const data = await res.json();
    displayProducts(data)
}

const displayProducts = (details) =>{
    
    const trendingCardContainer = document.getElementById('trending-card-container');
    // const sliceDetails = details.slice(0, 3)
    details.forEach(detail => {
      console.log(detail);
        const div = document.createElement('div');
        div.classList = `card  p-3 shadow-sm w-full flex justify-between`;
        div.innerHTML = `
        <figure class="bg-gray-300 rounded-none">
              <img class=" h-96"
                src="${detail.image}"
                alt="${detail.title}"
              />
            </figure>
            <div class="">
             <div class="flex justify-between items-center mt-5">
             <p class="btn border-none outline-none rounded-3xl bg-[#EEF2FF] text-[#4F46E5]">${detail.category}</p>
             <p><span class="text-[#EAB308]"><i class="fa-regular fa-star"></i></span class="font-bold"> ${detail.rating?.rate} <span class="text-gray-500">(${detail.rating?.count})</span></p>
             </div>
              <h2 class="card-title text-sm mt-5">
                ${detail.title}
              </h2>
              <p class="font-bold mb-4 mt-3">$${detail.price}</p>
              <div class="card-actions justify-around w-100%">
                <div class="btn w-5/12 rounded-lg"><span><i class="fa-regular fa-eye"></i></span> Details</div>
                <div class="btn w-5/12 bg-[#4F46E5] text-white rounded-lg"><i class="fa-solid fa-cart-shopping"></i> Add</div>
              </div>
            </div>
        `;
        trendingCardContainer.append(div)
    });
}





loadProducts()
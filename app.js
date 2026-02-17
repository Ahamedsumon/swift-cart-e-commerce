// Handlel menu list 
const menuList = document.getElementById('menu-list')
const handleMenuBar = () =>{
    const menuBar = document.getElementById('menu-bar');
    const toggleClass = menuBar.classList.toggle('active')
    if(toggleClass){
         menuList.classList.remove('invisible')
    }else{
        menuList.classList.add('invisible')
    }
}

const hideMenueList = () =>{
    menuList.classList.add('visible')
    
}






// Trending section card

const loadTrendingCard = async() =>{
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url);
    const data = await res.json();
    displayTrendingCard(data)
}

const displayTrendingCard = (details) =>{
    
    const trendingCardContainer = document.getElementById('trending-card-container');
    const selectedItems = details.filter(items => items.rating.rate > 4.6);
    const sliceDetails = selectedItems.slice(0, 3)
    sliceDetails.forEach(detail => {
        const div = document.createElement('div');
        div.classList = `card mx-3 md:mx-0 p-3 shadow  flex justify-between`;
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
                <div onclick="loadProductsDetails(${detail.id})" class="btn w-5/12 rounded-lg"><span><i class="fa-regular fa-eye"></i></span> Details</div>
                <div onclick="handleCartCount()" class="btn w-5/12 bg-[#4F46E5] text-white rounded-lg"><i class="fa-solid fa-cart-shopping"></i> Add</div>
              </div>
            </div>
        `;
        trendingCardContainer.appendChild(div)
    });
}


// Load individual product details
const loadProductsDetails = async(id) =>{
    const url = `https://fakestoreapi.com/products/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayProductsDetails(data)
}

const displayProductsDetails = (productsDetails) =>{
    console.log(productsDetails);
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
    <h3 class="text-lg font-bold">${productsDetails.title}</h3>
    <p class="py-4">${productsDetails.description}</p>
    <p><span class="text-[#EAB308]"><i class="fa-regular fa-star"></i></span class="font-bold"> ${productsDetails.rating?.rate} <span class="text-gray-500">(${productsDetails.rating?.count})</span></p>
    <p class="font-bold mb-4 mt-3">$${productsDetails.price}</p>
    <div class="btn bg-[#4F46E5] text-white rounded-lg"><i class="fa-solid fa-cart-shopping"></i> Buy Now</div>
    `
    
    document.getElementById('my_modal_5').showModal()
    
}

// handle cart counter
let count = 0;
const handleCartCount = () =>{
    count++
    const cartCount = document.getElementById('cart-count');
    cartCount.innerHTML = count
}

loadTrendingCard()
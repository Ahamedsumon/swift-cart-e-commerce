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
    console.log('clickeddddf');
}

// load all products
const loadAllProducts = async() =>{
   const allProductsBtn = document.getElementById('all-products-btn');
   allProductsBtn.classList.add('active')
    const url = `https://fakestoreapi.com/products`;
    const res = await fetch(url);
    const data = await res.json();
    displayProducts(data)
    
}

loadAllProducts()

// Load category 
const loadCategory = async() =>{
    const url = "https://fakestoreapi.com/products/categories";
    const res = await fetch(url);
    const data = await res.json();
    displayCategory(data)
};
const handleLoader = (loadingStatus) =>{
    const loader = document.getElementById('loader')
    if(loadingStatus === true){
        loader.classList.remove('hidden')
    }else{
        loader.classList.add('hidden')
    }
}
//  Display products by category
const displayCategory = (categories) => {
    const categoryBtnContainer = document.getElementById('category-btn-container');
    categories.forEach(category => {
        const div = document.createElement('div');
        const button = document.createElement('button');
        button.textContent = category;
        button.classList = "btn rounded-3xl hover:bg-[#4F46E5] hover:text-white";
        button.classList.remove("category-active")
        button.addEventListener("click", function(){
            loadProducts(category);
            const currentActive = document.querySelector('.category-active');
            if(currentActive){
                currentActive.classList.remove("category-active")
            }
            this.classList.add("category-active")
            
        });
        div.appendChild(button);
        categoryBtnContainer.appendChild(div);  
    });
    
}

loadCategory()




//  Load Products 
const loadProducts = async(category) =>{
    const url = `https://fakestoreapi.com/products/category/${(category)}`;
    const res = await fetch(url);
    const data = await res.json();
    displayProducts(data)
}


const displayProducts = (details) =>{
    
    const productsCardContainer = document.getElementById('products-card-container');
    productsCardContainer.innerHTML = '';
    handleLoader(true)
    // const sliceDetails = details.slice(0, 3)
    details.forEach(detail => {
       
        const div = document.createElement('div');
        div.classList = `card   p-3 shadow-sm w-full flex justify-between`;
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
        productsCardContainer.append(div)
        handleLoader(false)
    });
}


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


let count = 0;
const handleCartCount = () =>{
    count++
    const cartCount = document.getElementById('cart-count');
    cartCount.innerHTML = count
}





const products = [
    { id: 1, name: 'Character 1', category: 'characters', price: 10, image: 'character1.png' },
    { id: 2, name: 'Environment 1', category: 'environments', price: 20, image: 'environment1.png' },
    { id: 3, name: 'Prop 1', category: 'props', price: 5, image: 'prop1.png' },
    // Add more products here
];

const cart = [];

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const searchBar = document.getElementById('search-bar');
    const categoryFilter = document.getElementById('category');
    const priceRangeFilter = document.getElementById('price-range');
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    function renderProducts(filteredProducts) {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productCard);
        });
    }

    function filterProducts() {
        const searchText = searchBar.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const maxPrice = priceRangeFilter.value;

        const filteredProducts = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchText);
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            const matchesPrice = product.price <= maxPrice;

            return matchesSearch && matchesCategory && matchesPrice;
        });

        renderProducts(filteredProducts);
    }

    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        cartCount.textContent = cart.length;
        updateCart();
    };

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price;
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <p>${item.name} - $${item.price}</p>
            `;
            cartItems.appendChild(cartItem);
        });
        cartTotal.textContent = `Total: $${total}`;
    }

    window.toggleCart = function() {
        const modal = document.getElementById('cart-modal');
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    };

    window.checkout = function() {
        alert('Proceeding to checkout...');
        // Here you would add your checkout logic
    };

    searchBar.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    priceRangeFilter.addEventListener('input', filterProducts);

    renderProducts(products);
});

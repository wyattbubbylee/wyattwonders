const products = [
    { id: 1, name: 'Character 1', category: 'characters', price: 10, image: 'character1.png' },
    { id: 2, name: 'Environment 1', category: 'environments', price: 20, image: 'environment1.png' },
    { id: 3, name: 'Prop 1', category: 'props', price: 5, image: 'prop1.png' },
    // Add more products here
];

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const searchBar = document.getElementById('search-bar');
    const categoryFilter = document.getElementById('category');
    const priceRangeFilter = document.getElementById('price-range');

    function renderProducts(filteredProducts) {
        productList.innerHTML = '';
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price}</p>
                <a href="#" class="btn">Buy Now</a>
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

    searchBar.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    priceRangeFilter.addEventListener('input', filterProducts);

    renderProducts(products);
});

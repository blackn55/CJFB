// Product List
const products = [
    { id: 1, name: "Golden State Warriors NBA ", price: 254.99, image: "https://static.lojanba.com/produtos/regata-nba-golden-state-warriors-nike-swingman-unissex/58/JD8-6355-058/JD8-6355-058_zoom1.jpg?ts=1712252137&ims=1088x" },
    { id: 2, name: "Los Angeles Lakers NBA Jersey", price: 254.90, image: "https://static.lojanba.com/produtos/regata-nba-los-angeles-lakers-lebron-james-n-23-nike-masculina/66/2IC-8879-166/2IC-8879-166_zoom5.jpg?ts=1709657312&ims=1088x" },
    { id: 3, name: "Memphis Grizzlies NBA Jersey", price: 254.90, image: "https://static.lojanba.com/produtos/regata-nba-memphis-grizzlies-ja-morant-n-12-nike-masculina/69/2IC-8862-C69/2IC-8862-C69_zoom1.jpg?ts=1702655471&ims=1088x" },
    { id: 4, name: "Miami Heat NBA Jersey", price: 254.90, image: "https://static.lojanba.com/produtos/regata-nba-miami-heat-jimmy-butler-n-22-nike-masculina/78/2IC-8896-178/2IC-8896-178_zoom1.jpg?ts=1709657380&ims=1088x" },
    { id: 5, name: "Chicago Bulls NBA Kids Jersey", price: 254.90, image: "https://static.lojanba.com/produtos/regata-nba-infantil-chicago-bulls-essence-braziline/06/R2D-1153-006/R2D-1153-006_zoom1.jpg?ts=1728320861&ims=1088x" },
    { id: 6, name: "Golden State Warriors Youth NBA Shorts", price: 159.90, image: "https://static.lojanba.com/produtos/bermuda-nba-juvenil-golden-state-warriors-wander-braziline/08/R2D-1110-008/R2D-1110-008_zoom1.jpg?ts=1728315607&ims=1088x" },
    { id: 7, name: "Los Angeles Lakers New Era Performance Shorts", price: 160.00, image: "https://static.lojanba.com/produtos/bermuda-new-era-performance-los-angeles-lakers-core-nba/30/BRJ-6337-030/BRJ-6337-030_zoom1.jpg?ts=1730481620&ims=1088x" },
    { id: 8, name: "Nike Hbr Shorts", price: 160.00, image: "https://static.lojanba.com/produtos/bermuda-nike-hbr-2021-masculina/69/2IC-4393-C69/2IC-4393-C69_zoom1.jpg?ts=1695612237&ims=1088x" },
    { id: 9, name: "Miami Heat Youth NBA Shorts", price: 160.00, image: "https://static.lojanba.com/produtos/bermuda-nba-juvenil-miami-heat-period-braziline/06/R2D-1112-006/R2D-1112-006_zoom1.jpg?ts=1728315588&ims=1088x" },
    { id: 10, name: "Chicago Bulls New Era NBA Shorts", price: 160.00, image: "https://static.lojanba.com/produtos/bermuda-new-era-nba-chicago-bulls-core-performance-masculina/06/BRJ-5043-006/BRJ-5043-006_zoom1.jpg?ts=1732907257&ims=1088x" },
    { id: 11, name: "Red NBA Basketball School Crew Socks", price: 14.90, image: "https://acdn-us.mitiendanube.com/stores/001/722/190/products/1e4396428b79a2f732e503c55f1dc7e7-824de719e01adbcebd17411750380340-1024-1024.webp" },
    { id: 12, name: "Black NBA Basketball School Crew Socks", price: 14.90, image: "https://acdn-us.mitiendanube.com/stores/001/722/190/products/28c94f5afe690f8216ce102d8c6efad2-02fb6273614a054d7417411750336450-1024-1024.webp" },
    { id: 13, name: "Blue NBA Basketball School Crew Socks", price: 14.90, image: "https://acdn-us.mitiendanube.com/stores/001/722/190/products/070795575d573e326e59d0ed50c220cb-49d7bf0a37c469163317411750293206-1024-1024.webp" },
    { id: 14, name: "White NBA Basketball School Crew Socks", price: 14.90, image: "https://acdn-us.mitiendanube.com/stores/001/722/190/products/29503e33f98c0fdbeced3f5a9c2d3014-1467f030fde40da46e17411750248120-1024-1024.webp" },
    { id: 15, name: "Nike Jordan Tatum Sneakers", price: 539.90, image: "https://static.lojanba.com/produtos/tenis-nike-jordan-tatum-3-masculino/44/JD8-9211-144/JD8-9211-144_zoom1.jpg?ts=1735566398&ims=1088x" },
    { id: 16, name: "Under Armour Curry Splash Sneakers", price: 539.90, image: "https://static.lojanba.com/produtos/tenis-under-armour-curry-splash-24-masculino/78/R5M-1877-978/R5M-1877-978_zoom1.jpg?ts=1737136382&ims=1088x" },
    { id: 17, name: "ZEN VI 361° Sneakers", price: 539.90, image: "https://static.lojanba.com/produtos/tenis-zen-vi-361-basquete-masculino/78/FAZ-0216-178/FAZ-0216-178_zoom1.jpg?ts=1739873721&ims=1088x" },
    { id: 18, name: "Wade 808 4 Ultra Sneakers", price: 539.90, image: "https://www.wayofwade.com/cdn/shop/files/1_aeca4784-dad2-4a6f-9834-a4e106860aee.jpg?v=1719988121&width=600" },
    { id: 19, name: "Air Jordan XXXIX Men’s Sneakers", price: 539.90, image: "https://imgnike-a.akamaihd.net/360x360/02945915A1.jpg" },
    { id: 20, name: "Nike Jordan Official Basketball", price: 99.90, image: "https://sportset.com.br/wp-content/uploads/2022/06/20253c3a27624bf71dbcc4c5624fff88.jpeg" }
];

// Shopping Cart
let cart = [];

// Display products in the catalog
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('produto');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name} - R$ ${product.price.toFixed(2)}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
}

// Update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';
    let total = 0;
    let itemCount = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        itemCount += item.quantity;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name} - R$ ${item.price.toFixed(2)} x ${item.quantity}</p>
        `;
        cartItems.appendChild(cartItemDiv);
    });

    cartCount.textContent = itemCount;
    cartTotal.textContent = total.toFixed(2);
}

// Clear cart
function clearCart() {
    cart = [];
    updateCart();
}

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    if (anchor.getAttribute('href').startsWith('#') || anchor.getAttribute('href').includes('#')) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const sectionId = href.includes('#') ? href.split('#')[1] : href.substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Event listener for clearing cart
document.getElementById('clear-cart').addEventListener('click', clearCart);

// Initialize catalog on page load
document.addEventListener('DOMContentLoaded', displayProducts);

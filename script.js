// Initialize cart items array
let cartItems = [];

// Function to show specific sections
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // Update cart total when cart section is active
    if (sectionId === 'cart') {
        updateCart();
    }
}

// Function to add products to cart
function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    // Animate cart addition
    alert(`${productName} has been added to your cart!`);
}

// Function to update cart display
function updateCart() {
    const cartDiv = document.getElementById('cart-items');
    cartDiv.innerHTML = ''; // Clear current cart items
    let total = 0;

    if (cartItems.length === 0) {
        cartDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach((item, index) => {
            total += item.price;
            cartDiv.innerHTML += `
                <div class="cart-item">
                    <span>${item.name} - $${item.price.toFixed(2)}</span>
                    <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
                </div>
            `;
        });
    }

    document.getElementById('cart-total').innerText = `Total: $${total.toFixed(2)}`;
}

// Function to remove items from cart
function removeFromCart(index) {
    cartItems.splice(index, 1); // Remove item from cart
    updateCart(); // Update cart display
    alert('Item has been removed from your cart!');
}

// Function for search functionality
function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const productName = item.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to handle checkout (you can expand this function as needed)
function checkout() {
    if (cartItems.length === 0) {
        alert('Your cart is empty.');
    } else {
        alert('Proceeding to checkout...');
        // Clear the cart after checkout
        cartItems = [];
        updateCart();
    }
}

// Show the body once JavaScript is loaded
document.body.style.display = "block";

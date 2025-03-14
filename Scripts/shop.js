 document.addEventListener("DOMContentLoaded", () => {
            const cartBtn = document.getElementById("cart-btn");
            const cartSidebar = document.getElementById("cart-sidebar");
            const cartItems = document.getElementById("cart-items");
            const cartTotal = document.getElementById("cart-total");
            const cartCount = document.getElementById("cart-count");
            const addToCartButtons = document.querySelectorAll(".add-to-cart");
            let cart = [];

            cartBtn.addEventListener("click", () => {
                cartSidebar.classList.toggle("active");
            });

            addToCartButtons.forEach(button => {
                button.addEventListener("click", (event) => {
                    const product = event.target.closest(".product");
                    const name = product.dataset.name;
                    const price = parseFloat(product.dataset.price);
                    
                    const existingItem = cart.find(item => item.name === name);
                    if (existingItem) {
                        existingItem.quantity += 1;
                    } else {
                        cart.push({ name, price, quantity: 1 });
                    }
                    updateCart();
                });
            });

            function updateCart() {
                cartItems.innerHTML = "";
                let total = 0;
                cart.forEach(item => {
                    total += item.price * item.quantity;
                    const li = document.createElement("li");
                    li.textContent = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
                    cartItems.appendChild(li);
                });
                cartTotal.textContent = total;
                cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
            }
        });
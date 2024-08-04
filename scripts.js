document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const favorites = [];

    const updateCounts = () => {
        document.getElementById('cart-count').innerText = cart.length;
        document.getElementById('favorites-count').innerText = favorites.length;
    };

    const renderCart = () => {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            cartItems.appendChild(li);
        });
    };

    const renderFavorites = () => {
        const favoritesItems = document.getElementById('favorites-items');
        favoritesItems.innerHTML = '';
        favorites.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            favoritesItems.appendChild(li);
        });
    };

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const productName = product.querySelector('h2').innerText;
            cart.push(productName);
            updateCounts();
            renderCart();
        });
    });

    document.querySelectorAll('.add-to-favorites').forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const productName = product.querySelector('h2').innerText;
            favorites.push(productName);
            updateCounts();
            renderFavorites();
        });
    });

    document.getElementById('cart-btn').addEventListener('click', () => {
        document.getElementById('cart-modal').style.display = 'block';
    });

    document.getElementById('favorites-btn').addEventListener('click', () => {
        document.getElementById('favorites-modal').style.display = 'block';
    });

    document.getElementById('close-cart').addEventListener('click', () => {
        document.getElementById('cart-modal').style.display = 'none';
    });

    document.getElementById('close-favorites').addEventListener('click', () => {
        document.getElementById('favorites-modal').style.display = 'none';
    });

    document.getElementById('checkout-btn').addEventListener('click', () => {
        alert('Checkout not implemented.');
    });
});

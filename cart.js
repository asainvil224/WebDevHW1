function getCartItems() {
  const cartItemsJSON = localStorage.getItem('cartItems');
  return cartItemsJSON ? JSON.parse(cartItemsJSON) : [];
}

function saveCartItems(cartItems) {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function displayCartItems() {
  const cartItemsDiv = document.getElementById('cart-items');
  if (!cartItemsDiv) return;

  const cartItems = getCartItems();
  cartItemsDiv.innerHTML = '';

  if (cartItems.length === 0) {
    cartItemsDiv.innerHTML = '<p>Your shopping cart is empty.</p>';
  } else {
    const cartItemsList = document.createElement('ul');

    cartItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)} × ${item.quantity}`;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.style.backgroundColor = 'red';
      removeButton.addEventListener('click', () => removeFromCart(item.name));

      listItem.appendChild(removeButton);
      cartItemsList.appendChild(listItem);
    });

    cartItemsDiv.appendChild(cartItemsList);
  }

  displayTotal();
  updateCartCount();
}

function removeFromCart(itemName) {
  const cartItems = getCartItems();
  const existingItem = cartItems.find(item => item.name === itemName);

  if (existingItem) {
    existingItem.quantity -= 1;
    if (existingItem.quantity <= 0) {
      const updatedCart = cartItems.filter(item => item.name !== itemName);
      saveCartItems(updatedCart);
    } else {
      saveCartItems(cartItems);
    }
  }

  displayCartItems();
  updateCartCount();
}

function displayTotal() {
  const cartItems = getCartItems();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalDiv = document.getElementById('total');
  if (totalDiv) totalDiv.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

function addToCart(event) {
  const product = event.target.closest('.card-body');
  const productName = product.querySelector('h3').innerText;
  const productPrice = parseFloat(product.querySelector('small').innerText.replace('$', ''));

  const cartItems = getCartItems();
  const existingItem = cartItems.find(item => item.name === productName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ name: productName, price: productPrice, quantity: 1 });
  }

  saveCartItems(cartItems);
  displayCartItems();
  updateCartCount();
}

function updateCartCount() {
  const cartItems = getCartItems();
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = document.getElementById('cart-count');
  if (cartCount) cartCount.textContent = totalQuantity;
}

const buyButtons = document.querySelectorAll('.btn');
buyButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

displayCartItems();
updateCartCount();

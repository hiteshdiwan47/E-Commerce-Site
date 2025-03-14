document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.trim();
    if(query) {
      // Redirect to the search results page with the query as a URL parameter
      window.location.href = '/search.html?q=' + encodeURIComponent(query);
    } else {
      alert('Please enter a search query!');
    }
  });

  // Optional: Enable search on pressing the Enter key
  document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('search-button').click();
    }
  });


  function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.product} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalPrice.textContent = total;
  }

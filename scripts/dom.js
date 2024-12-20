// Referência à div root
const root = document.getElementById("root");

// Função para renderizar a lista de cafés
async function renderCafes() {
  const cafes = await fetchCafes();

  let html = `
    <div class="container">
      <header class="d-flex justify-content-between align-items-center mt-3">
        <h1>Loja de Cafés</h1>
        <div>
          <a href="cart.html" class="btn btn-primary">
            Carrinho (<span id="cart-count">0</span>)
          </a>
        </div>
      </header>
      <div class="row mt-4">
  `;

  cafes.forEach((cafe) => {
    html += `
      <div class="col-md-4 mb-4">
        <div class="card h-100">
          <img src="${cafe.image}" class="card-img-top" alt="${cafe.title}">
          <div class="card-body">
            <h5 class="card-title">${cafe.title}</h5>
            <p class="card-text">${cafe.description}</p>
            <p><strong>R$ ${cafe.price.toFixed(2)}</strong></p>
            <button onclick="addToCart(${cafe.id}, '${cafe.title}', ${cafe.price})" class="btn btn-success">
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  root.innerHTML = html;
  updateCartCount();
}

renderCafes();

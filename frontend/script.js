const API_URL = "http://localhost:5000/api";

// Load all products on page load
window.onload = async () => {
  await fetchAndRenderProducts();
};

// Search form
document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("searchName").value;
  const category = document.getElementById("searchCategory").value;
  await fetchAndRenderProducts(name, category);
});

// Add to cart form
document.getElementById("cartForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const productId = document.getElementById("productId").value;
  const quantity = document.getElementById("quantity").value;

  const res = await fetch(`${API_URL}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include", // include cookie
    body: JSON.stringify({ productId, quantity })
  });

  const data = await res.json();
  alert(data.message || (data.success ? "Added to cart!" : "Failed to add"));
});

async function fetchAndRenderProducts(name = "", category = "") {
  let url = `${API_URL}/products`;
  const query = [];
  if (name) query.push(`name=${encodeURIComponent(name)}`);
  if (category) query.push(`category=${encodeURIComponent(category)}`);
  if (query.length) url += `?${query.join("&")}`;

  const res = await fetch(url);
  const data = await res.json();

  const container = document.getElementById("productList");
  container.innerHTML = "";

  data.products?.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <p>Category: ${product.category}</p>
      <p>ID: <small>${product._id}</small></p>
    `;
    container.appendChild(div);
  });
}




//login

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // Send and receive cookies
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  alert(data.message || (data.success ? "Login successful" : "Login failed"));
});


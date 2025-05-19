const API_BASE = process.env.REACT_APP_API_URL;

export async function fetchProducts() {
  const res = await fetch(`${API_BASE}/api/products`);
  return res.json();
}

export async function fetchProduct(slug) {
  const res = await fetch(`${API_BASE}/api/products/${slug}`);
  return res.json();
}

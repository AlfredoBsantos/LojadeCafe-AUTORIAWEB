const API_URL = "http://localhost:3000/cafes";

async function fetchCafes() {
  const response = await fetch(API_URL);
  return await response.json();
}

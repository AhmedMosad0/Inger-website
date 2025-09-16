const API_URL = "http://localhost:5000";

export async function getMessage() {
  const response = await fetch(`${API_URL}/`);
  return response.text();
}

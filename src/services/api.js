import axios from "axios";

const API_BASE_URL = "https://best-e-bike-server.vercel.app";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const fetchProducts = async () => {
  try {
    const response = await api.get("/api/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProduct = async (id) => {
  try {
    const response = await api.get(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// Future Amazon API integration
export const fetchProductsFromAmazon = async () => {
  // TODO: Implement when Amazon Product Advertising API is unblocked
  try {
    // This will be implemented when API is available
    const response = await api.get("/products/amazon");
    return response.data;
  } catch (error) {
    console.error("Error fetching products from Amazon:", error);
    // Fallback to JSON data
    return fetchProducts();
  }
};

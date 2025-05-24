"use client";

import { useLocalStorage } from "./useLocalStorage";
import { initialProducts } from "../data/initialProducts";
import { Product } from "../types";

export function useProducts() {
  const [products, setProducts] = useLocalStorage<Product[]>(
    "products",
    initialProducts
  );

  const addProduct = (product: Omit<Product, "id">) => {
    const newProduct = {
      ...product,
      id: Date.now().toString(), // Simple ID generation
    };

    setProducts((prevProducts) => [...prevProducts, newProduct as Product]);
    return newProduct;
  };

  const removeProduct = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  return {
    products,
    addProduct,
    removeProduct,
    updateProduct,
  };
}
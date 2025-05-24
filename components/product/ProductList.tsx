"use client";

import { ProductCard } from "./ProductCard";
import { useProducts } from "@/lib/hooks/useProducts";

export function ProductList() {
  const { products } = useProducts();
  
  if (products.length === 0) {
    return (
      <div className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold text-gray-800">Nenhum produto disponível</h2>
        <p className="text-muted-foreground mt-2">
          Adicione produtos através do painel de administração.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
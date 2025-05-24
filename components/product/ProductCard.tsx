"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/lib/types";
import { useCart } from "@/lib/hooks/useCart";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105 duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-2xl font-bold text-primary">{formatCurrency(product.price)}</p>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {product.description || "Sem descrição disponível"}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => addToCart(product)} 
          className="w-full gap-2 transition-all duration-300 hover:gap-3"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Adicionar ao Carrinho</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
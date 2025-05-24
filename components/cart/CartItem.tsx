"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/lib/types";
import { useCart } from "@/lib/hooks/useCart";
import { formatCurrency } from "@/lib/utils";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    updateQuantity(product.id, quantity - 1);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  const subtotal = product.price * quantity;

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4 border-b">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-base mb-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-1">
          {formatCurrency(product.price)} cada
        </p>
      </div>
      
      <div className="flex items-center gap-2 mt-2 sm:mt-0">
        <Button
          variant="outline"
          size="icon"
          onClick={handleDecreaseQuantity}
          className="h-8 w-8"
        >
          <Minus className="h-3 w-3" />
        </Button>
        
        <span className="w-8 text-center">{quantity}</span>
        
        <Button
          variant="outline"
          size="icon"
          onClick={handleIncreaseQuantity}
          className="h-8 w-8"
        >
          <Plus className="h-3 w-3" />
        </Button>
      </div>
      
      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        <p className="font-medium whitespace-nowrap">
          {formatCurrency(subtotal)}
        </p>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={handleRemove}
          className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
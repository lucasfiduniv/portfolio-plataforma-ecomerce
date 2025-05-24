"use client";

import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/lib/hooks/useCart";
import { formatCurrency } from "@/lib/utils";

export function CartSummary() {
  const router = useRouter();
  const { getCartTotal, clearCart } = useCart();
  const total = getCartTotal();

  const handleCheckout = () => {
    clearCart();
    router.push("/success");
  };

  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl flex items-center gap-2">
          <ShoppingBag className="h-5 w-5" />
          Resumo do Pedido
        </CardTitle>
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="space-y-1.5">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>{formatCurrency(total)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted-foreground">Frete</span>
            <span>Grátis</span>
          </div>
          
          <div className="border-t my-4"></div>
          
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={handleCheckout}
          className="w-full gap-2"
          size="lg"
          disabled={total === 0}
        >
          Finalizar Compra
        </Button>
      </CardFooter>
    </Card>
  );
}
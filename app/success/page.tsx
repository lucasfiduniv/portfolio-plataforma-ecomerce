"use client";

import Link from "next/link";
import { useEffect } from "react";
import { CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/hooks/useCart";

export default function SuccessPage() {
  const { clearCart } = useCart();
  
  // Ensure cart is cleared when this page is loaded
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Pedido Realizado com Sucesso!</h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Obrigado por sua compra. Seu pedido foi recebido e está sendo processado.
        </p>
        
        <div className="bg-gray-50 border rounded-lg p-6 mb-8">
          <p className="text-sm text-muted-foreground mb-2">
            Resumo da compra:
          </p>
          <p className="text-sm mb-1">
            <span className="font-medium">Número do pedido:</span> #
            {Math.floor(Math.random() * 1000000).toString().padStart(6, "0")}
          </p>
          <p className="text-sm mb-1">
            <span className="font-medium">Data:</span> {new Date().toLocaleDateString("pt-BR")}
          </p>
          <p className="text-sm">
            <span className="font-medium">Método de pagamento:</span> Cartão de crédito
          </p>
        </div>
        
        <Link href="/">
          <Button className="gap-2" size="lg">
            <Home className="h-4 w-4" />
            Voltar para a Loja
          </Button>
        </Link>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { ShoppingCart, Store, LayoutDashboard } from "lucide-react";
import { useCart } from "@/lib/hooks/useCart";
import { Button } from "@/components/ui/button";

export function Header() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
          <Store className="h-6 w-6" />
          <span>Loja Virtual</span>
        </Link>
        
        <nav className="flex items-center gap-4">
          <Link href="/admin" className="text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors">
            <LayoutDashboard className="h-5 w-5" />
            <span className="hidden sm:inline">Admin</span>
          </Link>
          
          <Link href="/cart" className="relative">
            <Button variant="outline" className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="hidden sm:inline">Carrinho</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
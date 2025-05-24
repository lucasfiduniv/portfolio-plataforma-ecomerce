import Link from "next/link";
import { Store } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Store className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Loja Virtual</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p className="text-center md:text-right">
              © {new Date().getFullYear()} Loja Virtual. Todos os direitos reservados.
            </p>
            <p className="text-center md:text-right">
              Desenvolvido por Lucas Gabriel Fiduniv
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-center md:justify-start gap-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Início
          </Link>
          <Link href="/cart" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Carrinho
          </Link>
          <Link href="/admin" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
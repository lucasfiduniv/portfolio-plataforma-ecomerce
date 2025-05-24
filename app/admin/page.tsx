"use client";

import { LayoutDashboard } from "lucide-react";
import { ProductForm } from "@/components/admin/ProductForm";
import { ProductTable } from "@/components/admin/ProductTable";
import { Separator } from "@/components/ui/separator";

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-6">
        <h1 className="text-3xl font-bold">Painel Administrativo</h1>
        <LayoutDashboard className="h-6 w-6" />
      </div>

      <Separator className="mb-6" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <ProductForm />
        </div>
        
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Produtos Cadastrados</h2>
          <ProductTable />
        </div>
      </div>
    </div>
  );
}
import { ProductList } from "@/components/product/ProductList";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo à Loja Virtual</h1>
          <p className="text-lg text-muted-foreground">
            Descubra os melhores produtos de tecnologia para o seu dia a dia.
            Preços incríveis e entregas rápidas!
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 mb-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ofertas Especiais</h2>
          <p className="text-lg mb-6">
            Produtos selecionados com descontos imperdíveis. Aproveite enquanto durarem os estoques!
          </p>
          <div className="inline-block bg-white text-blue-600 font-bold py-2 px-6 rounded-full text-lg">
            Confira Agora
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Nossos Produtos</h2>
        <ProductList />
      </section>
    </div>
  );
}
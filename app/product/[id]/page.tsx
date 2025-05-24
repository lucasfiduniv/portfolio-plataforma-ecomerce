import { initialProducts } from "@/lib/data/initialProducts";
import ProductDetails from "./ProductDetails";

export async function generateStaticParams() {
  return initialProducts.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = initialProducts.find((p) => p.id === params.id);
  return <ProductDetails product={product} />;
}

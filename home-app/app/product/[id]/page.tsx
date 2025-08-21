import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

// Tek ürün fetch fonksiyonu
async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 }, // ISR cache
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

// Dinamik sayfa componenti
export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ürün görseli */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        {/* Ürün bilgileri */}
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 italic mb-2">{product.category}</p>
          <p className="text-lg font-semibold text-green-600 mb-6">
            ${product.price}
          </p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

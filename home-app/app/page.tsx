// import React from "react";
// import AddToCartButton from "../components/AddToCartButton";

// type Product = {
//   id: number;
//   title: string;
//   price: number;
//   image: string;
// };

// async function getProducts(): Promise<Product[]> {
//   const res = await fetch("https://fakestoreapi.com/products", {
//     next: { revalidate: 60 },
//   });
//   if (!res.ok) throw new Error("Failed to fetch products");
//   return res.json();
// }

// export default async function HomePage() {
//   const products = await getProducts();

//   return (
//     <main className="max-w-7xl mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Ürün Listesi</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-xl p-4 flex flex-col items-center shadow hover:shadow-lg transition"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="h-40 object-contain mb-4"
//             />
//             <h2 className="text-sm font-semibold line-clamp-2 mb-2">
//               {product.title}
//             </h2>
//             <p className="text-lg font-bold text-green-600 mb-4">
//               ${product.price}
//             </p>
//             <AddToCartButton product={product} />
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

import React from "react";
import Link from "next/link"; // 🔹 detay sayfasına yönlendirmek için
import AddToCartButton from "../components/AddToCartButton";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Ürün Listesi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl p-4 flex flex-col items-center shadow hover:shadow-lg transition"
          >
            {/*Ürün detayına giden Link */}
            <Link
              href={`/product/${product.id}`}
              className="flex flex-col items-center w-full"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mb-4"
              />
              <h2 className="text-sm font-semibold line-clamp-2 mb-2 text-center">
                {product.title}
              </h2>
              <p className="text-lg font-bold text-green-600 mb-4">
                ${product.price}
              </p>
            </Link>

            {/*Add to Cart butonu ayrı kaldı */}
            <AddToCartButton product={product} />
          </div>
        ))}
      </div>
    </main>
  );
}

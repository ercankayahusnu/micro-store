"use client";

import React, { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("http://localhost:4000/cart");
        const data = await res.json();
        setCart(data);
      } catch (error) {
        console.error("Sepet alınamadı:", error);
      }
    };

    fetchCart();
  }, []);

  // Sepetten ürün silme
  const removeFromCart = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:4000/cart/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Silme işlemi başarısız");

      setCart((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  // Toplam fiyat
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sepetim</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Sepetiniz boş.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <h2 className="text-sm font-semibold">{product.title}</h2>
                  <p className="text-green-600 font-bold">${product.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Toplam fiyat */}
          <div className="text-right font-bold text-lg mt-6">
            Toplam: ${totalPrice.toFixed(2)}
          </div>
        </div>
      )}
    </main>
  );
}

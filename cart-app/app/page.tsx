"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // API'den sepeti oku
  useEffect(() => {
    const fetchCart = async () => {
      const res = await fetch("http://localhost:4000/cart");
      const data = await res.json();
      setCart(data);
    };
    fetchCart();
  }, []);

  // Sepetten ürün silme
  const removeFromCart = async (id: number) => {
    try {
      const res = await fetch(`http://localhost:4000/cart/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Silme başarısız!");

      // API'den güncel sepeti tekrar çek
      const updated = await fetch("http://localhost:4000/cart");
      const data = await updated.json();
      setCart(data);

      toast.success("Ürün sepetten silindi 🗑️");
    } catch (err) {
      console.error("Ürün silinirken hata:", err);
      toast.error("Ürün silinirken hata oluştu ❌");
    }
  };

  // Modal açma
  const handleRemoveClick = (id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  // Modal onay
  const confirmRemove = async () => {
    if (selectedId) {
      await removeFromCart(selectedId);
      setSelectedId(null);
      setIsModalOpen(false);
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
                onClick={() => handleRemoveClick(product.id)}
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

      {/* 🔹 Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full">
            <h2 className="text-lg font-bold mb-2 text-black">Ürünü sil</h2>
            <p className="text-gray-600 mb-6">
              Bu ürünü sepetten silmek istediğinize emin misiniz?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
              >
                Vazgeç
              </button>
              <button
                onClick={confirmRemove}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
              >
                Sil
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

"use client";

import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function AddToCartButton({ product }: { product: Product }) {
  // Sepete ürün ekleme fonksiyonu
  const handleAddToCart = async () => {
    try {
      // API'ye POST isteği gönder
      const res = await fetch("http://localhost:4000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!res.ok) {
        throw new Error("Failed to add product to cart");
      }

      alert(`${product.title} sepete eklendi!`);
    } catch (error) {
      console.error(error);
      alert("Ürün sepete eklenemedi.");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Add to Cart
    </button>
  );
}

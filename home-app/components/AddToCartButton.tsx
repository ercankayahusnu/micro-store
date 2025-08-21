"use client";

import React from "react";
import toast from "react-hot-toast";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function AddToCartButton({ product }: { product: Product }) {
  const handleAddToCart = async () => {
    try {
      const res = await fetch("http://localhost:4000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: product.title,
          price: product.price,
          image: product.image,
        }),
      });

      if (!res.ok) throw new Error("Failed to add product to cart");

      toast.success(`${product.title} sepete eklendi! ✅`);
    } catch (error) {
      console.error(error);
      toast.error("Ürün sepete eklenemedi ❌");
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

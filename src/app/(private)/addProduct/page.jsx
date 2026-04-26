"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const AddProductPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    });

    return () => unsub();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const newItem = {
      id: Date.now(),
      title: form.title.value,
      shortDescription: form.shortDescription.value,
      fullDescription: form.fullDescription.value,
      price: form.price.value,
      date: form.date.value,
      priority: form.priority.value,
      imageUrl: form.image.value,
    };

    const oldItems = JSON.parse(localStorage.getItem("items")) || [];

    localStorage.setItem("items", JSON.stringify([...oldItems, newItem]));

    toast("Product Added ✅");
    form.reset();
  };

  if (loading) {
    return <p className="p-6">Checking auth...</p>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">Add Product 🛒</h1>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="title"
            placeholder="Title"
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="shortDescription"
            placeholder="Short Description"
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            name="fullDescription"
            placeholder="Full Description"
            className="w-full border p-2 rounded"
            required
          />

          <div className="grid grid-cols-3 gap-2">
            <input
              name="price"
              type="number"
              placeholder="Price"
              className="border p-2 rounded"
              required
            />

            <input
              name="date"
              type="date"
              className="border p-2 rounded"
              required
            />

            <select name="priority" className="border p-2 rounded" required>
              <option value="">Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <input
            name="image"
            placeholder="Image URL (optional)"
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full  py-2 rounded bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;

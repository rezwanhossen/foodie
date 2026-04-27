"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "@/app/lib/firebase.config";

const ManageItems = () => {
  const router = useRouter();

  const [items, setItems] = useState([]);
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

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("items")) || [];
    setItems(stored);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = toast("Delete this item?");

    if (confirmDelete) {
      const updated = items.filter((item) => item.id !== id);

      setItems(updated);
      localStorage.setItem("items", JSON.stringify(updated));
    }
  };

  if (loading) {
    return <p className="p-6">Checking authentication...</p>;
  }

  return (
    <div className="p-6 max-w-6xl bg-gray-50 mx-auto ">
      <h1 className="text-2xl font-bold mb-6">
        Manage Items <span className="text-yellow-400">{items.length}</span>
      </h1>
      {items.length === 0 ? (
        <div className=" flex justify-center items-center rounded-3xl max-w-5xl my-6 mx-auto h-[50vh] bg-white">
          <p className="text-gray-500 text-center">
            No items found.
            <br /> Add some products first.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-sm bg-white"
            >
              <img
                src={item.imageUrl}
                className="h-40 w-full object-cover rounded"
              />

              <h2 className="font-bold mt-2">{item.title}</h2>

              <p className="text-sm text-gray-600">{item.shortDescription}</p>

              <div className="text-sm mt-2 space-y-1">
                <p>💲 Price: {item.price}</p>
                <p>⚡ Priority: {item.priority}</p>
                <p>📅 Date: {item.date}</p>
              </div>

              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1 bg-blue-500 text-white rounded">
                  View
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageItems;

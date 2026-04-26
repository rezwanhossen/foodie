"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const FoodPage = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);

  const filteredItems = items.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? item.category === category : true) &&
      (price ? item.price <= price : true)
    );
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border p-4 rounded animate-pulse">
              <div className="h-40 w-full bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 mt-3 w-3/4 rounded"></div>
              <div className="h-3 bg-gray-300 mt-2 w-1/2 rounded"></div>
              <div className="h-8 bg-gray-300 mt-3 w-1/3 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="border p-4 rounded">
              <img src={item.imageUrl} className="h-40 w-full object-cover" />
              <h2 className="font-bold mt-2">{item.title}</h2>
              <p className="text-sm">{item.shortDescription}</p>
              <Link href={`/food/${item.id}`}>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 mt-2 rounded">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodPage;

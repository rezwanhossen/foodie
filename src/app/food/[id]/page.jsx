"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const ItemDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((result) => {
        setData(result);

        const found = result.find((d) => d.id == id);

        setItem(found);
      });
  }, [id]);

  if (!item) {
    return <h1 className="p-6">Loading...</h1>;
  }

  const relatedItems = data.filter(
    (d) => d.category === item.category && d.id !== item.id
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link href="/food">
        <button className="text-blue-500 mb-4">← Back</button>
      </Link>
      <img src={item.imageUrl} className="w-full h-80 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{item.title}</h1>
      <p className="mt-2 text-gray-600">{item.fullDescription}</p>
      <div className="mt-4 space-y-1">
        <p>Price: {item.price}$ </p>
        <p>Date: {item.date}</p>
        <p>Priority: {item.priority}</p>
      </div>
      <h2 className="text-xl font-bold mt-8 mb-3">Related Items</h2>

      <div className="grid grid-cols-2 gap-4">
        {relatedItems.map((r) => (
          <Link key={r.id} href={`/food/${r.id}`}>
            <div className="border p-3 rounded cursor-pointer">
              <img src={r.imageUrl} className="h-24 w-full object-cover" />
              <p className="text-sm mt-1">{r.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemDetailsPage;
